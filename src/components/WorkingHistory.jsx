import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { workingHistoryData } from '../utils/constant';

function WorkingHistory() {
  const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order
  const [sortKey, setSortKey] = useState('date'); // State for sorting key

  // Helper function to get circle color based on effective time
  const getCircleColor = (effectiveTime) => {
    const hours = parseFloat(effectiveTime.split(':')[0]);
    if (hours >= 9) return 'text-green-500'; // Full green circle for 9 or more hours
    if (hours > 4) return 'text-yellow-500'; // Yellow circle for more than 4 hours
    return 'text-red-500'; // Red circle for less than 4 hours
  };

  // Convert time string to hours
  const convertToHours = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours + minutes / 60;
  };

  // Calculate stroke dashoffset based on effective time
  const getStrokeDashOffset = (effectiveTime) => {
    const hours = parseFloat(effectiveTime.split(':')[0]);
    const percentage = Math.min(hours / 9, 1) * 100;
    return (226 * (100 - percentage)) / 100;
  };

  // Sorting function
  const sortedData = [...workingHistoryData].sort((a, b) => {
    let aValue, bValue;

    switch (sortKey) {
      case 'date':
        aValue = new Date(a.date.split('/').reverse().join('-'));
        bValue = new Date(b.date.split('/').reverse().join('-'));
        break;
      case 'arrivalTime':
        aValue = new Date(`1970-01-01T${a.arrivalTime}`);
        bValue = new Date(`1970-01-01T${b.arrivalTime}`);
        break;
      case 'departureTime':
        aValue = a.departureTime === 'Still in office' ? Infinity : new Date(`1970-01-01T${a.departureTime}`);
        bValue = b.departureTime === 'Still in office' ? Infinity : new Date(`1970-01-01T${b.departureTime}`);
        break;
      case 'effectiveTime':
        aValue = convertToHours(a.effectiveTime.split(' ')[0]);
        bValue = convertToHours(b.effectiveTime.split(' ')[0]);
        break;
      default:
        aValue = 0;
        bValue = 0;
    }

    return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full border-[1px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-lg text-blue-900">Working History</h2>
          <div className="flex items-center mt-2 text-xs text-gray-700 mb-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-center mr-2">
              <span className="block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span>Meeting Criteria</span>
            </div>
            <div className="flex items-center mr-2">
              <span className="block w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
              <span>Criteria Unmet</span>
            </div>
            <div className="flex items-center mr-2">
              <span className="block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
              <span>Action Needed</span>
            </div>
            <div className="flex items-center mr-2">
              <span className="block w-2 h-2 rounded-full bg-orange-400 mr-1"></span>
              <span>Overtime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-auto md:-mt-4 -mt-5" style={{ maxHeight: '300px' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tl-lg text-xs">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSort('date')}>
                  Date
                  <div className="flex flex-col ml-1">
                    <FaSortUp className={`inline mt-2 ${sortKey === 'date' && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <FaSortDown className={`inline-block -mt-[10px] ${sortKey === 'date' && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </th>
              <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs hidden md:table-cell">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSort('arrivalTime')}>
                  Arrival
                  <div className="flex flex-col">
                    <FaSortUp className={`inline mt-2 ${sortKey === 'arrivalTime' && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <FaSortDown className={`inline-block -mt-[10px] ${sortKey === 'arrivalTime' && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </th>
              <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs hidden md:table-cell">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSort('departureTime')}>
                  Departure
                  <div className="flex flex-col">
                    <FaSortUp className={`inline mt-2 ${sortKey === 'departureTime' && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <FaSortDown className={`inline-block -mt-[10px] ${sortKey === 'departureTime' && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </th>
              <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSort('effectiveTime')}>
                  Effective time
                  <div className="flex flex-col">
                    <FaSortUp className={`inline mt-2 ${sortKey === 'effectiveTime' && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <FaSortDown className={`inline-block -mt-[10px] ${sortKey === 'effectiveTime' && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">No data available</td>
              </tr>
            ) : (
              sortedData.map((entry, index) => {
                const isToday = entry.departureTime === 'Still in office'; // Check if it's today

                return (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="p-2 text-left flex items-center mt-1 text-xs">
                      {/* Circle with day */}
                      <div className={`w-6 h-6 md:text-sm text-xs flex items-center justify-center rounded-full bg-gray-300 text-gray-700 text-xs mr-2`}>
                        {isToday ? 'T' : entry.date.split('/')[0]} {/* Show "T" for Today */}
                      </div>
                      {/* Full date or "Today's" */}
                      {isToday ? <span className="md:text-sm text-xs text-blue-600">Today's</span> : entry.date}
                    </td>
                    <td className="p-2 text-left text-xs hidden md:table-cell">{entry.arrivalTime}</td>
                    <td className="p-2 text-left text-xs hidden md:table-cell">
                      {entry.departureTime === 'Still in office' ? (
                        <span className="text-blue-500">{entry.departureTime}</span>
                      ) : (
                        entry.departureTime
                      )}
                    </td>
                    <td className="p-2 text-left md:text-xs text-[10px]">
                      <div className="flex items-center justify-around">
                        {/* Effective time on the left */}
                        <div>
                          <span>{entry.effectiveTime} hours</span>
                          <br />
                          <span className="text-gray-500">/ 9 hours</span>
                        </div>
                        {/* Progress circle on the right */}
                        <svg className="w-6 h-6" viewBox="0 0 80 80">
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
                            className={getCircleColor(entry.effectiveTime)}
                            strokeWidth="8"
                            strokeDasharray="226"
                            strokeDashoffset={getStrokeDashOffset(entry.effectiveTime)}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="36"
                            cx="40"
                            cy="40"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkingHistory;
