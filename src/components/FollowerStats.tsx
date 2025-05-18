import React from 'react';
import { Youtube, Instagram, MessageSquare } from 'lucide-react';

// Add X icon as a React component
const XIcon = () => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
    <path
      d="M17.53 3H21L13.47 12.09L22 21H15.66L10.61 15.19L4.97 21H1L9.04 11.39L1 3H7.51L12.13 8.33L17.53 3ZM16.34 19H18.18L7.75 4.98H5.79L16.34 19Z"
      fill="white"
    />
  </svg>
);

interface StatCardProps {
  platform: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ platform, count, icon, color }) => {
  return (
    <div className={`${color} p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-white/90">{icon}</div>
        <span className="text-white/80 text-sm font-medium">{platform}</span>
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{count}</span>
        <span className="ml-2 text-sm opacity-80">followers</span>
      </div>
    </div>
  );
};

const FollowerStats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our growing community of tech enthusiasts across different platforms
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          <StatCard
            platform="YouTube"
            count="4.79M+"
            icon={<Youtube size={24} />}
            color="bg-gradient-to-br from-red-600 to-red-700"
          />
          <StatCard
            platform="Instagram"
            count="1.3M+"
            icon={<Instagram size={24} />}
            color="bg-gradient-to-br from-purple-600 to-pink-600"
          />
          <StatCard
            platform="Telegram"
            count="850K+"
            icon={<MessageSquare size={24} />}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatCard
            platform="X"
            count="356K+"
            icon={<XIcon />}
            color="bg-gradient-to-br from-gray-700 to-black"
          />
        </div>
      </div>
    </section>
  );
};

export default FollowerStats;