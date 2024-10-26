import React from 'react';
import {motion} from 'framer-motion'
import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";

const whyChooseData= [
    {
        id:1,
        title:"One-on-One Teaching",
        desc:"All of our special educationn experts have a degree in special education.",
        link:"/",
        icon:<GrYoga/>,
        bgColor: "#0063ff",
        delay:0.3,
    },
    {
        id:2,
        title:"24/7 Tutor Availabilty",
        desc:"Our tutors are always available to respond as quick as possible for you",
        link:"/",
        icon:<CiTimer />,
        bgColor: "#73bc00",
        delay:0.6,
    },
    {
        id:3,
        title:"Interactive Whiteboard",
        desc:"Our digital whiteboard equipped with audio and video chat fetures",
        link:"/",
        icon:<GiGymBag/>,
        bgColor: "#ff0000",
        delay:0.9,
    },
    {
        id:4,
        title:"Affordable Prices",
        desc:"Choose an expert tutor based on your budget and per hour.",
        link:"/",
        icon:<IoPricetagsOutline />,
        bgColor: "#fe6baa",
        delay:0.9,
    },
]

const WhyChooseUs = () => {
  return (
    <div className='bg-[#f9f9f9]'>
        <div className="container py-24">
            {/*Header Section*/}
            <div className="space-y-4 text-center max-w-[500px] mx-auto mb-5" >
                <h1 className='uppercase font-semibold text-orange-600'>Why Choose Us</h1>
                <p>Benefits of online teaching services with us</p>
            </div>
            {/*Card Section*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    whyChooseData.map((item)=>{
                        return (
                            
                            <motion.div key={item.id} initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}}  transition={{duration:0.5,delay:0.2}} className='space-y-4 p-6 rounded-xl cardShadow'>
                                {/*icon section*/}
                                <div style={{backgroundColor:item.bgColor}} className='w-10 h-10 rounded-lg flex justify-center items-center'>
                                    <div className='text-2xl'>{item.icon}</div>
                                </div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.desc}</p>
                            
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs