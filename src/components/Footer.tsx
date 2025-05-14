
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 glass mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">© 2025 Immersive Viewer. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-400 hover:text-cyber-accent transition-colors">Terms</a>
          <a href="#" className="text-sm text-gray-400 hover:text-cyber-accent transition-colors">Privacy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-cyber-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
