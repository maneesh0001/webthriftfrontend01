import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Types
interface PromotionDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

// Sample Data
const categories = [
  "Explore",
  "Men's Clothes",
  "Women's Clothes",
  "Phones",
  "Fashion",
  "Electronics",
  "Toys",
  "Sports",
];

const items = [
  { title: "Mens Clothes", img: "https://i.pinimg.com/originals/91/44/88/91448878cc3f4b7bdc7ec33e4d5b8fd4.jpg", price: 19, discount: 20 },
  { title: "Fashion Shirt", img: "https://i.pinimg.com/originals/bc/eb/64/bceb64a2430e1986606b3bb25b2a66ef.jpg", price: 40, discount: 30 },
  { title: "Air Jordan", img: "https://i.pinimg.com/originals/91/44/88/91448878cc3f4b7bdc7ec33e4d5b8fd4.jpg", price: 150, discount: 15 },
  { title: "Redefined Dress", img: "https://i.pinimg.com/originals/91/44/88/91448878cc3f4b7bdc7ec33e4d5b8fd4.jpg", price: 70, discount: 10 },
];

const PromotionDashboard: React.FC<PromotionDashboardProps> = ({ userEmail, onLogout }) => {
  const bannerImages = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1350&q=80",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerIntervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    bannerIntervalRef.current = window.setInterval(() => {
      setCurrentBanner((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    return () => {
      if (bannerIntervalRef.current) clearInterval(bannerIntervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-100 to-blue-100">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <span className="text-pink-500 text-2xl font-bold flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="Logo" className="w-6 h-6 mr-1" />
            ThriftEase
          </span>
          <span className="text-gray-700 ml-4 text-sm">Welcome, {userEmail}</span>
        </div>
        <input
          type="text"
          placeholder="Search for treasures..."
          className="border rounded-full px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button onClick={onLogout} className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
          Logout
        </button>
      </header>

      {/* Categories */}
      <nav className="flex space-x-6 overflow-x-auto p-4 bg-white text-gray-700 font-medium">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white whitespace-nowrap transition-colors"
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Banner */}
      <div className="flex justify-center p-4">
        <motion.img
          key={currentBanner}
          src={bannerImages[currentBanner]}
          alt="Promotional Banner"
          className="rounded-2xl w-[80%] h-80 object-cover shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Products */}
      <section className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Men’s Clothes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer">
              <div className="relative">
                <img src={item.img} alt={item.title} className="rounded-xl w-full h-40 object-cover" />
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.discount}% OFF
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-lg">{item.title}</h3>
              <p className="text-pink-500 font-bold text-lg">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why ThriftEase */}
      <section className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">Why ThriftEase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">🌍 Sustainable Shopping</h3>
            <p className="text-gray-600">Reduce waste and support circular fashion by giving pre-loved items a second life.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">💰 Affordable Finds</h3>
            <p className="text-gray-600">Discover unique styles and name-brand items at a fraction of the cost.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">👜 Curated Collections</h3>
            <p className="text-gray-600">Expertly selected fashion across categories for all ages and styles.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 mt-8">
        <div className="flex justify-between flex-wrap max-w-7xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="Logo" className="w-6 h-6 mr-1" />
              ThriftEase
            </h3>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Navigate</h4>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Collaborate</h4>
            <ul className="space-y-1 text-sm">
              <li>Explore careers</li>
              <li>Become a rider</li>
              <li>Try Sands ads</li>
              <li>Feed your team</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow us on</h4>
            <ul className="space-y-1 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromotionDashboard;
