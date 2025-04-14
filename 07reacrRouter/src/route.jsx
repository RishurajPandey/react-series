import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function route() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default route
