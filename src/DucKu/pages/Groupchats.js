import React, { useState } from 'react';
import { FaVideo, FaPhone, FaEllipsisH, FaShareAlt, FaMicrophone, FaPaperPlane, FaEllipsisV, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaUsers } from 'react-icons/fa';

const users = [
  { name: "Brandon Smith", lastMessage: "How are you today?", time: "08:45", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-9.png", activityTime: "Active now", bio: "Brandon is a software engineer." },
  { name: "Sarah K", lastMessage: "We are going to hold a meeting next week.", time: "09:00", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png", activityTime: "5 minutes ago", bio: "Sarah is a project manager." },
  { name: "Marcy C", lastMessage: " Are we going to have this week's planning meeting today?", time: "09:05", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-6.png", activityTime: "10 minutes ago", bio: "Marcy is a designer." },
  { name: "Michael H", lastMessage: " Please check these design assets...", time: "09:10", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-16.png", activityTime: "15 minutes ago", bio: "Michael is a developer." },
  { name: "Tommy Nash", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
  { name: "Thomas R", lastMessage: "Howdy", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-3.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
  { name: "wiliamlagos", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-11.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
    { name: "Xuan Son", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
    { name: "Thomas Tuchel", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-10.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
    { name: "Messi m10", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },
    { name: "Thomas R", lastMessage: "Did you receive my email?", time: "09:15", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png", activityTime: "1 hour ago", bio: "Thomas is a tester." },




];

const messages = [
  { from: "Sarah K", text: "What do you think about our plans for this product launch?", time: "09:25", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },
  { from: "Sarah K", text: "It looks to me like you have a lot planned before your deadline. I would suggest you push your deadline back so you have time to run a successful advertising campaign.", time: "09:25", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },

  { from: "You", text: "I am very busy at the moment and on top of everything, I forgot my umbrella today.", time: "09:27", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-2.png" },
  { from: "Sarah K", text: "Yeah, everything is fine.", time: "09:30", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },
  { from: "You", text: "wow that'great", time: "09:32", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-2.png" },
  { from: "Sarah K", text: "Viet Nam best Goodd", time: "09:25", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },
  { from: "You", text: "wow that'great", time: "09:32", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-2.png" },
  { from: "Sarah K", text: "Viet Nam best Goodd", time: "09:25", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },
  { from: "You", text: "wow that'great", time: "09:32", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-2.png" },

];

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);  // Trạng thái lưu người đang được chọn
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);  // Trạng thái hiển thị/ẩn thông tin

  const handleUserClick = (user) => {
    // Kiểm tra xem người dùng đã được chọn hay chưa
    if (selectedUser && selectedUser.name === user.name) {
      // Nếu đã chọn user này, ẩn thông tin
      setIsUserInfoVisible(!isUserInfoVisible);
    } else {
      // Chọn user mới và hiển thị thông tin
      setSelectedUser(user);
      setIsUserInfoVisible(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#191D33] text-white">
      
      <div className="flex flex-2  w-full  h-full  ">
        
        
        {/* Sidebar: danh sách chat */}
        
        <aside className="w-[30%]   bg-gray-800 p-4 border-r border-gray-700 h-screen overflow-y-auto sticky top-0">
  {/* Nút Chat và New */}
  <div className="flex mb-4">
  <button 
    className="text-white py-1 px-4 rounded text-sm hover:bg-[#191D33] 
    transition-all duration-200 focus:outline-none focus:border-b-2 focus:border-blue-500 active:border-b-2 active:border-blue-600"
  >
    Chat
  </button>
  <button 
    className="ml-1 text-white py-1 px-4 rounded text-sm hover:bg-[#191D33] 
    transition-all duration-200 focus:outline-none focus:border-b-2 focus:border-blue-500 active:border-b-2 active:border-blue-600"
  >
    New
  </button>
</div>



  {/* Thanh tìm kiếm */}
  <div className="mb-4">
    <div className="flex items-center bg-[#191D33] rounded-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-400 ml-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm11 18.59-5.22-5.22A9.97 9.97 0 0 0 20 10a10 10 0 1 0-10 10 9.97 9.97 0 0 0 5.37-1.58L21.59 22l1.41-1.41z" />
      </svg>
      <input
        type="text"
        placeholder="People, Groups & message..."
        className="w-full p-2 h-8 bg-transparent text-sm text-white outline-none"
      />
    </div>
  </div>

  {/* Danh sách người dùng */}
  <ul>
    {users.map((user, index) => (
      <li
        key={index}
        className="py-2 border-b border-gray-700 flex items-center cursor-pointer hover:bg-[#191D33] transition-all duration-200"
      >
        <img
          src={user.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-2"
          onClick={() => handleUserClick(user)} // Nhấn vào avatar để hiển thị thông tin
        />
        <div>
          <div className="font-bold text-white">{user.name}</div>
          <div className="text-sm text-gray-400">{user.lastMessage}</div>
          <div className="text-xs text-gray-400">{user.time}</div>
          <div className="text-xs text-green-400">{user.activityTime}</div>
        </div>
      </li>
    ))}
  </ul>
</aside>



        {/* Main: Hộp chat */}
        <main className="flex-1 p-4 bg-gray-800 ml-3 w-[70%]   h-screen overflow-y-auto sticky top-0">
          <div className="flex flex-col h-full">
            {/* Header: thông tin người dùng */}
            <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
            <div className="flex items-center">
  <img
    src={selectedUser ? selectedUser.avatar : "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png"}
    alt="avatar"
    className="w-10 h-10 rounded-full mr-2 cursor-pointer"
    onClick={() => handleUserClick(selectedUser || users[0])} // Khi nhấn vào avatar sẽ hiển thị hoặc ẩn thông tin
  />
  <div>
    <h2 className="text-lg text-blue-500">{selectedUser ? selectedUser.name : "Sarah Kortney"}</h2>
    <p className="text-sm text-gray-500">
      Last Seen {selectedUser ? selectedUser.lastSeen : "10:30pm ago"}
    </p>
  </div>
</div>

              <div className="flex space-x-2">
                <button className="bg-blue-600 p-2 rounded">
                  <FaPhone />
                </button>
                <button className="bg-blue-600 p-2 rounded">
                  <FaVideo />
                </button>
                <button className="bg-gray-600 p-2 rounded">
                  <FaEllipsisH />
                </button>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-auto">
              <div className="flex flex-col">
                {messages.map((message, index) => (
                  <div key={index} className={`my-4 flex ${message.from === "You" ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start space-x-2">
                      {message.from !== "You" && (
                        <img src={message.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                      )}
                      <div className={`p-2 rounded-lg text-black max-w-xs ${message.from === "You" ? "bg-blue-200" : "bg-white"}`}>
                        <p>{message.text}</p>
                        <span className="text-xs text-black">{message.time}</span>
                      </div>
                      {message.from === "You" && (
                        <img src={message.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thanh ngăn cách và các icon nhập tin nhắn */}
            <div className="flex items-center mt-2 border-t border-gray-700 pt-2">
              <input
                type="text"
                placeholder="Say something..."
                className="flex-1 p-2 bg-gray-700 rounded-lg"
              />
              <div className="flex space-x-2 ml-2">
                <button className="bg-gray-600 p-2 rounded">
                  <FaShareAlt />
                </button>
                <button className="bg-gray-600 p-2 rounded">
                  <FaMicrophone />
                </button>
                <button className="bg-blue-600 p-2 rounded">
                  <FaPaperPlane />
                </button>
                <button className="bg-gray-600 p-2 rounded">
                  <FaEllipsisV />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Hiển thị thông tin người dùng được chọn bên phải */}
      {/* Hiển thị thông tin người dùng được chọn bên phải */}
{isUserInfoVisible && selectedUser && (
  <aside className="w-1/4 bg-gray-700 p-4 border-l border-gray-700 flex flex-col items-center relative">
    {/* Three dots button (on the left) */}
    <button className="absolute top-4 left-4 text-white" onClick={() => alert("More options")}>
      <span className="text-2xl">...</span>
    </button>

    {/* Close button (on the right) */}
    <button
      className="absolute top-4 right-4 text-white text-2xl"
      onClick={() => setIsUserInfoVisible(false)} // Hide the user info when clicked
    >
      ×
    </button>

    {/* Avatar */}
    <img
      src={selectedUser.avatar}
      alt="User Avatar"
      className="w-24 h-24 rounded-full mb-4"
    />
    
    {/* Tên người dùng */}
    <h2 className="text-lg text-white font-bold mb-2">
      {selectedUser.name}
    </h2>
    
    {/* Nút Send Email */}
    <button
      className="bg-blue-600 p-2 rounded text-white text-sm w-2/3"
      onClick={() => (window.location.href = "mailto:support@codertgemmes.com")}
    >
      Send Email
    </button>

    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-blue-500" />
        <p>Email: support@codertgemmes.com</p>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <FaPhone className="text-green-500" />
        <p>Phone: 0374468404</p>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <FaMapMarkerAlt className="text-red-500" />
        <p>Location: California</p>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <FaLanguage className="text-purple-500" />
        <p>Languages: English, German, Spanish</p>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <FaUsers className="text-yellow-500" />
        <p>Groups: Work Friend</p>
      </div>
    </div>

    {/* Các nút Work Friend */}
    <div className="flex mt-2 ml-0 space-x-2">
      <button className="bg-blue-500 text-green-300 p-2 rounded w-1/2">Work</button>
      <button className="bg-blue-500 p-2 rounded w-1/2">Friend</button>
    </div>
  </aside>
)}

       
      </div>
    </div>
  );
};

export default ChatApp;
