export default function AccountBalance() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto border rounded-md p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Account Balance
      </h2>
      <div className="border-b border-gray-200 mb-8"></div>

      <div className="mb-2">
        <p className="font-semibold text-lg">
          Available balance: <span className=" text-gray-700 ">$0</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          *Account balances automatically update when a task is completed.
        </p>
      </div>

      <input
        type="text"
        placeholder="Enter a redemption code here"
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-4 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium">
        Apply code
      </button>
    </div>
  );
}
