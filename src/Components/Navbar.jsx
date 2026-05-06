import React from 'react'
import Container from './Layuots/Container'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
  return (
   <div className='bg-[#1A1A1A] text-[white]'>
    <Container>
        <div>
            <ul className='flex gap-[32px] font-poppins font-medium py-[19px] text-[15px] text-[#999999] '>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Home <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Shop <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Pages <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
                <li  ><Link className='flex items-center hover:text-[white]'  to='#'>Blog <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link></li>
               
                <li ><Link className='flex items-center hover:text-[white]'>About Us</Link>  </li>
                <li ><Link className='flex items-center hover:text-[white]'>Contact Us</Link>  </li>
                
            </ul>
        </div>
    </Container>
   </div>
  )
}

export default Navbar