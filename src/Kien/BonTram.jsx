import React from 'react'
import er404 from './assets/404.png'
import { SlMagnifier } from "react-icons/sl";
const BonTram = () => {
    return (
        <div className='bg-[#171e32] w-screen h-screen relative flex flex-col items-center justify-center'>
            <div className='text-slate-200 text-8xl mb-3'>404</div>
            <div className='text-slate-200 text-3xl mb-1'>Page not found !</div>
            <div className='text-slate-400 text-lg mb-3'>It seems that this page doesn't exist</div>
            <button className=' w-[9%] py-2 px-4 rounded-md text-white mb-5 mt-2 bg-[#019ff8]  '>Back to Dashboard</button>
            <div class="w-[25%] flex mb-2">
                        
                        <input type="text" className=" h-[35px] w-full bg-[#2d314c] text-white pl-3 rounded-l-sm " placeholder="Search" />
                        <button className='bg-[#019ff8] h-[35px] w-[35px] flex items-center justify-center rounded-r-md '> <SlMagnifier className='text-white' /></button>
                    </div>
            <img src={er404} className='absolute bottom-0 right-0 h-[70%] w-[38%] '/>
            
        </div>
    )
}

export default BonTram