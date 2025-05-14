
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ARVRSection from '@/components/ARVRSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div id="ar-vr-section" className="py-12">
          <ARVRSection />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text">About Immersive Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">What is AR/VR?</h3>
                <p className="text-gray-300">
                  Augmented Reality (AR) and Virtual Reality (VR) technologies create immersive digital experiences that 
                  enhance or replace our perception of the real world. AR overlays digital content onto the real world, 
                  while VR creates entirely virtual environments that users can interact with.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Our Gallery</h3>
                <p className="text-gray-300">
                  Our 3D model gallery showcases interactive experiences that demonstrate the potential of immersive 
                  technologies. Navigate through different models to explore detailed virtual objects and environments 
                  from different perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
