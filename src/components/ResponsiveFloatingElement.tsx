"use client"
import { motion } from 'framer-motion';
import { usePerformanceMode, useReducedMotion } from '@/hooks/usePerformance';

interface ResponsiveFloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ResponsiveFloatingElement({ 
  children, 
  delay = 0, 
  duration = 4,
  className = ""
}: ResponsiveFloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  // Disable complex animations on low-performance devices
  if (shouldReduceMotion || isLowPerformance) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
