import React from 'react'
import Switch from '../layouts/Switch'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Skills from "../layouts/Skills"
import Profile from "../layouts/Profile"
import Projects from "../../public/Projects"
import Footer from "../layouts/Footer"


export default function MainPage() {
  return (
    <div>
    <div className="flex flex-col items-center gap-10"> 
        <div > 
            <Switch/>
        </div>

        <div className='w-full max-w-screen-lg'>
            <Header/>
        </div>

        <div className='w-full max-w-screen-lg'>
            <Hero/>
        </div>

        <div className="w-full max-w-screen-lg mt-10"> 
            <Skills/>
        </div>

         <div className="w-full max-w-screen-lg h-0 border border-[#4338CA] dark:border-specialWhite"></div>

        <div className="w-full max-w-screen-lg mt-5">
            <Profile/>
        </div>

        <div className="w-full max-w-screen-lg h-0 border border-[#4338CA] dark:border-specialWhite"></div>

        <div className='w-full max-w-screen-lg'>
            <Projects/>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}
