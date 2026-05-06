import React from 'react'
import Container from './Layuots/Container'
import logo from '../assets/Logo.webp'
import { IoSearchOutline } from "react-icons/io5";
import LoveIcon from '../Icons/LoveIcon';
import { IoBagOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
   <div className='border-b border-solid border-b-gry'>
     <Container> 
      <div className='items-center flex justify-between py-[27px]'>
        <div>
          <img src={logo} alt="logo" fetchpriority="high"/>
        </div>
        <div className='relative'>
          <input className='py-3 pl-11 w-[400px] border border-r-0 rounded-tl-sm rounded-bl-sm border-[#808080] rounded-pt-[10px] placeholder:text-[#808080] placeholder:font-poppins placeholder:text-sm font-medium' type="text" placeholder='Search' />
          <IoSearchOutline className='absolute top-1/2 -translate-y-1/2 left-4 text-[20px]' />
          <button className='text-[white] cursor-pointer bg-[#00B207] py-[14px] px-[24px] leading-[138%] rounded-tr-sm rounded-br-sm'>Search</button>
        </div>
        <div className='flex '>
         <div className='gap-[32px] flex'>
           <div className='cursor-pointer relative after:absolute after:top-0 after:left-[48px]  after:w-[2px] after:h-[25px] after:bg-[#CCCCCC] after:content-[""] '>
            <LoveIcon/>
          </div>
          <div className='relative'>
         <div className='w-[20px] h-[20px] cursor-pointer bg-[#2C742F] not-first: text-white absolute left-[18px] top-[-7px] flex items-center justify-center rounded-full'>2</div>
          <IoBagOutline className='text-[34px] cursor-pointer' />
          </div>
         </div>
          <div className='pl-[12px] '>
            
            <p className='font-normal font-poppins text-sm leading-[120%] pb-[7px] text-[#4D4D4D]'>Shopping cart:</p>
            <p className='font-poppins font-medium text-sm leading-[100%] text-[#1A1A1A]'>$57.00</p>
          </div>
        </div>
      </div>
    </Container>
   </div>
  )
}

export default SearchBar