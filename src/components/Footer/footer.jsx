import React from 'react'
import { MdComputer } from 'react-icons/md'

const footer = () => {
  return (
    <div className='container'>
      <hr />
            <div className="grid md:grid-cols-4 md:gap-4 py-5  text-black">
              <div className="py-8 px-4 space-y-4">
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                  <MdComputer className="text-secondary text-4xl"  />
                  <p className=''>E-Tutor</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates expedita voluptate culpa, itaque est doloribus tenetur numquam eaque quia? Saepe nemo asperiores nulla atque quae omnis vel, porro quis.</p>
                <div></div>
              </div>

              <div className='grid grid-cols-2 md:col-span-2 md:ml-14'>
                <div className="py-8 px-4">
                  <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Service</a></li>
                </ul>
                </div>
                <div className="py-8 px-4">
                  <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>SocialMedia Accounts</h1>
                  <ul className='flex flex-col gap-3'>
                  <li><a href="">Instagram</a></li>
                  <li><a href="">LinkedIn</a></li>
                  <li><a href="">Facebook</a></li>
                </ul>
                </div>
                
              </div>
              <div className="py-8 px-4 flex justify-center">
                  <div>
                  <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Contact</h1>
                  <ul className='flex flex-col gap-3'>
                  <li>Phone Number :124+++++++</li>
                  <li>Email: learnabc@gmail.com</li>
                  <li></li>
                </ul>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default footer