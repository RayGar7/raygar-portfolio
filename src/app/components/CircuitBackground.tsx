'use client';

import { CSSProperties } from 'react';

interface CircuitBackgroundProps {
  opacity?: number;
  className?: string;
}

export default function CircuitBackground({ 
  opacity = 0.85,
  className = '' 
}: CircuitBackgroundProps) {
  const containerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: opacity,
    pointerEvents: 'none',
    zIndex: -1,
  };

  return (
    <div style={containerStyle} className={className}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Simple repeating circuit pattern */}
          <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal circuit traces */}
            <line x1="0" y1="50" x2="80" y2="50" stroke="#0096D6" strokeWidth="2" />
            <line x1="120" y1="50" x2="200" y2="50" stroke="#0096D6" strokeWidth="2" />
            
            {/* Vertical circuit traces */}
            <line x1="50" y1="0" x2="50" y2="80" stroke="#0096D6" strokeWidth="2" />
            <line x1="50" y1="120" x2="50" y2="200" stroke="#0096D6" strokeWidth="2" />
            
            {/* Connection nodes */}
            <circle cx="50" cy="50" r="4" fill="#0096D6" />
            <circle cx="150" cy="150" r="4" fill="#0096D6" />
            
            {/* Microchip representation */}
            <rect x="140" y="140" width="20" height="20" fill="none" stroke="#0096D6" strokeWidth="2" />
          </pattern>
        </defs>

        {/* Background pattern */}
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        
        {/* Animated white data particles moving in straight lines */}
        {/* Data particles moving from the left to the right */}
        <circle cx="0" cy="250" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="8s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="0" cy="450" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="10s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="0" cy="650" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="10s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="0" cy="850" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="10s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="0" cy="1050" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="10s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="0" cy="1250" r="8" fill="#0096D6" >
          <animate attributeName="cx" from="0" to="2000" dur="10s" repeatCount="indefinite" />
        </circle>
        

        {/* Data particles moving from the top to the bottom */}
        <circle cx="50" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="450" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="650" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="850" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1050" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1250" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1450" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1650" cy="0" r="8" fill="#0096D6" >
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1850" cy="0" r="8" fill="#0096D6">
          <animate attributeName="cy" from="0" to="1200" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
