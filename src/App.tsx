import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PlaylistSection from './components/PlaylistSection';
import FollowerStats from './components/FollowerStats';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  // You can replace this with an actual video ID from the channel
  const featuredVideoId = "dQw4w9WgXcQ";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <FollowerStats />
        <VideoSection videoId={featuredVideoId} />
        <PlaylistSection />
        <SocialLinks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;