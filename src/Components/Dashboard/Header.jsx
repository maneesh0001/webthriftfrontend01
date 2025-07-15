import React from "react";

const Header = ({ userEmail, onLogout }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
    <div className="flex items-center space-x-4">
      <span className="text-pink-500 text-2xl font-bold flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/126/126083.png"
          alt="Logo"
          className="w-6 h-6 mr-1"
        />
        ThriftEase
      </span>
      <span className="text-gray-700 ml-4 text-sm">Welcome, {userEmail}</span>
    </div>
    <input
      type="text"
      placeholder="Search for treasures..."
      className="border rounded-full px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-300"
    />
    <button
      onClick={onLogout}
      className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
    >
      Logout
    </button>
  </header>
);

export default Header;
