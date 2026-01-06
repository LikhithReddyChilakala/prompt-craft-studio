import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  shape: 'star' | 'diamond';
}

const COLORS = [
  '#39FF14', // Neon Green
  '#FF10F0', // Hot Pink
  '#FFFF00', // Electric Yellow
  '#FF5F1F', // Bright Orange
  '#FF0000', // Vibrant Red
];

const FRICTION = 0.95;
const GRAVITY = 0.1;
const FADE_RATE = 0.02;
const SPAWN_RATE = 3; // particles per mousemove

const CursorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const drawStar = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    const spikes = 4;
    const outerRadius = size;
    const innerRadius = size / 2;

    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes - Math.PI / 2;
      const px = x + Math.cos(angle) * radius;
      const py = y + Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  }, []);

  const drawDiamond = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size, y);
    ctx.closePath();
    ctx.fill();
  }, []);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 1;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      size: Math.random() * 2 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.5 ? 'star' : 'diamond',
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    particlesRef.current = particlesRef.current.filter((p) => {
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.vy += GRAVITY;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= FADE_RATE;

      if (p.alpha <= 0) return false;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;

      if (p.shape === 'star') {
        drawStar(ctx, p.x, p.y, p.size);
      } else {
        drawDiamond(ctx, p.x, p.y, p.size);
      }

      ctx.restore();
      return true;
    });

    animationIdRef.current = requestAnimationFrame(animate);
  }, [drawStar, drawDiamond]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < SPAWN_RATE; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [animate, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorParticles;
