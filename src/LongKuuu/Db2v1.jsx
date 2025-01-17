import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Db2v1 = () => {
    const data = {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
          {
            data: [95, 80, 76, 68, 55],
            backgroundColor: [
              '#26ADF9', '#774CD1', '#70C4B8', '#D43F67', '#DEB10B',
            ],
            // Xóa borderColor và borderWidth để bỏ màu viền của các cột
            borderWidth: 0, // Không hiển thị viền
            barThickness: 40,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.raw}%`; // Hiển thị % trong tooltip
              },
            },
          },
          legend: {
            display: false, // Tắt phần legend
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              color: '#9CA3AF',
              lineWidth: 0,
            },
            ticks: {
              display: false,
              color: '#9CA3AF',
            },
            borderColor: 'transparent',
            borderWidth: 0,
            categoryPercentage: 0.4,
            barPercentage: 0.5,
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: '#ffffff',
              callback: function (value) {
                return value + '%';
              },
            },
            grid: {
              color: '#ffffff',
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        color: '#9CA3AF',
    
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        elements: {
          bar: {
            // Bỏ các thuộc tính borderColor và borderWidth
            borderWidth: 0, // Không có viền khi hover
            hoverBackgroundColor: [
              '#774CD1', '#D28BFF', '#82E6D7', '#FF7F9B', '#FFD700',
            ],
            hoverOpacity: 0.8,
          },
        },
        animation: {
          duration: 500,
          easing: 'easeInOutQuad',
        },
      };    
  return (
    <div className='flex flex-col w-[52%] h-[400px] bg-[#293146] rounded-lg gap-4'>
           <h1 className='p-4 text-xl text-white'>Top 5 School Performance</h1>
   
           <div className='flex items-center justify-start px-11'>
             <div className='w-3 h-3 rounded-sm bg-[#019FF8]'></div>
             <p className='text-white text-[11px] ml-1 mt-0.5'>Mauris dictum</p>
             <div className='w-3 h-3 rounded-sm bg-[#733AEB] ml-2'></div>
             <p className='text-white text-[11px] ml-1 mt-0.5'>Etiam vitae</p>
             <div className='w-3 h-3 rounded-sm bg-[#58BAAB] ml-2'></div>
             <p className='text-white text-[11px] ml-1 mt-0.5'>Praesent non</p>
             <div className='w-3 h-3 rounded-sm bg-[#F2426D] ml-2'></div>
             <p className='text-white text-[11px] ml-1 mt-0.5'>Duis eget</p>
             <div className='w-3 h-3 rounded-sm bg-[#FEC801] ml-2'></div>
             <p className='text-white text-[11px] ml-1 mt-0.5'>Mauris et arcu</p>
   
           </div>
           <div className="w-full max-w-lg  mx-auto bg-[#293146] mt-2">
   
             <Bar data={data} options={options} />
           </div>
         </div>
  )
}

export default Db2v1
