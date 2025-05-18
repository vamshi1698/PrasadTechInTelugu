import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface VideoSectionProps {
  videoId?: string;
}

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
  };
}

const VideoSection: React.FC<VideoSectionProps> = () => {
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [youtubeSubs, setYoutubeSubs] = useState<number | null>(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
        
        // Fetch latest video
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }

        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
        } else {
          setError('No videos found');
        }
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
        setIsLoading(false);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <section id="videos" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Video</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out my most recent tech content. Subscribe to the channel to never miss an update!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-[400px] bg-gray-800 rounded-xl">
              <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-[400px] bg-gray-800 rounded-xl">
              <div className="text-center text-red-500">
                <p className="text-xl font-semibold mb-2">Error</p>
                <p>{error}</p>
              </div>
            </div>
          ) : video ? (
            <div className="relative pt-[56.25%] bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
          
          <div className="mt-6 flex justify-center">
            <a 
              href="https://www.youtube.com/@PrasadTechInTelugu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg flex items-center transition-all"
            >
              View Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;