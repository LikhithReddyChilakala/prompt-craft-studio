import { useEffect, useRef } from 'react';

const SpectralWaveform = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = 400 * dpr;
      canvas.height = 400 * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    let time = 0;

    const draw = () => {
      const width = 400;
      const height = 400;
      
      // Clear with transparency
      ctx.clearRect(0, 0, width, height);

      // Create multiple wave layers for depth
      const layers = [
        { amplitude: 60, frequency: 0.015, speed: 0.02, opacity: 0.3, blur: 20 },
        { amplitude: 50, frequency: 0.018, speed: 0.025, opacity: 0.5, blur: 12 },
        { amplitude: 40, frequency: 0.02, speed: 0.03, opacity: 1, blur: 0 },
      ];

      layers.forEach((layer, layerIndex) => {
        ctx.save();
        
        // Apply glow effect
        if (layer.blur > 0) {
          ctx.filter = `blur(${layer.blur}px)`;
        }
        
        ctx.globalAlpha = layer.opacity;
        ctx.beginPath();

        const centerY = height / 2;
        const points: { x: number; y: number }[] = [];

        // Generate wave points with W-like shape
        for (let x = 0; x <= width; x += 2) {
          const normalizedX = x / width;
          
          // Create W shape using multiple sine waves
          const wave1 = Math.sin((x * layer.frequency) + time * layer.speed) * layer.amplitude;
          const wave2 = Math.sin((x * layer.frequency * 1.5) + time * layer.speed * 0.8) * (layer.amplitude * 0.5);
          const wave3 = Math.sin((x * layer.frequency * 0.5) + time * layer.speed * 1.2) * (layer.amplitude * 0.3);
          
          // Amplitude modulation for W shape
          const envelope = Math.sin(normalizedX * Math.PI) * 1.2;
          const wShape = Math.sin(normalizedX * Math.PI * 2.5) * 0.4 + 0.6;
          
          const y = centerY + (wave1 + wave2 + wave3) * envelope * wShape;
          points.push({ x, y });
        }

        // Draw the wave path
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        // Create spectrum gradient with time-based color shift
        const colorShift = (time * 0.5) % (Math.PI * 2);
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        
        // Spectrum colors with shifting
        const colors = [
          { pos: 0, h: 260 + Math.sin(colorShift) * 20 },      // Deep purple/blue
          { pos: 0.15, h: 240 + Math.sin(colorShift + 0.5) * 15 }, // Blue
          { pos: 0.3, h: 180 + Math.sin(colorShift + 1) * 20 },    // Cyan
          { pos: 0.45, h: 120 + Math.sin(colorShift + 1.5) * 15 }, // Neon green
          { pos: 0.55, h: 80 + Math.sin(colorShift + 2) * 15 },    // Yellow-green
          { pos: 0.7, h: 50 + Math.sin(colorShift + 2.5) * 15 },   // Yellow/Orange
          { pos: 0.85, h: 20 + Math.sin(colorShift + 3) * 10 },    // Orange
          { pos: 1, h: 0 + Math.sin(colorShift + 3.5) * 15 },      // Red
        ];

        colors.forEach(({ pos, h }) => {
          const saturation = 100;
          const lightness = layerIndex === 2 ? 60 : 50;
          gradient.addColorStop(pos, `hsl(${h}, ${saturation}%, ${lightness}%)`);
        });

        ctx.strokeStyle = gradient;
        ctx.lineWidth = layerIndex === 2 ? 4 : 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        ctx.restore();
      });

      // Add bright center glow particles
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const t = (i / particleCount + time * 0.01) % 1;
        const x = t * width;
        const normalizedX = x / width;
        
        const wave1 = Math.sin((x * 0.02) + time * 0.03) * 40;
        const wave2 = Math.sin((x * 0.03) + time * 0.025) * 20;
        const envelope = Math.sin(normalizedX * Math.PI) * 1.2;
        const wShape = Math.sin(normalizedX * Math.PI * 2.5) * 0.4 + 0.6;
        
        const y = height / 2 + (wave1 + wave2) * envelope * wShape;
        
        // Particle glow
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        particleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        particleGradient.addColorStop(0.5, 'rgba(57, 255, 20, 0.4)');
        particleGradient.addColorStop(1, 'rgba(57, 255, 20, 0)');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* Outer glow layers */}
      <div 
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(57, 255, 20, 0.3) 0%, rgba(138, 43, 226, 0.2) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(100, 100, 255, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(255, 100, 50, 0.4) 0%, transparent 50%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Canvas with glow filter */}
      <canvas
        ref={canvasRef}
        className="relative z-10"
        style={{
          width: '400px',
          height: '400px',
          filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.6)) drop-shadow(0 0 40px rgba(138, 43, 226, 0.4)) drop-shadow(0 0 60px rgba(255, 100, 50, 0.3))',
        }}
      />
    </div>
  );
};

export default SpectralWaveform;
