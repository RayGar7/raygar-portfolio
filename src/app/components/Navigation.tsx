'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getImagePath } from '../utils/imagePath';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="portfolio-nav fixed top-0 left-0 right-0 z-50 px-4">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Left section - Mobile menu button and Navigation links */}
        <div className="flex items-center">
          <button
            className="md:hidden text-white text-xl p-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#0095d5] transition-all mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 absolute md:relative top-full md:top-0 left-0 right-0 md:left-auto md:right-auto bg-inherit md:bg-transparent p-4 md:p-0`}>
            <Link href="/" className="nav-link block md:inline-block py-2 md:py-0">
              Home
            </Link>
            <Link href="/blog" className="nav-link block md:inline-block py-2 md:py-0">
              Blog
            </Link>
            <Link href="/projects" className="nav-link block md:inline-block py-2 md:py-0">
              Projects
            </Link>
            <Link href="/clients" className="nav-link block md:inline-block py-2 md:py-0">
              Clients
            </Link>
          </div>
        </div>

        {/* Center section - Portfolio Logo */}
        <div className="flex items-center justify-center flex-1">
          <Link href="/" className="flex items-center">
            <img 
              src={getImagePath("/logos/rg-hp-logo.png")} 
              alt="RayGar Portfolio Logo" 
              className="h-16 w-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right section - Search form */}
        <form className="hidden md:flex items-center space-x-2" action="/search/">
          <input
            className="px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 border-2 border-white focus:border-blue-200 focus:outline-none"
            type="search"
            name="q"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="px-4 py-2 bg-white text-[#0095d5] rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
