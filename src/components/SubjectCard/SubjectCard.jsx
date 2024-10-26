import React from 'react'
import {motion} from 'framer-motion'
import { FaBook } from 'react-icons/fa'

const subjectList=[
    {
        id:1,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.2,
    },
    {
        id:2,
        name:"English",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.3,
    },
    {
        id:3,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.4,
    },
    {
        id:4,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#464646",
        delay:0.5,
    },
    {
        id:5,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.6,
    },
    {
        id:6,
        name:"English",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.7,
    },
    {
        id:7,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#0063ff",
        delay:0.8,
    },
    {
        id:8,
        name:"Engineering",
        icon:<FaBook/>,
        color:"#464646",
        delay:0.9,
    },
]

const SubjectCard = () => {
  return (
    <>
        <div className="container py-14 md:py-24">
            {/*header section*/}
            <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
                <h1 className='uppercase font-semibold text-orange-500'>Our tutor subjects</h1>
                <p className='font-semibold text-3xl'>Find Online Tutor in Any Subject</p>
            </div>
            {/*Card section*/}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    subjectList.map((subject)=>{
                        return (
                            <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{type:"spring", stiffness:100,delay:subject.delay}}
                              key={subject.id} className='border border-secondary/20 p-4 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer rounded-lg'>
                                <div style={{backgroundColor:subject.color+20}} className="w-10 h-10 rounded-md flex justify-center items-center">{subject.icon}</div>
                                <p>{subject.name}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default SubjectCard