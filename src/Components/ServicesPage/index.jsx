import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import { Code, PenNib, ChartLineUp, ArrowRight, ArrowDown } from 'phosphor-react'
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



      <div className='servicespage'>
        <Header />

        <div className='container mx-auto relative sm:top-4 top-24'>

          <motion.div variants={staggerContainer} initial='hidden' className='flex justify-center' whileInView='show' viewport={{ once: false, amount: 0.25 }}>
            <TypingText title='SERVICES' />
          </motion.div>

          <div className='container mx-auto w-36 h-36 flex justify-center items-center sm:bottom-56 relative'>
            <ArrowDown size={76} color="#f7f7f7" weight="thin" />
          </div>
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

        </div>


        {/* <div className='container mx-auto relative top-36 flex justify-between items-start'>
        <div>
          <h1 className='text-8xl text-[#f7f7f7]'><span className='text-[#b5d43b]'>Services</span> <br /> our <span className='agency relative'>agency</span> offers</h1>
          <p className='mt-10 w-[35rem] text-2xl text-[#f7f7f7b5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem pariatur facere aliquid eos, sed unde sapiente ad reprehenderit distinctio.</p>
          <button className='mt-7 px-11 h-[60px] rounded-full bg-[#b5d43b] text-2xl'>See more</button>
        </div>

        <div className='flex flex-col justify-center items-center servicesRotating'>
          <div className='servicesCircle w-56 h-56 rounded-full bg-none border-2 border-[#f7f7f7] flex justify-center items-center transition-all cursor-pointer'>
            <Code size={76} className='Sicon' color="#b5d43b" weight="thin" />
          </div>

          <div className='flex items-center gap-x-8'>
            <div className='servicesCircle w-56 h-56 rounded-full bg-none border-2 border-[#f7f7f7] flex justify-center items-center transition-all cursor-pointer'>
              <PenNib size={76} className='Sicon' color="#b5d43b" weight="thin" />
            </div>
            <div className='servicesCircle w-56 h-56 rounded-full bg-none border-2 border-[#f7f7f7] flex justify-center items-center transition-all cursor-pointer'>
              <ChartLineUp size={76} className='Sicon' color="#b5d43b" weight="thin" />
            </div>
          </div>
        </div>

      </div> */}





        <Footer />
      </div>
    </>
  )
}

export default Services








{/* <div className='relative top-56 container mx-auto flex items-start justify-between'>
          <h1 className='text-8xl text-[#f7f7f7]'><span className='text-[#f7f7f7] flex items-center'>Services <span className='ml-8 w-72 h-20 rounded-full flex justify-center items-center bg-[#b5d43b]'><ArrowRight size={76} color="#222222" weight="thin" /></span></span> our <span className='agency relative text-[#b5d43b]'>agency</span> offers</h1>

          <div className='flex items-center gap-x-6'>
            <div className='w-32 h-32 rounded-2xl flex justify-center items-center bg-[#f7f7f721] border-4 border-[#b5d43b] hover:w-64 transition-all card cursor-pointer'>
              <h3 className='absolute opacity-0 servicesCardTitle text-[1.6rem] text-[#f7f7f7] kayak-bold transition-all'>Web Development</h3>
              <Code size={64} className='servicesIcon transition-all' color="#b5d43b" weight="thin" /></div>
            <div className='w-32 h-32 rounded-2xl flex justify-center items-center bg-[#f7f7f721] border-4 border-[#b5d43b] hover:w-64 transition-all card cursor-pointer'><PenNib className='servicesIcon transition-all' size={64} color="#b5d43b" weight="thin" />
              <h3 className='absolute opacity-0 servicesCardTitle text-[1.6rem] text-[#f7f7f7] kayak-bold transition-all'>Graphic Design</h3></div>
            <div className='w-32 h-32 rounded-2xl flex justify-center items-center bg-[#f7f7f721] border-4 border-[#b5d43b] hover:w-64 transition-all card cursor-pointer'><ChartLineUp size={64} className='servicesIcon transition-all' color="#b5d43b" weight="thin" />
              <h3 className='absolute opacity-0 servicesCardTitle text-[1.6rem] text-[#f7f7f7] kayak-bold transition-all text-center'>Social Media <br /> Marketing</h3></div>
          </div>
        </div> */}