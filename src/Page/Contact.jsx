import React from 'react'
import ContactForm from '../Components/ContactForm'
import ContactUs from '../Components/ContactUs'
import SplitScreen from '../Components/SplitScreen'

const Contact = () => {
  return (
    <div id='contact' className='mt-[5rem] lg:mt-[10rem] lg:h-[60rem] '>
        <div className='text-center space-y-10'>
            <h1 className='uppercase text-primary lg:text-5xl text-3xl font-light '>Get In Touch</h1>
            <div className='border border-solid border-t-primary w-24  mx-auto'></div>
            <h1 className='text-white text-[1.2rem] lg:text-3xl leading-[40px] font-thin'>
                Do not be confused with technical issues, contact MMS IT as soon <br className='hidden lg:block' /> as possible and contact us as soon as possible. 
            </h1>
        </div>

        <div className=' lg:w-[1300px] container mx-auto mt-12 lg:mt-[10rem]'>
        <SplitScreen leftWeight={1} RightWeight={1}>
            <ContactUs/>
            <ContactForm/>
        </SplitScreen>
        </div>
    </div>
  )
}

export default Contact