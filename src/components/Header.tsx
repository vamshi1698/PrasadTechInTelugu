import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Youtube className="h-8 w-8 text-red-600 mr-2" />
            <span className="text-white font-bold text-xl md:text-2xl">PrasadTechInTelugu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#videos" className="text-white hover:text-purple-400 transition-colors">Videos</a>
            <a href="#playlists" className="text-white hover:text-purple-400 transition-colors">Playlists</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
            <a 
              href="https://www.youtube.com/@PrasadTechInTelugu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#videos" 
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Videos
              </a>
              <a 
                href="#playlists" 
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Playlists
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://www.youtube.com/@PrasadTechInTelugu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors inline-block w-fit"
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;