import React from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FooterTop from '../FooterTop'
import Breadcumb from '../Breadcumb'
import Banner from '../../Pages/Banner'

const Mainlayuot = () => {
  let PageName = useLocation().pathname
  
  
  return (
    <>
        <TopBar/>
        <SearchBar/>
        <Navbar/>
        {PageName !== '/' && <Breadcumb/> }
       {PageName !== '/registration' && PageName !== '/login' && PageName !== '/forget' && <Banner />}
        
        <Outlet/>
        <FooterTop/>
        <Footer/>
    </>
  )
}

export default Mainlayuot