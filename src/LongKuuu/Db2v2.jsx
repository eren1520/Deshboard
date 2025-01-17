import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Boys", "Girls"],
  datasets: [
    {
      data: [45, 55], // Tỷ lệ
      backgroundColor: ["#1E90FF", "#6A0DAD"], // Màu xanh và tím
      borderColor: "#FFFFFF", // Màu viền trắng
      borderWidth: 3, // Độ dày viền
    },
  ],
};

const options = {
  cutout: "70%", // Điều chỉnh độ rỗng ở giữa (tạo hiệu ứng donut)
  layout: {
    padding: {
      bottom: 40, // Tăng khoảng cách giữa chart và legend
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      align: "center", // Căn giữa legend
      labels: {
        usePointStyle: true, // Dùng chấm tròn thay vì hình vuông
        pointStyle: "circle", // Hiển thị biểu tượng hình tròn
        padding: 20, // Tăng khoảng cách giữa legend và biểu đồ
        color: "#CCCCCC", // Màu chữ chú thích
        font: {
          size: 14,
        },
      },
    },
  },
};

const Db2v2 = () => {
  return (
    <div className="flex flex-col w-[24%] h-[380px] bg-[#293146] rounded-lg gap-4 p-4">
      <h1 className="text-xl text-white">Overall Pass Percentage</h1>

      {/* Tạo khoảng cách giữa biểu đồ và legend */}
      <div className="flex flex-col items-center justify-center mt-4">
        <div style={{ width: "250px", height: "250px", marginBottom: "50px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Db2v2;
