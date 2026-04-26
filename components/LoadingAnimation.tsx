"use client";

import { useEffect, useState } from "react";
import { logger } from "@/lib/logger";

interface LoadingAnimationProps {
  isVisible: boolean;
  duration?: number;
}

export default function LoadingAnimation({
  isVisible,
  duration = 2000,
}: LoadingAnimationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      // Safety timeout: always hide after max duration (5 seconds) even if parent doesn't update
      const safetyTimer = setTimeout(() => {
        logger.warn("LoadingAnimation: Safety timeout triggered");
        setShow(false);
      }, Math.max(duration, 5000));
      
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(safetyTimer);
      };
    } else {
      // If isVisible becomes false, immediately hide
      setShow(false);
    }
  }, [isVisible, duration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/95 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
        <p className="mt-6 text-lg text-gray-600">Personalizing your experience...</p>
      </div>
    </div>
  );
}

