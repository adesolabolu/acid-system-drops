import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Target coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Interpolated coordinates (lerp)
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor if fine pointer (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check hovered elements for interactive tag
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, select, textarea, [data-cursor="pointer"], .btn-hard, .bento-card-interactive');
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    // Animation Loop with 0.2 Lerp
    let animationFrameId: number;
    const lerpFactor = 0.2;

    const render = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 16}px, ${currentPos.current.y - 16}px, 0) scale(${
          isHovered ? 2.5 : 1
        })`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isHovered]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  );
};
