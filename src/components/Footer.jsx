import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🍰</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">Sweet Dreams</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating beautiful, delicious cakes that make your special moments unforgettable. 
              From weddings to birthdays, we bring your sweetest dreams to life with passion and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span className="text-white">📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span className="text-white">📷</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span className="text-white">🐦</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/bookings" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Bookings</Link></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300"><span className="mr-3">📍</span><span>123 Sweet Street<br />Cake City, CC 12345</span></li>
              <li className="flex items-center text-gray-300"><span className="mr-3">📱</span><span>+1 (555) 123-4567</span></li>
              <li className="flex items-center text-gray-300"><span className="mr-3">📧</span><span>hello@sweetdreams.com</span></li>
              <li className="flex items-center text-gray-300"><span className="mr-3">🕒</span><span>Mon-Sat: 9AM-6PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Sweet Dreams. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;