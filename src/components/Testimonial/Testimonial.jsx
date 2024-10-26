import React from 'react'
import Slider from 'react-slick'
import banner1 from '../../assets/banner1.jpg'
const TestimonialData=[
  {
    id:1,
    name:"John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum delectus nesciunt, amet nulla quae reprehenderit nihil labore autem illum iusto, quis quo earum? Id ad nemo, dolor nulla sint veritatis.",
    img:banner1,
    delay:0.2,
  },
  {
    id:2,
    name:"John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum delectus nesciunt, amet nulla quae reprehenderit nihil labore autem illum iusto, quis quo earum? Id ad nemo, dolor nulla sint veritatis.",
    img:"",
    delay:0.2,
  },
  {
    id:3,
    name:"John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum delectus nesciunt, amet nulla quae reprehenderit nihil labore autem illum iusto, quis quo earum? Id ad nemo, dolor nulla sint veritatis.",
    img:"",
    delay:0.2,
  },
  {
    id:4,
    name:"John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum delectus nesciunt, amet nulla quae reprehenderit nihil labore autem illum iusto, quis quo earum? Id ad nemo, dolor nulla sint veritatis.",
    img:"",
    delay:0.2,
  },
  {
    id:5,
    name:"John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum delectus nesciunt, amet nulla quae reprehenderit nihil labore autem illum iusto, quis quo earum? Id ad nemo, dolor nulla sint veritatis.",
    img:"",
    delay:0.2,
  }
]; 

const Testimonial = () => {
  // var setting = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToScroll: 1,
  //   autoplaySpeed:2000,
  //   cssEase:"linear",
  //   pauseOnHover:true,
  //   pauseOnFocus:true,
  //  };
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
      {
        breakpoint: 1000,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:2,
        },
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:2,
        },
      },
      {
        breakpoint: 640,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        },
      },
    ]
  };
  return (
    <div className='py-14 mb-10'>
      <div className="container">
        {/*header section*/}
        <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto'>
          <h1 className='uppercase font-semibold text-orange-600'>OUR TESTIMONIALS</h1>
          <p className='font-semibold text-3xl'>What Our Students Say About Us</p>
        </div>
        {/*cards section*/}
        <div className="">
          <Slider {...setting}>
            {
              TestimonialData.map((item)=>{
                return ( 
                  <div key={item.id}>
                    <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10'>
                      {/*Upper section*/}
                      <div className='flex justify-start items-center gap-5'>
                        <img src={item.img} alt="" className='w-16 h-16 rounded-full' />
                        <div>
                          <p className='text-xl font-bold text-black/80'>{item.name}</p>
                          
                        </div>
                      </div>
                      {/*bottom section*/}
                      <div className="py-6 space-y-4">
                        <p className='text-sm text-gray-500'>{item.text}</p>
                        <p>⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                </div>
                
              )})
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial