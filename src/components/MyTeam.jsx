import React from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { team } from '../utils/constant';

function MyTeam() {
    const members = team;

    function getStatusColor(status) {
        switch (status) {
            case 'in office':
                return 'bg-blue-500'; // blue
            case 'work from home':
                return 'bg-yellow-500'; // yellow
            case 'on leave':
                return 'bg-red-500'; // red
            case 'absent':
                return 'bg-gray-800'; // dark gray
            case 'holiday':
                return 'bg-gray-300'; // light gray
            default:
                return 'bg-gray-500'; // fallback color
        }
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full border-[1px]">
            <h2 className="font-semibold text-lg text-blue-900">My Team</h2>

            {/* Legends */}
            <div className="flex items-center mt-2 text-xs text-gray-700 mb-4 flex-wrap sm:flex-nowrap">
                <div className="flex items-center mr-3 mb-2">
                    <span className="block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                    <span>In Office</span>
                </div>
                <div className="flex items-center mr-3 mb-2">
                    <span className="block w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
                    <span>Work from Home</span>
                </div>
                <div className="flex items-center mr-3 mb-2 sm:ml-0">
                    <span className="block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                    <span>On Leave</span>
                </div>
                <div className="flex items-center mr-3 mb-2 sm:ml-0">
                    <span className="block w-2 h-2 rounded-full bg-gray-800 mr-1"></span>
                    <span>Absent</span>
                </div>
                <div className="flex items-center mb-2 sm:ml-0">
                    <span className="block w-2 h-2 rounded-full bg-gray-300 mr-1"></span>
                    <span>Holiday</span>
                </div>
            </div>

            {/* Table with limited height and scroll */}
            <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tl-lg text-xs">
                                <div className='flex justify-between items-center'>
                                    Members
                                    <div className='flex flex-col ml-1'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs">
                                <div className='flex justify-between items-center'>
                                    Today
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            {/* Hide other dates on smaller screens */}
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs hidden sm:table-cell">
                                <div className='flex justify-between items-center'>
                                    25/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 text-xs hidden md:table-cell">
                                <div className='flex justify-between items-center'>
                                    24/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 text-left text-gray-500 bg-gray-100 rounded-tr-lg text-xs hidden lg:table-cell">
                                <div className='flex justify-between items-center'>
                                    23/9
                                    <div className='flex flex-col'>
                                        <FaSortUp className="inline mt-2" />
                                        <FaSortDown className="inline-block -mt-[10px]" />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index} className="text-gray-700 hover:bg-gray-100">
                                <td className="p-1 text-left flex items-center">
                                    <img src={member.profileImage} alt={member.name} className="w-8 h-8 rounded-full mr-2" />
                                    <div className="flex flex-col">
                                        <span className='text-blue-900 text-xs md:text-base'>{member.name}</span>
                                        <span className="md:text-xs text-[10px] text-gray-500">{member.role}</span>
                                    </div>
                                </td>
                                <td className="border-r p-1 text-xs">
                                    <div className='flex items-center text-gray-500'>
                                        <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(member.dates.find(date => date.date === 'today').status)}`}></span>
                                        {member.dates.find(date => date.date === 'today')?.arrivalTime || '-'}
                                    </div>
                                </td>
                                {/* Display only past data on larger screens */}
                                {member.dates
                                    .filter(dateData => dateData.date !== 'today')
                                    .map((dateData, dateIndex) => (
                                    <td key={dateIndex} 
                                        className={`p-1 text-left text-xs text-gray-500 
                                        ${dateIndex === 0 ? 'hidden sm:table-cell' : ''} 
                                        ${dateIndex === 1 ? 'hidden md:table-cell' : ''} 
                                        ${dateIndex === 2 ? 'hidden lg:table-cell' : ''}`}>
                                        <div className='flex items-center'>
                                            <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(dateData.status)}`}></span>
                                            {dateData.arrivalTime || '-'}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyTeam;
