// Footer.jsx
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Links */}
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-3">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Companies</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-3">Contact</h2>
          <p className="mb-1 text-sm md:text-base">‪+91 123-456-7990‬</p>
          <p className="mb-1 text-sm md:text-base">pixelgenix@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-3">Social Media</h2>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaXTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-blue-400 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} PixelGenix. All rights reserved.
      </div>
    </footer>
  );
}
