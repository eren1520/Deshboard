
import { GrMoreVertical } from "react-icons/gr";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { TbPlayerPlayFilled } from "react-icons/tb";
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const Dashboard1 = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      if (!chartArea) return;

      // Tạo gradient phủ từ đường biểu đồ xuống dưới
      const gradientFill = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradientFill.addColorStop(0, "rgba(41, 171, 226, 0.8)");  // Xanh đậm gần đường kẻ
      gradientFill.addColorStop(0.4, "rgba(41, 171, 226, 0.4)"); // Nhạt dần
      gradientFill.addColorStop(0.7, "rgba(41, 171, 226, 0.2)"); // Màu nhạt hơn dưới trục X
      gradientFill.addColorStop(1, "rgba(41, 171, 226, 0)");    // Mờ dần về trong suốt
  
      setGradient(gradientFill);
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Progress",
        data: [0, 20, 40, 35, 65, 80], // Dữ liệu từ 0 đến 80
        borderColor: "#29ABE2",
        backgroundColor: gradient || "rgba(41, 171, 226, 0.2)", // Gradient phủ xuống dưới
        fill: true,
        tension: 0.4, // Độ cong của đường
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      
    },
    scales: {
      y: {
        
        beginAtZero: true,
        ticks: { color: "#ccc", stepSize: 20 }, // Hiển thị các giá trị 0, 20, 40, 60, 80
      },
      x: {
        ticks: { color: "#ccc" },
      },
    },
  };
  return (
    <div className='bg-[#191D33] flex w-full h-[520px] gap-4 p-4'>
      <div className='flex flex-col w-1/3 h-[500px] bg-[#191D33] rounded-lg gap-4'>
        <div className='flex items-center justify-between '>
          <p className='text-[22px] text-white'>Popular Courses</p>
          <p className='text-[14px] text-[#CDEAE2] hover:text-blue-500 cursor-pointer mr-7'>All Courses</p>
        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg mt-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='bg-[#FEC801] flex w-14 h-14 justify-center items-center text-white text-[25px] rounded-sm '>
            U
          </div>
          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#FEC801]'>UI/UX Design</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>30+ Courses</p>
          </div>
          <div className='bg-[#F3ECCD] w-[110px] h-[30px] ml-[40px] rounded-md flex justify-center items-center group hover:bg-[#FEC801] group transition-all duration-300'>
            <p className='text-[#FEC801] text-[14px] group-hover:text-white transition-colors duration-300 '>View Courses</p>
          </div>
          <GrMoreVertical className='text-[#8eada4] ml-2 hover:text-blue-500' />

        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='bg-[#F2426D] flex w-14 h-14 justify-center items-center text-white text-[25px] rounded-sm '>
            M
          </div>
          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#F2426D]'>Marketing</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>25+ Courses</p>
          </div>
          <div className='bg-[#ffe4ea] w-[110px] h-[30px] ml-[64px] rounded-md flex justify-center items-center group hover:bg-[#F2426D] group transition-all duration-300'>
            <p className='text-[#F2426D] text-[14px] group-hover:text-white transition-colors duration-300 '>View Courses</p>
          </div>
          <GrMoreVertical className='text-[#8eada4] ml-2 hover:text-blue-500' />

        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='bg-[#58BAAB] flex w-14 h-14 justify-center items-center text-white text-[25px] rounded-sm '>
            W
          </div>
          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#58BAAB] cursor-pointer'>Web Dev</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>30+ Courses</p>
          </div>
          <div className='cursor-pointer bg-[#7affeb] w-[110px] h-[30px] ml-[62px]  rounded-md flex justify-center items-center group hover:bg-[#58BAAB] group transition-all duration-300'>
            <p className='text-[#58BAAB] text-[14px] group-hover:text-white transition-colors duration-300 cursor-pointer '>View Courses</p>
          </div>
          <GrMoreVertical className='text-[#8eada4] ml-2 hover:text-blue-500' />

        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='bg-[#019FF8] flex w-14 h-14 justify-center items-center text-white text-[25px] rounded-sm '>
            M
          </div>
          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8] cursor-pointer'>Mathematics</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>50+ Courses</p>
          </div>
          <div className=' cursor-pointer bg-[#01f8ec] w-[110px] h-[30px] ml-[40px] rounded-md flex justify-center items-center group hover:bg-[#019FF8] transition-all duration-300'>
            <p className='text-[#019FF8] text-[14px] group-hover:text-white transition-colors duration-300 '>View Courses</p>
          </div>
          <GrMoreVertical className='text-[#8eada4] ml-2 hover:text-blue-500' />

        </div>
      </div>
      <div className='flex flex-col w-1/3 h-[500px] bg-[#191D33] gap-4'>
        <div className='flex items-center justify-start '>
          <p className='text-[22px] text-white'>Current Activity</p>
        </div>
        <div className='flex flex-col bg-[#293146] w-full h-[285px] rounded-lg mt-2 p-4'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p className='text-[22px] text-white'>Monthly Progress</p>
              <p className='text-[15px] text-white'>This is the latest improvement</p>
            </div>
            <button className='flex items-center justify-center w-12 h-12 rounded-full bg-white group hover:bg-[#019FF8] transition-all duration-300'>
              <FaRegCalendarDays className='w-5 h-5 text-[#019FF8] group-hover:text-white transition-colors duration-300 ' />
            </button>
          </div>



          
          <div className="w-full max-w-lg p-4 mx-auto bg-[#293146] mt-2">
            
      <Line ref={chartRef} data={data} options={options} />
    </div>
          



        </div>
        <div className='flex w-full h-[150px] bg-[#191D33] gap-4 '>
          <div className='w-[60%] h-full bg-[#FEC801] rounded-lg p-4'>
            <div className='flex flex-col items-start justify-start'>
              <p className='text-white text-[25px] font-bold'>450K+</p>
              <p className='text-white text-[15px] -mt-1 '>Compelete Course</p>
            </div>
            <div className='flex items-center justify-start mt-3'>
              <p className='text-white text-[15px] '>This is the latest Data</p>
              <button className='flex items-center justify-center w-10 h-10 bg-white rounded-full ml-0.5 group hover:bg-[#F0BD01] transition-all duration-300'>
                <GoArrowUpRight className='text-[#FEC801] w-5 h-5 group-hover:text-white transition-colors duration-300' />

              </button>
            </div>
          </div>
          <div className='w-[40%] h-full bg-[#F2426D] rounded-lg p-4'>
            <div className='flex flex-col items-start justify-start'>
              <p className='text-white text-[25px] font-bold'>200K+</p>
              <p className='text-white text-[15px] -mt-1 '>Video course</p>
            </div>
            <div className='flex items-center justify-end mt-3'>

              <button className='flex items-center justify-center w-10 h-10 bg-white rounded-full group hover:bg-[#DA224F] transition-all duration-300'>
                <TbPlayerPlayFilled className='text-[#F2426D] w-3 h-3 group-hover:text-white transition-colors duration-300' />

              </button>
            </div>
          </div>
        </div>


      </div>
      <div className='flex flex-col w-1/3 h-[495px] bg-[#191D33] rounded-lg gap-4 mt-1'>
        <div className='flex items-center justify-between'>
          <p className='text-[22px] text-white'>Best Instructors</p>
          <p className='text-[14px] text-[#CDEAE2] hover:text-blue-500 cursor-pointer mr-7'>See All</p>
        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg mt-1 transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='flex items-center justify-center overflow-hidden bg-white rounded-full w-14 h-14'>
            <img
              src="https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>

          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Nil Yeager</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>5 Design</p>
          </div>
          <div className='bg-black w-[70px] h-[30px] ml-[100px] rounded-md flex justify-center items-center '>
            <p className='text-white text-[14px]'>Courses</p>
          </div>
        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg  transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='flex items-center justify-center overflow-hidden bg-white rounded-full w-14 h-14'>
            <img
              src="https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-2.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>

          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Theron Trump</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>5 Design</p>
          </div>
          <div className='bg-black w-[70px] h-[30px] ml-[69px] rounded-md flex justify-center items-center '>
            <p className='text-white text-[14px]'>Courses</p>
          </div>
        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg  transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='flex items-center justify-center overflow-hidden bg-white rounded-full w-14 h-14'>
            <img
              src="https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-3.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>

          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Tyler Mark</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>5 Design</p>
          </div>
          <div className='bg-black w-[70px] h-[30px] ml-[98px] rounded-md flex justify-center items-center '>
            <p className='text-white text-[14px]'>Courses</p>
          </div>
        </div>
        <div className='flex justify-start items-center bg-[#293146] w-full h-[100px] rounded-lg  transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px] hover:scale-105 p-4 '>
          <div className='flex items-center justify-center overflow-hidden bg-white rounded-full w-14 h-14'>
            <img
              src="https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>

          <div className='flex flex-col ml-3'>
            <p className='text-[#5d9eba] text-[18px] font-semibold hover:text-[#019FF8]'>Johen Mark</p>
            <p className='text-[#8eada4] text-[15px] font-semibold'>5 Design</p>
          </div>
          <div className='bg-black w-[70px] h-[30px] ml-[86px] rounded-md flex justify-center items-center '>
            <p className='text-white text-[14px]'>Courses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard1
