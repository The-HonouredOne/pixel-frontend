
import { MdLocationPin } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import map from '../assets/map.png'


const Contact = () => {






    return (
        <div>
            <div className="bg-gradient-to-t from-green-50 to-blue-400 md:px-50 text-black md:min-h-[100vh] flex flex-col justify-center items-start px-6  pt-12 gap-10">
                <div>
                    <p className='text-5xl font-bold pb-3'>Contact Us</p>
                    <p className='text-gray-500 text-xl font-medium'>We'd love to hear from you. Get in touch today</p>
                </div>

                <div className="flex w-full justify-between ">
                    <div className="w-[55%] bg-white flex flex-col gap-4 rounded-2xl shadow p-10 ">
                        <input type="text" placeholder='Name' className='border border-gray-300 outline-0 rounded pl-2 placeholder:text-xs py-2 text-xs' />
                        <input type="text" placeholder='Email' className='border border-gray-300 outline-0 rounded pl-2 placeholder:text-xs py-2 text-xs' />
                        <textarea type="text" placeholder='Message' className='border border-gray-300 outline-0 rounded pl-2 placeholder:text-xs h-25 py-1 text-xs' />
                        <button type="text" placeholder='Message' className='border border-gray-300 outline-0 rounded bg-blue-500 text-white '>Send Message</button>
                    </div>
                    <div className="w-[40%]  flex flex-col gap-4 pt-5  ">
                        <div className='flex items-center gap-8'>
                            <MdLocationPin size={25} /> <div className='font-medium'> <p>Varun Path</p> <p>jaipur, Raj. 1235</p> </div>
                        </div>
                        <div className='flex items-center  gap-8 pl-2'>
                            <BsTelephone size={15} className='mt-1' /> <div className='font-medium'> <p>(123) 456 789</p> </div>
                        </div>
                        <div className='flex items-center  gap-8 pl-2'>
                            <MdMailOutline size={18} className='mt-2' /> <div className='font-medium'> <p>pixelee@gmail.com</p> </div>
                        </div>


                        <img src={map} className="w-60 h-40 rounded-2xl shadow" alt="" />



                    </div>

                </div>


            </div>
        </div>
    )
}

export default Contact
