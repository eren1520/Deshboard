import React, { useState } from 'react'

const ADDtron = () => {
    const [checkboxes, setCheckboxes] = useState({
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
            option7: false,
            option8: false,
            option9: false,
            option10: false,
            option11: false,
            option12: false,
            option13: false,
            option14: false,
            option15: false,
            option16: false,
    
        });
    
        const handleCheckboxChange = (key) => {
            setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
        };
    
  return (
    <div className="flex flex-col w-full h-auto">
            <div className="w-[95%] h-[50px] items-center flex justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option1}
                        onChange={() => handleCheckboxChange("option1")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Default</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option2}
                        onChange={() => handleCheckboxChange("option2")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Fuillin</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option3}
                        onChange={() => handleCheckboxChange("option3")}
                       className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Defaul-Diasble</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option4}
                        onChange={() => handleCheckboxChange("option4")}
                       className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">fill-Diasble</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option15}
                        onChange={() => handleCheckboxChange("option15")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">fill-Diasble</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option16}
                        onChange={() => handleCheckboxChange("option16")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">fill-Diasble</label>
                </div>

            </div>
            <p className='text-[20px] mt-8 text-white font-medium'> Basic Radio Button Design Colors</p>
            <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
            <div className="w-[70%] h-[50px] items-center flex justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option5}
                        onChange={() => handleCheckboxChange("option5")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Primary</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option6}
                        onChange={() => handleCheckboxChange("option6")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Success</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option7}
                        onChange={() => handleCheckboxChange("option7")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Info</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option8}
                        onChange={() => handleCheckboxChange("option8")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Warning</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option9}
                        onChange={() => handleCheckboxChange("option9")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Danger</label>
                </div>
            </div>
            <p className='text-[20px] mt-8 text-white font-medium'>Basic Radio Button Design Colors with Outline</p>
            <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
            <div className="w-[70%] h-[50px] items-center flex justify-between space-x-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option10}
                        onChange={() => handleCheckboxChange("option10")}
                       className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Primary</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option11}
                        onChange={() => handleCheckboxChange("option11")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Success</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option12}
                        onChange={() => handleCheckboxChange("option12")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Info</label>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option13}
                        onChange={() => handleCheckboxChange("option13")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Warning</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={checkboxes.option14}
                        onChange={() => handleCheckboxChange("option14")}
                        className="w-5 h-5 border border-gray-300 rounded-full appearance-none cursor-pointer form-checkbox checked:bg-blue-500 checked:border-blue-200"
                    />
                    <label className="text-white">Danger</label>
                </div>
            </div>
        </div>
  )
}

export default ADDtron
