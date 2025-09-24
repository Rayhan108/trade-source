const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-t-[#86EFAC] border-gray-300 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
