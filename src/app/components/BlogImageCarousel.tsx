'use client';

import { useState, useEffect } from 'react';

interface BlogImageCarouselProps {
  images: string[];
  title?: string;
}

export default function BlogImageCarousel({ images, title = "Blog Images" }: BlogImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, display it without carousel functionality
  if (images.length === 1) {
    return (
      <div className="mb-6">
        <img 
          src={images[0]} 
          className="w-full max-h-96 object-contain bg-gray-50 rounded-lg shadow-lg" 
          alt={title} 
        />
      </div>
    );
  }

  return (
    <div className="relative mb-6">
      {/* Carousel Container */}
      <div className="relative bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative min-h-64 max-h-96 flex items-center justify-center">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full w-full" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center justify-center min-h-64 max-h-96">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all hover:scale-105"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all hover:scale-105"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-2 py-4 bg-gray-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#0095d5] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
