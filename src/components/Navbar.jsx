

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center font-bold text-xl transition-transform duration-300 hover:scale-105" onClick={closeMenu}>
          <span className="text-3xl mr-2">🍰</span>
          <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
            Sweet Dreams
          </span>
        </Link>

        <div className={`md:flex md:gap-8 md:items-center ${
          isOpen 
            ? 'fixed top-full left-0 right-0 bg-white/98 backdrop-blur-md flex flex-col p-8 gap-6 shadow-lg transform translate-y-0 opacity-100 visible' 
            : 'hidden md:flex'
        } transition-all duration-300`}>
          <Link 
            to="/" 
            className={`font-medium transition-colors duration-300 relative ${
              location.pathname === '/' ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}
            onClick={closeMenu}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-300 ${
              location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors duration-300 relative ${
              location.pathname === '/about' ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}
            onClick={closeMenu}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-300 ${
              location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link 
            to="/bookings" 
            className={`font-medium transition-colors duration-300 relative ${
              location.pathname === '/bookings' ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}
            onClick={closeMenu}
          >
            Bookings
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-300 ${
              location.pathname === '/bookings' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </div>

        <button 
          className="md:hidden flex flex-col p-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 