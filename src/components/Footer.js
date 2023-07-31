import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome, FaTiktok, 
     } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { BiCartAdd, BiSupport } from "react-icons/bi"
import { uprush3 } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'> 
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
          <div className='max-w-[60%] flex flex-col gap-7'>
            <img src = { uprush3 } alt="uprush"/>
            <p className='text-white text-sm tracking-wide'> @UpRushSocialGeekers</p>
            <img className='w-56' src={ "" } alt="paymentLogo" />
            <div className="flex gap-5">
                <FaFacebookF className=' hover:text-white duration-300 cursor-pointer'/>
                <FaTwitter className=' hover:text-white duration-300 cursor-pointer'/>
                <FaTiktok className=' hover:text-white duration-300 cursor-pointer'/>
                <FaInstagram className=' hover:text-white duration-300 cursor-pointer'/>
                <FaYoutube className=' hover:text-white duration-300 cursor-pointer'/>
                <FaHome className=' hover:text-white duration-300 cursor-pointer'/>
            </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'> 
                    Locate Us
                </h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>L16 Tower 6789 Ayala Avenue</p>
                    <p>1226 Makati, Philippines</p>
                    <p>support@readywritenow.com</p>
                </div>
            </div>
            <div className='text-base flex flex-col gap-1'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        < BsFillPersonFill />
                    </span> My Account 
                </p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        < BiCartAdd />
                    </span> CheckOut 
                </p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        < BiSupport />
                    </span> Support 
                </p>
            </div>
            <div className='flex flex-col justify-center'>
                <input className="bg-transparent border px-4 py-2 text-sm"
                placeholder='e-mail'
                type = "text"/>
                <button className=' text-sm border text-white border-t-0 hover:bg-gray-900
                active:bg-white active:text-black'>Subscribe</button>
            </div>
            
      </div> 
    </div>
  )
}

export default Footer
