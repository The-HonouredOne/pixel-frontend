import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // 👈 Import framer-motion
import pixelbanner from "../assets/banner.jpg";

const Hero = () => {
  const [finished, setFinished] = useState(false);

  return (
    <motion.div
      className="relative md:min-h-[80vh] min-h-[60vh] flex flex-col justify-center items-center text-center px-4 pt-10 lg:pt-0 md:pt-0"
      style={{
        backgroundImage: `url(${pixelbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Animated / Final Heading */}
      {!finished ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
            sequence={[
              "Lets go",
              1000,
              "to where?",
              1000,
              "To Get a job you love",
              () => setFinished(true),
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
        </motion.div>
      ) : (
        <motion.span
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          To Get a{" "}
          <span className="bg-blue-200 text-black rounded-xl px-2 py-1">
            job
          </span>{" "}
          you love
        </motion.span>
      )}

      {/* Search Section */}
      {finished && (
        <motion.div
          className="mt-8 w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-gray-200 text-base sm:text-lg mb-4">
            Find opportunities that match your passion 🚀
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <input
              type="text"
              className="flex-1 bg-gray-100/20 px-3 py-2 border border-gray-500 rounded text-white placeholder-gray-300"
              placeholder="Job title, keyword or company name"
            />
            <input
              type="text"
              className="flex-1 bg-gray-100/20 px-3 py-2 border border-gray-500 rounded text-white placeholder-gray-300"
              placeholder="Location"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="sm:w-auto w-full px-6 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition"
            >
              Find Job
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Hero;
