import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import { PaperPlaneTilt } from 'phosphor-react'
import { motion } from 'framer-motion'

function Contact() {
    return (

        <>
            <div id='contactPage'>


                <div className='w-full relative flex flex-col'>

                    <div className='container sm:mx-auto relative top-0 sm:w-full h-screen flex flex-col justify-between  items-center sm:items-start'>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className='w-full'><Header /></motion.span>
                        <h1 className='text-6xl relative sm:top-10 mt-12 sm:mt-0 sm:text-8xl kayak-light text-[#f7f7f7] w-max'>Let's <br /> <span className='text-[#CCFF02] flex items-center'>Collaborate <PaperPlaneTilt className='ml-4 relative top-1 w-10 sm:w-full' size={64} color="#f7f7f7" weight="duotone" /></span></h1>

                        <div className='mt-12 sm:w-full w-max sm:mx-0 bottom-3 flex flex-col-reverse sm:flex-row justify-between items-start relative'>

                            <div className='mt-14 sm:mt-0'>
                                <div>
                                    <p className='text-2xl kayak-light text-[#f7f7f764]'>Phone</p>
                                    <div className='mt-7 flex flex-col gap-y-1'>
                                        <a href="tel:+389 78 239 880" className='text-2xl kayak-light text-[#f7f7f7]'>+389 78 239 880</a>
                                        <a href="tel:+389 77 758 066" className='text-2xl kayak-light text-[#f7f7f7]'>+389 77 758 066</a>
                                    </div>
                                </div>

                                <div className='mt-14'>
                                    <p className='text-2xl kayak-light text-[#f7f7f764]'>Email</p>
                                    <div className='mt-7 flex flex-col gap-y-1'>
                                        <a href="mailto:cloudlabsagency@gmail.com" className='text-2xl kayak-light text-[#f7f7f7]'>cloudlabsagency@gmail.com</a>
                                    </div>
                                </div>

                                <div className='mt-14'>
                                    <p className='text-2xl kayak-light text-[#f7f7f764]'>Location</p>
                                    <div className='mt-7 flex flex-col gap-y-1'>
                                        <a href="mailto:cloudlabsagency@gmail.com" className='text-2xl kayak-light text-[#f7f7f7]'>Strumica, <br /> North Macedonia</a>
                                    </div>
                                </div>
                            </div>

                            <form className='grid sm:justify-center justify-start gap-y-10 w-full sm:w-max'>
                                <div className='sm:flex gap-7 grid w-full'>
                                    <input className='px-0 pb-6 w-full bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='First Name' required />
                                    <input className=' px-0 pb-6 w-full bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='Last Name' required />
                                </div>
                                <input className=' px-0 pb-6 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='Email' required />
                                <textarea className=' px-0 pb-6 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl resize-none inputField' name="message" id="message" cols="30" rows="4" placeholder='Your message...'></textarea>

                                <button className='p-3 rounded-full bg-[#CCFF02] w-full sm:w-44 text-xl mt-4'>Send</button>
                            </form>

                        </div>

                    </div>


                </div>


                <Footer />
            </div>


        </>
    )
}

export default Contact