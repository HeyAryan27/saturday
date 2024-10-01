// WorkingHistory.js
import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { workingHistoryData } from '../utils/constant';

function WorkingHistory() {
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortKey, setSortKey] = useState('date'); 

  const getCircleColor = (effectiveTime) => {
    const hours = parseFloat(effectiveTime.split(':')[0]);
    if (hours >= 9) return 'text-green-500'; 
    if (hours > 4) return 'text-yellow-500';  
    return 'text-red-500';  
  };

  const convertToHours = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours + minutes / 60;
  };

  const getStrokeDashOffset = (effectiveTime) => {
    const hours = parseFloat(effectiveTime.split(':')[0]);
    const percentage = Math.min(hours / 9, 1) * 100;
    return (226 * (100 - percentage)) / 100;
  };

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
    <div className="bg-white p-4  rounded-lg shadow-md w-full border-[1px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
          <h2 className="font-semibold text-lg text-blue-900  md:text-left">Working History</h2>
          <div className="flex flex-wrap items-center text-xs text-gray-700  mt-4">
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
            <div className="flex items-center">
              <span className="block w-2 h-2 rounded-full bg-orange-400 mr-1"></span>
              <span>Overtime</span>
            </div>
          </div>
        </div>
        {/* <div className="relative w-full md:w-auto">
          <select className="block appearance-none w-full md:w-auto py-2 px-6 border border-gray-300 bg-white text-gray-700 text-xs rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option>Show All</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <svg className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div> */}
        
      </div>

      <div className="overflow-auto -mt-4"  style={{ maxHeight: '372px' }}>
        <table className="w-full border-collapse table-auto">
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
              <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSort('arrivalTime')}>
                  Arrival
                  <div className="flex flex-col">
                    <FaSortUp className={`inline mt-2 ${sortKey === 'arrivalTime' && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <FaSortDown className={`inline-block -mt-[10px] ${sortKey === 'arrivalTime' && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </th>
              <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
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
                  Effective Time
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
                const isToday = entry.departureTime === 'Still in office'; 
                const isAbsent = entry.arrivalTime === 'absent';
                const isHoliday = entry.arrivalTime === 'holiday';
                const isLeave = entry.arrivalTime === 'leave';

                return (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="p-2 text-left flex items-center mt-1 text-xs">
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 text-xs mr-2`}>
                        {isToday ? 'T' : entry.date.split('/')[0]} 
                      </div>
                      {isToday ? <span className="text-blue-600">Today's</span> : entry.date}
                    </td>
                    <td className={`p-2 text-left text-xs ${isAbsent ? 'text-red-500' : isHoliday ? 'text-yellow-500' : isLeave ? 'text-green-500' : ''}`}>
                      {entry.arrivalTime}
                    </td>
                    <td className={`p-2 text-left text-xs ${isToday ? 'text-gray-400' : ''}`}>
                      {entry.departureTime}
                    </td>
                    <td className="p-2 text-left text-xs">
                      <div className="flex items-center justify-around">
                        <div>
                          <span>{entry.effectiveTime} hours</span>
                          <br />
                          <span className="text-gray-500">/ 9 hours</span>
                        </div>
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
                            transform="rotate(-90 40 40)"
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
