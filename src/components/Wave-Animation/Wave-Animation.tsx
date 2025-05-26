import React from 'react';
import { motion } from 'framer-motion';

interface WaveProps {
  colors?: string[];
  height?: number;
  width?: number;
  speed?: number;
  amplitude?: number;
  frequency?: number;
  className?: string;
  layers?: number;
  glow?: boolean;
}

const WaveAnimation: React.FC<WaveProps> = ({
  colors = ['#1ee9e9', '#38bdf8', '#60a5fa'], // Softer, more subtle colors
  height = 120,
  width = 1000,
  speed = 0.12,
  amplitude = 12, // Flatter wave
  frequency = 0.025, // Smoother, less frequent peaks
  className = '',
  layers = 2, // Fewer layers for a cleaner look
  glow = true,
}) => {
  // Use only the number of colors provided, or repeat them if fewer than layers
  const waveColors = Array(layers).fill(0).map((_, i) => colors[i % colors.length]);
  
  // Create array for multiple wave layers
  const waveLayers = Array.from({ length: layers }).map((_, index) => {
    // Adjust parameters for each layer to create variation
    const layerFrequency = frequency * (1 + index * 0.15);
    const layerAmplitude = amplitude * (1 - index * 0.12);
    const layerSpeed = speed * (1 + index * 0.12);
    
    // Layer specific color
    const color = waveColors[index];
    
    // Glow filter for neon effect
    const glowFilter = glow ? `drop-shadow(0 0 16px ${color})` : '';
    
    // Each wave has a different phase to create more organic movement
    const phaseOffset = index * (Math.PI / layers);
    
    // Generate wave path with phase offset
    const path = generateWavePath(width, height, layerAmplitude, layerFrequency, phaseOffset);
    
    return (
      <motion.path
        key={`wave-${index}`}
        d={path}
        fill={color}
        style={{ 
          filter: glowFilter,
          opacity: 0.7,
        }}
        animate={{
          d: [
            path,
            generateWavePath(width, height, layerAmplitude * 1.08, layerFrequency * 0.95, phaseOffset + 0.4),
            path
          ],
          x: [-width/20, 0, -width/20],
        }}
        transition={{
          d: {
            repeat: Infinity,
            duration: 10 / layerSpeed,
            ease: 'easeInOut',
          },
          x: {
            repeat: Infinity,
            duration: 16 / layerSpeed,
            ease: 'easeInOut',
          }
        }}
      />
    );
  });

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ 
          filter: glow ? 'blur(0.5px)' : 'none',
          background: 'transparent' 
        }}
      >
        {waveLayers}
      </svg>
    </div>
  );
};

// Helper function to generate wave path with phase offset
function generateWavePath(width: number, height: number, amplitude: number, frequency: number, phaseOffset = 0) {
  const points = [];
  
  // Start from bottom left
  points.push(`M 0 ${height}`);
  
  // Add wave points (larger step for smoother curve)
  for (let x = 0; x <= width; x += 24) {
    // Wave function: distance from bottom affected by sine wave with phase
    const y = height - amplitude * Math.sin((x * frequency) + phaseOffset);
    points.push(`L ${x} ${y}`);
  }
  
  // Complete the path to form a closed shape
  points.push(`L ${width} ${height}`);
  points.push('Z');
  
  return points.join(' ');
}

export default WaveAnimation;