import React from 'react'
import Fquestions from './Fquestions'
import Hero from './Hero'
import Pricing from './Pricing'
import Service from './Service'
import Work from './Work'

const Home = () => {
  return (
    <>
        <Hero/>
        <Work/>
        <Service/>
        <Pricing/>
        <Fquestions/>
    </>
  )
}

export default Home