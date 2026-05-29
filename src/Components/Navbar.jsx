import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import useOutsideClick from '../Hooks/OutsiteClick';
import { IoSearch } from "react-icons/io5";
import Food from '../Icons/Food';
import Apple from '../Icons/Apple';
import Fish from '../Icons/Fish';
import Meet from '../Icons/Meet';
import Coffe from '../Icons/Coffe';
import IceCrim from '../Icons/IceCrim';
import Cake from '../Icons/Cake';
import Pie from '../Icons/Pie';
import Fody from '../Icons/Fody';
import { DiApple } from "react-icons/di";

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
    <div className="bg-[#2C742F] py-6 px-6 relative">
      <h2 className="text-white text-[26px] font-bold font-pop">
        Dashboard
      </h2>

     <input className='mt-[7px] py-[5px] pl-[15px] border border-[#E6E6E6] outline-0 rounded-[5px]' type="text" />
     <div className='absolute top-[63px] right-[32px] text-[20px] w-[40px] h-[40px] bg-[#ffffff] flex justify-center items-center rounded-[10px] hover:bg-[blue] hover:text-[white] cursor-pointer'>
      <IoSearch  />
     </div>
    </div>

    {/* Menu */}
    <ul className="py-5 font-pop items-center">

      <li className="flex  px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
      <span className='mr-[12px] '> < Food/> </span> Fresh Fruit
      </li>

      <li className=" flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
       <span className="mr-[12px]"> <Apple/> </span>   Vegetables
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
        <span className="mr-[12px]"> <Fish/> </span>   River Fish
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
         <span className="mr-[12px]"> <Meet/> </span> Chicken & Meat
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
       <span className="mr-[12px]"> <Coffe/> </span>   Drink & Water
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
         <span className="mr-[12px]"> <IceCrim/> </span> Yogurt & Ice Cream
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
         <span className="mr-[12px]"> <Cake/> </span> Cake & Bread
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
         <span className="mr-[12px]"> <Pie/> </span> Butter & Cream
      </li>

      <li className="flex px-6 py-4 text-[18px] hover:bg-[#2C742F] hover:text-white duration-300 cursor-pointer border-b">
         <span className="mr-[12px]"> <Fody/> </span> Cooking
      </li>

     

      <li className="px-6 py-4 text-[18px] text-red-500 hover:bg-red-500 hover:text-white duration-300 cursor-pointer">
       <span className='text-[28px]'>+</span> View all Category
      </li>

    </ul>
  </div>

              </div>
                <li ref={DropDownref}>
                    <Link onMouseEnter={()=> setDropDown(!dropDown)}  className='font-poppins  bg-[#333333] text-[20px]  font-bold absolute top-0 left-[64px] py-[17px] px-[20px] text-[white] flex items-center ' to='#'>All Categories <FaAngleDown className={`cursor-pointer flex pl-[4px] ml-[40px] duration-300 ${dropDown ? 'rotate-180' : 'rotate-0'} text-[20px]`} /></Link>

                 {dropDown &&
                 
                  <div className='shadow shadow-[#797777] bg-white w-[200px] absolute top-[70px] left-[90px] z-3 '>
                    <ul className='  h-full font-poppins font-medium text-[19px] '>
                      <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center'><DiApple className='mr-[10px]' /> home</li>
                     
                      <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center'><DiApple className='mr-[10px]' />About</li>
                     
                      <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center'><DiApple className='mr-[10px]' /> Blog</li>
                     
                      <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center'><DiApple className='mr-[10px]' />Page</li>
                     
                      <li className='hover:bg-black hover:text-white py-[10px] pl-[20px] flex items-center'><DiApple className='mr-[10px]' />Shop</li>
                     
                     
                    </ul>
                  </div>

                 }
                </li>


                <li ref={DropDowntowref} ><Link onClick={()=> setDropDowntow(!dropDowntow)} className='flex items-center hover:text-[white]'  to='#'>Home <FaAngleDown className={` cursor-pointer pl-[4px] duration-300 text-[17px] ${dropDowntow ? 'rotate-180 ml-[4px]' : 'rotate-0'}`}/></Link>

                 {dropDowntow &&
                 
                  <div className='absolute top-[60px]  z-[3] bg-gray-200 '>
                    <ul className='w-[100px] h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>About</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>Shop</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>Contact</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>Skils</li>
                     
                    </ul>
                  </div>

                 }
                </li>

                 <li ref={DropDownthreref} ><Link onClick={()=> setDropDownthre(!dropDownthre)} className='flex items-center hover:text-[white]'  to='#'>Shop <FaAngleDown className={` cursor-pointer pl-[4px] duration-300 text-[17px] ${dropDownthre ? 'rotate-180 ml-[4px]' : 'rotate-0'}`}/></Link>

                 {dropDownthre &&
                 
                  <div className='absolute top-[60px]  z-3 bg-gray-200'>
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


                 <li ref={DropDownforref} ><Link onClick={()=> setDropDownfor(!dropDownfor)} className='flex items-center hover:text-[white]'  to='#'>Pages<FaAngleDown className={` cursor-pointer pl-[4px] duration-300 text-[17px] ${dropDownfor ? 'rotate-180 ml-[4px]' : 'rotate-0'}`}/></Link>

                 {dropDownfor &&
                 
                  <div className='absolute top-[60px] z-3 bg-gray-200'>
                    <ul className='w-[100px]  h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>  
                    </ul>
                  </div>
                 }
                </li>


                  <li ref={DropDownfiveref} ><Link onClick={()=> setDropDownfive(!dropDownfive)} className='flex items-center hover:text-[white]'  to='#'>Blog<FaAngleDown className={` cursor-pointer pl-[4px] duration-300 text-[17px] ${dropDownfive ? 'rotate-180 ml-[4px]' : 'rotate-0'}`}/></Link>

                 {dropDownfive &&
                 
                  <div className='absolute top-[60px] z-3 bg-gray-200'>
                    <ul className='w-[100px] z-13 h-full font-poppins font-medium text-[15px] text-center'>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>home</li>
                      <li className='hover:bg-primary hover:text-black py-[10px]'>About</li>
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