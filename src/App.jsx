import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import NavbarBanner from './components/Navbar/NavbarBanner.jsx'
import Hero from './components/Hero/Hero.jsx'
import CounterNumber from './components/CounterNumber.jsx'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs.jsx'
import Img1 from './assets/banner1.jpg'
import Img2 from './assets/banner2.jpg'
import Banner from './components/Banner/Banner.jsx'
import SubjectCard  from './components/SubjectCard/SubjectCard.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'

import Footer from './components/Footer/footer.jsx'
const BannerData1={
  image:Img1,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional Online Tutor on Your Schedule",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sapiente obcaecati ipsa molestias illo culpa vero possimus labore laboriosam repellat, a cumque vel illum harum fugit nihil excepturi numquam commodi!",
  link:"#"
}

const BannerData2={
  image:Img2,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional Online Tutor on Your Schedule",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sapiente obcaecati ipsa molestias illo culpa vero possimus labore laboriosam repellat, a cumque vel illum harum fugit nihil excepturi numquam commodi!",
  link:"#"
}

const App = () => {
  return (
    <div>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <NavbarBanner/>
        <Hero/>
        <CounterNumber/>
        <WhyChooseUs/>
        <Banner {...BannerData1}/>
        <Banner {...BannerData2} reverse={true} />
        <SubjectCard/>
        <Testimonial />
        <Footer/>
      </main>
    </div>
  )
}

export default App