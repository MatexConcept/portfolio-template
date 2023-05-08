import './HeroImg.css'

import React from 'react'

import introImg from '../assests/img 1.jpg'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={introImg} alt='introImg'/>
        </div>

        <div className='content'>
            <p>HI, I'M A FREELANCER</p>
            <h1>Full Stack Developer</h1>

            <a href='Document.pdf' download= 'Matex Concept.pdf'>
                        <button className='btn'>Get Resume</button>
          </a>
        </div>

    
        
        
    </div>
  )
}

export default HeroImg