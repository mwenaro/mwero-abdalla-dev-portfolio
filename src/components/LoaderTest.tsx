"use client"
import { motion } from 'framer-motion';
import { usePageTransition } from '@/hooks/usePageTransition';
import { useLoading } from '@/contexts/LoadingContext';

export default function LoaderTest() {
  const { navigateWithLoading } = usePageTransition();
  const { startLoading } = useLoading();

  const testLoader = () => {
    startLoading();
    setTimeout(() => {
      // Simulate loading completion
      window.location.reload();
    }, 3000);
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={testLoader}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Test Loader
      </motion.button>
      
      <motion.button
        onClick={() => navigateWithLoading("/about")}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go to About
      </motion.button>
    </motion.div>
  );
}
