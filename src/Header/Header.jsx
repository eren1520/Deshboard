import React, { Component } from 'react'
import { FaBars, FaSearch, FaCommentDots, FaUserCircle } from 'react-icons/fa';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { SlFrame } from "react-icons/sl";
import { VscSettings } from "react-icons/vsc";


export default class Header extends Component {
  render() {
    return (
      <div className="w-full h-full bg-[#191D33] flex items-center  justify-between ">
          
      <div className="flex items-center space-x-4">
          <button className="text-white  pl-6 py-4" >
              <FaBars className='h-6 w-12 font-thin text-blue-500' />
          </button>
          <div className="flex items-center bg-gray-700 rounded-lg px-2 py-2">

              <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-white text-lg font-medium ml-2 placeholder-gray-400"
              />
              <FaSearch className="text-gray-400" />
          </div>
      </div>
      <div className="flex items-center space-x-8 px-6 py-4">
          <button className="text-white">
              <MdOutlineWbSunny className='h-8 w-8 text-blue-500' />

          </button>
          <button className="text-white">
              <FaRegBell className='h-8 w-8 text-blue-500' />

          </button>
          <button className="text-white">
              <LuMessageCircle className='h-8 w-8 text-blue-500' />

          </button>
          <div className='bg-blue-300 h-8 w-8 rounded-full'>

          </div>
          <button className="text-white">
              <SlFrame className='h-8 w-8 text-blue-500' />

          </button>
          <div className='flex'>
              <div className='flex flex-col text-right '>
                  <p className='font-medium text-white text-lg leading-tight'>Hong Ming Quan</p>
                  <p className='font-normal text-white text-sm leading-tight'>Member</p>

              </div>
              <div className="relative w-10 h-10">
                  <FaUserCircle className="text-white w-full h-full" />
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </div>
          </div>

          <button className='text-white'>
              <VscSettings className='w-8 h-8 text-blue-500' />
          </button>



      </div>
  </div>
    )
  }
}
