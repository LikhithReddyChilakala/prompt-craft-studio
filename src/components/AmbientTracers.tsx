import { useEffect, useRef, useCallback } from 'react';

interface Tracer {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  trail: { x: number; y: number; alpha: number }[];
  speed: number;
}

const COLORS = ['#39FF14', '#FF0000']; // Neon Lime Green, Vibrant Red
const MAX_TRACERS = 2;
const TRAIL_LENGTH = 80;
const BASE_ALPHA = 0.4;
const SPAWN_DELAY_MIN = 2000;
const SPAWN_DELAY_MAX = 5000;

const AmbientTracers = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tracersRef = useRef<Tracer[]>([]);
  const animationIdRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const nextSpawnDelayRef = useRef<number>(0);

  const getRandomSpawnDelay = () => {
    return Math.random() * (SPAWN_DELAY_MAX - SPAWN_DELAY_MIN) + SPAWN_DELAY_MIN;
  };

  const createTracer = useCallback((canvasWidth: number, canvasHeight: number): Tracer => {
    const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    const speed = Math.random() * 1 + 0.5; // Slow speed: 0.5 - 1.5
    
    let x: number, y: number, vx: number, vy: number;
    
    switch (edge) {
      case 0: // Top edge - move down-left or down-right
        x = Math.random() * canvasWidth;
        y = -10;
        vx = (Math.random() - 0.5) * speed;
        vy = speed;
        break;
      case 1: // Right edge - move left
        x = canvasWidth + 10;
        y = Math.random() * canvasHeight;
        vx = -speed;
        vy = (Math.random() - 0.5) * speed * 0.5;
        break;
      case 2: // Bottom edge - move up
        x = Math.random() * canvasWidth;
        y = canvasHeight + 10;
        vx = (Math.random() - 0.5) * speed;
        vy = -speed;
        break;
      default: // Left edge - move right
        x = -10;
        y = Math.random() * canvasHeight;
        vx = speed;
        vy = (Math.random() - 0.5) * speed * 0.5;
        break;
    }

    return {
      x,
      y,
      vx,
      vy,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: BASE_ALPHA,
      trail: [],
      speed,
    };
  }, []);

  const isOffScreen = (tracer: Tracer, width: number, height: number): boolean => {
    const margin = 50;
    return (
      tracer.x < -margin ||
      tracer.x > width + margin ||
      tracer.y < -margin ||
      tracer.y > height + margin
    );
  };

  const animate = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Spawn new tracers if needed
    if (tracersRef.current.length < MAX_TRACERS) {
      if (timestamp - lastSpawnRef.current > nextSpawnDelayRef.current) {
        tracersRef.current.push(createTracer(width, height));
        lastSpawnRef.current = timestamp;
        nextSpawnDelayRef.current = getRandomSpawnDelay();
      }
    }

    // Update and draw tracers
    tracersRef.current = tracersRef.current.filter((tracer) => {
      // Update position
      tracer.x += tracer.vx;
      tracer.y += tracer.vy;

      // Add current position to trail
      tracer.trail.unshift({ x: tracer.x, y: tracer.y, alpha: tracer.alpha });
      
      // Limit trail length
      if (tracer.trail.length > TRAIL_LENGTH) {
        tracer.trail.pop();
      }

      // Draw trail (fading tail)
      for (let i = tracer.trail.length - 1; i >= 0; i--) {
        const point = tracer.trail[i];
        const fadeRatio = 1 - i / TRAIL_LENGTH;
        const pointAlpha = point.alpha * fadeRatio * 0.6;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, Math.max(1, 3 * fadeRatio), 0, Math.PI * 2);
        ctx.fillStyle = tracer.color;
        ctx.globalAlpha = pointAlpha;
        ctx.fill();
      }

      // Draw head (bright glowing dot)
      ctx.beginPath();
      ctx.arc(tracer.x, tracer.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = tracer.color;
      ctx.globalAlpha = tracer.alpha;
      ctx.shadowBlur = 20;
      ctx.shadowColor = tracer.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Add subtle glow around head
      const gradient = ctx.createRadialGradient(
        tracer.x, tracer.y, 0,
        tracer.x, tracer.y, 15
      );
      gradient.addColorStop(0, tracer.color);
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(tracer.x, tracer.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = tracer.alpha * 0.5;
      ctx.fill();

      // Reset alpha
      ctx.globalAlpha = 1;

      // Remove if off-screen
      return !isOffScreen(tracer, width, height);
    });

    animationIdRef.current = requestAnimationFrame(animate);
  }, [createTracer]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Initialize spawn timing
    lastSpawnRef.current = performance.now();
    nextSpawnDelayRef.current = 500; // Spawn first tracer quickly
    
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: -1,
        background: 'transparent'
      }}
    />
  );
};

export default AmbientTracers;
