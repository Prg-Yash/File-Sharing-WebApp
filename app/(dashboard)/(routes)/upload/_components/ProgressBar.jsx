function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-3">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 h-5 leading-none rounded-full"
        style={{ width: `${progress}%` }}
      >
        {`${Number(progress).toFixed(0)}% `}
      </div>
    </div>
  );
}

export default ProgressBar;
