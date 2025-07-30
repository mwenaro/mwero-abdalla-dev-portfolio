"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePerformanceMode, useReducedMotion } from '@/hooks/usePerformance';

interface PageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function PageLoader({ isLoading, onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => onComplete?.(), 300);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isLoading, onComplete]);

  // Simplified loader for reduced motion or low performance
  if (shouldReduceMotion || isLowPerformance) {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#121417]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Loading...</h2>
              <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{Math.round(progress)}%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#121417]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '20%', left: '10%' }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ top: '60%', right: '15%' }}
            />
          </div>

          {/* Main Loader Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning Logo/Icon */}
            <motion.div
              className="relative mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 border-4 border-transparent rounded-full">
                <div className="w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
              </div>
              
              {/* Inner rotating element */}
              <motion.div
                className="absolute inset-4 border-2 border-purple-500 rounded-full border-b-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                className="text-2xl font-bold text-white mb-2"
                animate={{
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading
              </motion.h2>
              <motion.div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Progress Text */}
            <motion.p
              className="text-gray-400 text-sm mt-2"
              animate={{
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
