"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Journey", "Portfolio", "Connect"]; 

  return (
    <motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 24, opacity: 1 }} // 24px = top-6
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed w-full top-4 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 rounded-full max-w-7xl mx-auto left-0 right-0"
>

      <div className="max-w-18xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/5 backdrop-blur-md text-white space-y-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block border-b border-white/20 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
