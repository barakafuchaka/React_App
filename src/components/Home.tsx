import { useState, useEffect } from 'react';
import slide1 from '../assets/images/background.png';
import slide2 from '../assets/images/background.png';
import slide3 from '../assets/images/background.png';

/**
 * Home Component
 * 
 * This component displays the hero section of The Sport Spot website.
 * It features a slideshow that transitions every 15 seconds, with
 * motivational text and a call-to-action button.
 */
const Home = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of slide images
  const slides = [slide1, slide2, slide3];
  
  // Effect to handle automatic slideshow transitions
  useEffect(() => {
    // Set up interval to change slides every 15 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000); // Change slide every 15 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Your Journey to <span className="text-purple-400">Your Dream Body</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Start your transformation with The Sport Spot. We provide stylish, comfortable sportswear and customizable gear to support your grind, your goals, and your growth—every step of the way.
        </p>
        
        {/* Call to action button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
          Explore Now
        </button>
        
        {/* Motivational quote */}
        <div className="absolute bottom-12 w-full text-center">
          <p className="text-white/80 italic text-lg md:text-xl">
            "Don't count the days; make the days count."
          </p>
        </div>
        
        {/* Slide indicators/navigation */}
        <div className="absolute bottom-6 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-purple-500 w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
