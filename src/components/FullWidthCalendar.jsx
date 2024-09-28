import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { holidaysData } from "../utils/constant"; // Import holidays data
import { FaSortUp, FaSortDown } from 'react-icons/fa';

const FullWidthCalendarWithHolidays = () => {
  const [date, setDate] = useState(new Date());

  const checkForHoliday = (currentDate) => {
    const holiday = holidaysData.find(
      (holiday) => holiday.date === currentDate.toISOString().slice(0, 10)
    );
    return holiday ? holiday.name : null;
  };

  return (
    <div className="flex w-full p-4 bg-white rounded-lg shadow-md">
      {/* Calendar Section */}
      <div className="w-96 pe-2">
        <h2 className="font-semibold text-base text-blue-900 mb-2">Calendar</h2>
        <hr />
        <Calendar
          onChange={setDate}
          value={date}
          className="w-full"
          tileContent={({ date }) => {
            const holiday = checkForHoliday(date);
            return holiday ? (
              <div className="text-red-500 font-semibold text-sm mt-1">{holiday}</div>
            ) : null;
          }}
        />
      </div>

      {/* Upcoming Holidays Section */}
      <div className="w-96 pl-1">
        <h3 className="font-semibold text-base text-blue-900 mb-2">Upcoming Holidays</h3>
        <hr />
        <div className="border-[1px] rounded-md overflow-y-auto custom-scrollbar mt-2" style={{ maxHeight: '350px' }}>
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tl-lg text-xs">
                  <div className='flex justify-between items-center'>
                    Holiday Name
                    <div className='flex flex-col ml-1'>
                      <FaSortUp className="inline mt-2" />
                      <FaSortDown className="inline-block -mt-[10px]" />
                    </div>
                  </div>
                </th>
                <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tr-lg text-xs">
                  <div className='flex justify-between items-center'>
                    Date
                    <div className='flex flex-col'>
                      <FaSortUp className="inline mt-2" />
                      <FaSortDown className="inline-block -mt-[10px]" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {holidaysData.map((holiday, index) => (
                <tr key={index} className="text-gray-700 hover:bg-gray-100">
                  <td className="p-2 text-left">{holiday.name}</td>
                  <td className="p-2 text-left">{holiday.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leaves Section */}
      <div className="w-72 pl-6">
        <h3 className="font-semibold text-base text-blue-900 mb-2">Upcoming Leaves</h3>
        <hr />
        <div className="border-[1px] rounded-md overflow-y-auto custom-scrollbar mt-2" style={{ maxHeight: '380px' }}>
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tl-lg text-xs">
                  <div className='flex justify-between items-center'>
                    Leave Type
                    <div className='flex flex-col ml-1'>
                      <FaSortUp className="inline mt-2" />
                      <FaSortDown className="inline-block -mt-[10px]" />
                    </div>
                  </div>
                </th>
                <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tr-lg text-xs">
                  <div className='flex justify-between items-center'>
                    Date
                    <div className='flex flex-col'>
                      <FaSortUp className="inline mt-2" />
                      <FaSortDown className="inline-block -mt-[10px]" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data for leaves */}
              <tr className="text-gray-700 hover:bg-gray-100">
                <td className="p-2 text-left">Sick Leave</td>
                <td className="p-2 text-left">2024-09-20</td>
              </tr>
              <tr className="text-gray-700 hover:bg-gray-100">
                <td className="p-2 text-left">Personal Leave</td>
                <td className="p-2 text-left">2024-09-22</td>
              </tr>
              {/* Add more leave entries as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullWidthCalendarWithHolidays;
