import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Buildings, TerminalWindow, Question, FolderNotch, Users, ArrowDown } from 'phosphor-react'
import './style.css'
import circleText from '../../Images/Circle.png'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {

    const aboutHeroH1 = {
        initial: {
            y: 160,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.8,
                delay: 0.1
            }
        }
    }

    const aboutHeroH2 = {
        initial: {
            y: 140,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.8,
                delay: 0.6
            }
        }
    }

    const line = {
        initial: {
            scaleX: 0
        },
        animate: {
            scaleX: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 0.4
            }
        }
    }

    const aboutControls1 = useAnimation();
    const [aboutRef1, aboutInView1] = useInView();
    
    useEffect(() => {
        if (aboutInView1) {
            aboutControls1.start("visible");
        }
    }, [aboutControls1, aboutInView1]);

    const aboutCard = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        transition: {
            duration: 0.6
        }
    };

    return (
        <>

            <Header />

            <div className='container mx-auto relative top-32 flex flex-col justify-center aboutHero '>

                <div className='flex flex-col relative left-[50%] translate-x-[-50%] sm:left-0 sm:translate-x-[0] w-[85%] sm:w-full top-[-2rem] sm:top-0 sm:flex-row items-start justify-center sm:items-end gap-x-2'>
                    <motion.div variants={aboutHeroH1} initial='initial' animate='animate' className='w-full sm:w-[46%] flex justify-between items-center'><h1 className='text-6xl sm:text-8xl font-light text-[#b5d43b] kayak-bold tracking-wide relative flex flex-col place-self-end w-max sm:w-full' >Get to <br /> <motion.div className='text-left sm:text-right text-[#f7f7f7]' variants={aboutHeroH1} initial='initial' animate='animate' transition={{ delay: 0.1 }}>know</motion.div></h1> <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 }}><img src={circleText} className='h-28 sm:hidden w-28 rotating' alt="" /></motion.div></motion.div>
                    <motion.div className='w-[60%] sm:w-full place-self-end sm:place-self-auto origin-left hidden sm:flex' variants={line} initial='initial' animate='animate'><div className='w-44 sm:w-full h-[1px] bg-[#b5d43b] relative'></div></motion.div>
                    <motion.div className='w-full sm:w-max flex justify-between items-center relative top-6 sm:top-0' variants={aboutHeroH2} initial='initial' animate='animate' ><motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className='flex justify-center items-center w-[6.3rem] h-[6.3rem] bg-[#b5d43b] rounded-full sm:w-0 sm:h-0 sm:bg-none' ><ArrowDown size={64} color="#1c1c1c" weight="thin" className='sm:hidden' /></motion.div> <h1 className='text-6xl sm:text-8xl font-light text-right sm:text-left text-[#f7f7f7] kayak-bold tracking-wide sm:top-48 relative'> us <br /> <motion.div className='text-[#b5d43b]' variants={aboutHeroH2} initial='initial' animate='animate' transition={{ delay: 0.7 }}>better</motion.div> </h1></motion.div>
                </div>

                <div className='relative flex justify-between items-center sm:top-24 top-20 flex-col h-44 sm:h-80'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} ><p className='text-center text-xl w-[72%] relative left-[50%] translate-x-[-50%] sm:text-2xl mt-4 text-[#f7f7f7b5]'>
                        We are here to satisfy our customers with our products <br /> and give them the best experience they have ever had.</p></motion.div>
                    <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} ><ArrowDown size={64} color="#b5d43b" weight="thin" className='hidden sm:flex' /></motion.div>
                </div>

            </div>


            <div className='container mx-auto p-2 h-max grid relative top-64 sm:top-[35rem]' ref={aboutRef1}>
                <div className='gap-2 w-full h-full grid grid-cols-1 xl:grid-cols-3'>

                <motion.div variants={aboutCard} initial="hidden" animate={aboutControls1}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl sm:text-3xl  kayak-light  text-[#f7f7f7]'>Who We Are</h1>
                            <Buildings size={38} color='#b5d43b' weight="fill" />
                        </div>
                        <p className='text-lg sm:text-2xl font-regular text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen'>Cloud Labs is a team of 2 people & we are focused on taking your business to the clouds!
                            We are here to satisfy our customers with our products and give them the best experience they ever had.
                        </p>
                    </div></motion.div>

                    <motion.div variants={aboutCard} initial="hidden" animate={aboutControls1} transition={{ delay: 0.2 }}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl sm:text-3xl  kayak-light  text-[#f7f7f7] '>What We Do</h1>
                            <TerminalWindow size={38} color='#b5d43b' weight="fill" />
                        </div>

                        <p className='text-lg sm:text-2xl font-regular text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen relative'>We are digital creators,
                            Our digital skills are mostly based around in: <br /> <br />
                            1. Web Development <br />
                            2. Social Media Marketing <br />
                            3. Graphic Design <br />
                        </p>
                    </div></motion.div>

                    <motion.div variants={aboutCard} ref={aboutRef1} initial="hidden" animate={aboutControls1} transition={{ delay: 0.3 }}><div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] border-2 border-[#f7f7f7] flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl sm:text-3xl font-regular text-[#f7f7f7]  kayak-light '>Why us?</h1>

                            <Question size={38} weight="fill" color='#b5d43b' />
                        </div>

                        <p className='text-lg sm:text-2xl text-justify mt-8 sm:mt-14 text-[#f7f7f7c7] underlineGreen relative'>Cloud Labs is not only a service that will offer you products. We are looking to get in touch with our customers in any way possible!
                        </p>
                    </div></motion.div>

                </div>

                <div className='gap-2 w-full h-full mt-2 grid grid-cols-1 xl:grid-cols-3 justify-center'>
                    <div className='p-10 sm:p-16 h-[25rem] sm:h-[30rem] rounded-[4rem] bg-[#f7f7f7] col-span-2 flex flex-wrap justify-between items-start overflow-hidden'>

                        <h1 className='leading-10 text-[2rem] sm:text-[3.8rem] sm:leading-[70px] font-bold tracking-wide text-[#1c1c1c] kayak-light '>WHAT TECHNOLOGIES <br /> DO WE USE?</h1>

                        <div className='p-6 bg-[#1c1c1c] rounded-2xl xl:w-max'>
                            <div className='flex-col items-center justify-center sm:w-full '>
                                <div className='flex-col sm:flex justify-around  md:w-full gap-y-5 '>
                                    <i className="devicon-react-original colored text-5xl"></i>
                                    <i className="devicon-javascript-plain colored text-5xl ml-4 sm:ml-0"></i>
                                    <i className="devicon-tailwindcss-plain colored text-5xl ml-4 sm:ml-0"></i>
                                </div>

                                <div className='flex-col sm:flex justify-around md:w-full mt-5 sm:mt-0 gap-y-5'>
                                    <i className="devicon-html5-plain colored text-5xl mt-0 sm:mt-4"></i>
                                    <i className="devicon-css3-plain colored text-5xl ml-4 sm:ml-0"></i>
                                    <i className="devicon-firebase-plain colored text-5xl ml-4 sm:ml-0"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-stretch justify-between w-full'>

                        <motion.div transition={{
                            ease: [0.6, 0.01, -0.05, 0.95],
                            duration: 0.35
                        }}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 0.95
                            }} whileTap={{
                                y: 2.5
                            }}><div className='work relative left-1 sm:left-0 p-4 h-[15rem] rounded-[3.5rem] bg-none border-2 border-[#f7f7f7] flex justify-center items-center cursor-pointer'>
                                <h1 className='text-6xl text-[#f7f7f7] tracking-wider kayak-light'>WORK</h1>
                                <FolderNotch size={68} className='ml-5' color="#b5d43b" weight="light" />
                            </div></motion.div>

                        <motion.div transition={{
                            ease: [0.6, 0.01, -0.05, 0.95],
                            duration: 0.35
                        }}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 0.95
                            }} whileTap={{
                                y: 2.5
                            }}><div className='team relative left-1 sm:left-0 p-4 h-[15rem] rounded-[3.5rem] bg-[#b5d43b] flex justify-center items-center cursor-pointer'>

                                <h1 className='text-6xl text-[#000000] tracking-wider kayak-light '>TEAM</h1>
                                <Users size={68} color="#000000" className='ml-5' weight="light" />

                            </div></motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About




// <div className='justify-around container mb-4 hidden sm:flex'>
// <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}><svg className="w-16 h-16 rotate-90" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="#b5d43b" stroke-width="2" stroke-linecap="round"></path>
// </svg></motion.div>


// <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}><svg className="w-16 h-16 rotate-180 relative left-4" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round"></path>
// </svg></motion.div>
// </div>

// <div className='justify-around gap-x-64 container mt-5 hidden sm:flex'>

// <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}><svg class="w-16 h-16" viewBox="0 0 107 62" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467" stroke="#f7f7f7" stroke-width="2" stroke-linecap="round"></path>
// </svg></motion.div>




// <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}><svg class="w-16 h-16 rotate-12" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="rgb(255,187,1)" stroke-width="2" stroke-linecap="round"></path>
// </svg></motion.div>

// </div>
