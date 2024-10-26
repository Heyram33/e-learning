import React, { useState , useEffect, useRef  } from 'react';
import {NavbarMenu} from '../../mockData/data.js';
import { MdComputer,MdMenu,MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveNav from "./ResponsiveNav"


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const menuRef = useRef(null);

    // Close the menu when clicking outside of it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
  return (
      <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.5}}>
      <nav>
        <div className='container flex justify-between items-center py-6'>
          {/* Logo Section */}
          <div className='text-2xl flex items-center gap-2 font-bold'>
            <MdComputer className='text-3xl text-secondary'/>
            <p>E-tutor</p>
          </div>

          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className='flex text-center gap-6'>
              {
                NavbarMenu.map((items)=>{
                  return (
                  <li key={items.id}>
                    <a className='inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold' href={items.link}>{items.title}</a>
                  </li>
                )})
              }
            </ul>
          </div>
          {/* CTA Button Section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white font-semibold bg-secondary rounded-full px-6 py-2">Register</button>
          </div>
          {/* Mobile Hamburger Section */}
          <div className="lg:hidden cursor-pointer" onClick={()=> setIsOpen(!isOpen) }>
              {isOpen ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />}
          </div>
          </div>
      </nav>
      </motion.div>
      {/* Mobile Sidebar Section */}
      <div ref={menuRef}>
        <ResponsiveNav isOpen={isOpen} />
      </div>
    </>
  )
}

export default Navbar