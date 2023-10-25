import React, { useEffect } from 'react'
import Carousel  from "react-bootstrap/Carousel";
import { SelectedPage } from '@/shared/types';
import CarouselImg1 from "@/assets/carousel-img-1.png";
import CarouselImg2 from "@/assets/carousel-img-2.png";
import { motion } from 'framer-motion';
import { useState } from 'react';
 

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Reviews = ({setSelectedPage}: Props) => {

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
    <section id="reviews" className="bg-gray-100 h-screen">
    <motion.div
      className="p-4 flex items-center justify-center h-ful"
      onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
    >
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        slide={false} // Set slide prop to false to show only one item at a time
        className="w-full max-w-xl"
      >
        {reviewsArray.map((item, index) => (
          <Carousel.Item key={index}>
            <img 
              
              className={index === currentIndex ? "hidden" : ""}
              src={item.image}
              alt={`Review ${index + 1}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
    </motion.div>
    </section>
  
)
        }
export default Reviews