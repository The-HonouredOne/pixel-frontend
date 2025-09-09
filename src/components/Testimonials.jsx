import React from "react";
import img from "../assets/minilogo.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 mb-10">
      {/* Testimonials */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold mt-10">Testimonials</h1>

        <div className="border bg-blue-500 p-6 rounded-2xl mt-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-md">
          {/* Left Arrow */}
          <div className="cursor-pointer text-2xl hidden sm:block">
            <IoIosArrowBack className="text-white" />
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <img src={img} alt="profile" className="w-14 h-14 rounded-full border-2 border-white" />
              <p className="text-white text-base leading-relaxed max-w-lg">
                This platform helped me get my dream job! The process was
                simple, easy, and straightforward.
              </p>
            </div>
            <div className="mt-3 font-medium text-white">
              <h1>Surendra Bairwa</h1>
            </div>
          </div>

          {/* Right Arrow */}
          <div className="cursor-pointer text-2xl hidden sm:block">
            <IoIosArrowForward className="text-white" />
          </div>
        </div>
      </div>

      {/* Job Seeker & Employer Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-11">
        {/* Job Seeker */}
        <div className="flex-1 w-full">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">For Job Seeker</h1>
          <div className="flex justify-between border border-gray-300 p-5 rounded-2xl items-center w-full shadow-sm hover:shadow-md transition">
            <span className="font-medium text-gray-800">For a Task</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Find Job
            </button>
          </div>
        </div>

        {/* Employers */}
        <div className="flex-1 w-full">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">For Employers</h1>
          <div className="flex justify-between border border-gray-300 p-5 rounded-2xl items-center w-full shadow-sm hover:shadow-md transition">
            <span className="font-medium text-gray-800">Hire Talent</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Post Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
