import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

const Tables = () => {
    return (
        <div className='w-full h-max flex flex-col p-6 bg-[#191D33]'>
            <p className='text-[20px] text-[#A1A4A0]'>Advanced Form Elements</p>
            <div className='flex flex-row justify-between w-full h-auto mt-4'>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Basic Table</p>
                        <p className='text-[15px] text-gray-400'>Using the most basic table markup, here’s how .table-based tables look in Bootstrap.</p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-1/2 flex justify-start py-2 text-white">Name</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Date of Birth</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Ashley Briggs</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Jun 21, 1961</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Carl Jenkins</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">May 15, 1948</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Bertha Martin</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Sep 14, 1965</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Stacie Hall</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Apr 2, 1971</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Amanda Jones</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">	Oct 12, 1966</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Basic Table</p>
                        <p className='text-[15px] text-[#A1A4A0]'>Use
                            <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> .table-striped</span>
                            to add zebra-striping to any table row within the
                            <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>`tbody`</span>.
                        </p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-1/2 flex justify-start py-2 text-white">Name</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Date of Birth</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Ashley Briggs</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Jun 21, 1961</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Carl Jenkins</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">May 15, 1948</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="bg-[#171E32] border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Bertha Martin</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Sep 14, 1965</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Stacie Hall</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">Apr 2, 1971</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34] bg-[#171E32]">
                                    <td class="w-1/2 flex justify-start py-2 text-gray-400">Amanda Jones</td>
                                    <td class="w-1/4 px-10 py-2 text-gray-400">	Oct 12, 1966</td>
                                    <td class="w-1/4 px-14 py-2">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full h-auto mt-4'>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Condensed Table</p>
                        <p className='text-[15px] text-[#A1A4A0]'>Add
                            <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> .table-sm</span>
                            to make tables more compact by cutting cell padding in half.
                        </p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full h-auto">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-2/3 flex justify-start py-2 text-white">
                                        Operation System</th>
                                    <th class="w-1/6 py-2 text-white text-right">Users</th>
                                    <th class="w-1/6  py-2 text-white text-right">Share</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Windows</td>
                                    <td class="w-1/6  text-gray-400 text-right">8.232</td>
                                    <td class="w-1/6  text-gray-400 text-right">40%</td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Mac OS</td>
                                    <td class="w-1/6  text-gray-400 text-right">3.322</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Linux</td>
                                    <td class="w-1/6  text-gray-400 text-right">4.232</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">FreeBSD</td>
                                    <td class="w-1/6  text-gray-400 text-right">1.121</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Chrome OS</td>
                                    <td class="w-1/6  text-gray-400 text-right">1.331</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Android</td>
                                    <td class="w-1/6  text-gray-400 text-right">2.301</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">iOS</td>
                                    <td class="w-1/6  text-gray-400 text-right">3.322</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Windows Phone</td>
                                    <td class="w-1/6  text-gray-400 text-right">3.322</td>
                                    <td class="w-1/6  text-gray-400 text-right">20%</td>
                                </tr>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-2/3 flex justify-start  text-gray-400">Other</td>
                                    <td class="w-1/6  text-gray-400 text-right">1.181	</td>
                                    <td class="w-1/6  text-gray-400 text-right">14%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Hoverable Rows</p>
                        <p className='text-[15px] text-[#A1A4A0]'>Add
                            <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'>.table-hover</span>
                            to enable a hover state on table rows within a
                            <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>`tbody`</span>.
                        </p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-1/2 text-start py-2 text-white">Name</th>
                                    <th class="w-1/3 text-center py-2 text-white">Date of Birth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-[#171E32] border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start items-center py-2 text-gray-400">
                                        <td className='bg-[#5F6379] flex justify-center items-center rounded-full w-[50px] h-[50px]'><FcBusinessman className='w-10 h-16'></FcBusinessman></td>
                                        Ashley Briggs</td>
                                    <td class="w-1/4 text-center py-5 text-gray-400">Jun 21, 1961</td>

                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start items-center py-2 text-gray-400">
                                        <td className='bg-[#5F6379] flex justify-center items-center rounded-full w-[50px] h-[50px]'><FcBusinesswoman className='w-10 h-16'></FcBusinesswoman></td>
                                        Carl Jenkins</td>
                                    <td class="w-1/4 text-center py-5 text-gray-400">May 15, 1948</td>

                                </tr>
                                <tr class="bg-[#171E32] border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start items-center py-2 text-gray-400">
                                        <td className='bg-[#5F6379] flex justify-center items-center rounded-full w-[50px] h-[50px]'><FcBusinessman className='w-10 h-16'></FcBusinessman></td>
                                        Bertha Martin</td>
                                    <td class="w-1/4 text-center  py-5 text-gray-400">Sep 14, 1965</td>

                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start items-center py-2 text-gray-400">
                                        <td className='bg-[#5F6379] flex justify-center items-center rounded-full w-[50px] h-[50px]'><FcBusinessman className='w-10 h-16'></FcBusinessman></td>
                                        Stacie Hall</td>
                                    <td class="w-1/4 text-center  py-5 text-gray-400">Apr 2, 1971</td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full h-auto mt-4'>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Bordered Table</p>
                        <p className='text-[15px] text-[#A1A4A0]'>Add
                            <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'>.table-bordered</span>
                            for borders on all sides of the table and cells.
                        </p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-1/2 text-start py-2 px-2 border border-[#3C3D34] text-white">Name</th>
                                    <th class="w-1/4 text-center py-2 border border-[#3C3D34] text-white">Date of Birth</th>
                                    <th class="w-1/4 text-center py-2 border border-[#3C3D34] text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 text-start py-2 px-2 border border-[#3C3D34] text-gray-400">Ashley Briggs</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4 text-gray-400">Jun 21, 1961</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 text-start py-2 px-2  border border-[#3C3D34] text-gray-400">Carl Jenkins</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4 text-gray-400">May 15, 1948</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 text-start py-2 px-2 border border-[#3C3D34] text-gray-400">Bertha Martin</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4 text-gray-400">Sep 14, 1965</td>
                                    <td class="w-1/4  border border-[#3C3D34] text-center py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 text-start py-2 px-2 border border-[#3C3D34] text-gray-400">Stacie Hall</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4 text-gray-400">Apr 2, 1971</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-1/2 text-start py-2 px-2 border border-[#3C3D34] text-gray-400">Amanda Jones</td>
                                    <td class="w-1/4 border border-[#3C3D34] text-center py-4 text-gray-400">	Oct 12, 1966</td>
                                    <td class="w-1/4 border border-[#3C3D34] py-4 text-center">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[49%] h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                        <p className='text-[20px] text-white'>Contextual Classes</p>
                        <p className='text-[15px] text-[#A1A4A0]'>Use contextual classes to color table rows or individual cells.
                        </p>
                    </div>
                    <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-1/2 flex justify-start py-2 text-white">Name</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Date of Birth</th>
                                    <th class="w-1/4 px-4 py-2 text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b  border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-4 text-gray-400">Ashley Briggs</td>
                                    <td class="w-1/4 px-10 py-4 text-gray-400">Jun 21, 1961</td>
                                    <td class="w-1/4 px-14 py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b bg-[#CCE6FF] border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-4 text-black">Carl Jenkins</td>
                                    <td class="w-1/4 px-10 py-4 text-gray-400">May 15, 1948</td>
                                    <td class="w-1/4 px-14 py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class=" border-b border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-4 text-gray-400">Bertha Martin</td>
                                    <td class="w-1/4 px-10 py-4 text-gray-400">Sep 14, 1965</td>
                                    <td class="w-1/4 px-14 py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b bg-[#D1F6E1] border-[#3C3D34]">
                                    <td class="w-1/2 flex justify-start py-4 text-black">Stacie Hall</td>
                                    <td class="w-1/4 px-10 py-4 text-gray-400">Apr 2, 1971</td>
                                    <td class="w-1/4 px-14 py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                                <tr class="border-b border-[#3C3D34] ">
                                    <td class="w-1/2 flex justify-start py-4 text-gray-400">Amanda Jones</td>
                                    <td class="w-1/4 px-10 py-4 text-gray-400">	Oct 12, 1966</td>
                                    <td class="w-1/4 px-14 py-4">
                                        <button class="text-gray-500 px-2 py-1"><GoPencil /></button>
                                        <button class="text-gray-500 px-2 py-1"><MdDeleteOutline /></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full h-auto mt-4 bg-[#293146] rounded-md'>
                <div className='flex justify-between flex-row items-center w-full h-[50px] p-3'>
                    <p className='text-[20px] text-white'>Bordered Table</p>
                    <p className='text-[15px] text-[#A1A4A0]'>Add
                        <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'>.table-bordered</span>
                        for borders on all sides of the table and cells.
                    </p>
                </div>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <div className='w-full h-auto bg-[#293146] flex flex-col rounded-md'>
                    <div className='flex w-full h-auto p-6'>
                        <table class="table-auto border-collapse border-b border-[#3C3D34] w-full">
                            <thead className=''>
                                <tr class="border-b border-[#3C3D34]">
                                    <th class="w-[3%] text-start py-2 text-white">#</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10 py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>
                                    <th class="w-1/10  py-2 text-white">Heading</th>                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-[3%] text-start py-2 text-white">1</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-[3%] text-start py-2 text-white">2</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    
                                </tr>
                                <tr class="border-b border-[#3C3D34]">
                                    <td class="w-[3%] text-start py-2 text-white">3</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    <td className='py-2 text-center text-gray-400 w-1/10'>Cell</td>
                                    
                                </tr>                             
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <p className='text-[15px] font-medium text-white mt-6'>© 2025 <span className='font-normal hover:text-blue-400'>Multipurpose Themes.</span> All Rights Reserved.</p>
        </div>
    )
}

export default Tables
