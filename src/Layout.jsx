import React from 'react'
import { Outlet } from 'react-router'
import Navbar1 from './component/Navbar'
export default function Layout() {
  return (
    <>
        <Navbar1/>
        <Outlet/>
    </>
  )
}
