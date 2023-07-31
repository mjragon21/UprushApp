import React from 'react'
import { man, uprush2,shoppingcart } from '../assets/index'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div className='max-w-[12%]'>
                <img src = { uprush2 } alt="uprush2"/>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    underlin-offset-2 decoration-[1px] cursor-pointer'>Home</li>
                    <li
                    className='text-base text-black font-bold hover:text-orange-900
                    underlin-offset-2 decoration-[1px] cursor-pointer'>Pages</li>
                    <li
                    className='text-base text-black font-bold hover:text-orange-900
                    underlin-offset-2 decoration-[1px] cursor-pointer'>Services</li>
                    <li
                    className='text-base text-black font-bold hover:text-orange-900
                    underlin-offset-2 decoration-[1px] cursor-pointer'>Element</li>
                    <li
                    className='text-base text-black font-bold hover:text-orange-900
                    underlin-offset-2 decoration-[1px] cursor-pointer'>About us
                    </li>
                </ul>
                <div className='relative'>
                    <img className="w-6" src = { shoppingcart } alt="shoppingcart"/>
                    <span className='absolute w-6 left-0 text-sm flex items-center
                    justify-center font-semibold'> 
                    0</span>
                </div>
                <img className='w-8 h-8 rounded-full'
                    src= { man } alt="userLogo"
                />
            </div> 
        </div>
    </div> 
        

  )
}

export default Header