
import React from 'react'
import bg from './assets/login.png'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Register = () => {
    return (
        <div>
            <img src={bg} className='h-screen w-screen relative' />
            <div className='absolute bg-slate-800 opacity-35 w-screen h-screen top-0'></div>
            <div className='absolute top-0 flex justify-center items-center w-screen h-screen'>
                <div className='bg-[#2d314c] h-[64%] w-[28%] shadow-md rounded-lg flex flex-col  items-center'>
                    <div className='text-2xl text-[#019ff8] mt-5 font-bold'>Get started with Us</div>
                    <div className='text-[#a1a4b5] text-sm mt-3 mb-10'>Register a new membership</div>
                    <div class="w-[85%] mb-4 flex">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiUser className='text-white' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white rounded-r-md  pl-3" placeholder="Full Name" />
                    </div>
                    <div class="w-[85%] mb-4 flex">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiMail className='text-white ' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white rounded-r-md  pl-3" placeholder="Email" />
                    </div>
                    <div class="w-[85%] mb-4 flex">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiLock className='text-white' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white rounded-r-md  pl-3" placeholder="Password" />
                    </div>
                    <div class="w-[85%] flex mb-2">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiLock className='text-white' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white pl-3 rounded-r-md " placeholder="Confirm Password" />
                    </div>
                    <div className='w-[85%] h-1/5 flex flex-col'>
                        <div className=' h-1/3 w-full flex mb-3'>
                            <div className='w-1/2 h-full flex items-center'><input type="checkbox" className='mr-5' /><div className='text-[#a1a4b5] text-sm '>Remember Me</div></div>
                            
                        </div>
                        <div className=' h-[80%] relative'><button className='absolute w-full h-[60%] rounded-md text-white mb-6 bg-[#019ff8] bottom-2'>Register</button></div>
                    </div>
                    <div className='w-full flex items-center justify-center'><div className='text-[#a1a4b5] mr-2 font-normal text-sm'>Already have an account?</div><button className='text-[#019ff8] font-normal text-sm'>Sign in</button></div>
                    <div className='text-[#a1a4b5] mr-2 font-normal text-sm mt-4'>- Register With -</div>
                    <div className='flex w-full items-center justify-center mt-4'>
                        <button className='bg-white rounded-full h-[35px] w-[35px] mr-3 flex justify-center text-[#3b5998] items-center hover:bg-[#3b5998] hover:text-white duration-300'><FaFacebookF/></button>
                        <button className='bg-white rounded-full h-[35px] w-[35px] mr-3 flex justify-center text-[#1da1f2] items-center hover:bg-[#1da1f2] hover:text-white duration-300'><FaTwitter/></button>
                        <button className='bg-white rounded-full h-[35px] w-[35px]  flex justify-center text-[#e33094] items-center hover:bg-[#e33094] hover:text-white duration-300'><FaInstagram/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register