import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Images/updatedLogoWhite.png'
import { motion } from 'framer-motion'
import './style.css';
import { List, X } from 'phosphor-react'
import LogoOutline from '../../Images/LogoBlack.png'

function Header() {

    const [toggleMenu, settoggleMenu] = useState(false)

    const handleMenuToggle = () => {
        toggleMenu ? settoggleMenu(false) : settoggleMenu(true)
    }

    const navHeader = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 0.7
            }
        }
    }

    const MENU = {
        initial: {
            scaleY: 0,

        },
        animate: {
            scaleY: 1,
            position: 'fixed',
            transformOrigin: 'bottom',
            zIndex: '50',

            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.8
            }
        }
    }


    const navLinks = {
        initial: {
            y: 80,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    }


    return (
        <>

        
            {toggleMenu && (<motion.div variants={MENU} initial="initial" animate="animate" className='MENU w-screen left-0 h-[100vh] top-0 z-50 bg-[#f7f7f7] bottom-0' ><div>

                <motion.div variants={navHeader} initial="initial" animate="animate" ><div className='header mx-auto flex justify-between items-center container sm:top-14 relative px-5 pt-6 sm:px-0 sm:pt-0'>
                    <motion.div transition={{
                        type: "spring",
                        stiffness: 700
                    }}
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.15
                        }} whileTap={{
                            y: 2.5
                        }}><Link to='/'><img className='sm:w-[90px] logo w-[65px]' src={LogoOutline} alt="" /></Link></motion.div>

                    <div>
                        <div className='flex items-center justify-between'>
                            <motion.div transition={{
                                type: "spring",
                                stiffness: 700
                            }}
                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.15
                                }} whileTap={{
                                    y: 2.5
                                }}> <X className='cursor-pointer select-none' onClick={handleMenuToggle} size={36} color="#1c1c1c" weight="light" /> </motion.div>
                        </div>
                    </div>
                </div></motion.div>

                <div className='container sm:mx-auto grid justify-end text-right sm:mt-32 mt-20 pr-6 sm:pr-0'>
                    <div className='w-max navMenu flex flex-col justify-end items-end gap-y-7'>
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.3 }}><NavLink to='/' className='text-[2.7rem] leading-[2.3rem] text-[#252525] font-light tracking-[2px] sm:tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>HOME</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.45 }}><NavLink to='/about' className='text-[2.7rem] leading-[2.3rem] text-[#252525] font-light tracking-[2px] sm:tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>ABOUT</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.55 }}><NavLink to='/work' className='text-[2.7rem] leading-[2.3rem] text-[#252525] font-light tracking-[2px] sm:tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>WORK</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.66 }}><NavLink to='/services' className='text-[2.7rem] leading-[2.3rem] text-[#252525] font-light tracking-[2px] sm:tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>SERVICES</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.7 }}><NavLink to='/contact' className='text-[2.7rem] leading-[2.3rem] text-[#252525] font-light tracking-[2px] sm:tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>CONTACT</NavLink></motion.div>)}
                    </div>
                </div>

            </div></motion.div>)}


            <div className='header flex justify-between items-center container mx-auto relative sm:top-14 px-5 sm:px-0 pt-6 sm:pt-0'>
                <motion.div transition={{
                    type: "spring",
                    stiffness: 700
                }}
                    initial={{ scale: 1 }}
                    whileHover={{
                        scale: 1.15
                    }} whileTap={{
                        y: 2.5
                    }}><Link to='/'><img className='sm:w-[90px] logo w-[65px]' src={Logo} alt="" /></Link></motion.div>

                <div className='w-max'>
                    <div className='flex items-center w-max sm:w-[11rem] justify-between'>
                        <motion.div transition={{
                            type: "spring",
                            stiffness: 700
                        }}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.15
                            }} whileTap={{
                                y: 2.5
                            }}> <List className='cursor-pointer' onClick={handleMenuToggle} size={36} color="#f7f7f7" weight="thin" /> </motion.div>

                        <motion.div transition={{
                            type: "spring",
                            stiffness: 800
                        }}

                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.15
                            }}
                            whileTap={{
                                y: 2.5
                            }}><button className='hidden letsTalk px-5 py-2 w-max text-[#252525] sm:flex text-xl  font-medium items-center rounded-full bg-[#f7f7f7]'>
                                Let's
                                Talk
                            </button></motion.div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Header