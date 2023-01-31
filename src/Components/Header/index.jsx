import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Images/updatedLogoWhite.png'
import { motion } from 'framer-motion'
import './style.css';
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

        
            {toggleMenu && (<motion.div variants={MENU} initial="initial" animate="animate" className='MENU w-screen left-0 h-screen z-50 bg-[#f7f7f7] bottom-0' ><div>

                <motion.div variants={navHeader} initial="initial" animate="animate" ><div className='header mx-auto flex justify-between top-[2.8rem] items-center container relative mt-14 sm:top-0'>
                    <motion.div transition={{
                        type: "spring",
                        stiffness: 700
                    }}
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.15
                        }} whileTap={{
                            y: 2.5
                        }}><Link to='/'><img className='w-[90px] logo' src={LogoOutline} alt="" /></Link></motion.div>

                    <div>
                        <div className='h-left flex items-center justify-between'>
                            <motion.div transition={{
                                type: "spring",
                                stiffness: 700
                            }}
                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.15
                                }} whileTap={{
                                    y: 2.5
                                }}> <h4 className='text-[#f7f7f7] cursor-pointer select-none'><svg onClick={handleMenuToggle} xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-x" width="42" height="42" viewBox="0 0 24 24" stroke-width="1" stroke="#252525" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg></h4> </motion.div>
                        </div>
                    </div>
                </div></motion.div>

                <div className='container sm:mx-auto grid justify-end text-right sm:mt-32 mt-32 pr-6 sm:pr-0'>
                    <div className='w-max navMenu flex flex-col justify-end items-end gap-y-7'>
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.3 }}><NavLink to='/' className='text-[2.5rem] leading-[2.3rem] text-[#252525] font-light tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>HOME</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.45 }}><NavLink to='/about' className='text-[2.5rem] leading-[2.3rem] text-[#252525] font-light tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>ABOUT</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.55 }}><NavLink to='/work' className='text-[2.5rem] leading-[2.3rem] text-[#252525] font-light tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>WORK</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.66 }}><NavLink to='/services' className='text-[2.5rem] leading-[2.3rem] text-[#252525] font-light tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>SERVICES</NavLink></motion.div>)}
                        {toggleMenu && (<motion.div variants={navLinks} transition={{ delay: 1.7 }}><NavLink to='/contact' className='text-[2.5rem] leading-[2.3rem] text-[#252525] font-light tracking-[3px] sm:text-[3.7rem] sm:leading-[3.6rem] kayak-light'>CONTACT</NavLink></motion.div>)}
                    </div>
                </div>

            </div></motion.div>)}


            <div className='header flex justify-between items-center container mx-auto relative sm:top-14'>
                <motion.div transition={{
                    type: "spring",
                    stiffness: 700
                }}
                    initial={{ scale: 1 }}
                    whileHover={{
                        scale: 1.15
                    }} whileTap={{
                        y: 2.5
                    }}><Link to='/'><img className='w-[90px] logo' src={Logo} alt="" /></Link></motion.div>

                <div>
                    <div className='h-left flex items-center w-[12.5rem] justify-between'>
                        <motion.div transition={{
                            type: "spring",
                            stiffness: 700
                        }}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.15
                            }} whileTap={{
                                y: 2.5
                            }}> <h4 onClick={handleMenuToggle} className='text-[#f7f7f7] text-2xl sm:text-2xl kayak-light cursor-pointer tracking-[2.5px] select-none menu' id='menuBtn'>MENU</h4> </motion.div>

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
                            }}><button className='letsTalk px-5 py-2 w-max text-[#252525] flex text-xl  font-medium items-center rounded-full bg-[#f7f7f7]'>
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