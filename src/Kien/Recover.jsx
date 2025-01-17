import React from 'react'
import bg from './assets/login.png'
import { CiLock } from "react-icons/ci";

const Recover = () => {
    return (
        <div>
            <img src={bg} className='h-screen w-screen relative' />
            <div className='absolute bg-slate-800 opacity-35 w-screen h-screen top-0'></div>
            <div className='absolute top-0 flex justify-center items-center w-screen h-screen'>
                <div className='bg-[#2d314c] h-[27%] w-[28%] shadow-md rounded-lg flex flex-col  items-center'>

                    
                    <div className='text-2xl text-[#019ff8] mt-5 font-bold'>Forgot Password ?</div>
                    <div className='text-[#a1a4b5] text-sm mt-1 mb-6'>Enter your email to reset your password.</div>
                    <div class="w-[85%] flex mb-4 mt-2">
                        <div className='bg-[#0f1421] h-[35px] w-[35px] flex items-center justify-center rounded-l-md '> <CiLock className='text-white' /></div>
                        <input type="text" className=" h-[35px] w-full bg-[#191d33] text-white pl-3 rounded-r-md " placeholder="Password" />
                    </div>
                    <button className=' w-[85%] h-[15%] rounded-md text-white mb-5 mt-2 bg-[#019ff8] bottom-0 '>Recover</button>
                    
                </div>

            </div>
        </div>
    )
}

export default Recover