import React from 'react'
import Contact from './Contact'
import Fquestions from './Fquestions'
import Hero from './Hero'
import Service from './Service'
import Work from './Work'

const Home = () => {
  return (
    <>
        <Hero/>
        <Work/>
        <Service/>
        {/* <Pricing/> */}
        <Fquestions/>
        <Contact/>
    </>
  )
}

export default Home