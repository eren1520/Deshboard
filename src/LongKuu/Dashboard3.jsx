import React from 'react'
import { BsBookHalf } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";

const Dashboard3 = () => {

    return (
        <div className='bg-[#191D33] flex w-full h-[530px] gap-4 p-4'>
            <div className='flex flex-col w-[28%] h-[510px] bg-[#293146] rounded-lg gap-4'>
                <div className='flex items-center justify-between p-4'>
                    <p className='text-[22px] text-white'>Course completion</p>
                    <button className='bg-white w-[62px] h-[19px] rounded-md justify-center flex items-center group hover:bg-[#019FF8] group transition-all duration-300'>
                        <p className='text-[#019FF8] text-[12px] group-hover:text-white transition-colors duration-300 '>View All</p>
                    </button>
                </div>

                <div className='flex flex-col gap-6 p-4 -mt-1'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#019FF8] rounded-lg w-[90px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>40%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>In Progress</p>
                            <p className='text-[14px] text-[#95B7BC]'>117 User</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#58BAAB] rounded-lg w-[45px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>20%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>Completed</p>
                            <p className='text-[14px] text-[#95B7BC]'>74 User</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#FEC801] rounded-lg w-[42px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>18%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>Inactive</p>
                            <p className='text-[14px] text-[#95B7BC]'>58 User</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#F2426D] rounded-lg w-[18px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>07%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>Expeired</p>
                            <p className='text-[14px] text-[#95B7BC]'>11 User</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#019FF8] rounded-lg w-[90px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>40%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>In Progress</p>
                            <p className='text-[14px] text-[#95B7BC]'>117 User</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-[#323A66] rounded-lg w-[243px] h-[12px]'>
                                <div className='bg-[#58BAAB] rounded-lg w-[45px] h-full'></div>
                            </div>
                            <p className='text-white text-[14px]'>20%</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[14px] text-[#1B8CF8]'>Completed</p>
                            <p className='text-[14px] text-[#95B7BC]'>74 User</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex flex-col w-[39%] h-[500px] bg-[#191D33] rounded-lg gap-4'>
                <div className='flex items-center justify-between p-4'>
                    <p className='text-[22px] text-white'>Upcoming Lession</p>
                    <button className='bg-white w-[62px] h-[19px] rounded-md justify-center flex items-center group hover:bg-[#019FF8] group transition-all duration-300'>
                        <p className='text-[#019FF8] text-[12px] group-hover:text-white transition-colors duration-300 '>View All</p>
                    </button>
                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg mt-1 transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
                    <div className='flex items-center justify-center overflow-hidden bg-[#FEC801] rounded-sm w-14 h-14'>
                        <BsBookHalf className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Informatic Course</p>
                        <p className='text-[#8eada4] text-[15px] font-semibold'>Nil Yeager, 19 April</p>
                    </div>
                    <FaArrowRight className='text-[#8eada4] w-4 h-4 hover:text-[#019FF8] ml-40' />

                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
                    <div className='flex items-center justify-center overflow-hidden bg-[#019FF8] rounded-sm w-14 h-14'>
                        <MdEmail className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Live Drawing</p>
                        <p className='text-[#8eada4] text-[15px] font-semibold'>Micak Doe, 12 June</p>
                    </div>
                    <FaArrowRight className='text-[#8eada4] w-4 h-4 hover:text-[#019FF8] ml-44' />

                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
                    <div className='flex items-center justify-center overflow-hidden bg-[#F2426D] rounded-sm w-14 h-14'>
                        <BsBookHalf className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Contemporary Art</p>
                        <p className='text-[#8eada4] text-[15px] font-semibold'>Potar doe, 27 July</p>
                    </div>
                    <FaArrowRight className='text-[#8eada4] w-4 h-4 hover:text-[#019FF8] ml-[156px]' />

                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
                    <div className='flex items-center justify-center overflow-hidden bg-[#733AEB] rounded-sm w-14 h-14'>
                        <MdEmail className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Informatic Course</p>
                        <p className='text-[#8eada4] text-[15px] font-semibold'>Nil Yeager, 19 April</p>
                    </div>
                    <FaArrowRight className='text-[#8eada4] w-4 h-4 hover:text-[#019FF8] ml-40' />

                </div>
            </div>
            <div className='flex flex-col w-[33%] h-[500px] bg-[#293146] rounded-lg '>
                <div className='sticky top-0 z-50 flex p-4'>
                    <p className='text-[22px] text-white'>Notice board</p>

                </div>
                <div className="flex flex-col overflow-y-auto bg-[#191D33]">
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] p-4 hover:bg-[#212744] transition duration-300'>
                    <div className='bg-white flex w-12 h-12 justify-center items-center text-white text-[25px] rounded-md '>
                        <FaUser className='w-4 h-4 text-[#019FF8]' />

                    </div>
                    <div className='flex flex-col mt-3 ml-4'>
                        <p className='text-[#8eada4] text-[17px] font-semibold'>New Teacher<span className='font-normal text-[13px] ml-24'>Just Now</span></p>
                        <p className='text-[#8eada4] text-[14px] '>It is a long established fact that a</p>
                        <p className='text-[#8eada4] text-[14px] '>reader will be...</p>
                    </div>
                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] p-4 hover:bg-[#212744] transition duration-300'>
                    <div className='bg-white flex w-12 h-12 justify-center items-center text-white text-[25px] rounded-md '>
                    <FaRegMoneyBill1
                    className='w-5 h-5 text-[#D3395F]' />

                    </div>
                    <div className='flex flex-col mt-3 ml-4'>
                        <p className='text-[#8eada4] text-[17px] font-semibold'>New Fees Structure<span className='font-normal text-[13px] ml-16'>Today</span></p>
                        <p className='text-[#8eada4] text-[14px] '>It is a long established fact that a</p>
                        <p className='text-[#8eada4] text-[14px] '>reader will be...</p>
                    </div>
                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] p-4 hover:bg-[#212744] transition duration-300'>
                    <div className='bg-white flex w-12 h-12 justify-center items-center text-white text-[25px] rounded-md '>
                    <GiSecretBook 
                    className='w-5 h-5 text-[#3D8177]' />

                    </div>
                    <div className='flex flex-col mt-3 ml-4'>
                        <p className='text-[#8eada4] text-[17px] font-semibold'>Updated Syllabus<span className='font-normal text-[13px] ml-10'>17 Dec 2020</span></p>
                        <p className='text-[#8eada4] text-[14px] '>It is a long established fact that a</p>
                        <p className='text-[#8eada4] text-[14px] '>reader will be...</p>
                    </div>
                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] p-4 hover:bg-[#212744] transition duration-300'>
                    <div className='bg-white flex w-12 h-12 justify-center items-center text-white text-[25px] rounded-md '>
                    <RiGraduationCapFill
                    className='w-5 h-5 text-[#5229A7]' />

                    </div>
                    <div className='flex flex-col mt-3 ml-4'>
                        <p className='text-[#8eada4] text-[17px] font-semibold'>New Course<span className='font-normal text-[13px] ml-20'>27 Oct 2020</span></p>
                        <p className='text-[#8eada4] text-[14px] '>It is a long established fact that a</p>
                        <p className='text-[#8eada4] text-[14px] '>reader will be...</p>
                    </div>
                </div>
                <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] p-4 hover:bg-[#212744] transition duration-300'>
                    <div className='bg-white flex w-12 h-12 justify-center items-center text-white text-[25px] rounded-md '>
                    <FaRegMoneyBill1
                    className='w-5 h-5 text-[#D3395F]' />

                    </div>
                    <div className='flex flex-col mt-3 ml-4'>
                        <p className='text-[#8eada4] text-[17px] font-semibold'>New Fees Structure<span className='font-normal text-[13px] ml-16'>Today</span></p>
                        <p className='text-[#8eada4] text-[14px] '>It is a long established fact that a</p>
                        <p className='text-[#8eada4] text-[14px] '>reader will be...</p>
                    </div>
                </div>

                </div>
                <div className='flex items-center justify-center h-[150px] w-full border-t border-[#3C3D54]  '>
                    <button className='flex items-center justify-center text-blue-400 bg-white h-[40px] w-[350px] rounded-md group hover:bg-blue-500 group transition-all duration-300'>
                        <p className='font-semibold transition-colors duration-300 group-hover:text-white'>View all</p>
                        </button>
                </div>
                

            </div>
        </div>
    )
}

export default Dashboard3
