import React, { useState } from 'react';

interface StatItem {
  number: string;
  description: string;
  color?: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  className?: string;
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-[400px] relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-400 opacity-30"
              style={{
                left: `${i * 2}%`,
                bottom: '0',
                width: '2px',
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.1}s`,
                animation: 'wave 3s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-around py-16 px-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center mb-8 md:mb-0 group cursor-pointer transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Number */}
            <div className="text-5xl md:text-6xl font-bold text-purple-300 mb-4 transition-colors duration-300 group-hover:text-purple-200">
              {stat.number}
            </div>
            
            {/* Description */}
            <div className="text-lg md:text-xl text-purple-100 font-medium mb-2 transition-colors duration-300 group-hover:text-white">
              {stat.description}
            </div>
            
            {/* Animated Underline */}
            <div className="relative w-24 h-1 bg-purple-400 overflow-hidden">
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-500 transition-all duration-500 ease-out ${
                  hoveredIndex === index 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-full opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #8b5cf6, #7c3aed)',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for wave animation */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) scaleY(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedStats;
