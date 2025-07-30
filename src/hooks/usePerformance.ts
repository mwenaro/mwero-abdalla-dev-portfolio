"use client";
import { useEffect, useState } from "react";

// Type definitions for browser APIs
interface NetworkInformation {
  effectiveType?: string;
  saveData?: boolean;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
  connection?: NetworkInformation;
  getBattery?: () => Promise<BatteryManager>;
}

interface BatteryManager {
  level: number;
  charging: boolean;
}

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return shouldReduceMotion;
}

export function usePerformanceMode() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device capabilities
    const checkPerformance = () => {
      // Check for low-end devices
      const nav = navigator as NavigatorWithMemory;
      const connection = nav.connection;
      const isSlowConnection =
        connection &&
        (connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g" ||
          connection.saveData);

      // Check for low memory devices
      const isLowMemory = nav.deviceMemory && nav.deviceMemory < 4;

      // Check for older mobile devices
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isOldDevice = isMobile && window.innerWidth < 768;

      // Check for high pixel density on small screens (performance intensive)
      const isHighDensityMobile = isMobile && window.devicePixelRatio > 2;

      // Check for battery level if available (some browsers)
      const isLowBattery =
        nav.getBattery &&
        nav
          .getBattery()
          .then((battery: BatteryManager) => battery.level < 0.2 && !battery.charging);

      setIsLowPerformance(
        isSlowConnection ||
          isLowMemory ||
          isOldDevice ||
          isHighDensityMobile ||
          !!isLowBattery
      );
    };

    checkPerformance();

    // Listen for connection changes
    const nav = navigator as NavigatorWithMemory;
    if (nav.connection) {
      nav.connection.addEventListener("change", checkPerformance);
    }

    // Listen for resize events (orientation changes)
    window.addEventListener("resize", checkPerformance);

    return () => {
      if (nav.connection) {
        nav.connection.removeEventListener("change", checkPerformance);
      }
      window.removeEventListener("resize", checkPerformance);
    };
  }, []);

  return isLowPerformance;
}

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const touchSupport =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      const mobileScreen = window.innerWidth < 768;

      setIsTouch(touchSupport);
      setIsMobile(touchSupport || mobileScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile, isTouch };
}
