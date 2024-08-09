// src/app/error/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ErrorPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">500 - Server-side error occurred</h1>
      <p className="text-lg mt-4">Something went wrong on our end.</p>
      <button
        className="mt-6 px-4 py-2 bg-primary-blue text-white rounded"
        onClick={() => router.push('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
