import React, { Component } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { BiCoinStack } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default class DanhLeft extends Component {
    // navigate = useNavigate();
    render() {
      
        // const handleNavigation = (path) => {
    
        //     this.navigate(path);
        // };
        return (
            <div>
                <div className=" text-white flex flex-col h-screen">
                    <div className="w-full flex justify-center items-center bg-[#293146] py-4">
                        <img
                            src="https://edulearn-lms-admin-template.multipurposethemes.com/images/logo-letter.png"
                            alt="Logo"
                            className="w-9 h-9"
                        />
                        <h2 className="text-4xl font-normal pl-3">EduLearn</h2>
                    </div>

                    {/* Sidebar Menu */}
                    <div className="flex-1 overflow-y-auto px-3 bg-[#293146]">
                        <ul className="space-y-2">
                            {/* Dashboard */}
                            <li  className="flex items-center gap-2 hover:bg-[#191D33] p-3 rounded cursor-pointer">
                                <AiOutlineHome className="text-[#4E556B] w-6 h-6" />
                                <p className="mt-1">Dashboard</p>
                            </li>

                            {/* Mailbox */}
                            <li className="flex items-center gap-2 hover:bg-[#191D33] p-3 rounded cursor-pointer">
                                <MdOutlineEmail className="text-[#4E556B] w-6 h-6" />
                                <p className="mt-1">Mailbox</p>
                            </li>

                            {/* Calendar */}
                            <li className="flex items-center gap-2 hover:bg-[#191D33] p-3 rounded cursor-pointer">
                                <FaRegCalendarDays className="text-[#4E556B] w-6 h-6" />
                                <p className="mt-1">Calendar</p>
                            </li>

                            {/* Group Chats */}
                            <li className="flex items-center gap-2 hover:bg-[#191D33] p-3 rounded cursor-pointer">
                                <BsChat className="text-[#4E556B] w-6 h-6" />
                                <p className="mt-1">Group Chats</p>
                            </li>

                            {/* Components Section */}
                            <p className="p-3 text-gray-400">Components</p>

                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <PiNotePencilBold className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Features</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <IoTimeOutline className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Forms & Charts</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <GrAppsRounded className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Tables</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <BiCoinStack className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Apps & Widgets</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <FaLock className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Authentication</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                            <li className="flex items-center justify-between hover:bg-[#191D33] p-3 rounded cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <IoWarningOutline className="text-[#4E556B] w-7 h-7" />
                                    <p className="mt-1">Miscellaneous</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#4E556B]" />
                            </li>
                        </ul>
                        <div className="w-full flex flex-col justify-center items-center p-3 mt-16">
                            {/* Thẻ div có màu nền trắng */}
                            <div className="bg-white flex justify-center items-end h-[140px] w-[190px] relative rounded-3xl">
                                <p className='absolute text-[#04A0F8] transform -translate-x-0 -translate-y-2 '>Best Education Admin</p>
                                <img
                                    src="https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-24.svg"
                                    alt="Logo"
                                    className="absolute w-[170px] h-[170px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
