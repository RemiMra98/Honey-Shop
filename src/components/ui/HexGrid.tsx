'use client';

import { useEffect, useRef } from 'react';

interface HexGridProps {
  className?: string;
  opacity?: number;
  color?: string;
  animate?: boolean;
  size?: number;
}

export default function HexGrid({
  className = '',
  opacity = 0.07,
  color = '#D4A017',
  animate = false,
  size = 60,
}: HexGridProps) {
  const svgId = useRef(`hex-grid-${Math.random().toString(36).substr(2, 9)}`);

  const hexPath = (x: number, y: number, r: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      points.push(`${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`);
    }
    return `M${points.join('L')}Z`;
  };

  const r = size / 2;
  const w = r * 2;
  const h = Math.sqrt(3) * r;
  const cols = 8;
  const rows = 6;

  const hexagons = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * w * 0.75 + r;
      const y = row * h + (col % 2 === 1 ? h / 2 : 0) + h / 2;
      const delay = (row * cols + col) * 0.1;
      hexagons.push({ x, y, delay, id: `${row}-${col}` });
    }
  }

  const viewBoxWidth = cols * w * 0.75 + r;
  const viewBoxHeight = rows * h + h;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {animate && (
          <style>{`
            @keyframes hexPulse {
              0%, 100% { opacity: ${opacity * 0.5}; }
              50% { opacity: ${opacity}; }
            }
          `}</style>
        )}
      </defs>
      {hexagons.map(({ x, y, delay, id }) => (
        <path
          key={id}
          d={hexPath(x, y, r * 0.85)}
          fill="none"
          stroke={color}
          strokeWidth="1"
          style={{
            opacity: opacity,
            animation: animate
              ? `hexPulse ${3 + delay}s ease-in-out ${delay}s infinite`
              : undefined,
          }}
        />
      ))}
    </svg>
  );
}
