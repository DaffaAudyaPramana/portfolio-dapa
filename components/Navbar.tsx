"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-purple-600">
          daffaaudya
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-black">
          <a href="#about" className="hover:text-purple-600 transition">
            Tentang
          </a>
          <a href="#skills" className="hover:text-purple-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-600 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-purple-600 transition">
            Kontak
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        } bg-white`}
      >
        <nav className="flex flex-col px-6 pb-4 space-y-4 text-sm font-medium text-black">
          <a href="#about" onClick={() => setIsOpen(false)}>
            Tentang
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
}
