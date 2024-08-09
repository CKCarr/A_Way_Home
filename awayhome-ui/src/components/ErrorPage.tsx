// src/components/error.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/router';

interface ErrorProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ statusCode, message }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-lg mt-4">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      {message && <p className="text-lg mt-4">{message}</p>}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-primary-blue text-white rounded mr-4"
          onClick={() => router.reload()}
        >
          Try Again
        </button>
        <button
          className="px-4 py-2 bg-primary-blue text-white rounded"
          onClick={() => router.push('/')}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
