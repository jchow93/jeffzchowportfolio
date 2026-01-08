'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-black mb-4">⚠️</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Application Error
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A critical error occurred. Please refresh the page or contact support if the problem persists.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#8BA888] text-white font-semibold rounded-lg hover:bg-[#6B8E6B] transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

