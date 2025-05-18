import React from 'react';
import { Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Youtube className="h-7 w-7 text-red-600 mr-2" />
              <span className="font-bold text-xl">PrasadTechInTelugu</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all tech content in Telugu. From reviews to news, we've got you covered.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} PrasadTechInTelugu. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-white transition-colors">Latest Videos</a>
              </li>
              <li>
                <a href="#playlists" className="text-gray-400 hover:text-white transition-colors">Playlists</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Content Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tech News</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Smartphone Reviews</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Gadget Unboxings</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tech Tips & Tricks</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Designed with ♥ for Telugu tech enthusiasts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;