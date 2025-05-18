import React from 'react';
import { Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center md:text-left">
              <span className="text-red-600">PrasadTech</span>InTelugu
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 text-center md:text-left">
              Telugu Tech | Reviews | Unboxings
            </p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 text-center md:text-left">
              Your one-stop destination for all tech content in Telugu. Get the latest tech news, honest reviews, and exciting unboxing videos that help you make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://www.youtube.com/@PrasadTechInTelugu?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
              >
                <Youtube className="mr-2 h-5 w-5" /> Subscribe Now
              </a>
              <a 
                href="#videos" 
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
              >
                Watch Latest
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full pt-[56.25%] bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 mt-8 md:mt-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center animate-pulse cursor-pointer"
                  onClick={() => window.open('https://www.youtube.com/channel/prasadtechintelugu/join', '_blank')}
                >
                  <Youtube className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-lg font-medium text-center">Join 50,000+ tech enthusiasts</p>
                <p className="text-gray-300 text-sm text-center">New videos every week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;