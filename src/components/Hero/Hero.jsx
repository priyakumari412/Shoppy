import React from 'react'
import './Hero.css'
import hero_img from '../Assets/hero-image.avif'
import hand_icon from '../Assets/waving-hand.png'
import arrow_icon from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero flex'>
        <div className="hero-left c-flex">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon flex">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className="hero-latest-button flex">
                <button>Latest Collections</button>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />

        </div>
    </div>
  )
}

export default Hero