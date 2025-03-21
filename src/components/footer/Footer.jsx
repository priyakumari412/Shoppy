import React from 'react'
import './Footer.css'
import insta from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'
import whatsapp from '../Assets/whatsapp.png'
import pinterest from '../Assets/pinterest.png'
import footer_logo from '../Assets/shop.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPY</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={whatsapp} alt="" />
                <img src={pinterest} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright @ 2025 -All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer