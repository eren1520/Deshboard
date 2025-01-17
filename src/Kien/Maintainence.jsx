import React from 'react'
import kurukuru from './assets/kurukuru.png'
import maintain from './assets/maintainence.png'
import pegasus from './assets/pegasus.png'
import '../App.css';
import logo from './assets/cogwheel.png'
import mem from './assets/mem1.png'
const Maintainence = () => {
    return (
        <div className='bg-[#171e32] w-screen h-screen relative flex flex-col items-center justify-center'>
            <div className="App flex">
                
                    <img src={mem} className="App-logo" alt="logo" />
                    <img src={kurukuru} className="App-logo" alt="logo" />
              
            </div>
            <img src={pegasus} className="App-logo absolute bottom-0 left-11" alt="logo" />
            <div className='Main-logo flex flex-col  items-center justify-center'>
            <div className='text-slate-200 text-8xl mb-3'>UNDER MAINTENANCE!</div>
            <div className='text-slate-200 text-3xl mb-1'>We're sorry for the inconvenience.</div>
            <div className='text-slate-400 text-lg mb-3'>Please check back later.</div>
            <button className=' w-[9%] py-2 px-4 rounded-md text-white mb-5 mt-2 bg-[#019ff8]  '>Back to Dashboard</button>
          </div>
            <img src={maintain} className='absolute bottom-0 right-0 h-[70%] w-[34%] ' />

        </div>
    )
}

export default Maintainence