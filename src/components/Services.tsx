import { useState } from 'react';
import { ShoppingBag, Ruler, Settings, Shield, BookOpen, Users } from 'lucide-react';

/**
 * Services Component
 * 
 * This component displays the services offered by The Sport Spot in an interactive
 * grid format with hover effects. Each service card has rounded edges, a follow light
 * effect, and enlarges slightly when hovered over.
 */
const Services = () => {
  // State to track which service card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // State to track mouse position for follow light effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Services data
  const services = [
    {
      title: "Personal Shopping",
      description: "Get personalized recommendations from our expert staff.",
      icon: <ShoppingBag className="w-8 h-8" />
    },
    {
      title: "Custom Fitting",
      description: "Ensure perfect fit with our professional fitting service.",
      icon: <Ruler className="w-8 h-8" />
    },
    {
      title: "Equipment Setup",
      description: "Let our experts set up your equipment for optimal performance.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Warranty Service",
      description: "Hassle-free warranty claims and repairs for all products.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Training Assistance",
      description: "Get guidance on using your new equipment effectively.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Bulk Orders",
      description: "Special discounts and service for team and group orders.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  /**
   * Handle mouse move for follow light effect
   * @param e - Mouse event
   * @param index - Index of the card being hovered
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredCard === index) {
      // Get position relative to the card
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div className="py-20 px-4 bg-gray-50">
      {/* Section container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-purple-600">Services</span>
        </h2>
        
        {/* Section description */}
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We offer a range of premium services to enhance your sporting experience.
        </p>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              style={{
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                zIndex: hoveredCard === index ? 10 : 1
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Follow light effect */}
              {hoveredCard === index && (
                <div 
                  className="absolute bg-gradient-to-r from-purple-400/20 to-blue-500/20 w-32 h-32 rounded-full blur-xl pointer-events-none"
                  style={{
                    left: mousePosition.x - 64,
                    top: mousePosition.y - 64,
                    transition: 'opacity 0.3s ease',
                    opacity: 0.8
                  }}
                />
              )}
              
              {/* Card content */}
              <div className="p-6 relative z-10">
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-4
                  ${hoveredCard === index ? 'text-white bg-blue-600' : 'text-blue-600 bg-blue-100'}
                  transition-colors duration-300
                `}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Learn more link */}
                <a 
                  href="#" 
                  className={`
                    inline-block text-sm font-medium
                    ${hoveredCard === index ? 'text-purple-600' : 'text-blue-600'}
                    transition-colors duration-300
                  `}
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact us button */}
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
