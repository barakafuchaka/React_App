import { useState } from 'react';
import { useTheme } from '../App';

/**
 * About Component
 * 
 * This component displays the About section of The Sport Spot website.
 * It includes a main heading and an interactive grid showcasing the company's
 * core values: Quality Products, Expert Guidance, and Customer First.
 * Each grid item has hover effects for interactivity.
 */
const About = () => {
  // Get dark mode state from context
  const { darkMode } = useTheme();
  
  // State to track which grid item is currently being hovered
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Grid items data
  const gridItems = [
    {
      title: "Quality Products",
      description: "We source only the highest quality sportswear and equipment from trusted manufacturers.",
      icon: "📦" // Placeholder icon
    },
    {
      title: "Expert Guidance",
      description: "Our team of fitness experts is here to help you choose the right gear for your needs.",
      icon: "🧠" // Placeholder icon
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority, with hassle-free returns and dedicated support.",
      icon: "🤝" // Placeholder icon
    }
  ];

  return (
    <div className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Section container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-600">About</span> 
          <span className={darkMode ? 'text-white' : 'text-gray-900'}> Us</span>
        </h2>
        
        {/* Main description */}
        <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          At The Sport Spot, we're passionate about helping you achieve your fitness goals with the best sportswear and equipment.
        </p>
        
        {/* Interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-xl p-8 transition-all duration-300
                ${hoveredItem === index ? 'transform scale-105 shadow-xl' : 'shadow-md'}
                ${darkMode 
                  ? `${hoveredItem === index ? 'bg-gray-800' : 'bg-gray-800'} border-2 ${hoveredItem === index ? 'border-purple-500' : 'border-gray-700'}` 
                  : `${hoveredItem === index ? 'bg-white' : 'bg-white'} border-2 ${hoveredItem === index ? 'border-purple-500' : 'border-gray-100'}`
                }
                hover:shadow-xl translate-y-0 hover:-translate-y-1
              `}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-blue-600">{item.icon}</div>
              
              {/* Title */}
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {item.title}
              </h3>
              
              {/* Description */}
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {item.description}
              </p>
              
              {/* Interactive button */}
              <button 
                className={`
                  mt-6 px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${hoveredItem === index 
                    ? 'bg-purple-600 text-white' 
                    : darkMode 
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
