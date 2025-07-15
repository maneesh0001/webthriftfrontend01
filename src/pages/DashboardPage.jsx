import React from 'react';
import { DollarSign, Users2, ShoppingBag, AlertTriangle } from 'lucide-react';
import StatCard from '../Components/admin/StatCard';
import BarChartCard from '../Components/admin/BarChartCard';
import PieChartCard from '../Components/admin/PieChartCard';
import RecentOrdersCard from '../Components/admin/RecentOrdersCard';
import StockAlertCard from '../Components/admin/StockAlertCard';

const DashboardPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat Cards */}
            <StatCard title="Total Revenue" value="$45,231" change="+12.5%" changeType="positive" icon={<DollarSign size={20} />} />
            <StatCard title="New Customers" value="1,284" change="+8.2%" changeType="positive" icon={<Users2 size={20} />} />
            <StatCard title="Total Orders" value="3,456" change="-2.1%" changeType="negative" icon={<ShoppingBag size={20} />} />
            <StatCard title="Pending Orders" value="78" change="+5.7%" changeType="positive" icon={<AlertTriangle size={20} />} />
            
            {/* Chart Cards */}
            <BarChartCard 
                title="Monthly Sales" 
                description="Sales performance over the last 6 months" 
            />
            <PieChartCard 
                title="Sales by Category" 
                description="Breakdown of sales across product categories"
            />
            
            {/* Table/List Cards */}
            <RecentOrdersCard />
            <StockAlertCard />

        </div>
    );
};

export default DashboardPage;
