import React, { useState } from 'react'
import { FaInbox, FaStar, FaRegClock, FaFirstdraft, FaPaperPlane, FaTrashAlt } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { RiSpamFill } from "react-icons/ri";

const Inbox = ({ onInboxClick, onStarredClick }) => {
    return (
        <div className="flex flex-col bg-[#293146] text-[#B4B7BC]  p-4">
            <button className="bg-[#DA224F] text-white text-center py-2 rounded">Compose</button>
            <ul className="flex flex-col space-y-2 py-4">
                <li className="flex justify-between">
                    <div className="flex items-center">
                        <FaInbox />
                        <button onClick={onInboxClick} className="text-white px-2">
                            Inbox
                        </button>
                    </div>
                    <span className="bg-red-500 text-white rounded-full px-2">7</span>
                </li>
                <li className="flex justify-between">
                    <div className="flex items-center">
                        <FaStar />
                        <button onClick={onStarredClick} className="text-white px-2">
                            Starred
                        </button>
                    </div>
                </li>
                <li className="flex items-center">
                    <FaRegClock />
                    <span className='px-2'>Snoozed</span>
                </li>
                <li className="flex items-center ">
                    <FaFirstdraft />
                    <span className='px-2'>Draft</span>
                </li>
                <li className="flex items-center">
                    <FaPaperPlane />
                    <span className='px-2'>Sent Mail</span>
                </li>
                <li className="flex items-center">
                    <FaTrashAlt />
                    <span className='px-2'>Trash</span>
                </li>
                <li className="flex items-center">
                    <MdOutlineLabelImportant />
                    <span className='px-2'>Important</span>
                </li>
                <li className="flex items-center">
                    <RiSpamFill />
                    <span className='px-2'>Spam</span>
                </li>
                <div className='px-4 h-[1px] w-full bg-gray-500'></div>
            </ul>

            <div>
                <h3 className="text-sm font-semibold pt-8">LABELS</h3>
                <ul className="space-y-2 py-4">
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                        <span>Updates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span>Friends</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-teal-400"></span>
                        <span>Family</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                        <span>Social</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span>Important</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                        <span>Promotions</span>
                    </li>
                </ul>
            </div>

            {/* Storage Section */}
            <div className="flex flex-col space-y-2">
                <div className="inline-block bg-gray-300 px-2 py-1 rounded">
                    <p className="text-sm font-semibold text-[#191D33]">FREE</p>
                </div>
                <span className="text-sm font-medium">STORAGE</span>
                <div>
                    <div className="relative w-full h-2 bg-gray-700 rounded">
                        <div
                            className="absolute h-full bg-teal-500 rounded"
                            style={{ width: "46%" }}
                        ></div>
                    </div>
                    <p className="text-sm">7.02 GB (46%) of 15 GB used</p>

                </div>
            </div>

        </div>
    );
};

export default Inbox
