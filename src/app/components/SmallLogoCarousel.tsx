"use client";

import { useState, useEffect } from "react";

const companies = [
  {
    name: "Raw Xocolatl",
    logo: "/logos/small-companies/raw-xocolatl.jpg",
    instagram: "https://www.instagram.com/rawxocolat/",
    role: "Artisan Chocolate Company",
    description:
      "Supporting local craftsmanship with professional web presence",
  },
  {
    name: "Good Taste",
    logo: "/logos/small-companies/good-taste.jpg",
    instagram: "https://www.instagram.com/goodtastergv/",
    role: "Gourmet Sweet Mexican Candies",
    description: "Bringing traditional flavors to the digital marketplace",
  },
];

export default function SmallLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-3">
          Supporting Local & Small Businesses
        </h2>
        <p className="text-lg text-gray-600">
          Bringing enterprise-quality development to growing companies
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {companies.map((company, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  {/* Logo */}
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                      />
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="text-center md:text-left max-w-md">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Small Business
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {company.name}
                    </h3>
                    <p className="text-lg text-amber-700 font-semibold mb-3">
                      {company.role}
                    </p>
                    <div className="text-gray-600 mb-4">
                      <i className="fas fa-heart mr-2 text-amber-600"></i>
                      {company.description}
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-110 shadow-md"
                      >
                        <i className="fab fa-instagram text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              "Every business deserves enterprise-quality development,
              regardless of size."
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            goToSlide(
              currentIndex === 0 ? companies.length - 1 : currentIndex - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all hover:scale-105 border border-gray-200"
        >
          <i className="fas fa-chevron-left text-amber-600 text-lg"></i>
        </button>

        <button
          onClick={() =>
            goToSlide(
              currentIndex === companies.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all hover:scale-105 border border-gray-200"
        >
          <i className="fas fa-chevron-right text-amber-600 text-lg"></i>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {companies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-amber-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
