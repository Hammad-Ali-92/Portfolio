import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface StarfieldProps {
  className?: string;
  starCount?: number;
}

const Starfield: React.FC<StarfieldProps> = ({ 
  className, 
  starCount = 150 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const timeRef = useRef<number>(0);

  const starColors = [
    '#ffffff',
    '#e8f4fd',
    '#cce7ff',
    '#b3d9ff',
    '#a6d1ff',
    '#99c9ff'
  ];

  const initializeStars = (width: number, height: number) => {
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    }));
  };

  const drawStar = (
    ctx: CanvasRenderingContext2D, 
    star: Star, 
    time: number
  ) => {
    const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
    const alpha = star.opacity * twinkle;
    
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = star.color;
    
    // Draw main star
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add subtle glow for larger stars
    if (star.size > 1.5) {
      ctx.globalAlpha = alpha * 0.3;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    timeRef.current += 0.016; // ~60fps

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw stars
    starsRef.current.forEach(star => {
      // Slow horizontal movement
      star.x += star.speed;
      
      // Wrap around screen
      if (star.x > canvas.width + 10) {
        star.x = -10;
        star.y = Math.random() * canvas.height;
      }

      drawStar(ctx, star, timeRef.current);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    initializeStars(rect.width, rect.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className
      )}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Starfield;