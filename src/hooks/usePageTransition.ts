"use client"
import { useRouter } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';
import { useCallback } from 'react';

export function usePageTransition() {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  const navigateWithLoading = useCallback((path: string) => {
    startLoading();
    
    // Add a minimum loading time for better UX
    setTimeout(() => {
      router.push(path);
      // Stop loading after navigation
      setTimeout(() => {
        stopLoading();
      }, 500); // Small delay to ensure page has started loading
    }, 800); // Minimum loading time
  }, [router, startLoading, stopLoading]);

  return { navigateWithLoading };
}
