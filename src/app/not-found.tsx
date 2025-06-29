'use client';

import Button from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div
        className="max-w-md w-full text-center"
      >
        <div
          className="text-7xl mb-6 text-primary-light dark:text-primary-dark"
        >
          404
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button text="Go back home" href="/" />      </div>
    </div>
  );
}
