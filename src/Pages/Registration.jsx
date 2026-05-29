import React, { useState } from 'react'
import Container from '../Components/Layuots/Container'
import { Link } from 'react-router'
import axios from 'axios'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Registration = () => {

  const [regdata , setRegdata] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    term: false
  })

  let handlechenge = (e)=> {

    let name = e.target.name
    let value =  e.target.value 

    if(name !== "term"){
      setRegdata({...regdata, [name]: value})
    } else{
      setRegdata({...regdata, term: !regdata.term})
    }

    setRegdata({...regdata, [regdata.target.name]: e.target.value}) 
  }

  const handleClick = async ()=> {
    let data = await axios.post('http://localhost:5000/registration',regdata)
    console.log(data);
    
  }

  let [show,setShow] = useState(false)
  let [showtow,setShowtow] = useState(false)

  return (
   
     <div>
     
        <div className='max-w-[520px] shadow-[0_0px_6px_rgba(0,0,0,0.4)] p-[20px] mx-auto my-[80px] rounded-md'>
          <h2 className='text-center font-poppins font-semibold text-[32px] py-[20px]'>Create Account</h2>
      
           
           <input onChange={handlechenge} name='email' type="email" placeholder='Email' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />

          <div className='relative'>
            
           <input  onChange={handlechenge} name='password' type={show ? "text" : "password"} placeholder='Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
          
          <div className='absolute top-[14px] right-[7px] text-[22px]' onClick={()=> setShow(!show)}>
            {
              show
               ?
               < IoEye  />
              :
                <IoEyeOff />
            }
          </div>
          </div>


          <div className='relative'>
            
           <input  onChange={handlechenge} name='confirmpassword' type={showtow ? "text" : "password"} placeholder='Confirm Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
          
          <div className='absolute top-[14px] right-[7px] text-[22px]' onClick={()=> setShowtow(!showtow)}>
            {
              showtow
               ?
               < IoEye  />
              :
                <IoEyeOff />
            }
          </div>
          </div>
         
        <div className='flex items-center my-[8px]'>

          <input id='agree' onChange={handlechenge} name='term' type="checkbox" className='myInput mr-2 w-[18px] h-[18px] cursor-pointer ' />
          
         <label htmlFor='agree' className='mylabel font-poppins font-md text-sm text-[#666666] cursor-pointer' >  Accept all terms & Conditions</label>
        </div>
       
       <Link to="/login">
        <button onClick={handleClick} className='bg-primary w-full cursor-pointer py-[10px] my-[12px] rounded-full text-white font-poppins font-semibold text-sm hover:bg-blue-700 '>Create Account</button>
       </Link>

        <p className='font-poppins font-sm text-sm text-[#666666] text-center py-[10px]'>Already have account 
          <Link to="/login" className='font-poppins font-semibold hover:text-blue-600 font-sm text-black'> Login</Link>
        </p>
        
      
        </div>
     
    </div>
 
  )
}

export default Registration