
import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import ModelSelector from './ModelSelector';
import { modelsData } from './ModelsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ARVRSectionProps {
  title?: string;
}

const ARVRSection: React.FC<ARVRSectionProps> = ({ title = "Explore AR/VR Models" }) => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  
  // Function to display AR/VR content
  const displayModel = (index: number) => {
    if (index >= 0 && index < modelsData.length) {
      setCurrentModelIndex(index);
    }
  };
  
  // Function to navigate between models
  const navigateModel = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      displayModel((currentModelIndex + 1) % modelsData.length);
    } else {
      displayModel((currentModelIndex - 1 + modelsData.length) % modelsData.length);
    }
  };
  
  const currentModel = modelsData[currentModelIndex];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center neon-text">{title}</h2>
      
      <div className="relative">
        <ModelViewer 
          modelId={currentModel.id}
          title={currentModel.title}
          description={currentModel.description}
        />
        
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-black/50 border-cyber-accent text-cyber-accent hover:bg-cyber-accent/20"
            onClick={() => navigateModel('prev')}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-black/50 border-cyber-accent text-cyber-accent hover:bg-cyber-accent/20"
            onClick={() => navigateModel('next')}
          >
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <ModelSelector 
          models={modelsData}
          currentModelIndex={currentModelIndex}
          onSelectModel={displayModel}
        />
      </div>
    </div>
  );
};

export default ARVRSection;
