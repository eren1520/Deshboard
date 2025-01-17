import React from 'react'
import er500 from './assets/505.png'

const namtram = () => {
    return (
        <div className='bg-[#171e32] w-screen h-screen relative flex flex-col items-center justify-center'>
            <div className='text-slate-200 text-8xl mb-3'>500</div>
            <div className='text-slate-200 text-3xl mb-1'>Uh-Ah</div>
            <div className='text-slate-400 text-lg mb-3'>Internal Server Error !</div>
            <button className=' w-[9%] py-2 px-4 rounded-md text-white mb-5 mt-2 bg-[#019ff8]  '>Back to Dashboard</button>
            <div className='text-slate-400 text-lg mb-3'>--OR--</div>
            <div className='text-slate-400 text-lg mb-3'>Please try after some time</div>
            <img src={er500} className='absolute bottom-0 right-0 h-[70%] w-[38%] '/>
            
        </div>
    )
}

export default namtram