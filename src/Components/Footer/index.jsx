import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './style.css'
import { ArrowElbowDownRight, FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

function Footer() {
    return (
        <>
            <div className='grid footer container mx-auto relative top-[65rem] pt-12 pb-4 border-t border-[#f7f7f797] '>

                <div className='flex justify-between footerContainer'>
                    <div className='w-[20%] flex flex-col items-end footerbox'>
                        <h4 className='text-[#f7f7f7] text-2xl footerh4'>Sitemap</h4>

                        <div className='flex flex-col gap-y-[0.3rem] mt-6 relative left-0 sm:left-4'>
                            <div className='flex justify-start items-center w-full' ><ArrowElbowDownRight size={18} color="#f7f7f7" weight="light" className='mr-3.5' /><Link className='text-[#f7f7f797] text-xl' to='/'>Home</Link></div>
                            <div className='flex justify-start items-center w-full' ><ArrowElbowDownRight size={18} color="#f7f7f7" weight="light" className='mr-3.5' /><Link className='text-[#f7f7f797] text-xl' to='/about'>About</Link></div>
                            <div className='flex justify-start items-center w-full' ><ArrowElbowDownRight size={18} color="#f7f7f7" weight="light" className='mr-3.5' /><Link className='text-[#f7f7f797] text-xl' to='/about'>Work</Link></div>
                            <div className='flex justify-start items-center w-full' ><ArrowElbowDownRight size={18} color="#f7f7f7" weight="light" className='mr-3.5' /><Link className='text-[#f7f7f797] text-xl' to='/services'>Services</Link></div>
                            <div className='flex justify-start items-center w-full' ><ArrowElbowDownRight size={18} color="#f7f7f7" weight="light" className='mr-3.5' /><Link className='text-[#f7f7f797] text-xl' to='/contact'>Contact</Link></div>
                        </div>

                    </div>

                    <div className='footerSl flex flex-col justify-center items-center w-[25%] footerbox'>

                        <div className='w-full flex'>
                            <h1 className='flex items-center text-5xl font-light text-[#f7f7f7] w-max kayak-light'>Think beyond</h1>
                        </div>

                        <div className='w-full flex footerC justify-end'>
                            <h1 className='z-40 relative text-5xl font-light text-[#f7f7f7] w-max select-none kayak-light'>the<span className='text-[#b5d43b] ml-2 H1clouds'>clouds</span>.</h1>
                        </div>

                        <div className='flex justify-center items-center mt-12'>
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
                                }}><button className='h-[46px] p-6 text-2xl sm:p-8 rounded-full flex justify-center items-center text-[#f7f7f7] font-medium sm:text-2xl border border-[#f7f7f797] bg-transparent hover:bg-[#f7f7f7] hover:text-[#252525] transition-all'>Contact us</button></motion.div>

                            <div className='flex items-center gap-x-3 ml-4 social'>
                                <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><InstagramLogo size={40} color="#b5d43b" weight="thin" /></a>

                                <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><TwitterLogo size={40} color="#b5d43b" weight="thin" className='relative right-[1px]' /></a>

                                <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><FacebookLogo size={40} color="#b5d43b" weight="thin" /></a>
                            </div>
                        </div>
                    </div>

                     <div className='w-[20%] footerbox'>
                        <h4 className='text-[#f7f7f7] text-2xl footerh4'>Contact Info</h4>

                        <div className='flex flex-col gap-y-[0.3rem] mt-6'>
                            <a href="mailto:cloudlabsagency@gmail.com" className='text-[#f7f7f797] text-xl'>cloudlabsagency@gmail.com</a>
                            <a href="tel:+39878239880" className='text-[#f7f7f797] text-xl'>+389 78 239 880</a>
                            <a href="tel:+39878239880" className='text-[#f7f7f797] text-xl'>+389 77 758 066</a>
                        </div>

                    </div>
                </div>

                <div className='mt-12 relative text-xl kayak-light  flex justify-center copyright'>
                    <p className='text-[#f7f7f797] '>©2022 Cloud Labs. All rights reserved</p>
                </div>

            </div>
        </>
    )
}

export default Footer