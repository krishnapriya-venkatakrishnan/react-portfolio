import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'

const Projects = () => {
    return (
        <div id="projects" className='border-b border-neutral-900 pb-4'>
            <motion.h1 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className='my-10 text-center text-4xl xs:text-2xl font-light'>
                PROJECTS
            </motion.h1 >
            
            <div className=''>
                {
                    PROJECTS.map((project, index) => {
                        return (<div key={index} className='mb-8 flex flex-wrap lg:justify-center border-b border-neutral-800'>
                            <div
                            className='w-full lg:w-1/4'>
                                <img 
                                src={project.image} 
                                alt={project.title}
                                width={150}
                                height={150}
                                className='mb-6 rounded'
                                />
                            </div>

                            <div
                            className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>
                                    {project.title}
                                </h6>
                                <p className='mb-4 text-neutral-400'>
                                    {project.description}
                                </p>
                                {
                                    project.technologies.map((tech, index) => {
                                        return (<span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>)
                                    })
                                }
                                <div className='my-4 flex'>
                                    <button className=' bg-neutral-900 px-4 py-1 text-sm font-medium text-white-500 flex items-center gap-2'><SiGithub /> 
                                        <a href={project.github} target='_blank'>GitHub</a>
                                    </button>
                                    <button className=' bg-neutral-900 px-4 py-1 text-sm font-medium text-teal-500 flex items-center gap-2'><SiNetlify /> 
                                        <a href={project.netlify} target='_blank'>Netlify</a>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className='w-full flex items-center justify-center'>
                <motion.a 
                href='https://github.com/krishnapriya-venkatakrishnan?tab=repositories'
                target='_blank'
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent underline italic font-bold'>
                    Click here to view more of my projects in Github!
                </motion.a>
            </div>
        </div>
    )
}

export default Projects