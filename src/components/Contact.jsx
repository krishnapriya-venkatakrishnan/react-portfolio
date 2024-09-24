import React, {useState} from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {

    const [copied, setCopied] = useState(false);

    const copyPhoneNumber = () => {
        const phoneNumber = CONTACT.phoneNo;  // Your phone number
        navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);  // Reset message after 2 seconds
        });
    };
    
    return (
        <div id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='mt-10 text-center text-4xl xs:text-2xl font-light'>GET IN TOUCH</motion.h1>
            <div className='text-center tracking-tighter flex flex-col gap-4'>
                
                <motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                href="https://github.com/krishnapriya-venkatakrishnan?tab=repositories"
                className='mt-4 underline'
                target="_blank">GitHub repositories</motion.a>

                <motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                href="https://www.linkedin.com/in/krishnapriya-venkatakrishnan-891b4819a/"
                className='underline'
                target="_blank">LinkedIn profile</motion.a >

                <motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                href="mailto:krishnapriyavenkatakrishnan@gmail.com"
                className='underline'
                target="_blank"
                >{CONTACT.email}</motion.a >

                <motion.button 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='underline'
                onClick={copyPhoneNumber}
                >
                    {CONTACT.phoneNo}
                </motion.button>

                {copied && (
                    <span className="my-0 text-green-500">
                    Phone number copied!
                    </span>
                )}

            </div>
        </div>
    )
}

export default Contact