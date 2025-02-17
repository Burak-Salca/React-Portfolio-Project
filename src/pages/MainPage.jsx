import React from 'react'
import Switch from '../layouts/Switch'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Skills from "../layouts/Skills"
import Profile from "../layouts/Profile"
import Projects from "../layouts/Projects"
import Footer from "../layouts/Footer"


export default function MainPage() {
  return (
    <div >
        <div className="w-full max-w-full px-6 mx-auto overflow-x-hidden box-border flex flex-col items-center gap-10"> 
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
            <div className="w-full max-w-screen-lg mt-5">
                <Profile/>
            </div>
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
