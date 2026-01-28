'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function GlobalError({
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
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
                        <p className="text-gray-600 mb-6">
                            We&apos;re sorry for the inconvenience. Our team has been notified.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={reset}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Try Again
                            </button>
                            <Link
                                href="/"
                                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Go to Homepage
                            </Link>
                            <a
                                href="tel:870-530-4289"
                                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Call for Help: (870) 530-4289
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}