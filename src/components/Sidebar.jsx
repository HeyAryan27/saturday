import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiTruck, FiBriefcase, FiMessageSquare, FiX } from 'react-icons/fi'; // Importing necessary icons
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sm:h-screen fixed md:relative top-0 left-0 w-20 bg-white border-r border-b z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out md:translate-x-0`}>
      <div className="flex items-center justify-between h-16 px-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
        {/* Close button for mobile */}
        <FiX className="md:hidden text-gray-800 cursor-pointer" size={24} onClick={toggleSidebar} />
      </div>
      <ul className="mt-6 text-xs -ml-10">
        <Link to="/" className="no-underline">
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiHome size={24} className="text-gray-600 mb-1" />
            <span className="text-gray-600">Dashboard</span>
          </li>
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiUsers size={24} className="text-gray-600 mb-1" />
          <span className="text-gray-600">Org.</span>
        </li>
        <Link to="calendar" className="no-underline">
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiCalendar size={24} className="text-gray-600 mb-1" />
            <span className="text-gray-600">Calendar</span>
          </li>
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiTruck size={24} className="text-gray-600 mb-1" />
          <span className="text-gray-600">Parkings</span>
        </li>
        <Link to="recruit" className="no-underline">
          <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
            <FiBriefcase size={24} className="text-gray-600 mb-1" />
            <span className="text-gray-600">Recruit</span>
          </li>
        </Link>
        <li className="px-4 py-4 hover:bg-gray-200 flex flex-col items-center cursor-pointer">
          <FiMessageSquare size={24} className="text-gray-600 mb-1" />
          <span className="text-gray-600">Messages</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
