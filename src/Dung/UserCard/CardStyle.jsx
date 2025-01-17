import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { BiLoaderCircle } from "react-icons/bi";

export const CardStyle = () => {
    return (
        <div className='flex flex-col px-5 py-2'>
            <div className='bg-[#e2f3fc] h-16 rounded-md'>
                <p className='px-5 py-4 text-2xl text-[#44a8f8]'>Card Style</p>
            </div>

            <div className='flex flex-row justify-between py-5 '>
                <div className='flex flex-row bg-[#293146] py-3 w-[49%] rounded-md  '>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape4.jpg"
                        className="w-auto h-48" />
                    <div className='px-3 text-white'>
                        <p className='px-6 font-bold'>Card title</p>
                        <p className='px-6 py-5'><span className='mt-5'>This is a wider card with supporting text below as a</span><br /><span>natural lead-in to additional content. This content is a</span><br /><span>little bit longer.</span></p>
                        <p className='px-6 py-1'>Last updated 3 mins ago</p>

                    </div>
                </div>
                <div className='flex flex-row bg-[#293146] py-3 w-[49%] rounded-md '>
                    <div className='px-3 text-white'>
                        <p className='px-6 font-bold'>Card title</p>
                        <p className='px-6 py-5'><span>This is a wider card with supporting text below as a</span><br /><span>natural lead-in to additional content. This content is a</span><br /><span>little bit longer.</span></p>
                        <p className='px-6 py-1'>Last updated 3 mins ago</p>

                    </div>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape1.jpg"
                        className="w-auto h-48" />
                </div>
            </div>

            <div className='flex flex-row justify-between py-5 '>
                <div className='flex flex-col bg-[#293146] py-3 text-white w-[49%] px-5 rounded-md'>
                    <p className='font-bold'>Special title treatment</p>
                    <p className='py-3'>With supporting text below as a natural lead-in to additional content.</p>
                    <button className='bg-[#e2f3fc] text-[#44a8f8] hover:bg-[#019ff8] hover:text-white rounded-md py-3'>Go somewhere</button>
                </div>
                <div className='flex flex-col bg-[#293146] py-3 text-white w-[49%] items-end px-5 rounded-md '>
                    <p className='font-bold'>Special title treatment</p>
                    <p className='py-3'>With supporting text below as a natural lead-in to additional content.</p>
                    <button className='bg-[#e2f3fc] text-[#44a8f8] hover:bg-[#019ff8] hover:text-white w-full rounded-md py-3'>Go somewhere</button>
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col text-white bg-[#293146] w-[32%] py-5 rounded-md '>
                    <p className='px-5 '>Featured</p>
                    <div className='bg-gray-500 h-[1px] mt-3 '></div>
                    <p className='px-5 pt-3 font-bold'>Special title treatment</p>
                    <p className='px-5 pt-3'>With supporting text below as a natural lead-in to<br />additional content.</p>
                    <button className='py-2 mt-3 ml-5 text-white rounded-md bg-[#019ff8] w-44'>Go somewhere</button>
                </div>

                <div className='flex flex-col text-white bg-[#293146] w-[32%] h-[80%] py-5 rounded-md'>
                    <p className='px-5 '>Quote</p>
                    <div className='bg-gray-500 h-[1px] mt-3 '></div>
                    <p className='px-5 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Integer posuere erat a ante.</p>
                    <p className='px-5 pt-3'>Someone famous in Source Title</p>
                </div>

                <div className='flex flex-col text-white bg-[#293146] w-[32%] h-[90%] py-3 rounded-md'>
                    <p className='px-5'>Featured</p>
                    <div className='bg-gray-500 h-[1px] mt-5 '></div>
                    <button className='py-2 mt-6 ml-5 text-white bg-[#019ff8] rounded-md w-44'>Go somewhere</button>
                    <div className='bg-gray-500 h-[1px] mt-5'></div>
                    <p className='px-5 mt-3'>2 days ago</p>
                </div>
            </div>

            <div className='flex flex-row justify-between py-5'>
                <div className='flex flex-col bg-[#293146] rounded-md w-[24%]'>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape1.jpg"
                        className="w-auto h-48 rounded-md" />
                    <div className='py-4'>
                        <p className='px-5 pt-3 font-bold text-white'>Card title</p>
                        <p className='px-5 pt-3 text-white'>Some quick example text to build on<br />the card title and make up the bulk of <br />the card's content. Some quick <br />example text to build on the card title <br />and make up.</p>
                        <button className='bg-[#e2f3fc] text-[#44a8f8] hover:bg-[#019ff8] hover:text-white w-24 h-10 mt-3 ml-5 rounded-md'>Button</button>
                    </div></div>

                <div className='flex flex-col bg-[#293146] h-[90%] rounded-md w-[24%] '>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape2.jpg"
                        className="w-auto h-48 rounded-md" />
                    <div className='py-6'>
                        <p className='px-5 font-bold text-white'>Card title</p>
                        <p className='px-5 pt-3 text-white'>Some quick example text to build on<br />the card..</p>
                        <div className='bg-[#191d33] text-white px-5 mt-3 h-8 pt-1'>Cras justo odio</div>
                        <div className='flex flex-row '>
                            <button className='bg-[#293146] hover:text-[#019ff8] px-5 pt-3 text-white "whitespace-nowrap'>Card link</button>
                            <button className='bg-[#293146] hover:text-[#019ff8] px-5 pt-3 text-white "whitespace-nowrap'>Another link</button>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col bg-[#293146] rounded-md h-[80%] w-[24%] '>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape3.jpg"
                        className="w-auto h-48 rounded-md" />
                    <div className='py-3 '>
                        <p className='px-5 pt-2 text-white'>Some quick example text to build on<br />the card title and make up the bulk of <br />the card's content. Some quick <br />example text to build on the card title <br />and make up.</p>
                        <button className='bg-[#e2f3fc] text-[#44a8f8] hover:bg-[#019ff8] hover:text-white w-24 h-10 mt-3 ml-5 rounded-md'>Button</button>
                    </div>

                </div>
                <div className='flex flex-col bg-[#293146] rounded-md py-5 h-[90%] w-[24%] '>
                    <p className='px-5 pt-1 font-bold text-white'>Card title</p>
                    <p className='px-5 text-white'>Support card subtitle</p>
                    <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape4.jpg"
                        className="w-auto h-48 mt-4" />

                    <p className='px-5 pt-4 text-white'>Some quick example text to build on<br />the card title and make up the bulk of <br />the card's content.</p>
                    <div className='flex flex-row '>
                        <button className='bg-[#293146] hover:text-[#019ff8] px-5 pt-3 text-white "whitespace-nowrap'>Card link</button>
                        <button className='bg-[#293146] hover:text-[#019ff8] px-5 pt-3 text-white "whitespace-nowrap'>Another link</button>
                    </div>

                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%] '>
                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape5.jpg"
                            className="w-auto rounded-md h-[70%] " />
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                            <div className='bg-gray-500 h-[1px] mt-3 '></div>
                            <span className='flex flex-row justify-between pt-3'>Last updated 3 mins ago<span className='flex flex-row pt-1 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /><span className='pt-0 text-white'>(12)</span></span></span></div>

                    </div>

                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%]'>
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                        </div>

                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape6.jpg"
                            className="w-auto rounded-md h-[60%] " />
                        <div className='flex flex-row justify-between px-5 mt-5 text-white'>
                            <p>Nov 12, 11:25 am</p>
                            <p>Due in 12 days</p>
                        </div>

                    </div>

                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%] '>
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                        </div>
                        <div className='bg-gray-500 h-[1px] mt-3 '></div>
                        <div className='flex flex-row justify-start px-5 mt-3'> <BiLoaderCircle className='justify-center mr-2'></BiLoaderCircle>
                        <p className='justify-center text-white '> Processing...</p></div>
                       
                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape7.jpg"
                            className="w-auto mt-3 rounded-md h-[60%]  " />

                    </div>
                    
                </div>
                <div className='flex flex-row justify-between pt-5'>
                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%] '>
                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape5.jpg"
                            className="w-auto rounded-md h-[70%] " />
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                            <div className='bg-gray-500 h-[1px] mt-3 '></div>
                            <span className='flex flex-row justify-between pt-3'>Last updated 3 mins ago<span className='flex flex-row pt-1 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /><span className='pt-0 text-white'>(12)</span></span></span></div>

                    </div>

                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%]'>
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                        </div>

                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape6.jpg"
                            className="w-auto rounded-md h-[60%] " />
                        <div className='flex flex-row justify-between px-5 mt-5 text-white'>
                            <p>Nov 12, 11:25 am</p>
                            <p>Due in 12 days</p>
                        </div>

                    </div>

                    <div className='flex flex-col text-white bg-[#293146] rounded-md w-[32%] '>
                        <div className='px-5 py-5'> <p className='pt-3 font-bold'>Card title</p>
                            <p className='pt-3'>This is a wider card with supporting text below as a <br />natural lead-in to additional content. This content is a <br />little bit longer.</p>
                        </div>
                        <div className='bg-gray-500 h-[1px] mt-3 '></div>
                        <div className='flex flex-row justify-start px-5 mt-3'> <BiLoaderCircle className='justify-center mr-2'></BiLoaderCircle>
                        <p className='justify-center text-white '> Processing...</p></div>
                       
                        <img src="https://edulearn-lms-admin-template.multipurposethemes.com/images/gallery/landscape7.jpg"
                            className="w-auto mt-3 rounded-md h-[60%]  " />

                    </div>
                    
                </div>
            </div>

        </div>
    )
}
