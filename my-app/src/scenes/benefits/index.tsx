
import cleaningImg from "@/assets/window-cleaning-svgrepo-com.svg"
import cleaningRag from "@/assets/cleaning-rag.svg"
import cleaningBrush from "@/assets/cleaning-brush.svg"
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from '@/shared/types';
import HText from '@/shared/HText';
import Card from "./Card";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const cards: Array<BenefitType> = [
  {
    icon:  <img className="w-1/6" src={cleaningImg}/>,
    title: "Local Window Cleaners",
    description: "Our local window cleaning business should be your top choice because we prioritize quality and customer satisfaction above all else. With years of experience, our skilled and friendly professionals deliver sparkling clean and streak-free windows. As a local business, we understand the unique needs of our community and offer personalized services tailored to your preferences. Our commitment to safety ensures a worry-free experience, and our transparent pricing guarantees fair and reasonable rates. By choosing us, you support the growth of the community while benefiting from excellence, reliability, and top-notch service."
  },
  {
    icon: <img className="w-1/6" src={cleaningRag}/>,
    title: "Hand Washed",
    description: "We firmly believe in the power of hand washing to achieve superior results and provide the utmost care for your windows.This personalized approach guarantees that no smudges or spots are missed, leaving your windows crystal clear and pristine. Additionally, we take pride in our commitment to environmental responsibility, which is why we use an eco-friendly soap solution in our cleaning process. By opting for environmentally safe products, we not only protect the health of our clients and team but also minimize our ecological footprint, contributing to a cleaner and healthier planet for future generations."
  },
  {
    icon: <img className="w-1/6" src={cleaningBrush}/>,
    title: "Window Seals and Door Frames",
    description: "At our local window cleaning business, we go above and beyond standard window cleaning services by also meticulously cleaning window seals and door frames. We understand that these areas are prone to collecting dirt, dust, and grime over time, and neglecting them can compromise the overall appearance of your property. By including these areas in our cleaning process, we ensure a comprehensive and thorough service that leaves your windows and surrounding frames looking impeccable."
  }
]

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div  
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
          <div className='md: my-5 md: w-3/5'>
            <HText>WE OFFER HIGH-QUALITY CLEANING SERVICES</HText>
            <p className='my-5 text-sm'>
            Welcome to our premier window cleaning business! At Simply Cleaning Windows, 
            we take immense pride in delivering unparalleled service and ensuring crystal-clear views for our valued customers.
            Customer satisfaction lies at the core of our ethos, and we go the extra mile to exceed expectations. Whether it's residential or commercial,
            our commitment to excellence remains unwavering
            Trust Simply Cleaning Windows to bring back the brilliance and clarity to your windows,
            giving your property a fresh, inviting appeal. Discover the difference that a perfectly clean view can make by entrusting your window cleaning needs to us!
            </p>
            
            </div>

            <motion.div 
            className="md:flex item-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            variants={container}
            >
            
             {cards.map((card: BenefitType) => (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                setSelectedPage={setSelectedPage}
                />
             ))} 
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits