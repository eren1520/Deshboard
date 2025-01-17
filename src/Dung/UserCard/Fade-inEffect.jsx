import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { TbTilde } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export const FadeInEffect = () => {
    return (
        <div className='w-auto h-auto px-5 py-5'>
            <div className='bg-[#e2f3fc] h-16 rounded-md flex flex-row justify-between items-center  '>
                <p className='px-5   text-2xl text-[#44a8f8]'>Fade-in effect</p>
                <span className='px-5  text-2xl text-[#44a8f8]'>You can use by default <span className='bg-[#191d33] text-[#d63379] px-5'>fx-overlay</span></span>
            </div>
            <div className='flex flex-row justify-between pt-5'>
                <div className='flex flex-col h-auto w-[32%] bg-[#293146]'>
                    <div className="relative h-auto overflow-hidden rounded-lg group">
                        <img
                            src="https://edulearn-lms-admin-template.multipurposethemes.com/images/card/1.jpg"
                            alt="Sample image"
                            className="object-cover w-auto h-auto transition-transform duration-300 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/80 group-hover:opacity-100">
                            <div className="absolute flex gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <button className="p-2 transition-all rounded-md border-white border-2 hover:bg-[#44a8f8]">
                                    <IoMdSearch size={24} className="text-white" />
                                </button>
                                <button className="p-2 transition-all rounded-md  border-white border-2 hover:bg-[#44a8f8]">
                                    <TbTilde size={24} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center pt-3 text-white'>
                        <p className='text-2xl'>Maical Luka</p>
                        <p className='text-sm'>Managing Director</p>
                    </div>
                </div>

                <div className='flex flex-col h-auto w-[32%] bg-[#293146]'>
                    <div className="relative h-auto overflow-hidden rounded-lg group">
                        <img
                            src="https://edulearn-lms-admin-template.multipurposethemes.com/images/card/2.jpg"
                            alt="Sample image"
                            className="object-cover w-auto h-auto transition-transform duration-300 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/80 group-hover:opacity-100">
                            <div className="absolute flex gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <button className="p-2 transition-all rounded-md border-white border-2 hover:bg-[#44a8f8]">
                                    <RiFacebookFill size={24} className="text-white" />
                                </button>
                                <button className="p-2 transition-all rounded-md  border-white border-2 hover:bg-[#44a8f8]">
                                    <FaTwitter size={24} className="text-white" />
                                </button>
                                <button className="p-2 transition-all rounded-md  border-white border-2 hover:bg-[#44a8f8]">
                                    <FaInstagramSquare size={24} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center pt-3 text-white'>
                        <p className='text-2xl'>Maical Luka</p>
                        <p className='text-sm'>Managing Director</p>
                    </div>
                </div>

                <div className='flex flex-col h-auto w-[32%] bg-[#293146]'>
                    <div className="relative h-auto overflow-hidden rounded-lg group">
                        <img
                            src="https://edulearn-lms-admin-template.multipurposethemes.com/images/card/3.jpg"
                            alt="Sample image"
                            className="object-cover w-auto h-auto transition-transform duration-300 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/80 group-hover:opacity-100">
                            <div className="absolute flex gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <button className="p-2 transition-all rounded-md border-white border-2 hover:bg-[#44a8f8]">
                                    <IoMdSearch size={24} className="text-white" />
                                </button>
                                <button className="p-2 transition-all rounded-md  border-white border-2 hover:bg-[#44a8f8]">
                                    <TbTilde size={24} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center pt-3 text-white'>
                        <p className='text-2xl'>Maical Luka</p>
                        <p className='text-sm'>Managing Director</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
