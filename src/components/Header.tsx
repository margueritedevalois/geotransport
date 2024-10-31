import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#E2E5ED] shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-[300px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-black text-xl font-bold" style={{ fontFamily: "Segoe UI" }}>
              Geotransport.ru
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black-600 hover:text-blue-700 font-medium">Как подключиться</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                О компании
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Category 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Category 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Category 3</a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Полезное</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">8800200155</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Связаться со специалистом
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-blue-600 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Связаться со специалистом
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;