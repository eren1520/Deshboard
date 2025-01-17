import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const SelectElements = () => {
    const [activeButton, setActiveButton] = useState(null);

    const toggleDropdown = (buttonIndex) => {
        setActiveButton(activeButton === buttonIndex ? null : buttonIndex);
    };

    return (
        <div className="relative flex flex-col w-full h-auto">
            <div className="relative flex flex-row justify-between w-full h-auto space-x-5">
                <div className="relative flex flex-col w-[24%] h-auto">
                    <label className="block mt-3 text-white form-label">Minimal</label>
                    <button
                        className=" w-full h-[40px] px-2 bg-[#191D33] text-gray-400 font-bold rounded-md flex items-center justify-between"
                        onClick={() => toggleDropdown(1)}
                    >
                        Alabama <FiChevronDown />
                    </button>
                    {activeButton === 1 && (
                        <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg p-4 z-50">
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Texas</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Alaska</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Califonia</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Delaware</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Washinton</button>
                        </div>
                    )}
                </div>
                <div className="relative flex flex-col w-[24%] h-auto">
                    <label className="block mt-3 text-white form-label">Disabled</label>
                    <button
                        className=" w-full h-[40px] px-2 bg-[#191D33] text-gray-400 font-bold rounded-md flex items-center justify-between"
                        onClick={() => toggleDropdown(2)}
                    >
                        Alabama <FiChevronDown />
                    </button>
                </div>
                <div className="relative flex flex-col w-[24%] h-auto">
                    <label className="block mt-3 text-white form-label">Multiple</label>
                    <button
                        className=" w-full h-[40px] px-2 bg-[#191D33] text-gray-400 font-bold rounded-md flex items-center justify-between"
                        onClick={() => toggleDropdown(3)}
                    >
                        Selete a Start
                    </button>
                    {activeButton === 3 && (
                        <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg p-4 z-50">
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Texas</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Alaska</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Califonia</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Delaware</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Washinton</button>
                        </div>
                    )}
                </div>
                <div className="relative flex flex-col w-[24%] h-auto">
                    <label className="block mt-3 text-white form-label">Disabled Result</label>
                    <button
                        className=" w-full h-[40px] px-2 bg-[#191D33] text-gray-400 font-bold rounded-md flex items-center justify-between"
                        onClick={() => toggleDropdown(4)}
                    >
                        Alabama <FiChevronDown />
                    </button>
                    {activeButton === 4 && (
                        <div className="absolute flex flex-col mt-[80px] left-0 w-full bg-[#191D33] shadow-lg rounded-lg p-4 z-50">
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Texas</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Alaska</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Califonia</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Delaware</button>
                            <button className="flex justify-start w-full text-white hover:bg-blue-400">Washinton</button>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default SelectElements
