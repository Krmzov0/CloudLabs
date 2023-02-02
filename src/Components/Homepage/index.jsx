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
import transparentGradient from '../../Images/gradientBGbottom.png'

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

    const Section1Controls = useAnimation();
    const Section2Controls = useAnimation();
    const cardControls = useAnimation();
     
    const [HomepageSection1, section1View] = useInView();
    const [HomepageSection2, section2View] = useInView();
    const [cardSection, cardInView] = useInView();

    useEffect(() => {
        if (section1View) {
            Section1Controls.start("visible");
        }
    }, [Section1Controls, section1View]);

    useEffect(() => {
        if (section2View) {
            Section2Controls.start("visible");
        }
    }, [Section2Controls, section2View]);

    useEffect(() => {
        if (cardInView) {
            cardControls.start("visible");
        }
    }, [cardControls, cardInView]);

    const HomepageH1 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
    };

    const cardAnim = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };

    const HomepageParagraphAnim = {
        visible: {
            opacity: 1, y: 0
        },
        hidden: {
            opacity: 0, y: 50
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

            <div id='homepage' className='h-[390rem] sm:h-max'>
                <div className='hero container h-screen top-0 mx-auto relative flex flex-col justify-between items-center'>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className='w-full'><Header /></motion.span>

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
                                }}><div className='mr-2 sm:mr-6 cursor-pointer w-[14rem] sm:w-96 h-14 sm:h-24 flex mb-2 sm:mb-0 justify-center items-center rounded-full bg-[#CCFF02] hover:w-[16rem] hover:sm:w-[27rem] transition-all relative top-1 ml-4 hover:border-4 sm:hover:border-8 hover:border-[#1c1c1c2c] gap-x-2 sm:gap-x-0 mt-20 sm:mt-0'><h2 className='text-2xl mx-0 sm:mx-3 sm:text-4xl text-[#1c1c1c] kayak-regular'>CLOUD</h2><svg xmlns="http://www.w3.org/2000/svg" className="arrow icon icon-tabler icon-tabler-arrow-up-right" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.2" stroke="#1c1c1c" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

                    <div className='relative sm:bottom-3 bottom-4'>
                        <h4 className='text-xl text-[#1c1c1c] sm:text-[#f7f7f7]'>Creative Digital Agency</h4>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className='absolute bottom-[-7rem] z-[-1] sm:hidden '><div>
                        <img src={transparentGradient} className='flex sm:hidden w-full h-[20rem] align-middle overflow-hidden' alt="" />
                    </div></motion.div>
                </div>

                <div className='w-screen pl-[20px] pr-[20px] sm:px-[160px] pt-[120px] sm:pt-[210px] pb-[240px] bg-[#fff] relative '>

                    <div className='w-max flex mb-12'>
                        <div className='p-2 flex justify-center items-center border-2 border-[#1c1c1c] rounded-full bg-none w-12 h-12 sm:w-full sm:h-full'><ArrowDown size={36} color="#1c1c1c" weight="light" /></div>
                        <div className='p-2 px-4 sm:p-3 flex justify-center items-center sm:px-6 border-2 border-[#1c1c1c] rounded-full bg-none text-lg sm:text-xl kayak-bold text-[#1c1c1c]'>ABOUT</div>
                    </div>

                    <div className='flex-col'>
                        <h1 className='flex' ref={HomepageSection1}>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6 }}>D</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.05 }} >E</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.15 }} >S</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.25 }} >I</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.3 }} >G</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.35 }} >N</motion.span>
                        </h1>

                        <h1 className='flex'>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.4 }}>B</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.45 }} >R</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.5 }} >A</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.55 }} >N</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.6 }} >D</motion.span>
                        </h1>

                        <h1 className='flex'>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.65 }}>D</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.7 }} >E</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.75 }} >V</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.85 }} >E</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.95 }} >L</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1 }} >O</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.05 }} >P</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.1 }} >E</motion.span>
                        </h1>

                        <h1 className='flex'>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.15 }}>M</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.2 }} >A</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.25 }} >N</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.3 }} >A</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.35 }} >G</motion.span>
                            <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' variants={HomepageH1} initial="hidden" animate={Section1Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.4 }} >E</motion.span>
                        </h1>
                    </div>


                    <div className='flex sm:justify-end justify-start relative top-10 z-30 gap-x-20'>
                        <div className='flex flex-col w-max'>

                            <motion.div variants={HomepageParagraphAnim} initial='hidden' animate={Section1Controls} transition={{ delay: 1.5 }} className='flex gap-x-20 flex-col sm:flex-row'>
                                <p className='text-[1.3rem] sm:text-[1.5rem] mb-10'>We are Cloud Labs. Digital creators  <br />  with more than 4  years of experience.<br />We focus on developing your <br /> business with services managed by us.</p>
                                <p className='text-[1.3rem] sm:text-[1.5rem] mb-10'>At our digital agency,<br /> we are dedicated to providing <br /> expert solutions to help your business <br /> succeed  in the digital landscape.</p>
                            </motion.div>

                            <motion.div variants={HomepageParagraphAnim} initial='hidden' animate={Section1Controls} transition={{ delay: 1.65 }} ><a href="/about"><button className='px-10  w-max py-3 bg-[#1c1c1c] text-[#f7f7f7] text-xl rounded-full transition-all active:bg-[#292929] active:translate-y-1 hover:bg-[#393939eb]'>More about us</button></a></motion.div>
                        </div>

                    </div>
                </div>

                <div className='z-[4] absolute left-0 top-auto bottom-auto w-max right-0 sm:w-[3560px] sm:mt-[-43rem] mt-0 sm:ml-[-32px] overflow-clip'>
                    <img src={gradientBg} className='hidden sm:flex gradientimg h-auto max-w-full align-middle overflow-hidden' alt="" />
                </div>

                <div className='container relative top-[-20rem]'>
                    <img src={gradientBgMobile} className='w-full mt-0 flex sm:hidden gradientimg h-auto align-middle overflow-hidden' alt="" />
                </div>

                <div className='w-full flex flex-col justify-center pl-[20px] pr-[20px] sm:px-[160px] pt-[120px] sm:pt-[210px] pb-[120px] sm:pb-[210px] bg-[#CCFF02] relative top-[-20rem] sm:top-0 z-[1]'>
                    <div className='flex flex-col justify-center'>

                        <div className='w-max flex mb-12'>
                            <div className='p-2 flex justify-center items-center border-2 border-[#1c1c1c] rounded-full bg-none w-12 h-12 sm:w-full sm:h-full'><ArrowDown size={36} color="#1c1c1c" weight="light" /></div>
                            <div className='p-2 px-4 sm:p-3 flex justify-center items-center sm:px-6 border-2 border-[#1c1c1c] rounded-full bg-none text-lg sm:text-xl kayak-bold text-[#1c1c1c]'>SERVICES</div>
                        </div>

                        <div>
                            <h1 className='flex-col sm:flex-row flex gap-x-8' ref={HomepageSection2}>
                                <div className='flex'>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6 }}>U</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.05 }} >N</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.15 }} >L</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.25 }} >E</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.3 }} >A</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.35 }} >S</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.4 }} >H</motion.span> <br />
                                </div>
                                <div className='flex'>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.45 }} >T</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.5 }} >H</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.55 }} >E</motion.span>
                                </div>

                                <div className='flex'>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.6 }} >P</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.65 }} >O</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.7 }} >T</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.75 }} >E</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.8 }} >N</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.85 }} >T</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.9 }} >I</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 0.95 }} >A</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1 }} >L</motion.span>
                                </div>
                            </h1>

                            <h1 className='flex-col sm:flex-row flex gap-x-8' >
                                <div className='flex sm:gap-x-8 gap-x-4'>
                                    <div className='flex'>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.05 }}>O</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.1 }} >F</motion.span>
                                    </div>
                                    <div className='flex'>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.15 }} >Y</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.2 }} >O</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.25 }} >U</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.3 }} >R</motion.span>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.35 }} >B</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.45 }} >U</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.5 }} >S</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.55 }} >I</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.6 }} >N</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.65 }} >E</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.7 }} >S</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.75 }} >S</motion.span>
                                </div>
                            </h1>


                            <h1 className=' flex gap-x-8 flex-col sm:flex-row' >
                                <div className='flex sm:gap-x-8 gap-x-4'>
                                    <div className='flex'>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.8 }}>W</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.85 }} >I</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.9 }} >T</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 1.95 }} >H</motion.span>
                                    </div>
                                    <div className='flex'>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2 }} >O</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.05 }} >U</motion.span>
                                        <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.1 }} >R</motion.span>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.15 }} >S</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.2 }} >E</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.25 }} >R</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.3 }} >V</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.35 }} >I</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.4 }} >C</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.45 }} >E</motion.span>
                                    <motion.span className='sm:flex text-6xl kayak-regular sm:text-[110px] sm:leading-[122px]' initial="hidden" variants={HomepageH1} animate={Section2Controls} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6, delay: 2.5 }} >S</motion.span>
                                </div>
                            </h1>
                        </div>

                        <div className='flex justify-between flex-col sm:flex-row items-start mt-12'>
                            <div className='flex items-center gap-x-6'>
                                <Laptop size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                                <ChartLineUp size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                                <PenNib size={84} className='w-16 sm:w-full' color="#252525" weight="light" />
                            </div>
                            <div className='flex flex-col mt-6 sm:mt-0 w-[80%] sm:w-max'>
                                <motion.div variants={HomepageParagraphAnim} initial='hidden' animate={Section2Controls} transition={{ delay: 2.6 }}><p className='text-[1.2rem] sm:text-[1.5rem] mb-10 z-50'>At our digital agency, we provide a full range of services <br /> to help businesses succeed in the digital landscape. <br /> Our services include: Website Design and Development, <br /> Social Media Marketing & Graphic Design.</p></motion.div>
                                <motion.div variants={HomepageParagraphAnim} initial='hidden' animate={Section2Controls} transition={{ delay: 2.75 }}> <a href="/services"><button className='px-10 transition-all active:bg-[#292929] active:translate-y-1 hover:bg-[#393939eb] w-max py-3 bg-[#1c1c1c] text-[#f7f7f7] text-xl rounded-full'>More about Services</button></a> </motion.div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col justify-center bg-[#171717] relative top-[-20rem] sm:top-0' ref={cardSection}>
                    <div className='flex items-center justify-center sm:flex-row flex-col' >
                        <motion.span variants={cardAnim} initial="hidden" animate={cardControls} className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-b sm:border-r-[1px] border-[#f7f7f7b0]'><div className='h-full justify-between flex flex-col'>
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
                        </div></motion.span>

                        <motion.span variants={cardAnim} initial="hidden" animate={cardControls} transition={{ delay: 0.15 }} className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-b  sm:border-r-[1px] border-[#f7f7f7b0]'><div className='h-full justify-between flex flex-col'>
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
                        </div></motion.span>

                        <motion.span variants={cardAnim} initial="hidden" animate={cardControls} transition={{ delay: 0.25 }} className='serviceCard sm:w-[33.33%] w-full h-screen sm:p-8 p-6 flex flex-col justify-between border-b  sm:border-r-[1px] border-[#f7f7f7b0]'><div className='h-full justify-between flex flex-col'>
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
                        </div></motion.span>
                    </div>


                </div>

                <Footer />
            </div>
        </>
    )
}

export default Homepage




