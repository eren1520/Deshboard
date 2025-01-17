import React from 'react';

const users = [
  { name: "Brandon Smith", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-9.png" },
  { name: "Sarah K", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-1.png" },
  { name: "Marcy C", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-6.png" },
  { name: "Michael H", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-16.png" },
  { name: "Thomas R", avatar: "https://edulearn-lms-admin-template.multipurposethemes.com/images/avatar/avatar-4.png" },
  // Thêm các người dùng khác ở đây
];

const ContactsPage = () => {
  return (
    <div className="flex flex-col bg-[#191D33] text-white p-4">
      <h1 className="text-2xl text-center mb-4">Contacts</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="py-2 flex items-center border-b border-gray-700">
            <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-2" />
            <div className="text-sm">{user.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
