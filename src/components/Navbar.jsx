import React from 'react'
import Logo from "../assets/Logo.svg"
const Navbar = () => {
  return (
    <nav className='bg-bg flex justify-between px-8 py-6 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <div> 
            <span className='cursor-pointer'>
                <img src={Logo} alt="logo"/>
            </span>
        </div>

        <div>
        <ul className='md:flex md:items-center md:static absolute w-full'>
            <li className='mx-4 my-6'>
                <a href="/login" className='text-xl  duration-500 text-white '>Login</a>
            </li>
            <li className='mx-4 my-6'>
                <a href="/signup" className='text-xl duration-500 bg-white px-4 py-2 rounded-md text-black'>Signup</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar