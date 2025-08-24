'use client';
import Image from 'next/image';
import userImg from '../../../../assests/user.png';
import {
  Calendar,
  MapPin,
  Building,
  FileText,
  MoreHorizontal,
  Upload,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { jsPDF } from 'jspdf'; // Import jsPDF
import Link from 'next/link';

export default function ProjectDetails() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileUpload = event => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    setShowDropdown(false); // Hide the dropdown after file selection (optional)
  };

  const handleFileRemove = () => {
    setFile(null);
    setShowDropdown(false); // Hide the dropdown after file removal (optional)
  };

  // Generate PDF for detailed quote
  const handleDownloadQuote = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(12);

    // Adding content for the PDF
    doc.text('Project Details', 10, 10);
    doc.text('====================================', 10, 15);
    doc.text('Cleaning Details:', 10, 20);
    doc.text('Date: Apr 28, 12:00 PM', 10, 25);
    doc.text('Address: 123 Main Street, New York, NY 10001', 10, 30);
    doc.text('Type: Apartment', 10, 35);
    doc.text('', 10, 40); // Empty line
    doc.text('Price Details:', 10, 45);
    doc.text('Price Client Offered: $65/hr', 10, 50);
    doc.text('Trust & Support Fee: $5/hr', 10, 55);
    doc.text('Total Rate: $60/hr', 10, 60);

    // Save the PDF
    doc.save('detailed-quote.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-3">
        Project Details
      </h1>

      {/* Profile Section */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-start space-x-4">
          <Image
            src={userImg}
            alt="Ellie Smith"
            className="w-16 h-16 rounded-full object-cover"
            width={500}
            height={500}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Ellie Smith Has Booked You
            </h2>
            <p className="text-gray-600 max-w-md">
              Giovanni C. is currently offline and will reach out once available
              in the app. You will be notified as soon as they respond.
            </p>
          </div>
        </div>
        <Link href={'/sendQuote'}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Message
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Cleaning Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleaning</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-700">
              <Calendar className="w-5 h-5" />
              <span>Apr 28, 12:00 PM</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span>123 Main Street, New York, NY 10001</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Building className="w-5 h-5" />
              <span>Apartment</span>
            </div>
          </div>
          <div className="border-b border-black mt-3"></div>
        </div>

        {/* Price Details */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Price Details
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownloadQuote}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Detailed quote</span>
              </button>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-gray-400 hover:text-gray-600"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Price Client offered</span>
              <span className="font-medium">$65/hr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Trust & Support fee</span>
              <span className="font-medium">$5/hr</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span className="text-gray-900">Total Rate</span>
              <span>$60/hr</span>
            </div>
            <div className="border-b border-black"></div>
          </div>

          {/* Dropdown for Upload and Remove Buttons */}
          {showDropdown && (
            <div className="flex flex-col space-y-2 mb-4">
              {/* Upload Document */}
              <label className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 py-2 px-4 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors">
                <Upload className="w-4 h-4" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <span>Upload doc</span>
              </label>

              {/* Remove Document */}
              {file && (
                <button
                  onClick={handleFileRemove}
                  className="flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 py-2 px-4 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Remove doc</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
          Cancel
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
          Update Offer
        </button>
      </div>
    </div>
  );
}
