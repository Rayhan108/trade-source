import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        {/* Cancel Icon */}
        <div className="text-center mb-6">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>

        {/* Cancel Message */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your payment was not completed. No charges have been made to your
          account.
        </p>

        {/* Next Steps */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            If this was a mistake, you can try again.
          </p>

          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>

            <Link
              href="/confirm"
              className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
