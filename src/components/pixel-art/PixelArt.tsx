import React from "react";
import { cn } from "@/lib/utils";

interface PixelArtProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

export const PixelAvatar: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-blue",
  style
}) => {
  return (
    <div className={cn("relative animate-float pixel-shadow", className)} style={style}>
      {/* Head */}
      <div className={cn("absolute w-16 h-16 top-4 left-8 transition-colors duration-300", color)}></div>
      
      {/* Eyes with blinking animation */}
      <div className="absolute w-2 h-2 bg-background top-10 left-12 animate-blink"></div>
      <div className="absolute w-2 h-2 bg-background top-10 left-18 animate-blink [animation-delay:0.2s]"></div>
      
      {/* Mouth with subtle animation */}
      <div className="absolute w-6 h-2 bg-background top-14 left-13 hover:w-8 transition-all duration-300"></div>
      
      {/* Animated Hair */}
      <div className="absolute w-4 h-2 bg-foreground top-4 left-8 animate-float [animation-delay:0.1s]"></div>
      <div className="absolute w-4 h-2 bg-foreground top-4 left-14 animate-float [animation-delay:0.2s]"></div>
      <div className="absolute w-2 h-2 bg-foreground top-4 left-12 animate-float [animation-delay:0.3s]"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-6 animate-float [animation-delay:0.4s]"></div>
      <div className="absolute w-2 h-4 bg-foreground top-6 left-24 animate-float [animation-delay:0.5s]"></div>
      
      {/* Glasses with glowing effect */}
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-12 animate-pulse"></div>
      <div className="absolute w-4 h-1 bg-foreground/70 top-9 left-16 animate-pulse [animation-delay:0.2s]"></div>
      <div className="absolute w-1 h-1 bg-foreground/70 top-9 left-15 animate-pulse [animation-delay:0.4s]"></div>
      
      {/* Body with hover effect */}
      <div className="absolute w-12 h-8 bg-pixel-purple top-20 left-10 hover:bg-pixel-blue transition-colors duration-300"></div>
      
      {/* Arms with wave animation */}
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-6 animate-wave"></div>
      <div className="absolute w-4 h-6 bg-pixel-purple top-20 left-22 animate-wave [animation-delay:0.3s]"></div>
      
      {/* Hands with glow effect */}
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-6 animate-pulse"></div>
      <div className="absolute w-2 h-2 bg-pixel-blue top-26 left-24 animate-pulse [animation-delay:0.5s]"></div>
      
      {/* Code symbols floating around */}
      <div className="absolute -inset-8 animate-sparkle pointer-events-none">
        {['{', '}', '<', '>', '(', ')', ';', '=', '+', '*'].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-xs text-accent/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export const PixelComputer: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-green",
  style
}) => {
  return (
    <div className={cn("relative animate-float delay-150 pixel-shadow", className)} style={style}>
      {/* Monitor with glowing screen */}
      <div className="absolute w-20 h-16 bg-foreground top-4 left-6 rounded-sm overflow-hidden">
        <div className={cn(
          "absolute w-16 h-12 top-2 left-2 pixel-scanlines animate-glow",
          color
        )}></div>
        
        {/* Code on screen */}
        <div className="absolute top-4 left-4 right-4 bottom-4">
          <div className="animate-scroll space-y-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-1 bg-background/20"
                style={{ width: `${30 + Math.random() * 40}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Keyboard with interactive keys */}
      <div className="absolute w-24 h-4 bg-foreground top-20 left-4 hover:bg-foreground/90 transition-colors duration-300">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-muted/40 animate-pulse"
            style={{
              width: '2px',
              left: `${4 + i * 4}px`,
              top: '4px',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Coffee cup with steam */}
      <div className="absolute w-4 h-4 right-2 top-20">
        <div className="w-3 h-4 bg-pixel-purple/80 relative">
          <div className="absolute w-1 h-2 bg-pixel-purple right-[-4px] top-1" />
          <div className="absolute w-3 h-1 bg-pixel-cyan/30 top-0 animate-pulse" />
          {/* Steam particles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pixel-purple/30 animate-float"
              style={{
                left: `${i * 4}px`,
                top: `-${6 + i * 2}px`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PixelCloud: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-secondary",
  style
}) => {
  return (
    <div className={cn("relative animate-float delay-300 pixel-shadow", className)} style={style}>
      <div className={cn("absolute w-16 h-8 top-6 left-8", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-12", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-6", color)}></div>
      <div className={cn("absolute w-6 h-6 top-4 left-18", color)}></div>
      
      {/* Cloud details */}
      <div className={cn("absolute w-4 h-4 top-2 left-8", color)}></div>
      <div className={cn("absolute w-4 h-4 top-2 left-16", color)}></div>
      
      {/* Animated particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={cn("absolute w-1 h-1 animate-float", color)}
          style={{
            top: `${60 + Math.random() * 20}%`,
            left: `${20 + i * 30}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export const PixelStar: React.FC<PixelArtProps> = ({ 
  className,
  color = "bg-pixel-yellow",
  style
}) => {
  return (
    <div className={cn("relative animate-pulse-slow", className)} style={style}>
      <div className={cn("absolute w-1 h-1", color)}></div>
      <div className={cn("absolute w-3 h-1 left-1", color)}></div>
      <div className={cn("absolute w-1 h-3 top-1", color)}></div>
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 blur-sm opacity-50",
        color
      )}></div>
    </div>
  );
};