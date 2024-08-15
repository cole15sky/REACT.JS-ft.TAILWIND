import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'




function Layout() {
  return (
   <>
   <Header/>
   <Footer/>
   <Outlet/>
    </>
  )
}

export default Layout
