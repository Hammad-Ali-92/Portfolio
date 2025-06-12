
import React from "react";
import { cn } from "@/lib/utils";

interface PixelArtProps {
  className?: string;
  color?: string;
}

export const PixelAvatar: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-blue"
}) => {
  return (
    <div className={cn("w-32 h-32 relative animate-float pixel-shadow", className)}>
      {/* Head */}
      <div className={cn("absolute w-16 h-16 top-4 left-8", color)}></div>
      
      {/* Eyes */}
      <div className="absolute w-2 h-2 bg-background top-10 left-12"></div>
      <div className="absolute w-2 h-2 bg-background top-10 left-18"></div>
      
      {/* Mouth */}
      <div className="absolute w-6 h-2 bg-background top-14 left-13"></div>
      
      {/* Hair */}
      <div className="absolute w-4 h-2 bg-foreground top-4 left-8"></div>
      <div className="absolute w-4 h-2 bg-foreground top-4 left-14"></div>
      <div className="absolute w-2 h-2 bg-foreground top-4 left-12"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-6"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-24"></div>
      
      {/* Glasses - new addition */}
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-12"></div>
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-16"></div>
      <div className="absolute w-1 h-1 bg-foreground/70 top-9 left-15"></div>
      
      {/* Body */}
      <div className="absolute w-12 h-8 bg-pixel-purple top-20 left-10"></div>
      
      {/* Arms */}
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-6"></div>
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-22"></div>
      
      {/* Hands */}
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-6"></div>
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-24"></div>
    </div>
  );
};

export const PixelComputer: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-green"
}) => {
  return (
    <div className={cn("w-32 h-32 relative animate-float delay-150 pixel-shadow", className)}>
      {/* Monitor */}
      <div className="absolute w-20 h-16 bg-foreground top-4 left-6"></div>
      
      {/* Screen */}
      <div className={cn("absolute w-16 h-12 top-6 left-8 pixel-scanlines", color)}></div>
      
      {/* Keyboard */}
      <div className="absolute w-24 h-4 bg-foreground top-20 left-4"></div>
      <div className="absolute w-22 h-1 bg-muted top-22 left-5"></div>
      
      {/* Code on screen */}
      <div className="absolute w-2 h-1 bg-background top-8 left-10 animate-blink delay-100"></div>
      <div className="absolute w-4 h-1 bg-background top-8 left-13 animate-blink delay-300"></div>
      <div className="absolute w-3 h-1 bg-background top-10 left-11 animate-blink delay-200"></div>
      <div className="absolute w-5 h-1 bg-background top-12 left-9 animate-blink delay-400"></div>
      <div className="absolute w-2 h-1 bg-background top-14 left-12 animate-blink delay-300"></div>
      
      {/* Computer base */}
      <div className="absolute w-8 h-2 bg-foreground/80 top-24 left-12"></div>
    </div>
  );
};

export const PixelCloud: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-secondary"
}) => {
  return (
    <div className={cn("w-32 h-20 relative animate-float delay-300 pixel-shadow", className)}>
      <div className={cn("absolute w-16 h-8 top-6 left-8", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-12", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-6", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-18", color)}></div>
      
      {/* Added cloud details */}
      <div className={cn("absolute w-4 h-4 top-2 left-8", color)}></div>
      <div className={cn("absolute w-4 h-4 top-2 left-16", color)}></div>
    </div>
  );
};

// New component: Pixel stars for background decoration
export const PixelStar: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-yellow"
}) => {
  return (
    <div className={cn("relative animate-pulse-slow", className)}>
      <div className={cn("absolute w-1 h-1", color)}></div>
      <div className={cn("absolute w-3 h-1 left-1", color)}></div>
      <div className={cn("absolute w-1 h-3 top-1", color)}></div>
    </div>
  );
};
