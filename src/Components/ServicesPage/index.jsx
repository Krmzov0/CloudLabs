import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import { ArrowDown } from 'phosphor-react'
import { TypingText } from './customTexts'
import { staggerContainer } from '../utils/motion'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {

  const servicesControls = useAnimation();
  const [Service1Ref, serviceInView1] = useInView();

  const servicesControls2 = useAnimation();
  const [Service2Ref, serviceInView2] = useInView();

  const servicesControls3 = useAnimation();
  const [Service3Ref, serviceInView3] = useInView();


  useEffect(() => {
    if (serviceInView1) {
      servicesControls.start("visible");
    }
  }, [servicesControls, serviceInView1]);

  useEffect(() => {
    if (serviceInView2) {
      servicesControls2.start("visible");
    }
  }, [servicesControls2, serviceInView2]);

  useEffect(() => {
    if (serviceInView3) {
      servicesControls3.start("visible");
    }
  }, [servicesControls3, serviceInView3]);

  const Service1H = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 250 }
  };

  const servicesCard = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
      duration: 0.6
    }
  };


  return (
    <>
    
        <Header />

        <div className='container mx-auto relative sm:top-4 top-32'>

          <motion.div variants={staggerContainer} initial='hidden' className='relative sm:bottom-24 bottom-14 flex flex-col justify-center items-center h-max' whileInView='show' viewport={{ once: false, amount: 0.25 }}>
            <TypingText title='SERVICES' />
            <p className='relative bottom-6 sm:hidden flex text-xl text-center text-[#f7f7f7d7]'>See more about what our team offers. <br /> And detailed informations about each service.</p>
          </motion.div>

          <motion.div transition={{
            type: "spring",
            stiffness: 700
          }}
            initial={{ scale: 1 }} whileTap={{
              y: 2.5
            }}><div className='container mx-auto w-28 sm:w-36 h-28 sm:h-36 flex justify-center items-center sm:bottom-72 hover:w-48 hover:h-48 transition-all ease-out relative p-3 rounded-full border border-[#f7f7f7]'>
              <ArrowDown size={68} color="#f7f7f7" className='sm:w-full w-12' weight="thin" />
            </div></motion.div>
        </div>

        <div className='container mx-auto relative top-72 sm:top-0' ref={Service1Ref}>
          <div className=''>


            <h1 className='thunderBlack text-[5rem] sm:text-[22rem] text-center leading-[5rem] sm:leading-[20rem] uppercase text-[#f7f7f7] outlinetext'>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls}><span>Web</span></motion.div>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls} transition={{ delay: 0.1 }}><span>Development</span></motion.div>
            </h1>

            <div className=' flex justify-evenly items-center flex-col md:flex-row gap-y-8'>
              <motion.div variants={servicesCard} initial="hidden" animate={servicesControls} transition={{ delay: 0.2 }}><div className='w-68 sm:w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>
                <div>

                  <h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Basic</span>  Website</h2>

                  <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'>Landing page + 3 pages <br />
                    Contact Form <br />
                    Fully Responsive <br />
                    3 Revisions</p>
                </div>

                <button className='mt-16 h-[64px]  w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
              </div></motion.div>

              <motion.div variants={servicesCard} initial="hidden" animate={servicesControls} transition={{ delay: 0.4 }} ><div className='w-68 sm:w-[26rem] h-[38rem] flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                <div><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Premium</span>  Website</h2>

                  <p className='mt-10 text-3xl leading-[2.8rem] text-[#f7f7f7c3] kayak-light'>Unlimited pages <br />
                    Fully responsive <br />
                    Contact Form <br />
                    Graphic Design <br />
                    Online Shop <br />
                    9 Revisions</p>
                </div>

                <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
              </div></motion.div>

              <motion.div variants={servicesCard} initial="hidden" animate={servicesControls} transition={{ delay: 0.3 }}><div className='w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                <div><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Medium</span>  Website</h2>

                  <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'> Landing page + 6 pages <br />
                    Fully Responsive <br />
                    Contact Form <br />
                    6 Revisions </p>
                </div>

                <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
              </div></motion.div>
            </div>

          </div>

          <div className='container mx-auto relative top-24 sm:top-48 flex justify-center items-center'>
            <div className='w-[50%] h-[1px] bg-[#f7f7f79e]'></div>
          </div>

          <div className=' relative top-40 sm:top-96' ref={Service2Ref}>


            <h1 className='thunderBlack text-[5.6rem] sm:text-[22rem] text-center leading-[6rem] sm:leading-[20rem] uppercase text-[#f7f7f7] outlinetext'>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls2}><span>Graphic</span></motion.div>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls2} transition={{ delay: 0.1 }}><span>Design</span></motion.div>
            </h1>

            <div>
              <div className=' flex justify-evenly items-center flex-col md:flex-row gap-y-8'>
                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls2} transition={{ delay: 0.2 }}><div className='servicesCARD w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>
                  <div>
                    <h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Basic</span>  Website</h2>

                    <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'>Landing page + 3 pages <br />
                      Contact Form <br />
                      Fully Responsive <br />
                      3 Revisions</p>
                  </div>

                  <button className='mt-16 h-[64px]  w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>

                  <div className="CardCursor flex justify-center items-center">
                    <h1 className='text-2xl'>View</h1>
                  </div>
                </div></motion.div>

                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls2} transition={{ delay: 0.4 }}><div className='servicesCARD w-68 sm:w-[26rem] h-[38rem]  flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                  <div><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Premium</span>  Website</h2>

                    <p className='mt-10 text-3xl leading-[2.8rem] text-[#f7f7f7c3] kayak-light'>Unlimited pages <br />
                      Fully responsive <br />
                      Contact Form <br />
                      Graphic Design <br />
                      Online Shop <br />
                      9 Revisions</p>
                  </div>

                  <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
                </div></motion.div>

                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls2} transition={{ delay: 0.3 }}><div className='servicesCARD w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                  <div ><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Medium</span>  Website</h2>

                    <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'> Landing page + 6 pages <br />
                      Fully Responsive <br />
                      Contact Form <br />
                      6 Revisions </p>
                  </div>

                  <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
                </div></motion.div>
              </div>

            </div>

          </div>

          <div className='container mx-auto relative top-64 sm:top-[35.5rem] flex justify-center items-center'>
            <div className='w-[50%] h-[1px] bg-[#f7f7f79e]'></div>
          </div>

          <div className=' relative top-80 sm:top-[47rem] ' ref={Service3Ref}>

            <h1 className='thunderBlack text-[5.6rem] sm:text-[22rem] text-center leading-[6rem] sm:leading-[23rem] uppercase text-[#f7f7f7] outlinetext'>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls3}><span>Social</span></motion.div>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls3}><span>Media</span></motion.div>
              <motion.div variants={Service1H} initial="hidden" animate={servicesControls3} transition={{ delay: 0.1 }}><span>Marketing</span></motion.div>
            </h1>

            <div>
              <div className=' flex justify-evenly items-center flex-col md:flex-row  gap-y-8' >
                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls3} transition={{ delay: 0.2 }}><div className='w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12 '>
                  <div>
                    <h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Basic</span>  Website</h2>

                    <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'>Landing page + 3 pages <br />
                      Contact Form <br />
                      Fully Responsive <br />
                      3 Revisions</p>
                  </div>

                  <button className='mt-16 h-[64px]  w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
                </div></motion.div>

                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls3} transition={{ delay: 0.4 }}><div className='w-68 sm:w-[26rem] h-[38rem] flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                  <div><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Premium</span>  Website</h2>

                    <p className='mt-10 text-3xl leading-[2.8rem] text-[#f7f7f7c3] kayak-light'>Unlimited pages <br />
                      Fully responsive <br />
                      Contact Form <br />
                      Graphic Design <br />
                      Online Shop <br />
                      9 Revisions</p>
                  </div>

                  <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
                </div></motion.div>

                <motion.div variants={servicesCard} initial="hidden" animate={servicesControls3} transition={{ delay: 0.3 }}><div className='w-68 sm:w-96 h-max flex flex-col justify-between bg-[#f7f7f7] rounded-3xl bg-[#f7f7f714] border-2 border-[#b5d43b] p-10 sm:p-12'>

                  <div ><h2 className='text-[#f7f7f7] text-4xl kayak-light'><span className='text-[#b5d43b]'>Medium</span>  Website</h2>

                    <p className='mt-10 text-[1.7rem] text-[#f7f7f7c3] leading-[2.8rem] kayak-light'> Landing page + 6 pages <br />
                      Fully Responsive <br />
                      Contact Form <br />
                      6 Revisions </p>
                  </div>

                  <button className='mt-16 h-[64px] w-full text-2xl bg-[#b5d43b] text-[#1c1c1c] rounded-2xl'>Order Now</button>
                </div></motion.div>
              </div>

            </div>

          </div>

          <Footer />
        </div>
      </>
      )
}

      export default Services


