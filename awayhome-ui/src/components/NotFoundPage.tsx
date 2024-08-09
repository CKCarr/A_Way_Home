'use client';

import React from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <button
        className="mt-6 px-4 py-2 bg-primary-blue text-white rounded"
        onClick={() => router.push('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
