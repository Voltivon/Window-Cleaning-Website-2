import React, { useEffect } from 'react'
import Carousel  from "react-bootstrap/Carousel";
import { SelectedPage } from '@/shared/types';
import CarouselImg1 from "@/assets/carousel-img-1.png";
import CarouselImg2 from "@/assets/carousel-img-2.png";
import { motion } from 'framer-motion';
import { useState } from 'react';
import './carouselbtns.css';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}


const Reviews = ({setSelectedPage}: Props) => {

  const CustomPrevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
  );
  
  const CustomNextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
  );

    const reviewsArray = [
        {
          image: CarouselImg1
        },
        {
          image: CarouselImg2
        }
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setCurrentIndex(selectedIndex)
    }

    const carouselInfyScroll = () => {
        if(currentIndex === reviewsArray.length -1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex+1);
    }   

    useEffect(()=> {
        const interval = setInterval(() => {carouselInfyScroll()}, 3000)

        return () => clearInterval(interval)
    },)

  return (
    <section id="reviews" className="bg-gray-100 h-fit">
      <h1 className="text-center text-5xl pt-20 ">Review Gallery</h1>
      <p className='text-center pt-5'> This is a visual representation of our commitment to excellence and quality service.</p>
    <motion.div
      className=" flex items-center justify-center h-fit"
      onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
    >
      
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        slide={true} // Set slide prop to false to show only one item at a time
        className="custom-carousel"
        prevIcon={<CustomPrevIcon/>}
        nextIcon={<CustomNextIcon/>}
      >
        {reviewsArray.map((item, index) => (
          <Carousel.Item key={index}>
            <img 
              
              className={index === currentIndex ? "hidden" : ""}
              src={item.image}
              alt={`Review ${index + 1}`}
            /> 
            <a href="#" className="carousel-control-prev">
            <i className="fas fa-chevron-left"></i> {/* Font Awesome left arrow icon */}
          </a>
          </Carousel.Item>
        ))}
    </Carousel>
    </motion.div>
    </section>
  
)
        }
export default Reviews