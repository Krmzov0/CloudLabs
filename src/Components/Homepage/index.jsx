import React, { useEffect } from 'react'
import Header from '../Header'
import './style.css';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from '../Footer';
import { ArrowCircleRight, Laptop, ChartLineUp, PenNib, FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { Link } from 'react-router-dom'
import circleText from '../../Images/Circle.png'
import LazyLoad from 'react-lazy-load';
import CustomCursor from '../CustomCursor';

function Homepage() {

    const H1Animation = {
        initial: {
            y: 300,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.7
            }
        }
    }

    const H1Animation2 = {
        initial: {
            y: 300,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.7,
                delay: 0.2
            }
        }
    }

    const controls = useAnimation();
    const whatWeDoControls = useAnimation();


    const [ref1, inView] = useInView();
    const [ref2, inView2] = useInView();

    const homeSection2 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 250 },
        transition: {
            duration: 0.4,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    };


    const section2Line = {
        visible: { scaleY: 1 },
        hidden: { scaleY: 0 },
    }

    const WhatWeDo = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 150 },
        transition: {
            duration: 0.6,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    };

    const whatWeDoSub = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -140 },
        transition: {
            duration: 0.7,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    useEffect(() => {
        if (inView2) {
            whatWeDoControls.start("visible");
        }
    }, [whatWeDoControls, inView2]);

    return (
        <>
            <CustomCursor />

            <Header />

            <div className='hero container mx-auto relative top-10 sm:top-36 flex justify-center'>
                <div className='h1CON flex flex-col w-[77%] justify-center'>

                    <div className='w-full flex justify-center sm:justify-start'>
                        <motion.div variants={H1Animation} initial="initial" animate="animate" ><h1 className='flex items-center text-[3.6rem] sm:text-9xl sm:ml-0 text-[#f7f7f7] w-max'>Think beyond
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 }}><img src={circleText} className='h-28 ml-0 w-28 sm:h-36 sm:ml-10 sm:w-36 rotating absolute sm:relative top-[10rem] sm:top-0 left-[55%] sm:left-0' alt="" /></motion.div></h1></motion.div>
                    </div>

                    <motion.div variants={H1Animation2} initial="initial" animate="animate"  ><div className='justify-center w-full flex flex-col-reverse sm:flex-row items-center sm:justify-end mt-[-1.8rem] sm:mt-3'>
                        <motion.div transition={{
                            type: "spring",
                            stiffness: 800
                        }}
                            whileTap={{
                                y: 2.5
                            }}><div className='mr-2 sm:mr-6 cursor-pointer w-[14rem] sm:w-96 h-14 sm:h-24 flex mb-2 sm:mb-0 justify-center items-center rounded-full bg-[#b5d43b] hover:w-[16rem] hover:sm:w-[27rem] transition-all relative top-1 ml-4 hover:border-4 sm:hover:border-8 hover:border-[#f7f7f7a1] gap-x-2 sm:gap-x-0 mt-20 sm:mt-0'><h2 className='text-2xl mx-0 sm:mx-3 sm:text-4xl text-[#1c1c1c] kayak-bold sm:kayak-regular'>CLOUD</h2><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.2" stroke="#1c1c1c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="17" y1="7" x2="7" y2="17" />
                                <polyline points="8 7 17 7 17 16" />
                            </svg><h2 className='text-2xl mx-0 sm:mx-3 sm:text-4xl text-[#1c1c1c] kayak-regular'>LABS</h2></div></motion.div>
                        <h1 className='z-40 relative text-[3.6rem] sm:text-9xl text-[#f7f7f7] w-max select-none'>the<span className='text-[#b5d43b] ml-0 sm:ml-5 H1clouds'>clouds</span>.</h1>

                    </div></motion.div>
                </div>
            </div>

            <div className='heroText flex justify-between items-end container mx-auto relative top-[5.6rem] sm:top-[20rem]'>
                <div className='grid justify-between items-center heroCTA relative top-[-0.5rem] sm:top-0'>
                    <div className='flex items-center justify-between w-[19rem] mb-8 buttonContainer'>
                        <div>
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
                                }}><button className='border-2 border-[#f7f7f7] px-7 sm:px-5 py-2 w-max text-[#f7f7f7] flex text-xl sm:text-xl font-medium items-center rounded-full bg-transparent hover:bg-[#f7f7f7] hover:text-[#252525] transition-all'>Get in touch</button></motion.div>
                        </div>

                        <div>
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
                                }}><Link to='/about'><button className=' px-10 py-3 w-max text-[#252525] kayak-bold flex text-md sm:text-xl  items-center rounded-full bg-[#b5d43b] hover:border-2 hover:border-[#f7f7f7d4]'>
                                    ABOUT
                                </button></Link></motion.div>
                        </div>
                    </div>


                    <div className='flex gap-4 socials relative justify-start'>
                        <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><InstagramLogo size={44} color="#b5d43b" weight="thin" /></a>

                        <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><TwitterLogo size={44} color="#b5d43b" weight="thin" className='relative right-[1px]' /></a>

                        <a href="https://www.instagram.com/cloud_labs_agency/?next=%2F" target="_blank" rel="noopener noreferrer"><FacebookLogo size={44} color="#b5d43b" weight="thin" /></a>
                    </div>
                </div>

                <motion.div initial={{ scaleY: 0, originY: 'bottom' }} animate={{ scaleY: 1 }} transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 0.5,
                    delay: 0.3
                }}><div className='w-max relative left-[15px] sm:left-0'>

                        <div className='heroP'>
                            <motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}><h2 className='text-xl sm:text-2xl text-left font-medium sm:text-right relative mb-3 text-[#b5d43b] tracking-[1px]'>WHO WE ARE</h2></motion.div>
                            <p className='relative text-right font-light text-[18px] sm:text-[1.55rem] text-[#f7f7f7d7]'><motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65 }}>We are Digital Creators.</motion.div>  <motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 }}>Our Services offer Web Development,</motion.div> <motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85 }}> Social Media Marketing & Graphic Design</motion.div></p>
                        </div>
                    </div></motion.div>
            </div>

            <div className='container mx-auto relative top-[20rem] sm:top-[32rem] flex flex-col justify-center items-center d'>
                <div><motion.div variants={homeSection2} ref={ref1} initial="hidden" animate={controls}><p className='relative text-center text-xl font-regular text-[#f7f7f797] after:content:"" after:w-20 after:h-[1px] after:bg-[#b5d43b] after:absolute after:top-[-15px] flex justify-center center'>We are Cloud Labs, digital creators  <br />  with more than 4  years of experience, <br />  and we focus on developing <br />  your business with services managed by us.</p></motion.div></div>

                <motion.div variants={section2Line} ref={ref1} initial="hidden" animate={controls} transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2 }} ><div className='flex container justify-between relative top-24'>

                    <span className='w-[1px] h-56 origin-top bg-[#f7f7f797]'></span>

                </div></motion.div>
            </div>

            <LazyLoad >
                <div className='whatWeDo container grid mx-auto relative top-[38rem] sm:top-[50rem]'>
                    <div className='whatweDoHeader flex items-center justify-between container'>
                        <div className='grid justify-start text-left'>
                            <motion.div variants={WhatWeDo} ref={ref2} initial="hidden" animate={whatWeDoControls}><h2 className='text-lg sm:text-xl font-medium text-[#b5d43b] tracking-[1px]'>WHAT WE DO</h2></motion.div>
                            <motion.div variants={WhatWeDo} ref={ref2} initial="hidden" animate={whatWeDoControls} transition={{ delay: 0.1 }}><h1 className='mt-0 sm:mt-3 text-3xl sm:text-4xl font-regular text-[#f7f7f7] leading-[47px]'>OUR <span className='text-[#b5d43b] font-regular'>SERVICES</span></h1></motion.div>
                        </div>

                        <motion.div variants={whatWeDoSub} initial="hidden" animate={whatWeDoControls} transition={{ delay: 0.2 }}><div className='art flex justify-center items-start'>
                            <h1 className='text-3xl text-right text-[#f7f7f7]'>We are not just a product, <br /> we are <span className='text-[#b5d43b]'>ART</span> </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right ml-3" width="41" height="41" viewBox="0 0 24 24" stroke-width="1" stroke="#b5d43b" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="17" y1="7" x2="7" y2="17" />
                                <polyline points="8 7 17 7 17 16" />
                            </svg>
                        </div></motion.div>
                    </div>


                    <div className='whatWeDoContainer container mt-12 flex flex-wrap gap-y-3 justify-start items-center gap-x-3'>
                        <motion.div variants={WhatWeDo} initial="hidden" animate={whatWeDoControls} transition={{ delay: 0.4 }} ><div className='whatWeDoCard w-80 rounded-2xl h-96 p-8 py-10 bg-[#b5d43b] flex items-stretch justify-start'>
                            <div className='flex flex-col justify-between items-stretch cursor-pointer w-full'>

                                <div className='flex justify-between items-center'>
                                    <Laptop size={46} color="#252525" weight="light" />
                                    <ArrowCircleRight size={46} color="#252525" weight="light" className='cardArrow' />
                                </div>

                                <div className='self-start '>
                                    <h4 className='mb-3 text-2xl font-semibold text-[#252525]'>01.</h4>
                                    <h1 className='n text-3xl text-[#252525] uppercase'>Website <br /> Development</h1>
                                </div>
                            </div>
                        </div></motion.div>

                        <motion.div variants={WhatWeDo} initial="hidden" animate={whatWeDoControls} transition={{ delay: 0.55 }} ><div className='whatWeDoCard w-80 rounded-2xl h-96 p-8 py-10 bg-[#f7f7f7] flex items-stretch justify-start'>
                            <div className='flex flex-col justify-between items-stretch cursor-pointer w-full'>

                                <div className='flex justify-between items-center'>
                                    <ChartLineUp size={46} color="#252525" weight="light" />
                                    <ArrowCircleRight size={46} color="#252525" weight="light" className='cardArrow' />
                                </div>

                                <div className='self-start '>
                                    <h4 className='mb-3 text-2xl font-semibold text-[#252525]'>02.</h4>
                                    <h1 className='n text-3xl font-regular text-[#252525] uppercase'>Social Media<br /> Management</h1>
                                </div>
                            </div>
                        </div></motion.div>

                        <motion.div variants={WhatWeDo} initial="hidden" animate={whatWeDoControls} transition={{ delay: 0.7 }} ><div className='whatWeDoCard w-80 rounded-2xl h-96 p-8 py-10 bg-[#b5d43b] flex items-stretch justify-start'>
                            <div className='flex flex-col justify-between items-stretch cursor-pointer w-full'>

                                <div className='flex justify-between items-center'>
                                    <PenNib size={46} color="#252525" weight="light" />
                                    <ArrowCircleRight size={46} color="#252525" weight="light" className='cardArrow' />
                                </div>

                                <div className='self-start'>
                                    <h4 className='mb-3 text-2xl font-semibold text-[#252525]'>03.</h4>
                                    <h1 className='n text-3xl font-regular text-[#252525] uppercase'>Graphic <br /> Design</h1>
                                </div>
                            </div>
                        </div></motion.div>
                    </div>
                </div>
            </LazyLoad>

            <LazyLoad>
                <Footer />
            </LazyLoad>
        </>
    )
}

export default Homepage





// <div className='misson container grid mx-auto relative top-[95vh]'>
//                 <div className='flex items-end justify-between flex-row-reverse'>
//                     <div className='grid justify-start text-right'>
//                         <h2 className='text-xl font-medium text-[#b5d43b] tracking-[1px]'>OUR MISSION</h2>
//                         <h1 className='mt-4 text-4xl font-regular text-[#f7f7f7] leading-[47px]'>WE'RE ON A MISSION TO <br /> HELP <span className='text-[#b5d43b] font-light underline decoration-1 underline-offset-[5.5px]'>BUSSINESS GROW</span>  <br /> FASTER THAN EVER.</h1>
//                     </div>

//                     <div>
//                         <p className='missonP relative text-left text-2xl leading-8 font-light text-[#f7f7f7d7]'>We are Cloud Labs, digital creators  <br />  with more than 4  years of experience, <br />  and we focus on developing <br />  your business with services managed by us.</p>
//                     </div>
//                 </div>
//             </div>



