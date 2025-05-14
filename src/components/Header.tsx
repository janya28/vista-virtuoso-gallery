
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center glass z-10 sticky top-0">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold neon-text">IMMERSIVE VIEWER</h1>
      </div>
      <div>
        <Button 
          variant="outline" 
          className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/20 text-sm md:text-base"
        >
          About
        </Button>
      </div>
    </header>
  );
};

export default Header;
