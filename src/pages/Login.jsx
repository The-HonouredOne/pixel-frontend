import React from 'react'
import loginimg from '../assets/loginimg.png'
import minilogo from '../assets/minilogo.png'
import loginbg from '../assets/loginbg.jpg'
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";


const Login = () => {
  return (
    <div className='min-h-screen' style={{
      backgroundImage: `url(${loginbg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>



      <div className='container mx-auto pt-10 px-15  '>
        <div className='flex items-center gap-2'>

          <img src={minilogo} alt="" className='  w-12  ' />
          <span className='text-white text-2xl font-medium'>PixelGenix</span>
        </div>
        <div className="bg-[var(--brand)]/10 backdrop-blur-md container shadow grid grid-cols-2 w-full  mt-5 rounded-2xl">
          <div className="flex flex-col gap-5 mt-5 px-10">
            <p className="font-bold text-2xl">
              Welcome <span className="text-orange-500">Back !</span>
            </p>
            <img src={loginimg} alt="" className="w-80" />
          </div>

         <div className="flex flex-col gap-4  p-6 sm:p-8 rounded-xl w-full  shadow-md">
                                <h1 className="text-gray-900 text-xl sm:text-xl font-bold text-center">
                                    Login to Your Account
                                </h1>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="p-1 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a70a5]"
                                />
                                <input
                                    placeholder="Password"
                                    type="password"
                                    className="p-1 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a70a5]"
                                />
                                <p className="font-medium text-gray-500 text-end hover:text-gray-600 cursor-pointer">
                                    Forget password?
                                </p>
                                <button className="bg-[#0392ff] p-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] text-white font-semibold">
                                    Login
                                </button>

                                {/* Divider */}
                                <div className="flex items-center text-gray-600 font-medium">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="mx-2">or</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>

                                {/* Social Logins */}
                                <button className="bg-[#0392ff] p-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] font-semibold flex items-center justify-center gap-3 text-white">
                                    <FcGoogle className="bg-white rounded-full" /> Login with Google
                                </button>
                                <button className="bg-[#0392ff] p-1 rounded-xl cursor-pointer hover:bg-[#2c84b8] font-semibold flex items-center justify-center gap-3 text-white">
                                    <BsLinkedin /> Login with LinkedIn
                                </button>

                                {/* Signup link */}
                                <p className="text-gray-600 font-medium text-center">
                                    Don&apos;t have an account?
                                    <a href="#" className="text-blue-600 hover:text-blue-800 pl-1">Signup</a>
                                </p>
                            </div>
        </div>

      </div>
    </div>
  )
}

export default Login
