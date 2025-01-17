import React from "react";
import { FaInbox, FaExclamationTriangle, FaTrash, FaFolder, FaTag } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const Label = () => {
  return (
    <div className="flex space-x-2 bg-[#293146] p-4">
      {/* Combined Button for First Three Icons */}
      <button className="flex items-center justify-center space-x-7 px-2   bg-gray-800 text-white rounded-md hover:bg-gray-700">
        <FaInbox className="mx-1" />
        <FaExclamationTriangle className="mx-1" />
        <FaTrash className="mx-1" />
      </button>

      <div className="relative group">
        <button className="flex justify-center items-center bg-gray-800  text-white p-2 rounded-md hover:bg-gray-600">
          <FaFolder className="h-6"/>
          <MdArrowDropDown />

        </button>
        {/* Dropdown for Second Button */}
        <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md w-36">
          <ul className="p-2 space-y-1">
            <li className="hover:bg-gray-200 p-1">Label as:</li>
            <li className="hover:bg-gray-200 p-1">Update</li>
            <li className="hover:bg-gray-200 p-1">Social</li>
            <li className="hover:bg-gray-200 p-1">Promotion</li>
            <li className="hover:bg-gray-200 p-1">Forum</li>
          </ul>
        </div>
      </div>

      <div className="relative group">
        <button className="flex items-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600">
          <FaTag className="h-6"/>
          <MdArrowDropDown />

        </button>
        {/* Dropdown for Third Button */}
        <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md w-36">
          <ul className="p-2 space-y-1">
            <li className="hover:bg-gray-200 p-1">More options:</li>
            <li className="hover:bg-gray-200 p-1">Mark as unread</li>
            <li className="hover:bg-gray-200 p-1">Add to tasks</li>
            <li className="hover:bg-gray-200 p-1">Add star</li>
            <li className="hover:bg-gray-200 p-1">Mute</li>
          </ul>
        </div>
      </div>

      <div className="relative group">
        <button className="flex items-center bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600">
          More
          <MdArrowDropDown />
        </button>
        {/* Dropdown for Fourth Button */}
        <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md w-36">
          <ul className="p-2 space-y-1">
            <li className="hover:bg-gray-200 p-1">Mark as unread</li>
            <li className="hover:bg-gray-200 p-1">Add to tasks</li>
            <li className="hover:bg-gray-200 p-1">Add star</li>
            <li className="hover:bg-gray-200 p-1">Mute</li>
          </ul>
        </div>
      </div>
  </div>

  );
};

export default Label;
