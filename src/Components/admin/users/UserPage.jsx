// FILE: UserPage.jsx

import React, { useState, useEffect } from 'react';
import { Plus, Filter } from 'lucide-react';
import UserTable from './UserTable';
import userService from '../../../services/userService'; // Adjust path accordingly

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    userService.getUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      });
  }, []);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Users</h1>
            <p className="mt-1 text-slate-500">Manage all registered users in the system.</p>
          </div>
          <div className="flex items-center gap-2">
            
            
          </div>
        </header>

        {/* Main Content */}
        {loading ? <LoadingSpinner /> : <UserTable users={users} />}
      </div>
    </div>
  );
};

export default UserPage;
