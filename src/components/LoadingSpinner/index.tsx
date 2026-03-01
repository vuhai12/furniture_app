const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-2 border-gray-200 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
