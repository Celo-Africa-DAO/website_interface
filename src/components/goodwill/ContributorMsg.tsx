// This is a complete single-file implementation you can use directly on your page

import React, { useState } from 'react';
import Image from 'next/image';

// If you don't have the actual image, make sure to create a placeholder or use a different image
// Place the image in your public folder and reference it here
const ContributorMsg = () => {
  // Testimonial data structure
  const testimonials = [
    {
      id: 1,
      name: 'M. Brisa',
      role: 'Ecosystem Lead At CELO',
      image: '/img/Mukunde.png', // Replace with your actual image path
      text: 'Lorem ipsum dolor sit amet consectetur. Cursus tellus facilisi facilisis ipsum aliquam morbi rhoncus scelerisque mauris. Justo cum semper elementum pharetra gravida ac consequat diam volutpat.'
    },
    // You can add more testimonials here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full bg-[#FCF6F1] py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl italic font-medium text-gray-800 mb-3">Goodwill message from core contributors</h2>
        
        <p className="text-sm text-gray-600 max-w-3xl mb-8">
          We are thrilled to present a series of groundbreaking projects that have recently graduated 
          from our esteemed crypto incubator program.
        </p>
        
        <div className="bg-[#E7E3D4] p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 flex flex-col items-start">
              {/* Image container with proper aspect ratio */}
              <div className="relative w-full max-w-[200px] aspect-square mb-3">
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <p className="font-medium text-gray-800">{testimonials[currentIndex].name}</p>
              <p className="text-xs text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-700">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <div className="flex justify-center space-x-3 mt-8">
          <button 
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button 
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="flex items-end">
          <div className="h-28 w-24 bg-celo-AD-olive-green mr-24"></div>
          <div className="h-10 w-full bg-celo-AD-olive-green"></div>
          <div className="h-28 w-24 bg-celo-AD-olive-green mr-16"></div>
        </div>
    </div>
  );
};

export default ContributorMsg;