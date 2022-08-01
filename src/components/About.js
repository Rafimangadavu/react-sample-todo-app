import React from 'react'
import './About.css'
import Footer from './Footer'
import Header from './Header'

export default function About() {
  return (
    <div> 
     <Header showSearch="false" />
    <p className='about'>This is My About Page</p>
    <Footer />
        
    </div>
  )
}
