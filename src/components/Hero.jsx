import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import pixelbanner from "../assets/banner.jpg";

const Hero = () => {
  const [finished, setFinished] = useState(false);

  return (
    <div
      className="relative md:min-h-screen min-h-[60vh] flex flex-col justify-center items-center text-center px-4 pt-10 lg:pt-0 md:pt-0 "
      style={{
        backgroundImage: `url(${pixelbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Animated / Final Heading */}
      {!finished ? (
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
      ) : (
        <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          To Get a{" "}
          <span className="bg-blue-200 text-black rounded-xl px-2 py-1">
            job
          </span>{" "}
          you love
        </span>
      )}

      {/* Search Section */}
      {finished && (
        <div className="mt-8 w-full max-w-2xl">
          <p className="text-gray-200 text-base sm:text-lg mb-4">
            Find opportunities that match your passion 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
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
            <button className="sm:w-auto w-full px-6 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition">
              Find Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
