// FILE: userService.js

const mockUsers = [
  { id: 1, name: 'Anisha Gurung', email: 'anisha@example.com', role: 'Customer', joined: '2025-06-15' },
  { id: 2, name: 'Bikash Shrestha', email: 'bikash@example.com', role: 'Admin', joined: '2025-06-14' },
  { id: 3, name: 'Manisha Thapa', email: 'manisha@example.com', role: 'Seller', joined: '2025-06-13' },
  { id: 4, name: 'Sujan Lama', email: 'sujan@example.com', role: 'Customer', joined: '2025-06-12' },
];

const userService = {
  getUsers: () => new Promise(resolve => setTimeout(() => resolve(mockUsers), 500)),
};

export default userService;
