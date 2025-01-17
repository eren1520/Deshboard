import React from 'react'
import bg from './assets/login.png'
import { CiLock } from "react-icons/ci";
import img1 from './assets/pfp.jpg'
const Login = () => {
    return (
        <div>
            <img src={bg} className='h-screen w-screen relative' />
            <div className='absolute bg-slate-800 opacity-35 w-screen h-screen top-0'></div>
            <div className='absolute top-0 flex justify-center items-center w-screen h-screen'>
                <div className='bg-[#2d314c] h-1/2 w-[28%] shadow-md rounded-lg flex flex-col  items-center'>

                    <img src={img1} className='w-[150px] h-[150px] rounded-full mt-10' />
                    <div className='text-2xl text-[#019ff8] mt-2 font-bold'>ME MAY BEO</div>
                    <div className='text-[#a1a4b5] text-sm mt-3 mb-4'>Enter your password to retrieve your session.</div>
                    <div class="w-[85%] flex mb-4">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiLock className='text-white' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white pl-3 rounded-r-md " placeholder="Password" />
                    </div>
                    <button className=' w-[85%] h-[8%] rounded-md text-white mb-5 mt-2 bg-[#019ff8] bottom-0'>Unlock</button>
                    <div className='w-full flex items-center justify-center'><div className='text-[#a1a4b5] mr-1 font-normal text-sm'>Or</div><button className='text-[#019ff8] font-normal text-sm mr-1'>Sign in</button><div className='text-[#a1a4b5] mr-1 font-normal text-sm'>as a Different User</div></div>
                </div>

            </div>
        </div>
    )
}

export default Login