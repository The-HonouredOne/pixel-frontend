import React from "react";
import img from "../assets/minilogo.png";
import { BsFilePerson } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";

const Feature = () => {
  return (
    <div className="container mx-auto lg:px-10 px-4 py-10">
      {/* Use responsive grid instead of flex-col + flex-row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* ==== Featured Jobs ==== */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">Featured Jobs</h1>

          {[1, 2, 3].map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between border rounded-lg border-gray-300 p-5 items-start sm:items-center gap-6 mb-6 shadow-sm hover:shadow-md transition"
            >
              {/* Job Info */}
              <div>
                <div className="flex items-center gap-4 font-semibold text-lg md:text-xl mb-2">
                  <img src={img} alt="logo img" className="w-12 h-12" />
                  <h1>Product Design</h1>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Luxman Colony, Jaipur, Raj
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-start sm:items-end gap-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm md:text-base">
                  Apply Now
                </button>
                <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                  40k-50K / Monthly
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* ==== Top Companies + How it Works ==== */}
        <div>
          {/* Top Companies */}
          <h1 className="text-2xl md:text-3xl font-semibold">Top Companies</h1>
          <div className="mt-6 border border-gray-300 rounded-lg p-5 grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-2014-present.jpg"
              alt="Netflix"
              className="w-20 sm:w-24 h-auto object-contain"
            />
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.96OxWjEy7in-wy0k-f12ZgHaEK"
              alt="Company"
              className="w-20 sm:w-24 h-auto object-contain"
            />
            <img
              src="https://www.logo-designer.co/wp-content/uploads/2015/10/Apple-Google-Interbrand-6th-annual-Best-Global-Brands-report.png"
              alt="Apple/Google"
              className="w-20 sm:w-24 h-auto object-contain"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/014/018/578/non_2x/microsoft-logo-on-transparent-background-free-vector.jpg"
              alt="Microsoft"
              className="w-20 sm:w-24 h-auto object-contain"
            />
          </div>

          {/* How it Works */}
          <div className="mt-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">How it Works</h1>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
              <div className="flex flex-col items-center gap-3">
                <BsFilePerson className="text-5xl sm:text-6xl text-blue-500 hover:text-blue-700 transition" />
                <h1 className="font-medium text-sm md:text-base">Register</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MdEditDocument className="text-5xl sm:text-6xl text-blue-500 hover:text-blue-700 transition" />
                <h1 className="font-medium text-sm md:text-base">Apply</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <PiHandshakeFill className="text-5xl sm:text-6xl text-blue-500 hover:text-blue-700 transition" />
                <h1 className="font-medium text-sm md:text-base">Get Hired</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
