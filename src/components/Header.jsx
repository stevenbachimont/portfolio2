import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/sun-and-moon.png"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">

        <h1 className='text-black text-5xl font-bold'>Hi! I'm Steven</h1>
        <p className='text-black py-4 max-w-lg '>
            I'm a web developer with 1 year of experience using ReactJS, Express.js, MySQL and Node.js. I'm learning, TypeScript, NextJS and Docker. Reach out if you'd like to learn more!</p>
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[200px] flex ">
      <img className='w-96 ast-img rotate-on-hover' src={logo1} alt="" />

      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">

      <img className='w-96 ast-img rotate-on-hover' src={logo} alt="" />
      </div>

    </div>
   </div>
   </>
  )
}

export default Header
