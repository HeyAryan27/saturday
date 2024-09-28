import { dashboardData } from '../utils/constant'; // Import the data

const Attendance = () => {
  const data = dashboardData;

  // Helper function to calculate percentage for the circular progress bar
  const getStrokeDashOffset = (percentage) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <div className="col-span-1 w-full lg:w-2/6 bg-white p-6 rounded-lg shadow-md border-[1px]">
      <div className="flex justify-between items-center md:mb-4 -mb-2">
        <h2 className="font-semibold text-lg text-blue-900">Today</h2>
        <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded">Absent</span>
      </div>

      <hr className="md:mb-4" />

      {/* Flex container for details and SVG */}
      <div className="flex flex-col-reverse md:flex-row items-center md:mb-4">
        {/* Left side: Attendance Details */}
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center text-gray-600 mb-2">
            <svg
              className="w-5 h-5 text-blue-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 8a6 6 0 1112 0v3h1a2 2 0 110 4h-4a1 1 0 110-2h4v-2H3v3a1 1 0 11-2 0v-4.021l.001-3a.93.93 0 01.01-.184L2 8z" />
            </svg>
            <span className="text-sm md:mt-0 mt-3">You have not marked yourself as present today!</span>
          </div>
          <p className="text-sm text-gray-600 md:mt-10 border-l-2 w-36 px-1 border-red-600 bg-gray-100 py-1">
            Time left: <span className="text-red-600">{data.attendance.today.timeLeft}</span>
          </p>
        </div>

        {/* Right side: SVG graphic */}
        <div className="relative flex-shrink-0">
          <svg className="w-20 h-20 md:w-24 md:h-24 mt-2" viewBox="0 0 80 80">
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            <circle
              className="text-yellow-500"
              strokeWidth="8"
              strokeDasharray="226"
              strokeDashoffset={getStrokeDashOffset(67)} // Adjust value as needed
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
            <span className="text-xl font-semibold text-gray-800">67%</span>
            <span className="text-xs text-gray-500">in office</span>
            <span className="text-xs text-yellow-500">POOR</span>
          </div>
        </div>
      </div>

      {/* Button below the details and SVG */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Mark Present</button>
    </div>
  );
};

export default Attendance;
