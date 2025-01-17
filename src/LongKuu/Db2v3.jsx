import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Db2v3 = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Performance',
        data: [3, 6, 8, 4, 2, 7, 9, 5, 6, 5, 6, 8], // Dữ liệu ziczac
        borderColor: '#0099ff', // Màu đường
        borderWidth: 2,
        pointBackgroundColor: '#ffffff', // Màu nền điểm
        pointBorderColor: '#0099ff', // Viền điểm
        pointRadius: 5, // Kích thước điểm
        fill: false,
        tension: 0.2, // Điều chỉnh độ cong đường
      }
    ]
  };

  // Cấu hình hiển thị biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ẩn nhãn (Legend)
      },
      tooltip: {
        enabled: true, // Hiển thị tooltip khi hover
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Ẩn lưới trục X
        },
        ticks: {
          display: false, // Ẩn nhãn trên trục X
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Màu lưới trục Y
        },
        ticks: {
          display: false, // Ẩn nhãn trên trục Y
        }
      }
    }
  };
  
  return (
    <div className='flex flex-col w-[24%] h-[400px] bg-[#293146] rounded-lg gap-4 p-4'>
        <h1 className="text-xl text-white">Content Usage</h1>
        <div className='flex items-center justify-center'>
            <p className='text-blue-500 text-[15px] mt-11'>12.5% higher than last month</p>
        </div>
        
      <Line data={data} options={options} />
    
      </div>
  )
}

export default Db2v3
