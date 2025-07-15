// FILE: UserTable.jsx

import React from 'react';

const UserTable = ({ users }) => {
  const UserRow = ({ user }) => (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="p-4 text-slate-700 font-medium">{user.name}</td>
      <td className="p-4 text-slate-600">{user.email}</td>
      <td className="p-4 text-slate-600">{user.role}</td>
      <td className="p-4 text-slate-600">{user.joined}</td>
      <td className="p-4 text-center">
        <button className="p-2 rounded-full hover:bg-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-500" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </td>
    </tr>
  );

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
      <table className="min-w-full">
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase">Name</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase">Email</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase">Role</th>
            <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase">Joined</th>
            <th className="p-4 text-center text-sm font-semibold text-slate-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
