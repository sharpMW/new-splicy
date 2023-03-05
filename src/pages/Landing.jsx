import React from 'react'
import Hero from "../components/Landing/HeroSection"
import Navbar from "../components/Navbar"
import Description from "../components/Landing/Description"
import TeamSection from '../components/Landing/TeamSection'
const Landing = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Description/>
    <TeamSection/>
    </>
  )
}

export default Landing