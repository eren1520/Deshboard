import React, { Component } from 'react'
import { IoMdMenu } from "react-icons/io";

import { MdOutlineWbSunny } from "react-icons/md";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { RiChat3Line } from "react-icons/ri";
import { RiFullscreenFill } from "react-icons/ri";

export default class Header extends Component {
  render() {
    return (

      <header className='bg-[#191d33] flex justify-between  items-center h-16 px-6 sticky top-0 z-50'>
        <div className="flex items-center ">
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  mr-2">
            <IoMdMenu className='' />
          </button>
          <div className="flex items-center bg-[#1E293B] text-gray-400 px-4 py-2 rounded-lg w-64">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white w-full"
            />
            <button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61 0 7.5 7.5 0 0 0 10.61 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-blue-400">
          {/* Dark Mode Icon */}
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  ">
            <RiChat3Line  className="w-6 h-6" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75a9.75 9.75 0 1 1 9-13.478 9.75 9.75 0 0 0-5.248 12.73z"
              />
            </svg> */}
          </button>

          {/* Notification Icon */}
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  ">
            <PiBellSimpleRingingBold className="w-6 h-6"/>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 20.25a1.5 1.5 0 1 1-3 0h3zm5.985-3.23c-.207-.653-.39-1.34-.546-2.056a8.999 8.999 0 0 1-7.843-10.287 7.5 7.5 0 0 0-7.843 10.287c-.157.717-.34 1.403-.546 2.056H20.235z"
              />
            </svg> */}
          </button>

          {/* Chat Icon */}
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  ">
            <MdOutlineWbSunny className="w-6 h-6"/>
            {/* <svg
            
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.505 9-7.83 0-4.326-4.03-7.83-9-7.83S3 7.924 3 12.25c0 1.97.91 3.77 2.37 5.08.04.035.057.078.084.115.214.272.24.537.334.785.131.36.215.587.274.706a.75.75 0 0 0 1.226.265l1.785-1.788c.018-.019.03-.042.051-.061.14-.168.376-.412.712-.739C9.396 17.997 10.646 18.75 12 18.75z"
              />
            </svg> */}
          </button>

          {/* Country Icon */}
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-full text-blue-400 transition duration-300 text-2xl  ">
            <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="w-6 h-6 rounded-full" />
          </button>

          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  ">
          <RiFullscreenFill  className="w-6 h-6" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75a9.75 9.75 0 1 1 9-13.478 9.75 9.75 0 0 0-5.248 12.73z"
              />
            </svg> */}
          </button>
         

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className='flex flex-col'>
            <span className="text-white font-medium">Nil Yeager</span>
            <span className="text-gray-400 text-xs text-right">ADMIN</span>
            </div>
            <img
              src="./image/avatar.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <button className="text-white hover:bg-[#0196e7] hover:text-white p-2 rounded-md text-blue-400 transition duration-300 text-2xl  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.25h4.5M16.5 8.25h4.5m0 7.5h-4.5M7.5 15.75H3M4.5 3.75v16.5M19.5 3.75v16.5"
              />
            </svg>
          </button>
        </div>
      </header>
    )
  }
}
