import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-8">
      {images.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt={`Banner ${index + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: index === current ? 1 : 0, x: index === current ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default Carousel;
