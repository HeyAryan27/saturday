import { dashboardData } from '../utils/constant'; // Import the data

const AttendanceSummary = () => {
    const data = dashboardData; 
    return (
        <div className="col-span-1 w-full lg:w-2/6 bg-white p-6 rounded-lg shadow-md border-[1px]">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-lg text-blue-900">My Attendance</h2>
          <span className="px-2 py-1 font-semibold text-blue-600 text-sm rounded cursor-pointer">
            View Status
          </span>
        </div>

  <hr className="mb-4" />

  {/* Attendance List with colored dots */}
  <div className="flex flex-col md:flex-row items-center md:mb-4">
    <ul className="mb-4 text-sm space-y-2 -ml-5">
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
        {data.attendance.details.onTime} On time
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>
        {data.attendance.details.workFromHome} Work from home
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
        {data.attendance.details.lateAttendance} Late attendance
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-500 mr-2"></span>
        {data.attendance.details.absent} Absent
      </li>
    </ul>

    {/* Circle chart */}
    <div className="relative">
      <svg className="w-36 h-36 mx-auto" viewBox="0 0 80 80">
        <circle
          className="text-gray-300"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        
        {/* Green - On Time */}
        <circle
          className="text-green-500"
          strokeWidth="6"
          strokeDasharray={`${(data.attendance.details.onTime / 365) * 226} 226`}
          strokeDashoffset="0"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        
        {/* Yellow - Work From Home */}
        <circle
          className="text-yellow-500"
          strokeWidth="6"
          strokeDasharray={`${(data.attendance.details.workFromHome / 365) * 226} ${226 - (data.attendance.details.workFromHome / 365) * 226}`}
          strokeDashoffset={`${(data.attendance.details.onTime / 365) * 226}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        
        {/* Red - Late Attendance */}
        <circle
          className="text-red-500"
          strokeWidth="6"
          strokeDasharray={`${(data.attendance.details.lateAttendance / 365) * 226} ${226 - (data.attendance.details.lateAttendance / 365) * 226}`}
          strokeDashoffset={`${(data.attendance.details.onTime + data.attendance.details.workFromHome) / 365 * 226}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        
        {/* Gray - Absent */}
        <circle
          className="text-gray-500"
          strokeWidth="6"
          strokeDasharray={`${(data.attendance.details.absent / 365) * 226} ${226 - (data.attendance.details.absent / 365) * 226}`}
          strokeDashoffset={`${(data.attendance.details.onTime + data.attendance.details.workFromHome + data.attendance.details.lateAttendance) / 365 * 226}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center flex-col top-5">
        <span className="text-xl font-semibold text-gray-700">
          {data.attendance.details.onTime +
            data.attendance.details.workFromHome +
            data.attendance.details.lateAttendance +
            data.attendance.details.absent}
        </span>
        <span className="text-sm font-semibold text-gray-500">/ 365</span>
      </div>
    </div>
  </div>

    <div className="flex items-center mt-4">
      <svg
        className="w-6 h-6 text-green-500 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <p className="text-sm text-gray-600">
        Better than <span className='text-black font-semibold'>{data.attendance.performance.betterThanPercentage}%</span> of employees!
      </p>
    </div>
        </div>
    )
}

export default AttendanceSummary