import React from 'react';
import { Search, Bell, User, LayoutGrid } from 'lucide-react';

const AdminHeader = () => {
    return (
        <header className="bg-white shadow-sm w-full">
            <div className="mx-auto flex items-center justify-between p-4">

                {/* Left Section: App Icon */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                        <LayoutGrid className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                {/* Center Section: Search Bar */}
                <div className="flex-1 max-w-lg mx-8">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="search"
                            placeholder="Search products, orders, users..."
                            className="block w-full rounded-md border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Right Section: Notifications and User Profile */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Bell className="h-6 w-6 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <User className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default AdminHeader;
