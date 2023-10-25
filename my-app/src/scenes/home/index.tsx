import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import TivonHomeImage from "@/assets/tivon-window-home.png"
import { motion } from "framer-motion"
type Props = {
   
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage}: Props) => {
  return (
    <section id="home" className='gap-16 py-10 md:h-full md:pb-0'>
        <motion.div className='md:flex mx-auto w-5/6 items-center justfiy-center md: h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <motion.div className='z-10 mt-32 md:basis-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            >
                <div>
                 <h1 className='text-5xl'>Tivon's Window Cleaning Service</h1>    
                </div>

          
            
           <p className='text-sm mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt sint laudantium odit nesciunt, 
            accusantium ratione obcaecati tenetur 
            aspernatur soluta distinctio sequi aperiam asperiores neque sapiente eos animi voluptatibus eaque.
           </p>    
       

        <div className='mt-8 flex items-center gap-8'>
            <ActionButton setSelectedPage={setSelectedPage}>
               Get a Quote!
            </ActionButton>
            <AnchorLink
                className="text sm font-bold text-cyan-500"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={`#${SelectedPage.Contact}`}>
                <p>Learn More</p>
            </AnchorLink>
        </div>  
        </motion.div>
        <div
    className='flex basis-3/5 justify-center md:z-10 md: ml:40 md: mt-17 md: justify-items-end'>
        <img alt="home-pageGraphic" src={TivonHomeImage}/>
    </div>
 </motion.div>

    
    </section>
  )
}

export default Home