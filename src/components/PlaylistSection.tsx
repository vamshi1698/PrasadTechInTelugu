import React from 'react';
import { PlaySquare,HomeIcon , Gamepad2} from 'lucide-react';

interface PlaylistCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, icon, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-xl flex flex-col h-full"
    >
      <div className="mb-4 text-purple-500 group-hover:text-purple-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 flex-grow">{description}</p>
      <div className="mt-4 text-purple-500 group-hover:text-purple-400 flex items-center transition-all">
        <span>Watch Playlist</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
};

const PlaylistSection: React.FC = () => {
  const playlists = [
    {
      title: "Tech News, Unboxings & Reviews",
      description: "Stay updated with the latest tech trends, launches, and news in Telugu. Enjoy exciting unboxing videos of the newest gadgets. Make smart purchase decisions with our honest reviews of phones, laptops, and more.",
      icon: <PlaySquare size={36} />,
      url: "https://www.youtube.com/@PrasadTechInTelugu/videos"
    },
    {
      title: "Lifestyle & Vlogs",
      description: "Go beyond the screen with Prasad Devarakonda! Get a glimpse into my daily life, personal moments, family time, and celebrations. From fun vlogs to behind-the-scenes of my tech journey",
      icon: <HomeIcon size={36} />,
      url: "https://www.youtube.com/@prasaddevarakonda/videos"
    },
    {
      title: "Gaming & Reviews",
      description: "Join Prasad in an epic gaming journey filled with action, fun, and crazy moments! From intense battles to entertaining gameplay, live streams.",
      icon: <Gamepad2 size={36} />,
      url: "https://www.youtube.com/@prasadthegamer/videos"
    }
  ];

  return (
    <section id="playlists" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Playlists</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through our curated playlists and find the content that interests you the most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <PlaylistCard 
              key={index}
              title={playlist.title}
              description={playlist.description}
              icon={playlist.icon}
              url={playlist.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;