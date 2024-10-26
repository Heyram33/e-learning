import React from 'react'
import {motion} from 'framer-motion'

const Banner = ({image,title,subtitle,link,tag,reverse}) => {
  return (
    <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}}  transition={{duration:1}} className='bg-[#f9f9f9] pb-14'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
                {/* banner Img section */}
                <div className={`flex justify-center md:justify-start  items-start ${ reverse && "md:order-last"}`}>
                <img src={image} alt="" className='w-[400px] h-full object-cover '/>
                </div>
                {/* banner text  section */}
                <div className='flex flex-col justify-center text-center md:text-left space-y-4 '>
                    <p className='text-sm text-orange-600 font-semibold capitalize'>{tag}</p>
                    <p className='text-xl lg:text-2xl font-semibold capitalize'>{title}</p>
                    <p className='text-sm text-slate-600'>{subtitle}</p>
                    <div className='flex justify-center md:justify-start'>
                        <button className='primary-btn !mt-5 '>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Banner