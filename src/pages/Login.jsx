import React from 'react'
import loginimg from '../assets/loginimg.png'
import minilogo from '../assets/minilogo.png'
import loginbg from '../assets/loginbg.jpg'
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";  // 👈 import framer motion

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-5xl">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 mb-6 mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={minilogo}
            alt="logo"
            className="w-10 sm:w-12"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <span className="text-white text-xl sm:text-2xl font-medium">PixelGenix</span>
        </motion.div>

        {/* Card */}
        <motion.div
          className="bg-[var(--brand)]/10 backdrop-blur-md shadow grid grid-cols-1 sm:grid-cols-2 gap-6 w-full rounded-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Side */}
          <motion.div
            className="flex flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-bold text-2xl sm:text-3xl">
              Welcome <span className="text-orange-500">Back!</span>
            </p>
            <motion.img
              src={loginimg}
              alt="login"
              className="w-60 sm:w-80 max-w-full h-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div
            className="flex flex-col gap-4 p-4 sm:p-6 bg-white/20 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-gray-900 text-lg sm:text-xl font-bold text-center">
              Login to Your Account
            </h1>
            <input
              placeholder="Email"
              type="email"
              className="p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a70a5] text-sm sm:text-base"
            />
            <input
              placeholder="Password"
              type="password"
              className="p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a70a5] text-sm sm:text-base"
            />
            <p className="font-medium text-gray-500 text-xs sm:text-sm text-end hover:text-gray-600 cursor-pointer">
              Forgot password?
            </p>

            {/* Animated Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0392ff] py-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] text-white font-semibold"
            >
              Login
            </motion.button>

            {/* Divider */}
            <div className="flex items-center text-gray-600 font-medium">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-2 text-sm sm:text-base">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* Social Logins */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0392ff] py-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] font-semibold flex items-center justify-center gap-3 text-white text-sm sm:text-base"
            >
              <FcGoogle className="bg-white rounded-full text-lg" /> Login with Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0392ff] py-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] font-semibold flex items-center justify-center gap-3 text-white text-sm sm:text-base"
            >
              <BsLinkedin className="text-lg" /> Login with LinkedIn
            </motion.button>

            {/* Signup link */}
            <p className="text-gray-600 font-medium text-center text-sm sm:text-base">
              Don&apos;t have an account?
              <a href="#" className="text-blue-600 hover:text-blue-800 pl-1">Signup</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
