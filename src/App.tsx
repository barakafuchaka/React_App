import { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Moon, Sun } from 'lucide-react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create context for theme
export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);

function App(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // State for dark mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Default to light mode instead of system preference
    return false;
  });

  // Toggle dark mode function
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <Navbar scrolled={scrolled} />
        
        {/* Dark mode toggle button */}
        <button 
          onClick={toggleDarkMode}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-300"
          style={{ 
            backgroundColor: darkMode ? '#ffffff' : '#1e1e1e',
            color: darkMode ? '#1e1e1e' : '#ffffff'
          }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="community">
            <Community />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
