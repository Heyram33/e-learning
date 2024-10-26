import React from 'react'
import CountUp from 'react-countup';

const CounterNumber = () => {
  return (
    <div className='bg-secondary text-white py-12'>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-center">
                <p className='text-3xl font-semibold'>
                    <CountUp start={0} end={500} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Expert tutors</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-3xl font-semibold'>
                <CountUp  end={20000} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Hours Content</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-3xl font-semibold'>
                    <CountUp  end={234} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Subject and courses</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-3xl font-semibold'>
                <CountUp  end={82303} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Active Students</p>
            </div>
        </div>
    </div>
  )
}

export default CounterNumber