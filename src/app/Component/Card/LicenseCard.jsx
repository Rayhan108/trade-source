
import { MdPrivacyTip } from "react-icons/md";
export default function LicenseCard({ license }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
   <MdPrivacyTip size={24} className="text-[#1D69E1]" />
            <span className="text-lg font-semibold text-gray-900">{license.title}</span>
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium">      {license.status}</div>
        </div>

        {/* License Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">License Number</span>
            <span className="text-gray-900 font-semibold">{license.number}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Expiration Date</span>
            <span className="text-gray-900 font-semibold">{license.date}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Issued Authority</span>
            <span className="text-gray-900 font-semibold">{license.state}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
