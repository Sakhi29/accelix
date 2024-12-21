'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Kdam_Thmor_Pro } from 'next/font/google';

const kdamThmorPro = Kdam_Thmor_Pro({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#1E1E1E] z-50 px-6 py-4">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`text-white text-2xl font-bold ${kdamThmorPro.className}`}>
          ACCELIX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/our-work" className="text-white hover:text-gray-300 transition-colors">
            Our Work
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="text-white hover:text-gray-300 transition-colors">
            Case Studies
          </Link>
          <Link 
            href="/contact" 
            className="bg-[#4318FF] text-white px-6 py-2 rounded-full hover:bg-[#3614CC] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link 
                href="/our-work" 
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/case-studies" 
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#4318FF] text-white px-6 py-2 rounded-full hover:bg-[#3614CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
