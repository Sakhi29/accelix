"use client";

import Link from "next/link";
import { useState } from "react";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamThmorPro = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#1E1E1E] z-50 px-6  py-4">
      <div className="mx-auto container flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-white text-2xl font-bold ${kdamThmorPro.className}`}
        >
          ACCELIX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/our-work"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-white hover:text-gray-300 transition-colors"
          >
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
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1E1E1E] border-t border-gray-800 md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-4">
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
                className="bg-[#4318FF] text-white px-6 py-2 rounded-full hover:bg-[#3614CC] transition-colors text-center"
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
