import React from 'react';
import { Youtube, Instagram, MessageSquare } from 'lucide-react';

const XIcon = () => (
  <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
    <path
      d="M17.53 3H21L13.47 12.09L22 21H15.66L10.61 15.19L4.97 21H1L9.04 11.39L1 3H7.51L12.13 8.33L17.53 3ZM16.34 19H18.18L7.75 4.98H5.79L16.34 19Z"
      fill="white"
    />
  </svg>
);

interface SocialLinkProps {
  platform: string;
  icon: React.ReactNode;
  username: string;
  url: string;
  bgColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform, icon, username, url, bgColor }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} group flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
    >
      <div className="mr-4 text-white">
        {icon}
      </div>
      <div>
        <p className="text-white font-medium">{platform}</p>
        <p className="text-white/80 text-sm">{username}</p>
      </div>
      <div className="ml-auto">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest tech content and connect with our community.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          <SocialLink 
            platform="YouTube"
            icon={<Youtube size={28} />}
            username="@PrasadTechInTelugu"
            url="https://www.youtube.com/@PrasadTechInTelugu"
            bgColor="bg-red-600 hover:bg-red-700"
          />
          <SocialLink 
            platform="Instagram"
            icon={<Instagram size={28} />}
            username="@prasadtechintelugu"
            url="https://www.instagram.com/prasadtechinteluguofficial"
            bgColor="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          />
          <SocialLink 
            platform="Telegram"
            icon={<MessageSquare size={28} />}
            username="@iamprasadtech"
            url="https://t.me/iamprasadtech"
            bgColor="bg-blue-500 hover:bg-blue-600"
          />
          <SocialLink 
            platform="X"
            icon={<XIcon />}
            username="@iamprasadtech"
            url="https://x.com/iamprasadtech"
            bgColor="bg-gradient-to-br from-gray-700 to-black hover:from-gray-800 hover:to-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;