import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../App';

/**
 * Contact Component
 * 
 * This component displays the contact section of The Sport Spot website.
 * It includes contact information, business hours, and a contact form.
 * Newsletter subscription has been removed as requested.
 */
const Contact = () => {
  // Get dark mode state from context
  const { darkMode } = useTheme();
  
  // State for contact form
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State for form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  /**
   * Handle contact form input changes
   * @param e - Input change event
   */
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  /**
   * Handle contact form submission
   * @param e - Form submission event
   */
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Contact form submitted:', contactForm);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Section container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-600">Contact</span>
          <span className={darkMode ? 'text-white' : 'text-gray-900'}> Us</span>
        </h2>
        
        {/* Section description */}
        <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Have questions or need assistance? We're here to help!
        </p>
        
        {/* Contact section grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Get In Touch
            </h3>
            
            {/* Contact details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Phone</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+1 (555) 123-4567</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>info@thesportspot.com</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Address</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>123 Fitness Avenue, Sportsville, SP 12345</p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Business Hours</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Saturday: 10:00 AM - 6:00 PM</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Space for additional content if needed */}
            <div className="mt-12">
              {/* Newsletter section removed as requested */}
            </div>
          </div>
          
          {/* Contact form */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Send Us a Message
            </h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  required
                />
              </div>
              
              {/* Email field */}
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  required
                />
              </div>
              
              {/* Message field */}
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  required
                />
              </div>
              
              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors w-full"
              >
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
