import React from 'react'
import {ABOUT_TEXT} from "../constants"
import { motion } from 'framer-motion'
import Certificate from "../assets/Certificate.png"

const About = () => {
    return (
        <div id="about" className='border-b border-neutral-900 pb-4'>
            <motion.h1
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className='mt-10 text-center text-4xl xs:text-2xl font-light'>
                ABOUT ME
            </motion.h1>

            <div>                
                <div>
                    <div className='flex flex-col items-center justify-center font-light leading-relaxed my-10 gap-8'>
                        <p>{ABOUT_TEXT}</p>
                        <img src={Certificate} alt='Course completion certificate' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About