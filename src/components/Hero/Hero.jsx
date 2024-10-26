import React from 'react'
import heroImg from '../../assets/heroImg.png'
import { FaPlay } from "react-icons/fa";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <>
        <div className="container grid grid-cols-1  md:grid-cols-2 min-h-[550px] relative ">
            {/*brand info*/}
           
            
            <div className='flex flex-col justify-center py-14 '>
            <motion.div  initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{duration:1}}>
                <div className="text-center md:text-left space-y-6">
                    <p className='text-orange-600 uppercase font-semibold'>100% Satisfaction Guarantee</p>
                    <h1 className='text-5xl font-semibold lg-text-6xl !leading-tight'>Find Your Perfect <span className='text-primary'>Tutor</span></h1>
                    <p>
                        We help you find perfect tutor for 1-on-1 lessons.
                        It is completely free and private
                    </p>
                    {/*Button Section*/}
                    <div className='flex gap-8 justify-center md:justify-start items-center !mt-8'>
                    <button className='primary-btn'>Get Started</button>
                    <button className='flex justify-end items-center gap-2 font-semibold'>
                        <span className='w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center'>
                        <FaPlay className='text-secondary'/>
                        </span>
                        See how it works</button>
                    </div>
                </div>
                </motion.div>
            </div>
            
            {/*Hero Image*/}
            <div className="flex justify-center items-center ">
            <motion.img className='w-[350px] md:w-[550px] xl-w-[700px]' src={heroImg}  initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} transition={{duration:1}}>
            </motion.img>
            </div>
        </div>
    </>
  )
}

export default Hero