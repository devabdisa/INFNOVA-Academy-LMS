"use client";

import { useEffect } from "react";

export default function CoursesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      <div className="space-y-6">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
        <p className="mx-auto max-w-md text-slate-400">
          We encountered an error while loading the courses. Please try
          refreshing or contact support if the problem persists.
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
