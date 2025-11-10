'use client';

import Link from 'next/link';
import { useState } from 'react';
import GlobalSearch from './GlobalSearch';

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
            <Link href="/search" className="nav-link block md:hidden py-2 md:py-0">
              <i className="fas fa-search mr-2"></i>Search
            </Link>
          </div>
        </div>

        {/* Center section - Portfolio Logo */}
        <div className="flex items-center justify-center flex-1">
          <Link href="/" className="flex items-center">
            <img 
              src="/logos/rg-hp-logo.png" 
              alt="RayGar Portfolio Logo" 
              className="h-16 w-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right section - Search */}
        <div className="hidden md:block">
          <GlobalSearch className="w-64" />
        </div>
      </div>
    </nav>
  );
}
