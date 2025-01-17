import React  from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Logo from '../../assets/image-removebg-preview (1).png'
import { IoMdAdd } from "react-icons/io";
const Dashboard = () => {
    
    return (
        
            <div className='bg-[#191D33] flex w-full h-[285px] gap-4 p-4'>
                <div className='bg-[#58BAAB] flex w-[73%] h-full rounded-lg'>
                    <div className='bg-[58BAAB] w-[60%] h-full rounded-lg'>
                        <div className='flex flex-col gap-4 p-8'>
                            <h1 className='text-[27px] font-semibold text-white'>Learn With Effectively With Us!</h1>
                            <p className='text-[#CDEAE2] text-[18px]'>Get 30% off every course on january.</p>
                        </div>
                        <div className='flex gap-3 py-1 mt-2 px-9'>
                            <button className='bg-[#F2426D] flex justify-center items-center w-14 h-14 rounded-full border border-spacing-4'>
                                <FaGraduationCap className='w-8 h-8 text-white ' />
                            </button>
                            <p className='font-semibold text-white text-[17px]'>
                                Students
                                <br />
                                <span className='text-white text-[15px] font-normal'>75,000+</span>
                            </p>
                            <button className='bg-[#E7B601] flex justify-center items-center w-14 h-14 rounded-full border border-spacing-4 ml-5'>
                                <FaUser className='w-6 h-6 text-white ' />
                            </button>
                            <p className='font-semibold text-white text-[17px]'>
                                Expert Mentors
                                <br />
                                <span className='text-white text-[15px] font-normal'>200+</span>
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#58BAAB] w-[40%] h-full rounded-lg'>
                        <img
                            src={Logo}
                            alt="Student"
                            className="w-full h-full rounded-md"
                        />
                    </div>
                </div>
                <div className='bg-slate-300 flex flex-col w-[27%] h-full'>
                    <div className='flex flex-col justify-start items-center bg-[#191D33] w-full h-[50%]'>
                        <p className='text-white text-[21px]'>Have More</p>
                        <p className='text-white text-[21px]'>knoledge to share?</p>
                        <button className='bg-[#0196E7] flex justify-center items-center w-full h-[50px] rounded-lg mt-3 gap-4  '>
                            <IoMdAdd className='w-5 h-5 text-white' />
                            <p className='text-white'>Create New Course</p>
                        </button>
                    </div>
                    <div className='w-full h-[50%] bg-[#191D33]'>

                        <div className="flex justify-between gap-4 mt-4">
                            {/* Div 1 */}
                            <div className="w-1/2 flex flex-col justify-start items-center h-[110px] bg-[#293146] hover:scale-105 rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]  ">
                                <div className='bg-white w-full text-[14px] font-semibold flex justify-center items-center h-[35px] rounded-lg text-[#01B4F9]'>
                                    Courses in Progr...
                                </div>
                                <p className='text-[45px] text-[#DEDFE3]'>5</p>
                            </div>

                            {/* Div 2 */}
                            <div className="w-1/2 flex flex-col justify-start items-center h-[110px] bg-[#293146] hover:scale-105 rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]  ">
                                <div className='bg-white w-full text-[14px] font-semibold flex justify-center items-center h-[35px] rounded-lg text-[#01B4F9] p-2'>
                                    Forum Discussion
                                </div>
                                <p className='text-[45px] text-[#DEDFE3]'>25</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
    )
}

export default Dashboard
