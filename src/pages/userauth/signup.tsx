// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const Signup: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm, setConfirm] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirm) return alert("Passwords don't match");
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
//       if (res.status === 201) {
//         alert('Signup successful! Please log in.');
//         navigate('/');
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
    
//     <div
//       className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center relative"
//     >
    
//       <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

//       <div className="relative z-10 bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-xl w-96 shadow-lg">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">
//             <span className="text-red-600">THRIFT</span>
//             <span className="text-white">STORE</span>
//           </h1>
//           <h2 className="text-6xl font-extrabold mt-2">
//             <span className="text-red-600">T</span>
//             <span className="text-white">S</span>
//           </h2>
//         </div>

//         <form onSubmit={handleSignup} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirm}
//             onChange={e => setConfirm(e.target.value)}
//             className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
//             required
//           />
//           <button type="submit" className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold">
//             Sign Up
//           </button>
//         </form>

//         <button onClick={() => navigate('/')} className="mt-4 text-white underline hover:text-red-400">
//           Already have an account? Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { 
        name, 
        email, 
        password 
      });
      
      if (res.status === 201) {
        alert('Registration successful! Please login.');
        navigate('/');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-xl w-96 shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-red-600">THRIFT</span>
            <span className="text-white">STORE</span>
          </h1>
          <h2 className="text-6xl font-extrabold mt-2">
            <span className="text-red-600">T</span>
            <span className="text-white">S</span>
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-2 bg-red-500 text-white text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 text-center text-white underline hover:text-red-400"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Signup;