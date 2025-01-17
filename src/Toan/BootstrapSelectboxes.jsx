import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const BootstrapSelectboxes = () => {
    const [activeButton, setActiveButton] = useState(null);
    
        const toggleDropdown = (buttonIndex) => {
            setActiveButton(activeButton === buttonIndex ? null : buttonIndex);
        };
    
  return (
   <div className="relative flex flex-col w-full h-auto">
               <div className="relative flex flex-row justify-between w-full h-auto space-x-4">
                   <div className="relative flex flex-col w-[32%] h-auto">
                       <label className="block mt-3 text-white font-medium text-[20px]">Select box</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#07090F] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(1)}
                       >
                           Lorem<FiChevronDown />
                       </button>
                       {activeButton === 1 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50 ">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}
                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                   <label className="block mt-3 text-white font-medium text-[20px]">Select boxes with Option groups</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#07090F] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(2)}
                       >
                            Lorem<FiChevronDown />
                       </button>
                       {activeButton === 2 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}

                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                   <label className="block mt-3 text-white font-medium text-[20px]">Multiple select boxes</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#07090F] text-gray-400 font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(3)}
                       >
                           No think seleter<FiChevronDown />
                       </button>
                       {activeButton === 3 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg  z-50">
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                           
                       </div>
                       )}
                   </div>
               </div>
               <p className='text-[17px] mt-2 text-white font-medium'>With colored Button Classes</p>
               <div className="relative flex flex-row justify-between w-full h-auto space-x-4">
                   <div className="relative flex flex-col w-[32%] h-auto">
                       <label className="block mt-3 text-white font-medium text-[20px]">Select box</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#0196E7] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(4)}
                       >
                           Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 4 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50 ">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}
                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                   <label className="block mt-3 text-white font-medium text-[20px]">Select boxes with Option groups</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#571CD6] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(5)}
                       >
                            Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 5 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}

                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                   <label className="block mt-3 text-white font-medium text-[20px]">Multiple select boxes</label>
                       <button
                           className=" w-full h-[40px] px-2 bg-[#F0BD01] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(6)}
                       >
                            Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 6 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg  z-50">
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>                         
                       </div>
                       )}
                   </div>
               </div>
               <div className="relative flex flex-row justify-between w-full h-auto mt-4 space-x-4">
                   <div className="relative flex flex-col w-[32%] h-auto">
                      
                       <button
                           className=" w-full h-[40px] px-2 bg-[#DA224F] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(7)}
                       >
                           Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 7 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50 ">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}
                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                  
                       <button
                           className=" w-full h-[40px] px-2 bg-[#3FA999] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(8)}
                       >
                            Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 8 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg z-50">
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                               <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>
                               
                           </div>
                       )}

                   </div>
                   <div className="relative flex flex-col w-[32%] h-auto">
                   
                       <button
                           className=" w-full h-[40px] px-2 bg-[#07090F] text-white font-bold rounded-md flex items-center justify-between"
                           onClick={() => toggleDropdown(9)}
                       >
                            Sed posuere metus vel maximus fringilla<FiChevronDown />
                       </button>
                       {activeButton === 9 && (
                           <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg  z-50">
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Ipsum</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Lorem</button>
                           <button className="flex justify-start w-full px-2 text-white hover:bg-white hover:text-blue-400">Dummy</button>                         
                       </div>
                       )}
                   </div>
               </div>

           </div>
  )
}

export default BootstrapSelectboxes
