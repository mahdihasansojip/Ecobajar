import React, { useState } from 'react'
import Container from '../Components/Layuots/Container'
import { Link } from 'react-router'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {

  let [show,setShow] = useState(false)
  return (
     <div>
     
        <div className='max-w-[520px] shadow-[0_0px_6px_rgba(0,0,0,0.4)] p-[20px] mx-auto my-[80px] rounded-md'>
          <h2 className='text-black text-center font-poppins font-semibold text-[32px] py-[15px]'>Sign In</h2>
         
         
             <input type="email" placeholder='Email' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />

           <div className='relative'>
            <input type={show ? "text" : "password"} placeholder='Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />

          <div className='absolute cursor-pointer top-[15px] right-[10px] text-[22px]' onClick={()=> setShow(!show)}>
          {
            show ?
            <IoEye />
            :
            <IoMdEyeOff />
          }
          </div>
           </div>
          
        <div className='flex justify-between items-center'> 
        <div className='flex items-center my-[8px]'>
          <input type="checkbox" className='mr-2 w-[18px] h-[18px]' />
         <label className='font-poppins font-md text-sm text-[#666666]' htmlFor="">Remember me</label>
        </div>
        <p className='font-poppins font-md text-sm text-[#666666]'><Link className='hover:text-blue-700 hover:font-semibold' to="/forget">Forget Password</Link></p>
        </div>
        
        <Link to="/">
        <button className='bg-primary w-full cursor-pointer py-[10px] my-[12px] rounded-full text-white font-poppins font-semibold text-[16px] hover:bg-blue-700 '>Login</button>
        </Link>

        <p className='font-poppins font-sm text-sm text-[#666666] text-center py-[10px]'>Don’t have account?
          <Link to="/registration" className='font-poppins font-semibold hover:text-blue-600 hover:font-bold font-sm text-black'>  Register</Link>
        </p>
        
          
        </div>
    
    </div>
  )
}

export default Login