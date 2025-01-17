import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState("Month"); // Default mode is "Month"
  const [events, setEvents] = useState({});
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedTaskColor, setDraggedTaskColor] = useState(null);

  const taskColors = {
    Lunch: "bg-[#58baab]",
    "Go home": "bg-[#019ff8]",
    "Do homework": "bg-[#fdc800]",
    "Work on UI design": "bg-[#f3426e]",
    "Sleep tight": "bg-[#733aeb]",
  };

  // Get the start and end of the current month
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Get the number of days in the current month
  const daysInMonth = endOfMonth.getDate();

  // Get the start day (0 = Sunday, 6 = Saturday)
  const startDay = startOfMonth.getDay();

  // Get the number of days in the previous month
  const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  const prevMonthDays = prevMonth.getDate();

  // Handle navigating to the previous period
  const handlePrev = () => {
    let newDate = new Date(currentDate);
    if (mode === "Month") {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else if (mode === "Week") {
      newDate.setDate(currentDate.getDate() - 7);
    } else if (mode === "Day") {
      newDate.setDate(currentDate.getDate() - 1);
    }
    setCurrentDate(newDate);
  };

  // Handle navigating to the next period
  const handleNext = () => {
    let newDate = new Date(currentDate);
    if (mode === "Month") {
      newDate.setMonth(currentDate.getMonth() + 1);
    } else if (mode === "Week") {
      newDate.setDate(currentDate.getDate() + 7);
    } else if (mode === "Day") {
      newDate.setDate(currentDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  // Handle resetting to today
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // Handle switching between Month, Week, and Day modes
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setCurrentDate(new Date());
  };

  // Get header text based on the current mode
  const getHeaderText = () => {
    if (mode === "Month") {
      return `${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`;
    } else if (mode === "Week") {
      const startOfWeek = new Date(currentDate);
      const endOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
      return `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
    } else if (mode === "Day") {
      return currentDate.toLocaleDateString("default", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    return "";
  };

  // Function to check if the "Today" button should be disabled
  const isTodayDisabled = () => {
    const today = new Date();
    return (
      today.getFullYear() === currentDate.getFullYear() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getDate() === currentDate.getDate()
    );
  };

  // Function to handle drag start
  const handleDragStart = (task) => {
    setDraggedTask(task);
    setDraggedTaskColor(taskColors[task]);
  };

  // Function to handle the drop event
  const handleDrop = (day) => {
    if (draggedTask) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [day]: { task: draggedTask, color: draggedTaskColor },
      }));
    }
  };

  // Render days of the current month (including padding for previous and next months)
  const renderDays = () => {
    const days = [];

    // Add days from the previous month
    for (let i = 0; i < startDay; i++) {
      const prevDay = prevMonthDays - startDay + i + 1;
      days.push(
        <div
          key={`prev-${prevDay}`}
          className="p-4 text-center border-2 text-gray-400 cursor-not-allowed bg-[#181d33]"
        >
          {prevDay}
        </div>
      );
    }

    // Add the days for the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={`current-${day}`}
          className="p-4 text-center border-2 text-white border-gray-300 cursor-pointer bg-[#181d33]"
          onDrop={() => handleDrop(day)}
          onDragOver={(e) => e.preventDefault()}
        >
          {day}
          {events[day] && (
            <div
              className={`mt-1 text-sm text-white p-1 rounded ${events[day].color}`}
            >
              {events[day].task}
            </div>
          )}
        </div>
      );
    }

    // Add days from the next month to fill the grid
    const totalCells = days.length;
    const remainingCells = totalCells % 7;
    const nextMonthStartDay = remainingCells === 0 ? 0 : 7 - remainingCells;

    for (let i = 1; i <= nextMonthStartDay; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="p-4 text-center border-2 text-gray-400 cursor-not-allowed bg-[#181d33]"
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className=" pl-5 pt-10 flex flex-col w-full h-auto bg-[#191d33] h-screen">
      <div className="flex items-center text-[#9da2ad] ">
        <span className="mr-5 text-xl font-semibold">Calendar</span>
        <IoHomeOutline className="text-sm" />
        <span className="mx-2 text-sm">-</span>
        <span>Extra</span>
        <span className="mx-2 text-xs">-</span>
        <span>Calendar</span>
      </div>
      <div className="flex">
        <div className="w-[80%] h-auto mt-5 p-4 text-white bg-[#293146] rounded shadow">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4">
            {/* Left Side: Prev, Today, Next Buttons */}
            <div className="flex space-x-2">
              <button onClick={handlePrev} className="p-2 text-white bg-blue-500 rounded">
                Prev
              </button>
              <button
                onClick={handleToday}
                className={`p-2 text-white rounded ${isTodayDisabled() ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                  }`}
                disabled={isTodayDisabled()}
              >
                Today
              </button>
              <button onClick={handleNext} className="p-2 text-white bg-blue-500 rounded">
                Next
              </button>
            </div>

            {/* Center: Current Period Header */}
            <h2 className="text-xl font-bold">{getHeaderText()}</h2>

            {/* Right Side: Mode Selection Buttons */}
            <div className="flex space-x-2">
              <button
                className={`p-2 text-white rounded ${mode === "Month" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={() => handleModeChange("Month")}
              >
                Month
              </button>
              <button
                className={`p-2 text-white rounded ${mode === "Week" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={() => handleModeChange("Week")}
              >
                Week
              </button>
              <button
                className={`p-2 text-white rounded ${mode === "Day" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={() => handleModeChange("Day")}
              >
                Day
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 bg-[#293146] gap-[0.5px]">
            {daysOfWeek.map((day) => (
              <div key={day} className="font-bold text-center text-white">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col pl-5 mt-10 mb-4">
          <button className="bg-[#f3426e] hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow-md">
            Create New Event
          </button>
          <p className="text-[#c1c1c1] text-sm pt-10">
            Drag and drop your event or click in the calendar
          </p>
          {Object.keys(taskColors).map((task) => (
            <button
              key={task}
              className={`p-2 text-white rounded mt-2 w-full ${taskColors[task]}`}
              draggable
              onDragStart={() => handleDragStart(task)}
            >
              {task}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-12 text-sm text-gray-200">
        <span className="mr-2">
          <FaRegCopyright />
        </span>
        <span className="mr-1 font-bold">2025</span> Multipurpose Themes.
        <span className="font-semibold ms-1">All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Calendar;