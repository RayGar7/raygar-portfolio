'use client';

import { useState, useEffect } from 'react';
import { getImagePath } from '../utils/imagePath';

const companies = [
  {
    name: 'Hewlett-Packard (HP)',
    logo: getImagePath('/logos/hp.png'),
    role: 'Software Developer',
    badge: 'Fortune 500'
  },
  {
    name: 'Foxconn Technology',
    logo: getImagePath('/logos/Foxconn.png'),
    role: 'International Collaboration',
    badge: 'Fortune 500'
  },
  {
    name: 'Intuit QuickBooks',
    logo: getImagePath('/logos/qb.png'),
    role: 'Technical Support Specialist',
    badge: 'Fortune 500'
  }
];

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-12">
      {/* Hero Text */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-[#0095d5] to-[#007bb5] bg-clip-text text-transparent">
            Fortune 500
          </span>
          <br />
          <span className="text-gray-700">Experience</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Bringing enterprise-level expertise from three major corporations to your projects
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white rounded-2xl shadow-xl border-2 border-[#0095d5] overflow-hidden">
        {/* Carousel Content */}
        <div className="flex transition-transform duration-700 ease-in-out" 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {companies.map((company, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 min-h-[350px]">
                {/* Logo */}
                <div className="mb-8 md:mb-0 md:mr-12">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    />
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="text-center md:text-left max-w-md">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <span className="bg-gradient-to-r from-[#0095d5] to-[#007bb5] text-white text-sm font-bold px-4 py-2 rounded-full">
                      {company.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    {company.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-[#0095d5] font-semibold mb-4">
                    {company.role}
                  </p>
                  <div className="text-gray-600">
                    <i className="fas fa-briefcase mr-2"></i>
                    Enterprise-level experience
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#0095d5] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentIndex === 0 ? companies.length - 1 : currentIndex - 1)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <i className="fas fa-chevron-left text-[#0095d5] text-xl"></i>
        </button>
        
        <button
          onClick={() => goToSlide(currentIndex === companies.length - 1 ? 0 : currentIndex + 1)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <i className="fas fa-chevron-right text-[#0095d5] text-xl"></i>
        </button>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="text-4xl font-bold text-[#0095d5] mb-2">3</div>
          <div className="text-gray-600 font-medium">Fortune 500 Companies</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="text-4xl font-bold text-[#0095d5] mb-2">6+</div>
          <div className="text-gray-600 font-medium">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="text-4xl font-bold text-[#0095d5] mb-2">100%</div>
          <div className="text-gray-600 font-medium">Enterprise Quality</div>
        </div>
      </div>
    </div>
  );
}
