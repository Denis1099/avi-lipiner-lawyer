<?php
// Allow requests from both domains
$allowed_origins = array(
    'https://real-estate.lipiner.co.il',
    'https://lipiner.co.il'
);

// Get the origin of the request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Check if the origin is allowed
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Handle preflight OPTIONS request first
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
$db_host = 'localhost';
$db_name = 'your_database_name'; // Replace with your database name
$db_user = 'your_database_user'; // Replace with your database username
$db_pass = 'your_database_password'; // Replace with your database password

// Email configuration
$admin_email = 'lipiner10@gmail.com';

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        throw new Exception('Invalid request data');
    }

    // Validate required fields
    $required_fields = ['name', 'phone'];  // Removed email from required fields
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }

    // Sanitize inputs
    $name = htmlspecialchars(strip_tags($data['name']));
    $phone = htmlspecialchars(strip_tags($data['phone']));
    $email = !empty($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : 'no-email@provided.com';
    $message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';
    $source = isset($data['source']) ? htmlspecialchars(strip_tags($data['source'])) : 'website';

    // Connect to database
    $pdo = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4",
        $db_user,
        $db_pass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    // Insert into database
    $stmt = $pdo->prepare('INSERT INTO leads (name, email, phone, message, source) VALUES (?, ?, ?, ?, ?)');
    $stmt->execute([$name, $email, $phone, $message, $source]);

    // Prepare email content
    $subject = 'ליד חדש מאתר נדל"ן';
    $email_content = "התקבל ליד חדש מהאתר:\n\n";
    $email_content .= "שם: $name\n";
    $email_content .= "טלפון: $phone\n";
    if ($email !== 'no-email@provided.com') {
        $email_content .= "אימייל: $email\n";
    }
    if ($message) {
        $email_content .= "הודעה: $message\n";
    }
    $email_content .= "מקור: $source\n";

    // Set email headers
    $headers = "From: no-reply@lipiner.co.il\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    mail($admin_email, $subject, $email_content, $headers);

    // Return success response
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
} 