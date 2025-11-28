import React from 'react'
import heroimg from '../../assets/heroimg.png'
import './hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <img className='heroimg' src ={heroimg} alt='img'/>

        <div className="overlay"></div>

        <div className="hero-content">
            <h1>Your Daily Recipe Inspiration</h1>
            <p>Find the best dishes tailored for you</p>
          
        </div>
    </div>
  )
}

export default hero