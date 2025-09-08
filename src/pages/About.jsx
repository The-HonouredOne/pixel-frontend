import React from "react";
import grouppixel from '../assets/grouppixel.jpg';

const About = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-blue-500 text-black md:min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-20 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-8">About Us</h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          Connecting Talent with Opportunities.
        </h2>
        <p className="text-gray-100 text-base md:text-lg max-w-3xl">
          Discover our mission, vision, and values that drive us forward.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Left Column: Text */}
        <div className="md:w-1/2 flex flex-col gap-8">

          {/* Our Company */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Company</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We are a leading job portal dedicated to connecting talented
              individuals with top companies worldwide. With an easy-to-use platform, 
              we simplify job searching and hiring for everyone. Our platform bridges 
              the gap between ambition and opportunity, simplifying recruitment with 
              smart, user-friendly tools.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission & Vision</h2>
            
            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              
              <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Mission</h3>
                <p className="text-gray-600 text-sm">
                  To empower job seekers and employers with a seamless platform that fosters growth and career opportunities.
                </p>
              </div>

              <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Vision</h3>
                <p className="text-gray-600 text-sm">
                  To become the most trusted global hub for career opportunities and talent.
                </p>
              </div>

            </div>

            
      
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex flex-col justify-center md:justify-end gap-8">
          <img 
            src={grouppixel} 
            alt="Team collaboration" 
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
          {/* Values */}
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium">Integrity</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium">Innovation</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium">Inclusivity</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium">Excellence</span>
            </div>
          
        </div>

      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-5 flex flex-col md:flex-row gap-12">

        {/* Left Card */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✔</span> Wide network of Employers
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✔</span> Verified Job Listing
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✔</span> User-Friendly Platform
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✔</span> 24/7 Support
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✔</span> Career Resources & Guidance
            </li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Explore Jobs
          </button>
        </div>

        {/* Right Stats Card */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">20k+</p>
              <p className="text-gray-600">Job Seekers connected</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100k+</p>
              <p className="text-gray-600">Verified Jobs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">50k+</p>
              <p className="text-gray-600">Employers onboarded</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
