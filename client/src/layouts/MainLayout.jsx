import React from 'react'
import Navbar from '../components/Navbar';
import {Outlet} from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='relative h-screen w-screen overflow-x-hidden'>
        <Navbar />
        {children}
      </div>
      <Outlet />
   
    </>
  )
}

export default MainLayout;