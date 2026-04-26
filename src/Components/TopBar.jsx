import React, { useRef } from 'react'
import Container from './Layuots/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const TopBar = () => {

  let droplng = useRef()
  

  let HandleClicklng = ()=> {
    if(droplng.current.style.display == 'none'){
      droplng.current.style.display = 'block'
    } else if (droplng.current.style.display == 'block'){
      droplng.current.style.display = 'none'
    }
  }

  return (

    <div className='border-b border-solid border-b-gry-50 items-center font-poppins text-[#666666]  text-sm py-[12px]'>
       <Container>k
        <div className='flex justify-between'>
          <div className='flex items-center  gap-[6px]'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
          <div className='flex gap-[20px] '>
            <div className='flex items-center' onClick={HandleClicklng}>Eng <FaAngleDown /></div>

            <div className='absolute top-[35px] bg-[#E6E6E6] p-[7px] hidden' ref={droplng}>
              <ul>
                <li>BG</li>
                <li>CH</li>
                <li>IN</li>
                <li>IN</li>
              </ul>
            </div>

            <div className='flex items-center '>USD <FaAngleDown /></div>
            <div className='flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:top-[2px] after:left-[-12px] after:content-[""] after:absolute'>Sign In / Sign Up </div>
          </div>
        </div>
       </Container>

    </div>

   
  )
}

export default TopBar