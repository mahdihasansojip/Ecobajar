import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import useOutsideClick from '../Hooks/OutsiteClick';

const Navbar = () => {

  let [sidebar,setSidebar] = useState(false)
  let [dropDown,setDropDown] = useState(false)
  let [dropDowntow,setDropDowntow] = useState(false)
  let [dropDownthre,setDropDownthre] = useState(false)
  let [dropDownfor,setDropDownfor] = useState(false)
  let [dropDownfive,setDropDownfive] = useState(false)

  let Sidebarref = useRef(null);
  let DropDownref = useRef(null);
  let DropDowntowref = useRef(null);
  let DropDownthreref = useRef(null);
  let DropDownforref = useRef(null);
  let DropDownfiveref = useRef(null);

  useOutsideClick(Sidebarref, ()=> setSidebar(false),sidebar)
  useOutsideClick(DropDownref, ()=> setDropDown(false),dropDown)
  useOutsideClick(DropDowntowref, ()=> setDropDowntow(false),dropDowntow)
  useOutsideClick(DropDownthreref, ()=> setDropDownthre(false),dropDownthre)
  useOutsideClick(DropDownforref, ()=> setDropDownfor(false),dropDownfor)
  useOutsideClick(DropDownfiveref, ()=> setDropDownfive(false),dropDownfive)

  return (
   
         <div className='bg-[#1A1A1A] text-[white]'> 
          <Container>
        <div className='flex justify-between items-center'>
            <ul className='flex gap-[32px] relative font-poppins font-medium  text-sm text-[#999999] items-center'>

             
             
               <div className="relative" ref={Sidebarref}>

            <li onClick={()=> setSidebar(!sidebar)} className=' p-4 bg-primary mr-[200px]'>
                <FaBars className='text-[white] w-[32px] h-[32px] cursor-pointer'/>  
                </li>

            {sidebar && 
            <div onClick={() => setSidebar(false)} className="fixed inset-0 bg-black/40 z-40">
            </div>
          }   

             <div className={`fixed top-0 left-0 h-screen w-[300px] bg-white shadow-2xl z-50 duration-300 overflow-y-auto
              ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
 

    {/* Header */}
    <div className="bg-[#2C742F] py-6 px-6">
      <h2 className="text-white text-[26px] font-bold font-pop">
        Dashboard
      </h2>

      <p className="text-gray-200 text-sm mt-1">
        Welcome Back 👋
      </p>
    </div>

    {/* Menu */}
    <ul className="py-5 font-pop">

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Home
      </li>

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Shop
      </li>

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Products
      </li>

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Categories
      </li>

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Blog
      </li>

      <li className="px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        Contact
      </li>

      <li className="px-6 py-4 text-[18px] text-red-500 hover:bg-red-500 hover:text-white duration-300 cursor-pointer">
        Logout
      </li>

    </ul>
  </div>

              </div>


               

                <li ref={DropDownref}>
                    <Link onClick={()=> setDropDown(!dropDown)} className='font-poppins  bg-[#333333] text-[20px]  font-bold absolute top-0 left-[64px] py-[17px] px-[20px] text-[white] flex items-center ' to='#'>All Categories <FaAngleDown className=' cursor-pointer flex pl-[4px] ml-[40px] text-[20px]'/></Link>

                 {dropDown &&
                 
                  <div className='absolute top-[60px] left-[90px] bg-gray-200'>
                    <ul className='w-[200px] h-full font-poppins font-medium text-[23px] text-center'>
                      <li className='hover:bg-black hover:text-white py-[10px]'>home</li>
                      <li className='hover:bg-black hover:text-white py-[10px]'>home</li>
                      <li className='hover:bg-black hover:text-white py-[10px]'>home</li>
                      <li className='hover:bg-black hover:text-white py-[10px]'>home</li>
                      <li className='hover:bg-black hover:text-white py-[10px]'>home</li>
                     
                    </ul>
                  </div>

                 }
                </li>


                <li ref={DropDowntowref} ><Link onClick={()=> setDropDowntow(!dropDowntow)} className='flex items-center hover:text-[white]'  to='#'>Home <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link>

                 {dropDowntow &&
                 
                  <div className='absolute top-[60px]  bg-gray-200'>
                    <ul className='w-[100px] h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                     
                    </ul>
                  </div>

                 }
                </li>

                 <li ref={DropDownthreref} ><Link onClick={()=> setDropDownthre(!dropDownthre)} className='flex items-center hover:text-[white]'  to='#'>Shop <FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link>

                 {dropDownthre &&
                 
                  <div className='absolute top-[60px]  bg-gray-200'>
                    <ul className='w-[100px] h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>  
                    </ul>
                  </div>
                 }
                </li>


                 <li ref={DropDownforref} ><Link onClick={()=> setDropDownfor(!dropDownfor)} className='flex items-center hover:text-[white]'  to='#'>Pages<FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link>

                 {dropDownfor &&
                 
                  <div className='absolute top-[60px]  bg-gray-200'>
                    <ul className='w-[100px] h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>  
                    </ul>
                  </div>
                 }
                </li>


                  <li ref={DropDownfiveref} ><Link onClick={()=> setDropDownfive(!dropDownfive)} className='flex items-center hover:text-[white]'  to='#'>Blog<FaAngleDown className=' cursor-pointer pl-[4px] text-[17px]'/></Link>

                 {dropDownfive &&
                 
                  <div className='absolute top-[60px]  bg-gray-200'>
                    <ul className='w-[100px] h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>  
                    </ul>
                  </div>
                 }
                </li>

               
                <li ><Link className='flex items-center hover:text-[white]'>About Us</Link>  </li>
                <li ><Link className='flex items-center hover:text-[white]'>Contact Us</Link>  </li>
                
            </ul>
           
           <div>
            <Link to='tel:(219) 555-0114' className='flex items-center gap-2.5 font-poppins font-medium text-[14px]'><FiPhoneCall className='text-[20px]'/> (219) 555-0114</Link>
           </div>

        </div>
     </Container>
   </div>
   
   
  
  )
}

export default Navbar