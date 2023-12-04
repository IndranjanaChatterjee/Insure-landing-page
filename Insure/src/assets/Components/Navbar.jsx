import React from 'react';
import './Navbar.css'
export default function Navbar() {
  return (
    <header className='bg-[#ffffff] px-[11rem] py-[1.5rem] w-screen '>
      <nav className='flex flex-row justify-between items-center  gap-[2rem] uppercase'>
        <span className="text-[1.2rem] font-[700]">
          Insure
        </span>
        <span>
          <ul className='flex flex-row justify-between items-center gap-[2rem] text-[0.8rem]'>
            <li className='text-[#a5a3a7] hover:text-[#3e3e40] cursor-pointer font-[700]'>How we work</li>
            <li className='text-[#a5a3a7] hover:text-[#3e3e40] cursor-pointer font-[700]'>Blog</li>
            <li className='text-[#a5a3a7] hover:text-[#3e3e40] cursor-pointer font-[700]'>Account</li>
            <li className='border-[2px] border-solid border-[#000000] py-[0.5rem] px-[1.2rem] text-[#000000] font-[700] hover:bg-[#000000] hover:text-[#ffffff]'>View Plans</li>
          </ul>
        </span>
      </nav>
    </header>
  )
}
