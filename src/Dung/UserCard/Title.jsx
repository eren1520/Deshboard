import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

export const Title = () => {
  return (
    <div className='flex flex-row items-center px-5 py-5 text-white '>
        <h1 className='text-xl mr-7'>User Box </h1>
        <IoHomeOutline />
        <span className="mx-2 text-blue-500">-</span>
        <p className='text-white'>Box Cards</p>
        <span className="mx-2 text-blue-500">-</span>
        <p className='text-[#657283]'>User Box</p>
    </div>
  )
}
