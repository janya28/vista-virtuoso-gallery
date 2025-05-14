
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full py-16 md:py-24 cyber-grid overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyber-purple rounded-full filter blur-[80px] opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyber-accent rounded-full filter blur-[100px] opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="neon-text">Immersive</span> <span className="text-white">Experiences</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10">
          Explore interactive 3D models in our virtual gallery. Step into the future of digital experiences.
        </p>
        <Button 
          className="bg-gradient-to-r from-cyber-accent to-cyber-purple text-white border-0 px-8 py-6 text-lg hover:from-cyber-purple hover:to-cyber-accent transition-all duration-300 animate-glow"
          onClick={() => {
            const section = document.getElementById('ar-vr-section');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default Hero;
