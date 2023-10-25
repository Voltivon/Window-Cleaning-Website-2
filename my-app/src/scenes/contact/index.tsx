/* eslint-disable @typescript-eslint/no-unsafe-call */
import {useForm} from "react-hook-form";
import { SelectedPage} from "@/shared/types";
import { motion } from "framer-motion";

import ContactImage from "@/assets/window-cleaning-contact.png";
import React from 'react'
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}
// Using react hook form
const Contact = ({setSelectedPage}: Props) => {
  const inputStyles = `w-full rounded-lg bg-cyan-600 px-5 py-3 mt-3 placeholder-white`

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if(!isValid){
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      e.preventDefault()
    }
  }


  return <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>

          <motion.div
          className="md: 3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
          }}
          >
            <HText>
              GET A QUOTE NOW 
            </HText>
            <p className="my-5">
            Quoting windows is a meticulous process that hinges on precision and 
            understanding the unique requirements of each project. Our approach revolves around 
            a comprehensive evaluation of three key factors: quantity, size, and complexity. 
            The number of windows is the foundation upon which the quote is built, allowing us to accurately 
            allocate resources and materials. Size plays a pivotal role, as larger windows necessitate more materials 
            and labor.
            </p>
          </motion.div>
          
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
             className="mt-10 basis-3/5 md:mt-0"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ duration: 0.5}}
             variants={{
                 hidden: {opacity: 0, x: -50},
                 visible: {opacity: 1, x: 0}
             }}>
              <form
              target="_blank"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={onSubmit}
              action="https://formsubmit.co/badboytjy@gmail.com"
              method="POST"
              >
              <p>Enter Name:</p>
              <input 
              className={inputStyles}
              type="text" 
              placeholder="John Frank" 
              {...register("name", {
                required: true,
                maxLength: 100
              })}
           />
           {errors.name && (
            <p className="mt-1 text-cyan-700">
              {errors.name.type === "required" && "This requires a name"}
              {errors.name.type === "maxLength" && "Max 100 char."}
            </p>
           )}
           <p className="mt-2">Enter Email:</p>
            <input 
              className={inputStyles}
              type="email" 
              placeholder="someone@youremail.com" 
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
           />
           {errors.email && (
            <p className="mt-1 text-cyan-700">
              {errors.email.type === "required" && "This requires a email"}
              {errors.email.type === "pattern" && "Invalid email address"}
            </p>
           )}
             <p className="mt-2">Enter Phone Number:</p>
             <input
              className={inputStyles}
              type="tel" 
              placeholder="(909)-222-1221" 
              {...register("tel", {
                required: true,
                pattern: /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/
              })}
           />
           {errors.tel && (
            <p className="mt-1 text-cyan-700">
              {errors.tel.type === "required" && "This requires a phone number"}
              {errors.tel.type === "maxLength" && "Invalid phone number"}
            </p>
           )}
             <p className="mt-2">Give Summary About the Windows of your House</p>
             <textarea
              className={inputStyles} 
              placeholder="Message" 
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
           />
           {errors.message && (
            <p className="mt-1 text-cyan-700">
              {errors.message.type === "required" && "Give summary of the windows, like how many, size, 1st story or 2nd story"}
              {errors.message.type === "maxLength" && "Max 2000 char."}
            </p>
           )}
             
              
              <button
              type="submit"
              className="mt-5 rounded-lg bg-cyan-400 px-20 py-3 transition duration-500 hover:text-white"
              >Submit</button>

              </form>
            </motion.div>

            <motion.div
             className="mt-16 basis-3/5 md:mt-0"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ duration: 0.5}}
             variants={{
                 hidden: {opacity: 0, x: -50},
                 visible: {opacity: 1, x: 0}
             }}>
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img className="w-full rounded-md" src={ContactImage}/>
                
              </div>
            </motion.div>

          </div>
        </motion.div>
  </section>
}

export default Contact