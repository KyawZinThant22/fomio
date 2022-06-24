import React from 'react'
import { ContactData } from '../data'

const ContactUs = () => {
  return (
    <div>
        <h1 className='ContactHeader'>Contact info</h1>
        <ul className='space-y-12 mt-12'>
            {ContactData.map((contact)=>(
                <li className='flex items-center gap-8 text-white' key={contact.info}>
                    <img src={contact.icon} alt="icon" className='w-8 ' />
                    <a href={contact.link}>
                    <span className='lg:text-2xl  text-2xl leading-tight'>{contact.info}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ContactUs