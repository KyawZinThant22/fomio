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
                    <a href={contact.link} className="hover:text-primary">
                    <span className='lg:text-2xl  text-xl leading-tight'>{contact.info}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ContactUs