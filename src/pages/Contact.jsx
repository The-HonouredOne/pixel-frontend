import { MdLocationPin, MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import map from "../assets/map.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-green-50 to-blue-400 text-black min-h-screen px-4 md:px-10 lg:px-30 md:pt-25 pt-20 py-10 flex flex-col items-center">
      {/* Heading */}
      <div className="w-full max-w-6xl px-4 md:px-0 text-center md:text-left">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold pb-3">Contact Us</p>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium">
          We`d love to hear from you. Get in touch today
        </p>
      </div>

      {/* Form + Info */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full max-w-6xl mt-8 px-4 md:px-0">
        {/* Left: Form */}
        <div className="w-full md:w-[55%] bg-white flex flex-col gap-4 rounded-2xl shadow p-4 sm:p-6 md:p-8">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 outline-0 rounded pl-2 placeholder:text-sm py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-300 outline-0 rounded pl-2 placeholder:text-sm py-2 text-sm"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 outline-0 rounded pl-2 placeholder:text-sm h-28 py-1 text-sm"
          />
          <button className="border border-gray-300 rounded bg-blue-500 text-white py-2 hover:bg-blue-600 transition">
            Send Message
          </button>
        </div>

        {/* Right: Info + Map */}
        <div className="w-full md:w-[40%] flex flex-col gap-5 pt-3">
          <div className="flex items-start gap-3">
            <MdLocationPin size={22} className="text-blue-600 flex-shrink-0 mt-1" />
            <div className="font-medium text-sm sm:text-base leading-relaxed">
              <p>Varum Path,</p>
              <p>Jaipur, Raj. 1235</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BsTelephone size={18} className="text-blue-600 flex-shrink-0 mt-1" />
            <div className="font-medium text-sm sm:text-base leading-relaxed">
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdMailOutline size={20} className="text-blue-600 flex-shrink-0 mt-1" />
            <div className="font-medium text-sm sm:text-base leading-relaxed break-words">
              <p>pixelee@gmail.com</p>
            </div>
          </div>

          <img
            src={map}
            className="w-full  sm:h-39 rounded-2xl shadow object-cover"
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;