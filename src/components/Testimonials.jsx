import React from "react";
import img from "../assets/minilogo.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 mb-10">
      {/* Testimonials */}
      <div>
        <motion.h1
          className="text-2xl md:text-3xl font-semibold mt-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h1>

        <motion.div
          className="border bg-blue-500 p-6 rounded-2xl mt-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Arrow */}
          <motion.div
            className="cursor-pointer text-2xl hidden sm:block"
            whileHover={{ scale: 1.2, x: -5 }}
          >
            <IoIosArrowBack className="text-white" />
          </motion.div>

          {/* Testimonial Content */}
          <div className="flex-1 text-center sm:text-left">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={img}
                alt="profile"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <p className="text-white text-base leading-relaxed max-w-lg">
                This platform helped me get my dream job! The process was
                simple, easy, and straightforward.
              </p>
            </motion.div>
            <motion.div
              className="mt-3 font-medium text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1>Surendra Bairwa</h1>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <motion.div
            className="cursor-pointer text-2xl hidden sm:block"
            whileHover={{ scale: 1.2, x: 5 }}
          >
            <IoIosArrowForward className="text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Job Seeker & Employer Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-11">
        {/* Job Seeker */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl md:text-2xl font-semibold mb-4">For Job Seeker</h1>
          <motion.div
            className="flex justify-between border border-gray-300 p-5 rounded-2xl items-center w-full shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-medium text-gray-800">For a Task</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Find Job
            </button>
          </motion.div>
        </motion.div>

        {/* Employers */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-xl md:text-2xl font-semibold mb-4">For Employers</h1>
          <motion.div
            className="flex justify-between border border-gray-300 p-5 rounded-2xl items-center w-full shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-medium text-gray-800">Hire Talent</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Post Job
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
