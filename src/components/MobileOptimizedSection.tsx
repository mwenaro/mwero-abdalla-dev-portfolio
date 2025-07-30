"use client"
import { motion, Variants, Transition } from 'framer-motion';
import { usePerformanceMode, useReducedMotion } from '@/hooks/usePerformance';

interface MobileOptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  animate?: string;
  transition?: Transition;
}

export function MobileOptimizedSection({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate = "visible",
  transition
}: MobileOptimizedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  // Use div instead of motion.div for reduced motion or low performance
  if (shouldReduceMotion || isLowPerformance) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
