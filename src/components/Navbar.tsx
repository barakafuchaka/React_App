import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * 
 * This component displays the navigation bar of The Sport Spot website.
 * It includes a responsive design that shows a hamburger menu on smaller screens
 * and expands to show all navigation options on larger screens.
 */
interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  // State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track if viewport is mobile size
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size and update isMobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle mobile menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white site-title">
              <span className="text-white">The Sport Spot</span>
            </h1>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#community" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Community</a>
              <a href="#contact" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile Navigation Button - Only visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Positioned on the right edge as requested */}
      <div 
        className={`fixed right-0 top-16 h-screen bg-black/95 w-64 shadow-lg transform transition-transform duration-500 ease-in-out rounded-l-2xl ${
          isOpen && isMobile ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 pt-6 pb-6 space-y-3">
          <a 
            href="#home" 
            className="text-white hover:bg-purple-700 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white hover:bg-purple-700 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-white hover:bg-purple-700 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a 
            href="#community" 
            className="text-white hover:bg-purple-700 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
            onClick={toggleMenu}
          >
            Community
          </a>
          <a 
            href="#contact" 
            className="text-white hover:bg-purple-700 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
