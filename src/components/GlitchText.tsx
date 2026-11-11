import React, { useState } from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  className?: string;
  glitchAlways?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
  glitchAlways = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`font-display tracking-tighter uppercase transition-colors inline-block select-none ${
        glitchAlways || isHovered ? 'animate-glitch' : ''
      } ${className}`}
      data-cursor="pointer"
    >
      {text}
    </Component>
  );
};
