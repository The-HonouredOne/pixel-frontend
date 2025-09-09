import React from "react";
import img from "../assets/minilogo.png";
import { BsFilePerson } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

const Feature = () => {
  return (
    <div className="container mx-auto lg:px-10 px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ==== Featured Jobs ==== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            Featured Jobs
          </h1>

          {[1, 2, 3].map((job, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col sm:flex-row justify-between border rounded-lg border-gray-300 p-5 items-start sm:items-center gap-6 mb-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm md:text-base"
                >
                  Apply Now
                </motion.button>
                <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                  40k-50K / Monthly
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ==== Top Companies + How it Works ==== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Top Companies */}
          <h1 className="text-2xl md:text-3xl font-semibold">Top Companies</h1>
          <motion.div
            className="mt-6 border border-gray-300 rounded-lg p-5 grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-2014-present.jpg",
              "https://tse2.mm.bing.net/th/id/OIP.96OxWjEy7in-wy0k-f12ZgHaEK",
              "https://www.logo-designer.co/wp-content/uploads/2015/10/Apple-Google-Interbrand-6th-annual-Best-Global-Brands-report.png",
              "https://static.vecteezy.com/system/resources/previews/014/018/578/non_2x/microsoft-logo-on-transparent-background-free-vector.jpg",
            ].map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt={`Company-${idx}`}
                className="w-20 sm:w-24 h-auto object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>

          {/* How it Works */}
          <div className="mt-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              How it Works
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
              {[
                { icon: <BsFilePerson />, label: "Register" },
                { icon: <MdEditDocument />, label: "Apply" },
                { icon: <PiHandshakeFill />, label: "Get Hired" },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-5xl sm:text-6xl text-blue-500">
                    {step.icon}
                  </div>
                  <h1 className="font-medium text-sm md:text-base">
                    {step.label}
                  </h1>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
