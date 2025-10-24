import { redirect } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        {/* Success Icon */}
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your purchase. Your order has been confirmed. 
        </p>

        {/* Next Steps */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            A confirmation email has been sent to your email address.
          </p>

          <div className="space-y-3">
            <Link
              href="/"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
