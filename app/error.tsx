'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-black mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Something went wrong
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We encountered an unexpected error. This shouldn't happen, but if it persists, please try refreshing the page.
        </p>
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white border-2 border-[#8BA888] text-[#8BA888] font-semibold rounded-lg hover:bg-[#8BA888]/10 transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

