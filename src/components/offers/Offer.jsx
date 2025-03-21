import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive-img.avif'
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1> 
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offer