import React from 'react'
import { resolvePath } from 'react-router-dom'
import Feedback from '../Components/Feedback'
import Header from '../Components/Header'
import ServiceCard from '../Components/ServiceCard'
import { Services } from '../data'

const Service = () => {
  return (
    <div id="service">
    <div className='xl:h-screen mb-12 lg:mt-[12rem] xs:mt-[5rem] md:mt-[7rem] container mx-auto ' >
        <Header title="Our Services" subTitle="We Offet best of the best"/>
    <div  className='mt-12 flex xs:flex-col sm:items-center lg:items-start md:flex-row lg:flex-row  justify-center gap-5 md:flex-wrap sm:flex-nowrap '>
            {Services.map((services)=>(
                <ServiceCard services={services} key={services.title}  />
            ))}
        </div>
    </div>
      <Feedback/>
    </div>
  )
}

export default Service