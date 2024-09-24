import React from 'react'
import {LANDING_CONTENT} from "../constants"
import Profile from "../assets/profile.jpg"
import { motion } from "framer-motion"
import Technologies from "./Technologies"
import { SlLocationPin } from "react-icons/sl";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Landing = () => {
    return (
        <div id="landing" className='border-b border-neutral-900 pb-4 mt-32'>
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-4 text-6xl font-thin tracking-tight xs:text-5xl sm:text-6xl lg:mt-4 lg:text-7xl'>Krishnapriya Venkatakrishnan</motion.h1>

            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center xs:text-2xl'>
                Frontend developer
            </motion.span>

            <motion.div 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='mt-2 flex items-center gap-2 font-normal'>
                <SlLocationPin className='text-orange-400'/> Stockholm, Sweden
            </motion.div>
            <div className='flex flex-wrap items-center xs:my-8 my-16'>
                <div className='w-full lg:w-1/3'>
                    <div className='flex flex-col items-center xs:p-8'>
                        <motion.img 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="alter-image rounded-2xl max-w-72" src={Profile} alt='Profile picture'/>
                    </div>
                </div>
                
                <div className='w-full lg:w-2/3 lg:p-8'>
                    <div className='flex flex-col justify-center'>
                        <motion.p 
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        className=' py-6 font-light leading-relaxed'>{LANDING_CONTENT}</motion.p>
                        <Technologies />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Landing