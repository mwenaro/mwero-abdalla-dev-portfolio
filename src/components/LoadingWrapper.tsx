"use client"
import { useLoading } from '@/contexts/LoadingContext';
import PageLoader from './PageLoader';

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <PageLoader isLoading={isLoading} />
      {children}
    </>
  );
}
