import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, changeType, icon }) => {
    const isPositive = changeType === 'positive';
    const ChangeIcon = isPositive ? ArrowUpRight : ArrowDownRight;
    const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

    return (
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <span className="text-sm text-gray-500">{title}</span>
                <div className="text-gray-400">{icon}</div>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">{value}</h2>
                <div className="flex items-center mt-1 text-sm">
                    <ChangeIcon className={`w-4 h-4 mr-1 ${changeColor}`} />
                    <span className={`${changeColor} font-semibold`}>{change}</span>
                    <span className="text-gray-500 ml-1">from last month</span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
