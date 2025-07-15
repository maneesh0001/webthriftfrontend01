// FILE: orderService.js

const mockOrders = [
  { id: 1, customerName: 'Anisha Gurung', product: 'Classic T-Shirt', status: 'Delivered', date: '2025-06-20', total: 79.80},
  { id: 2, customerName: 'Bikash Shrestha', product: 'Button-Up Shirt', status: 'Pending', date: '2025-06-18', total: 76.89 },
  { id: 3, customerName: 'Sujan Lama', product: 'Wool Sweater', status: 'Shipped', date: '2025-06-16', total: 56.07 },
  { id: 4, customerName: 'Manisha Thapa', product: 'Light Jacket', status: 'Delivered', date: '2025-06-15', total: 36.00 },
];

const orderService = {
  getOrders: () => new Promise(resolve => setTimeout(() => resolve(mockOrders), 500)),
};

export default orderService;
