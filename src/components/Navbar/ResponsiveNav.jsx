import React from 'react'
import {motion,AnimatePresence} from "framer-motion"

const ResponsiveNav = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
    {isOpen && (
        <motion.div 
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'>
            <div className=' text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col justify-center items-center gap-10'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </motion.div>
    )}
    </AnimatePresence>
  )
}

export default ResponsiveNav