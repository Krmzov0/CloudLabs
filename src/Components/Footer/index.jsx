import React from 'react'
import { motion } from 'framer-motion'
import './style.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='pl-[25px] sm:px-[160px] pt-[100px] sm:pt-[100px] sm:pb-[100px] pb-[100px] h-max grid footer relative bg-[#f7f7f7] '>

                <div className='flex justify-start sm:flex-row flex-col gap-x-24 gap-y-16 sm:gap-y-0 sm:h-[35rem] w-full'>
                    <div className='flex flex-col w-full justify-between  '>
                        <div className='flex items-center gap-x-2'>
                            <h1 className='sm:text-7xl text-6xl text-[#171717] w-full kayak-light'>Think <br /> beyond <br /> the <br /> clouds.</h1>
                        </div>

                        <div className='mt-6 sm:mt-0'>
                            <h4 className='sm:text-3xl text-2xl text-[#000]'>© Cloud Labs 2023</h4>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-between w-full'>

                        <div className='w-full flex flex-col justify-center'>
                            <h4 className='sm:sm:text-2xl text-xl text-[#CCFF02] uppercase'>// <span className='text-[#171717] kayak-bold '>SITEMAP</span></h4>
                            <div className='flex flex-col gap-y-2 justify-start mt-4'>
                                <div>
                                    <Link to='/' className='sm:text-2xl text-xl text-[#171717af] uppercase'>Home <span className='mr-2'>/</span></Link>
                                    <Link to='/about' className='sm:text-2xl text-xl text-[#171717af] uppercase'>About <span className='mr-2'>/</span></Link>
                                    <Link to='/work' className='sm:text-2xl text-xl text-[#171717af] uppercase'>Work</Link>
                                </div>
                                <div>
                                    <Link to='/services' className='sm:text-2xl text-xl text-[#171717af] uppercase'><span className='mr-2'>/</span>Services <span className='mr-2'>/</span></Link>
                                    <Link to='/contact' className='sm:text-2xl text-xl text-[#171717af] uppercase'>Contact</Link>
                                </div>
                            </div>
                        </div>

                        <div className='gap-x-10 flex left-0 sm:justify-center items-start sm:items-center mt-16 sm:mt-12 flex-col sm:flex-row justify-start'>
                            <motion.div transition={{
                                type: "spring",
                                stiffness: 800
                            }}

                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.10
                                }}
                                whileTap={{
                                    y: 2.5
                                }}><Link to='/contact'><button className='mb-8 sm:mb-0 h-[54px] p-8 sm:text-2xl w-max sm:p-8 rounded-full flex justify-center items-center text-[#171717] sm:sm:text-2xl text-xl border border-[#17171797] bg-transparent hover:bg-[#171717] hover:text-[#CCFF02] transition-all'>Contact us</button></Link> </motion.div>

                            <div className='flex flex-col'>
                                <h4 className='sm:text-2xl text-xl text-[#CCFF02] uppercase '>// <span className='text-[#171717] kayak-bold '>Social Media</span></h4>
                                <div className='flex items-cente social mt-4  '>
                                    <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><h5 className='text-[#171717af] sm:text-2xl text-xl flex uppercase'>Instagram <span className='ml-2'>/</span></h5></a>

                                    <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><h5 className='text-[#171717af] sm:text-2xl text-xl ml-2 flex uppercase'>Twitter <span className='ml-2'>/</span></h5></a>

                                    <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><h5 className='text-[#171717af] sm:text-2xl text-xl ml-2 flex uppercase'>Facebook</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between w-full'>
                        <div className='flex flex-col'>
                            <h4 className='sm:text-2xl text-xl text-[#CCFF02] uppercase'>// <span className='text-[#171717] kayak-bold '>LOCATION</span></h4>
                            <div className='flex items-cente social mt-4'>
                                <h4 className='text-[#171717af] sm:text-2xl text-xl uppercase'>NORTH MACEDONIA, <br /> STRUMICA</h4>
                            </div>
                        </div>

                        <div className='flex flex-col mt-16 sm:mt-0'>
                            <h4 className='sm:text-2xl text-xl text-[#CCFF02] uppercase'>// <span className='text-[#171717] kayak-bold '>CONTACT INFO</span></h4>
                            <div className='flex items-cente social mt-4'>
                                <a href="mailto:cloudlabsagency@gmail.com"><h5 className='text-[#171717af] sm:text-2xl text-xl uppercase'>cloudlabsagency@gmail.com</h5></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer