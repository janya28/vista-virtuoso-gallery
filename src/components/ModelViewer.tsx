
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ModelViewerProps {
  modelId: string;
  title: string;
  description: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelId, title, description }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Apply any initialization if needed
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const handleLoad = () => {
      console.log(`Model ${modelId} loaded`);
    };
    
    iframe.addEventListener('load', handleLoad);
    
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [modelId]);

  return (
    <Card className="glass w-full h-[500px] rounded-xl overflow-hidden border-white/10">
      <CardContent className="p-0 h-full flex flex-col">
        <iframe 
          ref={iframeRef}
          src={`https://sketchfab.com/models/${modelId}/embed`}
          title={title}
          allowFullScreen 
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
        <div className="p-4 bg-black/50 backdrop-blur-sm">
          <h3 className="text-lg font-medium text-cyber-accent">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelViewer;
