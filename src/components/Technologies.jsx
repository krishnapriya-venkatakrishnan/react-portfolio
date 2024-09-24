import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { RiHtml5Line } from 'react-icons/ri'
import { RiCss3Line } from 'react-icons/ri'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
    return (
        <div>
            <motion.h1 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            className='font-light'>
                
            </motion.h1>
            <motion.div 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            className='flex w-full justify-center flex-wrap items-center mt-4 gap-4'>
                <motion.div
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-2'>
                    <RiReactjsLine className='text-3xl text-cyan-400' />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-2'>
                    <RiJavascriptLine className='text-3xl text-yellow-500' />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-2'>
                    <RiHtml5Line className='text-3xl text-orange-700' />
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-2'>
                    <RiCss3Line className='text-3xl text-blue-500' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies