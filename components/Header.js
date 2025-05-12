'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed w-full z-50"
    >
      <div className={clsx("xl:max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-colors duration-500",
        scrolled
          ? 'bg-black/80 backdrop-blur-md shadow-sm text-white'
          : 'bg-white text-black'
          )}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logos1.png"
            alt="Logo"
            className={clsx(
              'w-8 h-8 transition-all duration-800',
              scrolled ? 'filter invert' : 'filter invert-0'
            )}
          />
          <div className="text-2xl font-bold tracking-tight transition-all duration-800">
            Sanzy
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-8 text-sm font-medium"
          aria-label="Main navigation"
        >
          {['Personal', 'Business', 'Partner', 'About Us'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group text-current hover:text-black transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button
            className={clsx(
              'border border-black px-5 py-2 rounded-full text-sm font-medium transition-all duration-1200',
              scrolled
                ? 'text-white hover:bg-gray-800 border-white'  // Warna tombol saat scrolled
                : 'hover:bg-white hover:bg-opacity-20'  // Warna tombol saat tidak scrolled
            )}
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden fixed inset-x-0 top-[64px] overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-screen py-6' : 'max-h-0'
        )}
      >
        <div className="flex flex-col items-center space-y-6 bg-white text-gray-800">
          {['Personal', 'Business', 'Partner', 'About Us'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-base font-medium hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="mt-2 border border-black px-6 py-2 rounded-full text-base font-medium hover:bg-black hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}