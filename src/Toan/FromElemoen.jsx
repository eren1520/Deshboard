import React, { use, useRef, useState } from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import SelectElements from './SelectElements';
import BootstrapSelectboxes from './BootstrapSelectboxes';
import { IoIosClose } from "react-icons/io";
import ICheckInputs from './ICheckInputs';
import Aadas from './Aadas';
import ADDtron from './ADDtron';


const FromElemoen = () => {
    const [selectedValue, setSelectedValue] = useState(""); // Lưu trữ giá trị đã chọn
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const [selectedValues, setSelectedValues] = useState([]); // Lưu trữ danh sách giá trị đã chọn

    const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
    ];

    const handleChanges = (e) => {
        const { options } = e.target;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedValues(selected);
    };

    const [fileName, setFileName] = useState(""); // Lưu tên file giả lập

    const handleFakeFileSelect = () => {
        // Giả lập việc chọn file
        const fakeFileNames = ["example.pdf", "image.png", "document.docx"];
        const randomFile =
            fakeFileNames[Math.floor(Math.random() * fakeFileNames.length)];
        setFileName(randomFile);
    };
    const [selectedDate, setSelectedDate] = useState(""); // Lưu trữ ngày đã chọn

    const handleChangee = (e) => {
        setSelectedDate(e.target.value);
    };
    const [selectedMonth, setSelectedMonth] = useState(""); // Lưu trữ tháng đã chọn

    const handleChan = (e) => { //e doi tuong su kien
        setSelectedMonth(e.target.value);
    };

    const [seTime, setTime] = useState("");

    const handTiem = (e) => {
        setTime(e.target.value);
    };

    const [sesWeek, setWeek] = useState("");

    const handWeek = (e) => {
        setWeek(e.target.value);
    }

    const [number, setNumber] = useState(""); // Lưu trữ giá trị số đã nhập

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const [color, setColor] = useState("#000000"); // Lưu trữ mã màu đã chọn

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const [rangeValue, setRangeValue] = useState(50); // Lưu trữ giá trị range đã chọn

    const handleRange = (e) => {
        setRangeValue(e.target.value);
    };
    return (
        <div className='w-full h-max flex flex-col p-3 bg-[#191D33]'>
            <p className='text-[20px] text-[#A1A4A0]'>Advanced Form Elements</p>
            <div class="flex flex-col mt-2 w-full h-auto bg-[#293146] p-4 rounded-lg">
                <p className='text-[20px] text-white font-medium'>Input Types</p>
                <p className='text-[15px] text-[#A1A4A0]'>Most common form control, text-based input fields. Includes support for all HTML5 types:
                    <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> text</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'> password</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>datetime</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>datetime-local</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>date</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>month</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>time</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>week</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>number</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>email</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>url</span>,
                    <span className='px-2 py-[1px] ml-1 bg-[#191D33] text-[#D6336F]'>search</span>,
                    <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'>tel </span>, and
                    <br />
                    <span className='px-2 py-[1px] bg-[#191D33] text-[#D6336F]'>color</span> ,
                </p>
                <p className='text-[15px] text-white font-medium ml-2 mt-3'>Preview</p>
                <div className="w-full h-[2px] bg-[#3C3D34]">
                    <div className='w-[5%] h-full bg-blue-500'></div>
                </div>
                <div className='flex flex-row justify-between w-full h-auto'>
                    <div className='w-[49%] h-auto flex flex-col'>
                        <label for="simpleinput" class="form-label mt-3 text-white">Text</label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Email</label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Password</label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Show/Hide Password
                        </label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Placeholder</label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Text area</label>
                        <textarea className='w-full h-[80px] bg-[#191D33] rounded-md' name="" placeholder=""></textarea>
                        <label for="simpleinput" class="form-label mt-3 text-white">Readonly</label>
                        <input placeholder='Disabled value' class=" bg-[#191D33] h-[40px] px-2 rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Disabled</label>
                        <input placeholder='Readonly value' class=" bg-[#191D33] h-[40px] px-2 rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Static control</label>
                        <input placeholder='email@example.com' class=" bg-[#293146] h-[40px] rounded-md" />
                        <label for="simpleinput" class="form-label mt-3 text-white">Helping text</label>
                        <input placeholder='' class=" bg-[#191D33] h-[40px] rounded-md" />
                        <p className='text-[12px] text-white font-medium'>A block of help text that breaks onto a new line and may extend beyond one line.</p>
                    </div>
                    <div className='w-[49%] h-auto  flex flex-col'>
                        <div className="w-full">
                            <label htmlFor="inputSelect" className="block mt-3 text-white form-label">
                                Input Select
                            </label>
                            <select
                                id="inputSelect"
                                value={selectedValue}
                                onChange={handleChange}
                                className="w-full h-[40px] px-2 py-2 bg-[#191D33] text-gray-300 text-[13px] rounded-md shadow-sm focus:outline-none"
                            >
                                <option value="option1">1</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                                <option value="option4">4</option>
                            </select>
                            {/* {selectedValue && (
                                <p className="mt-2 text-sm text-gray-500">
                                    You selected: <span className="font-semibold text-gray-800">{selectedValue}</span>
                                </p>
                            )} */}
                        </div>
                        <div className="w-full">
                            <label htmlFor="inputSelect" className="block mt-3 text-white form-label">
                                Multiple Select
                            </label>
                            <select
                                id="multipleSelect"
                                multiple
                                value={selectedValues}
                                onChange={handleChanges}
                                className="w-full h-[85px] px-2 bg-[#191D33] text-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block mt-2 text-white form-label">
                                Default file input
                            </label>
                            <div className="flex items-center space-x-2 bg-[#191D33]">
                                <button
                                    onClick={handleFakeFileSelect}
                                    className="px-4 py-1 text-black bg-white shadow-sm "
                                >
                                    Choose File
                                </button>
                                <span className="text-sm text-gray-500">
                                    {fileName || "No file chosen"}
                                </span>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="datePicker" className="block mt-3 text-white form-label">
                                Date
                            </label>
                            <input
                                type="date"
                                id="datePicker"
                                value={selectedDate}
                                onChange={handleChangee}
                                className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="monthPicker" className="block mt-3 text-white form-label">
                                Month
                            </label>
                            <input
                                type="month"
                                id="monthPicker"
                                value={selectedMonth}
                                onChange={handleChan}
                                className="w-full px-2 py-2 bg-[#191D33] text-gray-400 rounded-lg shadow-sm"
                            />
                        </div>
                        <div className='w-full '>
                            <label htmlFor="timePicker" className="block mt-3 text-white form-label">
                                Time
                            </label>
                            <input
                                type="time"
                                id="timePicker"
                                value={seTime}
                                onChange={handTiem}
                                className="w-full px-2 py-2 bg-[#191D33] text-gray-400 rounded-lg"
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="weekPicker" className="block mt-3 text-white form-label">
                                Week
                            </label>
                            <input
                                type="week"
                                id="weekPicker"
                                value={sesWeek}
                                onChange={handWeek}
                                className="w-full px-2 py-2 bg-[#191D33] text-gray-400 rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="numberInput" className="block mt-3 text-white form-label">
                                Number
                            </label>
                            <input
                                type="number"
                                id="numberInput"
                                value={number}
                                onChange={handleNumber}
                                min="1"
                                max="100"
                                step="1"
                                className="w-full px-2 py-2 bg-[#191D33] text-gray-400 rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="colorPicker" className="block mt-3 text-white form-label">
                                Color:
                            </label>
                            <input
                                type="color"
                                id="colorPicker"
                                value={color}
                                onChange={handleColor}
                                className="w-full px-2 py-4 bg-[#191D33] text-gray-400 rounded-lg "
                            />
                            <p className="mt-2 text-sm text-gray-500">
                                Selected color:{" "}
                                <span className="font-semibold text-gray-800" style={{ color: color }}>
                                    {color}
                                </span>
                            </p>
                        </div>
                        <div className="w-full">
                            <label htmlFor="rangeInput" className="block mt-3 text-white form-label">
                                Range
                            </label>
                            <input
                                type="range"
                                id="rangeInput"
                                min="0"
                                max="100"
                                value={rangeValue}
                                onChange={handleRange}
                                className="w-full h-2 px-2 py-4 bg-[#191D33] text-gray-4000 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-4 w-full h-auto bg-[#293146] p-4 rounded-lg'>
                <p className='text-[20px] text-white font-medium'>Basic file inputs</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <div className="w-full">
                    <label className="block mt-2 text-white form-label">
                        Default file input example
                    </label>
                    <div className="flex items-center space-x-2 bg-[#191D33]">
                        <button
                            onClick={handleFakeFileSelect}
                            className="px-4 py-1 text-black bg-white shadow-sm "
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-gray-500">
                            {fileName || "No file chosen"}
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <label className="block mt-3 text-white form-label">
                        Multiple files input example
                    </label>
                    <div className="flex items-center space-x-2 bg-[#191D33]">
                        <button
                            onClick={handleFakeFileSelect}
                            className="px-4 py-1 text-black bg-white shadow-sm "
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-gray-500">
                            {fileName || "No file chosen"}
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <label className="block mt-3 text-white form-label">
                        Disabled file input example
                    </label>
                    <div className="flex items-center space-x-2 bg-[#191D33]">
                        <button
                            onClick={handleFakeFileSelect}
                            className="px-4 py-1 text-black bg-white shadow-sm "
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-gray-500">
                            {fileName || "No file chosen"}
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <label className="block mt-3 text-white form-label">
                        Small file input example
                    </label>
                    <div className="flex items-center space-x-2 bg-[#191D33]">
                        <button
                            onClick={handleFakeFileSelect}
                            className="px-4 py-1 text-black bg-white shadow-sm "
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-gray-500">
                            {fileName || "No file chosen"}
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <label className="block mt-3 text-white form-label">
                        Large file input example
                    </label>
                    <div className="flex items-center space-x-2 bg-[#191D33]">
                        <button
                            onClick={handleFakeFileSelect}
                            className="px-4 py-1 h-[40px] text-black bg-white shadow-sm "
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-gray-500">
                            {fileName || "No file chosen"}
                        </span>
                    </div>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Input masks</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <label htmlFor="datePicker" className="block mt-3 text-white form-label">Date masks:</label>
                <div className='w-full h-[40px] flex justify-between'>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><MdOutlineDateRange className='w-5 h-5 text-gray-400'></MdOutlineDateRange></div>
                        <input type="date" id="datePicker" value={selectedDate} onChange={handleChangee} className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><MdOutlineDateRange className='w-5 h-5 text-gray-400'></MdOutlineDateRange></div>
                        <input type="date" id="datePicker" value={selectedDate} onChange={handleChangee} className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                </div>
                <label htmlFor="datePicker" className="block mt-3 text-white form-label">US phone mask:</label>
                <div className='w-full h-[40px] flex justify-between'>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><FaPhoneAlt className='w-5 h-5 text-gray-400'></FaPhoneAlt></div>
                        <input type="phone" value={selectedDate} onChange={handleChangee} className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><FaPhoneAlt className='w-5 h-5 text-gray-400'></FaPhoneAlt></div>
                        <input type="phones" value={selectedDate} onChange={handleChangee} className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                </div>
                <label htmlFor="phone" className="block mt-3 text-white form-label">IP mask:</label>
                <div className='w-full h-[40px] flex flex-row'>
                    <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><FaLaptop className='w-5 h-5 text-gray-400'></FaLaptop></div>
                    <input type="phone" className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Color & Time Picker</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <label htmlFor="" className="block mt-3 text-white form-label">Color picker:</label>
                <input type="text" className="w-[50%] px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                <label htmlFor="" className="block mt-3 text-white form-label">Time picker:</label>
                <div className='w-full h-[40px] flex justify-between'>
                    <div className='w-[49%] h-full flex flex-row'>
                        <input placeholder='09:30AM' className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-l-md"></input>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-r-md'><IoTimeOutline className='w-5 h-5 text-gray-400'></IoTimeOutline></div>
                    </div>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><IoTimeOutline className='w-5 h-5 text-gray-400'></IoTimeOutline></div>
                        <input placeholder='09:30PM' className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Date picker</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <label htmlFor="datePicker" className="block mt-3 text-white form-label">Date</label>
                <div className='w-full h-[40px] flex justify-between'>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><MdOutlineDateRange className='w-5 h-5 text-gray-400'></MdOutlineDateRange></div>
                        <input type="date" id="datePicker" value={selectedDate} onChange={handleChangee} className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                    <div className='w-[49%] h-full flex flex-row'>
                        <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><MdOutlineDateRange className='w-5 h-5 text-gray-400'></MdOutlineDateRange></div>
                        <input placeholder='16/01/2025-16/01/2025' className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-full h-auto'>
                    <div className='w-[49%] flex flex-col'>
                        <label htmlFor="datePicker" className="block mt-3 text-white form-label">Date and time range:</label>
                        <div className='flex flex-row w-full'>
                            <div className='w-10 h-10 bg-[#0F1424] flex justify-center items-center rounded-l-md'><MdOutlineDateRange className='w-5 h-5 text-gray-400'></MdOutlineDateRange></div>
                            <input placeholder='16/01/2025-16/01/2025' className="w-full px-2 py-2 bg-[#191D33] text-gray-400  rounded-r-md"></input>
                        </div>
                    </div>
                    <div className='w-[49%] flex flex-col'>
                        <label htmlFor="datePicker" className="block mt-3 text-white form-label">Date range button:</label>
                        <div className="relative flex flex-col w-[30%]">
                            <button
                                className="w-full h-[40px] bg-[#07090F] flex items-center justify-center text-white font-bold rounded-lg"
                                onClick={() => setOpen(!open)}
                            >
                                <MdOutlineDateRange className="w-5 h-5 mr-2 text-white" />
                                Date range picker
                                <FiChevronDown className="ml-2" />
                            </button>
                            {open && (
                                <div
                                    className="absolute flex flex-col w-full top-[50px] bg-[#212744] shadow-lg rounded-lg p-4 z-50"

                                >
                                    <button className='py-2 text-white px-7 bg-[#212744] border border-gray-300 hover:bg-[#019FF8]'>Yesterday</button>
                                    <button className='py-2 text-white px-7 bg-[#212744] border border-gray-300 hover:bg-[#019FF8]'>Today</button>
                                    <button className='py-2 text-white px-7 bg-[#212744] border border-gray-300 hover:bg-[#019FF8]'>Last 7 Day</button>
                                    <button className='py-2 text-white px-7 bg-[#212744] border border-gray-300 hover:bg-[#019FF8]'>This Month</button>
                                    <button
                                        className="px-4 py-2 mt-4 text-white bg-[#e5305c] rounded-lg"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Select Elements</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <SelectElements />
                <p className='text-[20px] mt-6 text-white font-medium'>Bootstrap Select boxes</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <BootstrapSelectboxes />
                <p className='text-[20px] mt-6 text-white font-medium'>Input Tags</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <p className='text-[15px] text-[#A1A4A0] mt-6'>Add
                    <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> data-role="tagsinput" </span>  to your input field & its automatically change it to a tags input.
                </p>
                <div className='flex flex-row items-center w-full h-[40px] mt-2'>
                    <button className='px-5 py-1 bg-[#733AEB] flex items-center rounded-md text-white'>Ipsum<IoIosClose /></button>
                    <button className='px-5 py-1 bg-[#733AEB] ml-2 flex items-center rounded-md text-white'>Ipsum<IoIosClose /></button>
                    <p className='text-[15px] text-[#A1A4A0] ml-2'>add tages</p>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Select Tags</p>
                <p className='text-[15px] text-[#A1A4A0] mt-2'>You can also use
                    <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> select multiple</span> to your input field.
                </p>
                <div className='flex flex-row items-center w-full h-[40px] mt-2'>
                    <button className='px-5 py-1 bg-[#733AEB] flex items-center rounded-md text-white'>Lorem<IoIosClose /></button>
                    <button className='px-5 py-1 bg-[#733AEB] ml-2 flex items-center rounded-md text-white'>Ipsum<IoIosClose /></button>
                    <button className='px-5 py-1 bg-[#733AEB] ml-2 flex items-center rounded-md text-white'>Amet<IoIosClose /></button>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>Input Group Tags</p>
                <p className='text-[15px] text-[#A1A4A0] mt-2'>You can also use group tag
                    <span className='px-2 py-[1px] ml-1  bg-[#191D33] text-[#D6336F]'> data-role="tagsinput" </span> to your input field.
                </p>
                <div className='flex flex-row items-center w-full h-[40px] mt-2'>
                    <button className='px-5 py-1 bg-[#733AEB] flex items-center rounded-md text-white'>Lorem<IoIosClose /></button>
                    <button className='px-5 py-1 bg-[#733AEB] ml-2 flex items-center rounded-md text-white'>Ipsum<IoIosClose /></button>
                    <button className='px-5 py-1 bg-[#733AEB] ml-2 flex items-center rounded-md text-white'>Amet<IoIosClose /></button>
                    <p className='text-[15px] text-[#A1A4A0] ml-2'>add tages</p>
                </div>
                <p className='text-[20px] mt-6 text-white font-medium'>iCheck - Checkbox & Radio Inputs</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <ICheckInputs />
                <p className='text-[20px] mt-8 text-white font-medium'>Basic Checkbox</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <Aadas />
                <p className='text-[20px] mt-8 text-white font-medium'>Basic Checkbox</p>
                <div className='w-full h-[1px] mt-3 bg-[#3C3D34]'></div>
                <ADDtron />
            </div>
            <p className='text-[15px] font-medium text-white mt-6'>© 2025 <span className='font-normal hover:text-blue-400'>Multipurpose Themes.</span> All Rights Reserved.</p>

        </div>
    )
}

export default FromElemoen
