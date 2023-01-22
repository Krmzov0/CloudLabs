import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import { PaperPlaneTilt } from 'phosphor-react'

function Contact() {
    return (

        <>
            <Header />

            <div className='container mx-auto relative top-16'>
                <h1 className='text-8xl kayak-light text-[#f7f7f7]'>Let's <br /> <span className='text-[#b5d43b] flex items-center'>Collaborate <PaperPlaneTilt className='ml-4 relative top-1' size={64} color="#f7f7f7" weight="duotone" /></span></h1>

                <div className='w-full flex justify-between items-start relative top-16'>

                    <div>
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

                    <form className='grid justify-center gap-y-10'>
                        <div className='flex gap-7'>
                            <input className=' px-0 pb-6 w-72 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='First Name' required />
                            <input className=' px-0 pb-6 w-72 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='Last Name' required />
                        </div>
                        <input className=' px-0 pb-6 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl  inputField' type="text" placeholder='Email' required />
                        <textarea className=' px-0 pb-6 bg-transparent outline-none border-b border-b-[#f7f7f7] text-[#f7f7f7] kayak-light text-2xl resize-none inputField' name="message" id="message" cols="30" rows="4" placeholder='Your message...'></textarea>

                        <button className='p-3 rounded-full bg-[#b5d43b] w-44 text-xl mt-4'>Send</button>
                    </form>

                </div>

            </div>

            <Footer />

        </>
    )
}

export default Contact