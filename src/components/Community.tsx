import { MessageCircle, PhoneCall, Activity } from 'lucide-react';

/**
 * Community Component
 * 
 * This component displays the community section of The Sport Spot website.
 * It features a grid layout with three interactive options: chatroom,
 * emergency contact, and physiotherapist contact.
 */
const Community = () => {
  // Community options data with titles, descriptions, and icons
  const communityOptions = [
    {
      title: "Client Chatroom",
      description: "Connect with other fitness enthusiasts and share your journey.",
      icon: <MessageCircle className="w-10 h-10" />,
      color: "purple"
    },
    {
      title: "Emergency Contact",
      description: "Direct line to medical assistance in case of emergencies.",
      icon: <PhoneCall className="w-10 h-10" />,
      color: "red"
    },
    {
      title: "Physiotherapist",
      description: "Professional advice for injury prevention and recovery.",
      icon: <Activity className="w-10 h-10" />,
      color: "blue"
    }
  ];

  return (
    <div className="py-20 px-4 bg-white">
      {/* Section container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-purple-600">Community</span>
        </h2>
        
        {/* Section description */}
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Join our community and get access to exclusive resources and support.
        </p>
        
        {/* Community options grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
            >
              {/* Card header with colored background based on option */}
              <div 
                className={`p-6 flex justify-center ${
                  option.color === 'purple' ? 'bg-purple-600' : 
                  option.color === 'red' ? 'bg-red-600' : 
                  'bg-blue-600'
                } text-white`}
              >
                {option.icon}
              </div>
              
              {/* Card content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800">{option.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                {/* Action button */}
                <button 
                  className={`w-full py-2 rounded-md font-medium text-white transition-colors ${
                    option.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 
                    option.color === 'red' ? 'bg-red-600 hover:bg-red-700' : 
                    'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {option.color === 'purple' ? 'Join Chat' : 
                   option.color === 'red' ? 'Call Now' : 
                   'Book Appointment'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
