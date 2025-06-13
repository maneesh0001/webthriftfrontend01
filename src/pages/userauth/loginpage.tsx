
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // Ensure this file contains your Tailwind CSS setup

// interface LoginProps {
//   onLogin: (email: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       if (res.status === 200) {
//         localStorage.setItem('token', res.data.token);
//         onLogin(email);
//         navigate('/dashboard');
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message || 'Login Failed');
//     }
//   };
  

 

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80)] bg-cover bg-center relative"
//     ><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80" alt="" />
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

//         <form onSubmit={handleLogin} className="space-y-4">
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
//           <button type="submit" className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold">
//             Login
//           </button>
//         </form>

//         <button
//           onClick={() => navigate('/signup')}
//           className="w-full mt-4 flex items-center justify-center border border-white p-3 rounded text-white hover:bg-white hover:text-black transition"
//         >
//           <img src="https://i.pinimg.com/736x/80/62/fc/8062fc25243b68c02309fd1ad02ccfaa.jpg" className="w-6 h-6 mr-2" />
//           Create an account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { 
        email, 
        password 
      });
      
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userEmail', email);
        onLogin(email);
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
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

        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={() => navigate('/signup')}
          className="w-full mt-4 flex items-center justify-center border border-white p-3 rounded text-white hover:bg-white hover:text-black transition"
        >
          <span className="mr-2">📝</span>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;