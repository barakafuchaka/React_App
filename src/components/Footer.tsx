import { Instagram, Twitter, MessageSquare } from 'lucide-react';

/**
 * Footer Component
 * 
 * This component displays the footer section of The Sport Spot website.
 * It includes social media links, copyright information, and quick links.
 * The footer has a black background as specified by the user.
 */
const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Social media links data
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/thesportspot'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/thesportspot'
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'https://wa.me/15551234567'
    }
  ];

  return (
    <footer className="bg-black text-white py-12 px-4">
      {/* Footer container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 site-title">
              <span className="text-white">The Sport Spot</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for quality sportswear and equipment to support your fitness journey.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Fitness Avenue</p>
              <p>Sportsville, SP 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@thesportspot.com</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} The Sport Spot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
