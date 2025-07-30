"use client"
import { useReducedMotion, usePerformanceMode, useMobileDetection } from '@/hooks/usePerformance';

// Type definition for navigator with connection
interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
  };
}

export default function PerformanceTestComponent() {
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();
  const { isMobile, isTouch } = useMobileDetection();

  const getConnectionType = () => {
    if (typeof navigator === 'undefined') return 'Unknown';
    const nav = navigator as NavigatorWithConnection;
    return nav.connection?.effectiveType || 'Unknown';
  };

  return (
    <div className="fixed top-4 left-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm font-mono">
      <h3 className="font-bold mb-2">Performance Status:</h3>
      <ul className="space-y-1">
        <li>Reduced Motion: {shouldReduceMotion ? '✅ ON' : '❌ OFF'}</li>
        <li>Low Performance: {isLowPerformance ? '⚠️ YES' : '✅ NO'}</li>
        <li>Mobile Device: {isMobile ? '📱 YES' : '🖥️ NO'}</li>
        <li>Touch Support: {isTouch ? '👆 YES' : '🖱️ NO'}</li>
      </ul>
      <div className="mt-2 text-xs text-gray-300">
        <p>Screen: {typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Unknown'}</p>
        <p>Pixel Ratio: {typeof window !== 'undefined' ? window.devicePixelRatio : 'Unknown'}</p>
        <p>Connection: {getConnectionType()}</p>
      </div>
    </div>
  );
}
