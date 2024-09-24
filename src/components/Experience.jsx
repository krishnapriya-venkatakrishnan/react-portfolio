import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
    
    const displayExperiences = EXPERIENCES.map((experience, index) => {
        return ( 
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div
                className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>
                        {experience.year}
                    </p>
                </div>
                <div
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                    </h6>

                    <ul>
                        {experience.description.map((item, index) => {
                            
                            return (<li key={index} className='mb-2 text-neutral-400'>{item}</li>)
                        })}
                    </ul>

                </div>
            </div>)
        })

    return (
        <div id="experience" className='border-b border-neutral-900 pb-4'>

            <motion.h1 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className='my-10 text-center text-4xl xs:text-2xl font-light'>
                PROFESSIONAL EXPERIENCE
            </motion.h1 >

            <div>
                {
                    displayExperiences
                }
            </div>

        </div>
    )
}

export default Experience