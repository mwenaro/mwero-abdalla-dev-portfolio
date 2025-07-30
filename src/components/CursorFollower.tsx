"use client"
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion, usePerformanceMode, useMobileDetection } from '@/hooks/usePerformance';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();
  const { isMobile } = useMobileDetection();
  
  // Use refs for performance optimization
  const rafId = useRef<number | null>(null);
  const lastUpdate = useRef<number>(0);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    
    // Throttle updates for performance on low-end devices
    const now = Date.now();
    const throttleMs = isLowPerformance ? 32 : 8; // ~30fps on low-end, ~120fps on high-end
    
    if (now - lastUpdate.current < throttleMs) {
      return;
    }
    
    lastUpdate.current = now;
    
    // Use requestAnimationFrame for smooth updates
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           !!target.closest('a') || 
                           !!target.closest('button') ||
                           target.style.cursor === 'pointer' ||
                           window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isInteractive);
    });
  }, [isMobile, isLowPerformance]);

  useEffect(() => {
    if (!isMobile && !shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleMouseMove, isMobile, shouldReduceMotion]);

  // Don't render cursor on mobile devices or when motion is reduced
  if (isMobile || shouldReduceMotion) return null;

  // Optimized animation configurations based on performance
  const getSpringConfig = (base: object) => {
    if (isLowPerformance) {
      return {
        type: "tween",
        duration: 0.15,
        ease: "easeOut"
      };
    }
    return base;
  };

  // Simplified cursor for low performance devices
  if (isLowPerformance) {
    return (
      <motion.div
        data-cursor-follower
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isPointer ? 1.3 : 1,
        }}
        transition={getSpringConfig({
          type: "spring",
          stiffness: 300,
          damping: 20,
        })}
      />
    );
  }

  return (
    <div data-cursor-follower>
      {/* Main cursor with GPU acceleration hints */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference force-gpu"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={getSpringConfig({
          type: "spring",
          stiffness: 500,
          damping: 28,
        })}
      />
      
      {/* Outer ring with GPU acceleration */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference force-gpu"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isPointer ? 2 : 1,
          opacity: isPointer ? 0.8 : 0.4,
        }}
        transition={getSpringConfig({
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.02,
        })}
      />
      
      {/* Trailing particles - only on high performance devices */}
      {!isLowPerformance && (
        <>
          <motion.div
            data-particle-effect
            className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-40 opacity-60 force-gpu"
            style={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={getSpringConfig({
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.05,
            })}
          />
          
          <motion.div
            data-particle-effect
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-500 rounded-full pointer-events-none z-40 opacity-40 force-gpu"
            style={{
              x: mousePosition.x - 3,
              y: mousePosition.y - 3,
            }}
            transition={getSpringConfig({
              type: "spring",
              stiffness: 80,
              damping: 25,
              delay: 0.08,
            })}
          />
        </>
      )}
    </div>
  );
}
