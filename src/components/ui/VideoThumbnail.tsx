import React from 'react';

interface VideoThumbnailProps {
  title: string;
  location: string;
  date: string;
  onClick?: () => void;
  className?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ 
  title, 
  location, 
  date, 
  onClick,
  className = ""
}) => {
  return (
    <div 
      className={`bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {/* Event Details */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-black mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">{location}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>

      {/* Video Player Area */}
      <div className="relative bg-black rounded-lg aspect-video flex items-center justify-center">
        {/* Tiny Red Play Button */}
        <div className="bg-red-600 hover:bg-red-700 rounded-full p-1 transition-colors">
          <svg 
            width="8" 
            height="8" 
            viewBox="0 0 24 24" 
            fill="white"
            className="ml-0.5"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
