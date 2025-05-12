'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change (optional if using Next.js Router)
  // useEffect(() => {
  //   const handleRouteChange = () => setIsOpen(false);
  //   router.events.on('routeChangeStart', handleRouteChange);
  //   return () => router.events.off('routeChangeStart', handleRouteChange);
  // }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div
        className={clsx(
          'xl:max-w-7xl mx-auto flex items-center justify-between px-6 py-4 backdrop-blur-md transition-colors duration-500',
          scrolled
            ? 'bg-black/80 shadow-sm text-white'
            : 'bg-white text-black'
        )}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logos1.webp"
            alt="Sanzy Logo"
            width={32}
            height={32}
            className={clsx(
              'w-8 h-8 transition-all duration-800',
              scrolled ? 'invert' : 'invert-0'
            )}
            loading="eager"
            priority
          />
          <span
            className={clsx(
              'text-2xl font-bold tracking-tight transition-colors duration-800',
              scrolled ? 'text-white' : 'text-black'
            )}
          >
            Sanzy
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-8 text-sm font-medium"
          aria-label="Main navigation"
        >
          {['Personal', 'Business', 'Partner', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative group text-current hover:text-black transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Sign In / Contact Button */}
        <button
          className={clsx(
            'border border-black px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hidden md:block',
            scrolled
              ? 'text-white hover:bg-gray-800 border-white'
              : 'text-black hover:bg-black hover:bg-opacity-10'
          )}
          aria-label="Contact us"
        >
          Contact
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'md:hidden fixed inset-x-0 top-[64px] overflow-hidden transition-all duration-300 ease-in-out bg-white text-gray-800',
          isOpen ? 'max-h-screen py-6' : 'max-h-0'
        )}
        role="menu"
        aria-orientation="vertical"
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center space-y-6" aria-label="Mobile navigation">
          {['Personal', 'Business', 'Partner', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-base font-medium hover:text-black transition-colors"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className="mt-2 border border-black px-6 py-2 rounded-full text-base font-medium hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Contact us"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}