import React from "react";
import { XCircle } from "lucide-react";
import Link from "next/link";


const CancelPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 via-white to-red-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <XCircle className="w-20 h-20 text-red-500 animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment process was cancelled. Don’t worry—you can try again at
          any time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/homePage"
            className="px-6 py-3 rounded-xl text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/allServices"
            className="px-6 py-3 rounded-xl text-white bg-red-500 hover:bg-red-600 transition"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
