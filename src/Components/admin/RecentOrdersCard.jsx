import React from 'react';

const RecentOrdersCard = () => {
    const orders = [
        { id: '#ORD-001', name: 'Sarah Johnson', status: 'delivered', price: '$45.99', time: '2 hours ago' },
        { id: '#ORD-002', name: 'Mike Chen', status: 'shipped', price: '$23.50', time: '4 hours ago' },
        { id: '#ORD-003', name: 'Emma Davis', status: 'pending', price: '$67.25', time: '6 hours ago' },
        { id: '#ORD-004', name: 'John Smith', status: 'processing', price: '$34.75', time: '8 hours ago' },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'delivered':
                return 'bg-black text-white';
            case 'shipped':
                return 'bg-gray-200 text-gray-800';
            case 'pending':
                return 'bg-red-500 text-white';
            case 'processing':
                return 'bg-white text-gray-800 border border-gray-300';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 lg:col-span-4">
            <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
            <p className="text-sm text-gray-500 mb-4">Latest customer orders</p>
            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <p className="font-bold text-gray-800">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.name}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                {order.status}
                            </span>
                            <div className="text-right flex-shrink-0">
                                <p className="font-bold text-gray-800">{order.price}</p>
                                <p className="text-sm text-gray-500">{order.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrdersCard;
