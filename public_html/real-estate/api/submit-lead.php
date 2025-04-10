<?php
// CORS Headers
header('Access-Control-Allow-Origin: https://real-estate.lipiner.co.il');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Debug log
error_log("API request received: " . $_SERVER['REQUEST_METHOD']);

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Email configuration
$admin_email = 'lipiner10@gmail.com';

try {
    // Get POST data
    $input = file_get_contents('php://input');
    error_log("Raw input: " . $input);
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Invalid request data');
    }

    error_log("Decoded data: " . print_r($data, true));

    // Extract form data with defaults for optional fields
    $name = isset($data['name']) ? $data['name'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $email = isset($data['email']) ? $data['email'] : 'no-email@provided.com';
    $message = isset($data['message']) ? $data['message'] : '';
    $source = isset($data['source']) ? $data['source'] : 'website';
    
    // Simple validation
    if (empty($name) || empty($phone)) {
        throw new Exception('Name and phone are required');
    }

    // Sanitize inputs
    $name = htmlspecialchars(strip_tags($name));
    $phone = htmlspecialchars(strip_tags($phone));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags($message));
    $source = htmlspecialchars(strip_tags($source));

    // Prepare email content
    $subject = 'ליד חדש מאתר נדל"ן';
    $email_content = "התקבל ליד חדש מהאתר:\n\n";
    $email_content .= "שם: $name\n";
    $email_content .= "טלפון: $phone\n";
    $email_content .= "אימייל: $email\n";
    if ($message) {
        $email_content .= "הודעה: $message\n";
    }
    $email_content .= "מקור: $source\n";

    // Set email headers
    $headers = "From: no-reply@lipiner.co.il\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    $mail_sent = mail($admin_email, $subject, $email_content, $headers);
    
    if (!$mail_sent) {
        error_log("Failed to send email");
    }

    // Database functionality
    try {
        $db_host = 'localhost';
        $db_name = 'u556043506_real_estate'; 
        $db_user = 'u556043506_denis109';
        $db_pass = 'R#t5FMwQ1'; 
        
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
        
        error_log("Lead stored in database successfully");
    } catch (Exception $db_exception) {
        // Log database error but continue with the response
        error_log("Database error: " . $db_exception->getMessage());
        // We still consider the submission successful if email was sent
    }

    // Return success response
    http_response_code(200);
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    error_log("Form submission error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
} 