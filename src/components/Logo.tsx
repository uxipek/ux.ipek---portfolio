import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* U and I */}
      <text 
        x="65" 
        y="110" 
        fontFamily="'Playfair Display', 'Times New Roman', serif" 
        fontSize="90" 
        textAnchor="middle" 
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        U
      </text>
      <text 
        x="135" 
        y="110" 
        fontFamily="'Playfair Display', 'Times New Roman', serif" 
        fontSize="90" 
        textAnchor="middle" 
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        I
      </text>
      
      {/* Butterfly Wings */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.7">
        {/* Top Left */}
        <path d="M 100 75 C 30 -20, -20 30, 40 70 C 60 85, 80 75, 100 75" />
        {/* Bottom Left */}
        <path d="M 100 75 C 30 170, -20 120, 40 80 C 60 65, 80 75, 100 75" />
        {/* Top Right */}
        <path d="M 100 75 C 170 -20, 220 30, 160 70 C 140 85, 120 75, 100 75" />
        {/* Bottom Right */}
        <path d="M 100 75 C 170 170, 220 120, 160 80 C 140 65, 120 75, 100 75" />
      </g>
      
      {/* Center Dot */}
      <circle cx="100" cy="75" r="8" fill="#d49a9e" />
    </svg>
  );
}
