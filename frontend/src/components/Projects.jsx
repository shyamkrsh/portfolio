import React from "react";
import ProjectCard from './ProjectCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // screen width below 768px
        settings: {
          slidesToShow: 1, // show only 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // screen width below 1024px
        settings: {
          slidesToShow: 2, // show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-[100%] h-[100%] projects text-center'>
      <h1 className='text-4xl md:text-5xl text-center font-bold pt-20'>ℙ𝕣𝕠𝕛𝕖𝕔𝕥𝕤</h1>
      <Slider {...settings} className="py-10 mt-5">
          <ProjectCard image={"https://i.ibb.co/NYj6XQK/easystay.png"} title={"Property Rental Application"} link={"https://easystayngp.vercel.app"} />
          <ProjectCard image={"https://i.ibb.co/NYj6XQK/easystay.png"} title={"Property Rental Application"} link={"https://easystayngp.vercel.app"} />
          <ProjectCard image={"https://i.ibb.co/NYj6XQK/easystay.png"} title={"Property Rental Application"} link={"https://easystayngp.vercel.app"} />
      </Slider>

    </div>
  )
}

export default Projects