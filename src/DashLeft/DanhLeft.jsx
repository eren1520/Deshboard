import React, { Component } from 'react'
import { FiHome } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { LuChartPie } from "react-icons/lu";
import { LiaTableSolid } from "react-icons/lia";
import { MdOutlineWidgets } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";

export default class DanhLeft extends Component {
  render() {
    return (
      <div className='"col-span-1 bg-[#293146] text-[#a1a4b5] h-screen'>
                          <div className='flex justify-center items-center sticky  top-0 bg-[#293146] pt-3 py-5'>
                              <img className='w-8 h-8 mr-1' src='/image/logo.png' alt='anh' />
                              <h1 className='text-4xl text-white'>EduLearn</h1>
      
                          </div>
                          <div>
                              <div>
                                  <ul className='px-2'>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <FiHome className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <CiMail className='mr-2' />
                                          ngoc cu
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <FaRegCalendarAlt className='mr-2' />
                                          ngoc cu
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <IoChatbubbleOutline className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                  </ul>
                              </div>
                              <h4 className='my-5 pl-4'>Components</h4>
                              <div>
                                  <ul className='px-2'>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <MdOutlineFeaturedPlayList className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <LuChartPie className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <LiaTableSolid className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <MdOutlineWidgets className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <IoLockClosedOutline className='mr-2' />
                                          ngoc cu
      
                                      </li>
                                      <li className='flex items-center rounded-md py-3 pl-2  hover:text-[#019ff8]  transition duration-300 hover:bg-[#191d33]'>
                                          <CiWarning className='mr-2' />
                                          ngoc cu
                                      </li>
                                  </ul>
      
                              </div>
                              <div className=' flex justify-center mt-5'>
                                  <img className='w-7/12' src='/image/clinet.svg' alt='anh' />
                              </div>
                          </div>
                      </div>
    )
  }
}
