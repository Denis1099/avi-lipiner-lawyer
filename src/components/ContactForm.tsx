
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ContactFormProps {
  className?: string;
  simplified?: boolean;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  className, 
  simplified = false,
  onSubmit 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'קנייה',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('הטופס נשלח בהצלחה! נחזור אליך בהקדם', {
        duration: 5000,
        position: 'top-center',
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'קנייה',
        message: ''
      });
      setLoading(false);
      
      if (onSubmit) {
        onSubmit(formData);
      }
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        'bg-primary-light rounded-lg p-6 shadow-lg transition-all duration-300',
        'border border-gray-100 hover:shadow-xl',
        'mx-auto max-w-lg', // Center the form
        className
      )}
      style={{ backgroundColor: '#fbfbfb' }}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-black mb-1" style={{ color: '#000000' }}>
            שם מלא
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-200 text-lg"
            placeholder="הזן/י את שמך המלא"
            style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              borderColor: '#d1d5db' 
            }}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-black mb-1" style={{ color: '#000000' }}>
            טלפון נייד
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-200 text-lg"
            placeholder="הזן/י מספר טלפון נייד"
            dir="ltr"
            style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              borderColor: '#d1d5db' 
            }}
          />
        </div>
        
        {!simplified && (
          <>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-black mb-1" style={{ color: '#000000' }}>
                דוא"ל
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-200 text-lg"
                placeholder="דוא״ל (לא חובה)"
                dir="ltr"
                style={{ 
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  borderColor: '#d1d5db' 
                }}
              />
            </div>
            
            <div>
              <label htmlFor="serviceType" className="block text-lg font-medium text-black mb-1" style={{ color: '#000000' }}>
                סוג העסקה
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-200 text-lg"
                style={{ 
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  borderColor: '#d1d5db' 
                }}
              >
                <option value="קנייה">קנייה</option>
                <option value="מכירה">מכירה</option>
                <option value="שניהם">קנייה ומכירה</option>
                <option value="אחר">אחר</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-black mb-1" style={{ color: '#000000' }}>
                פרטים נוספים
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-200 text-lg"
                placeholder="יש לך שאלות או פרטים נוספים? זה המקום לשתף"
                style={{ 
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  borderColor: '#d1d5db' 
                }}
              />
            </div>
          </>
        )}
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={cn(
              'w-full max-w-md py-3 px-6 text-primary-light font-medium rounded-md transition-all duration-300',
              'bg-primary-gold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-gold',
              'shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center space-x-2 text-xl',
              loading && 'opacity-80 cursor-not-allowed'
            )}
            style={{ backgroundColor: '#b08d57', color: '#fbfbfb' }}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-primary-light border-t-transparent rounded-full animate-spin"></div>
            ) : (
              simplified ? 'קבעו שיחת ייעוץ חינם' : 'שלחו ונדבר בהקדם'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
