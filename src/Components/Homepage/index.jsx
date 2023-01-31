import React, { useEffect } from 'react'
import Header from '../Header'
import './style.css';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from '../Footer';
import { Laptop, ChartLineUp, PenNib, ArrowDown } from "phosphor-react";
import circleText from '../../Images/Circle.png'
import gradientBg from '../../Images/gradientBG.png'
import gradientBgMobile from '../../Images/gradientBGMobile.png'

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

    const whatWeDoControls = useAnimation();


    const [inView2] = useInView();



    useEffect(() => {
        if (inView2) {
            whatWeDoControls.start("visible");
        }
    }, [whatWeDoControls, inView2]);

    return (
        <>

            <div id='homepage' className='h-max'>
                <div className='hero container h-screen top-0 mx-auto relative flex flex-col justify-between items-center'>
                <motion.span  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className='w-full'><Header /></motion.span>

                    <div className='h1CON flex flex-col w-[87%] justify-center'>

                        <div className='w-full flex justify-center sm:justify-start'>
                            <motion.span variants={H1Animation} initial="initial" animate="animate" ><h1 className='flex items-center text-[3.6rem] sm:text-[10rem] sm:ml-0 text-[#f7f7f7] w-max'>Think beyond
                                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 }}><img src={circleText} className='h-28 ml-0 w-28 sm:h-36 sm:ml-10 sm:w-36 hidden sm:flex rotating sm:relative sm:top-0 sm:left-0' alt="" /></motion.span></h1></motion.span>
                        </div>

                        <div className='justify-center w-full flex flex-col-reverse sm:flex-row items-center sm:justify-end mt-[-1.8rem] sm:mt-[-4rem]'>
                            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                                ease: [0.6, 0.01, -0.05, 0.95],
                                duration: 0.7,
                                delay: 0.45
                            }}
                            ><motion.div transition={{
                                type: "spring",
                                stiffness: 800
                            }}
                                whileTap={{
                                    y: 2.5
                                }}><div className='mr-2 sm:mr-6 cursor-pointer w-[14rem] sm:w-96 h-14 sm:h-24 flex mb-2 sm:mb-0 justify-center items-center rounded-full bg-[#CCFF02] hover:w-[16rem] hover:sm:w-[27rem] transition-all relative top-1 ml-4 hover:border-4 sm:hover:border-8 hover:border-[#1c1c1c2c] gap-x-2 sm:gap-x-0 mt-20 sm:mt-0'><h2 className='text-2xl mx-0 sm:mx-3 sm:text-4xl text-[#1c1c1c] kayak-regular'>CLOUD</h2><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.2" stroke="#1c1c1c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="17" y1="7" x2="7" y2="17" />
                                    <polyline points="8 7 17 7 17 16" />
                                </svg><h2 className='text-2xl mx-0 sm:mx-3 sm:text-4xl text-[#1c1c1c] kayak-regular'>LABS</h2></div></motion.div>
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}><img src={circleText} className='h-28 w-28 sm:hidden flex rotating relative bottom-32 left-36 z-[-1]' alt="" /></motion.div>
                            </motion.div>

                            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                                ease: [0.6, 0.01, -0.05, 0.95],
                                duration: 0.7,
                                delay: 0.35
                            }}><h1 className='z-40 relative text-[3.6rem] sm:text-[10rem] text-[#f7f7f7] w-max select-none'>the<span className='text-[#CCFF02] ml-0 sm:ml-5 H1clouds'>clouds</span>.</h1></motion.div>

                        </div>
                    </div>

                    <div className='relative bottom-3'>
                        <h4 className='text-xl text-[#f7f7f7ce]'>Creative Digital Agency</h4>
                    </div>
                </div>

                <div className='w-screen pl-[40px] pr-[40px] sm:px-[160px] pt-[120px] sm:pt-[210px] pb-[240px] bg-[#fff] relative '>

                    <div className='w-max flex mb-12'>
                        <div className='p-2 flex justify-center items-center border-2 border-[#1c1c1c] rounded-full bg-none'><ArrowDown size={36} color="#1c1c1c" weight="light" /></div>
                        <div className='p-3 flex justify-center items-center px-6 border-2 border-[#1c1c1c] rounded-full bg-none text-xl kayak-bold text-[#1c1c1c]'>ABOUT</div>
                    </div>

                    <motion.span className='sm:flex flex-col text-7xl sm:text-[140px] sm:leading-[142px]' >Design <br /> Brand <br /> Develop <br /> Manage</motion.span>


                    <div className='flex sm:justify-end justify-start relative top-10 z-30 gap-x-20'>
                        <div className='flex flex-col w-max'>

                            <div className='flex gap-x-20 flex-col sm:flex-row'>
                                <p className='text-[1.3rem] sm:text-[1.5rem] mb-10'>We are Cloud Labs. Digital creators  <br />  with more than 4  years of experience.<br />We focus on developing your <br /> business with services managed by us.</p>
                                <p className='text-[1.3rem] sm:text-[1.5rem] mb-10'>At our digital agency,<br /> we are dedicated to providing <br /> expert solutions to help your business <br /> succeed  in the digital landscape.</p>
                            </div>

                            <button className='px-10  w-max py-3 bg-[#1c1c1c] text-[#f7f7f7] text-xl rounded-full transition-all active:bg-[#292929] active:translate-y-1 hover:bg-[#393939eb]'>More about us</button>
                        </div>

                    </div>
                </div>

                <div className='z-[4] absolute left-0 top-auto bottom-auto w-max right-0 sm:w-[3560px] sm:mt-[-43rem] mt-0 sm:ml-[-32px] overflow-clip'>
                    <img src={gradientBg} className='hidden sm:flex gradientimg h-auto max-w-full align-middle overflow-hidden' alt="" />
                </div>

                <div className='container relative top-[-20rem]'>
                    <img src={gradientBgMobile} className='w-full mt-0 flex sm:hidden gradientimg h-auto align-middle overflow-hidden' alt="" />
                </div>

                <div className='w-full flex flex-col justify-center pl-[40px] pr-[40px] sm:px-[160px] pt-[120px] sm:pt-[210px] pb-[240px] bg-[#CCFF02] relative top-[-20rem] sm:top-0 z-[1]'>
                    <div className='flex flex-col justify-center'>

                        <div className='w-max flex mb-12'>
                            <div className='p-2 flex justify-center items-center border-2 border-[#1c1c1c] rounded-full bg-none'><ArrowDown size={36} color="#1c1c1c" weight="light" /></div>
                            <div className='p-3 flex justify-center items-center px-6 border-2 border-[#1c1c1c] rounded-full bg-none text-xl kayak-bold text-[#1c1c1c]'>SERVICES</div>
                        </div>

                        <h1 className='sm:flex text-6xl uppercase kayak-regular sm:text-[110px] sm:leading-[122px]'>Unleash the potential <br /> of your Business <br /> with our services</h1>

                        <div className='flex justify-between flex-col sm:flex-row items-start mt-12'>
                            <div className='flex items-center gap-x-6'>
                                <Laptop size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                                <ChartLineUp size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                                <PenNib size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                            </div>
                            <div className='flex flex-col mt-6 sm:mt-0'>
                                <p className='text-[1.2rem] sm:text-[1.5rem] mb-10 z-50'>At our digital agency, we provide a full range of services <br /> to help businesses succeed in the digital landscape. <br /> Our services include: Website Design and Development, <br /> Social Media Marketing & Graphic Design.</p>
                                <button className='px-10 transition-all active:bg-[#292929] active:translate-y-1 hover:bg-[#393939eb] w-max py-3 bg-[#1c1c1c] text-[#f7f7f7] text-xl rounded-full'>More about Services</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col justify-center bg-[#171717] relative top-[-20rem] sm:top-0'>
                    <div className='flex items-center justify-center sm:flex-row flex-col'>
                        <div className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-r border-[#f7f7f7b0] border-b'>
                            <div className='z-[2] flex items-center justify-between'>
                                <h5 className='text-2xl text-[#f7f7f7b0]'>// SERVICE 01</h5>
                                <Laptop size={56} color="#CCFF02" weight="thin" />
                            </div>
                            <div className='z-[2]'>
                                <h1 className='text-6xl 2xl:text-8xl text-[#CCFF02] text-center'>Web <br /> Development</h1>
                            </div>
                            <div className='z-[2]'>
                                <h4 className='sm:text-2xl text-xl text-[#f7f7f7c5] text-center'>Website Design and Development: We create visually stunning and user-friendly websites that are optimized for search engines and mobile devices.</h4>
                            </div>
                        </div>

                        <div className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-r border-[#f7f7f7b0] border-b'>
                            <div className='z-[2] flex items-center justify-between'>
                                <h5 className='text-2xl text-[#f7f7f7b0]'>// SERVICE 02</h5>
                                <ChartLineUp size={56} color="#CCFF02" weight="thin" />
                            </div>
                            <div className='z-[2]'>
                                <h1 className='text-6xl 2xl:text-8xl text-[#CCFF02] text-center' >Social Media <br /> Marketing</h1>
                            </div>
                            <div className='z-[2]'>
                                <h4 className='sm:text-2xl text-xl text-[#f7f7f7c5] text-center'>Strategy that is tailored to your business needs. We stay up-to-date on the latest social media trends Our goal is to help you increase brand awareness and drive engagement.</h4>

                            </div>
                        </div>

                        <div className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-b border-[#f7f7f7b0]'>
                            <div className='z-[2] flex items-center justify-between'>
                                <h5 className='text-2xl text-[#f7f7f7b0]'>// SERVICE 03</h5>
                                <PenNib size={56} id='iconS' color="#CCFF02" weight="thin" />
                            </div>
                            <div className='z-[2]'>
                                <h1 className='text-6xl 2xl:text-8xl text-[#CCFF02] text-center' >Graphic <br /> Design</h1>
                            </div>
                            <div className='z-[2]'>
                                <h4 className='sm:text-2xl text-xl text-[#f7f7f7c5] text-center'>We specialize in providing professional graphic design services to enhance your brand and communicate your message effectively.</h4>

                            </div>
                        </div>
                    </div>


                </div>

                <Footer />
            </div>
        </>
    )
}

export default Homepage




