
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ModelInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface ModelSelectorProps {
  models: ModelInfo[];
  currentModelIndex: number;
  onSelectModel: (index: number) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ 
  models, 
  currentModelIndex, 
  onSelectModel 
}) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-4 px-4 min-w-max">
        {models.map((model, index) => (
          <Button
            key={model.id}
            variant="ghost"
            onClick={() => onSelectModel(index)}
            className={cn(
              "flex flex-col items-center p-2 h-auto gap-2 rounded-lg transition-all",
              index === currentModelIndex 
                ? "bg-cyber-accent/20 neon-border" 
                : "hover:bg-cyber-accent/10 border border-transparent"
            )}
          >
            <img 
              src={model.thumbnail} 
              alt={model.title} 
              className="w-24 h-24 object-cover rounded-md"
            />
            <span className={cn(
              "text-xs font-medium",
              index === currentModelIndex ? "text-cyber-accent" : "text-gray-300"
            )}>
              {model.title}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;
