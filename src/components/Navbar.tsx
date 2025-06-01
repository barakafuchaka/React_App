import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { useTheme } from '../App';

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
  const { darkMode } = useTheme();
  
  // State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track if profile dropdown is open
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // State to track hovered button in profile dropdown
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
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
    if (isProfileOpen) setIsProfileOpen(false);
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          {/* Profile Icon and Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              aria-label="Toggle profile menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <User size={24} />
            </button>

            {/* Profile Dropdown */}
            <div 
              className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-3 px-2 transition-all duration-200 ${
                isProfileOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="space-y-2">
                <a
                  href="#login"
                  className={`block w-full rounded-xl text-center px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    hoveredButton === 'login'
                      ? 'bg-purple-600 text-white shadow-md transform scale-105'
                      : darkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onMouseEnter={() => setHoveredButton('login')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Log In
                </a>
                <a
                  href="#signup"
                  className={`block w-full rounded-xl text-center px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    hoveredButton === 'signup'
                      ? 'bg-purple-600 text-white shadow-md transform scale-105'
                      : darkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onMouseEnter={() => setHoveredButton('signup')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Positioned on the left edge */}
      <div 
        className={`fixed left-0 top-16 h-screen bg-black/95 w-64 shadow-lg transform transition-transform duration-500 ease-in-out rounded-r-2xl ${
          isOpen && isMobile ? 'translate-x-0' : '-translate-x-full'
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
          
          {/* Mobile Profile Options */}
          <div className="border-t border-gray-700 mt-6 pt-6 space-y-3">
            <a 
              href="#login" 
              className={`block w-full text-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-purple-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white'
              }`}
              onClick={toggleMenu}
            >
              Log In
            </a>
            <a 
              href="#signup" 
              className={`block w-full text-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-purple-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white'
              }`}
              onClick={toggleMenu}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
