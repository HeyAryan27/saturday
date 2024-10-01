import { dashboardData } from '../utils/constant'; 
import { FaClock, FaSignInAlt, FaSignOutAlt, FaRegClock } from 'react-icons/fa';

const AttendanceCard = () => {
    const data = dashboardData; 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   lg:h-80 gap-4 ">

            <div className="bg-white p-2  rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col items-center">
                    <FaClock className="text-blue-600 text-3xl mb-2" />
                    <span className="text-xs text-gray-600 mt-2">Average hours</span>
                    <p className="text-lg font-semibold text-gray-700 mt-1">{data.attendance.averageHours}</p>
                </div>
            </div>

            
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col items-center">
                    <FaSignInAlt className="text-green-600 text-3xl mb-2" />
                    <span className="text-xs text-gray-600 mt-2">Average check-in</span>
                    <p className="text-lg font-semibold text-gray-700 mt-1">{data.attendance.averageCheckIn}</p>
                </div>
            </div>

    
            <div className="bg-white p-2  rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col items-center">
                    <FaSignOutAlt className="text-red-600 text-3xl mb-2" />
                    <span className="text-xs text-gray-600 mt-2">Average check-out</span>
                    <p className="text-lg font-semibold text-gray-700 mt-1">{data.attendance.averageCheckOut}</p>
                </div>
            </div>

    
            <div className="bg-white p-2  rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col items-center">
                    <FaRegClock className="text-purple-600 text-3xl mb-2" />
                    <span className="text-xs text-gray-600 mt-2">On-time arrival</span>
                    <p className="text-xl font-semibold text-green-600 mt-1">{data.attendance.onTimeArrivalPercentage}%</p>
                </div>
            </div>
        </div>
    );
}

export default AttendanceCard;
