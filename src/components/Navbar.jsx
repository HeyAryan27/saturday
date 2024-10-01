import React, { useState } from 'react';
import { FiSearch, FiBell, FiMenu, FiX } from 'react-icons/fi'; 
import { BiMessageDetail } from 'react-icons/bi';

const Navbar = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsHeadingVisible(!isHeadingVisible);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setIsHeadingVisible(true);
  };

  return (
    <div className="bg-white p-4    shadow-md  h-16 flex justify-between items-center">

      <div className="flex items-center space-x-4">
        <FiMenu className="text-gray-800 cursor-pointer md:hidden" size={24} onClick={toggleSidebar} />
        {isHeadingVisible && <h1 className="text-lg font-bold text-gray-800 md:text-xl">Dashboard</h1>}
      
        {/* <ul className="  flex space-x-4  " style={{fontSize:"15px"}}>
            <li className=" text-blue-600 border-b-2 border-blue-600">Dashboard</li>
            <li className="text-gray-600 border-blue-600 cursor-pointer">Attendance</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Leave</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Performance</li>
          </ul> */}
      </div>

      
      <div className="flex items-center space-x-4">
        
        <div className="relative">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-48 md:w-auto"
              />
            
              <button
                onClick={closeSearch}
                className="absolute right-2 text-gray-500"
              >
                <FiX size={20} />
              </button>
            </div>
          ) : (
            <FiSearch
              className="text-gray-500 cursor-pointer md:hidden"
              size={24}
              onClick={toggleSearch}
            />
          )}
        </div>

        
        <div className="hidden md:flex relative w-full">
          <input
            type="text"
            placeholder="Search anything..."
            className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
          />
          <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
        </div>

        
        <FiBell className="text-gray-500 cursor-pointer hidden md:block" size={28} /> 
        <BiMessageDetail className="text-gray-500 cursor-pointer hidden md:block" size={28} /> 

        {/* <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cartoon-of-a-young-woman-smiling-on-a-black-background-image_2680954.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer object-cover md:w-10 md:h-10"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
