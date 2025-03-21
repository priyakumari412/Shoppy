import React from 'react'
import './Navbar.css'
import bagImg from '../Assets/shop.png'
import cart from '../Assets/shopping-cart.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setmenu] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <div className='navbar '>
      <div className="logo flex">
        <img src={bagImg} alt="" />
        <h5>SHOPPY</h5>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setmenu("Sale") }}><Link to='/Shoppy' style={{ textDecoration: 'none' }}>Sale</Link>{menu === "Sale" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Mens") }}> <Link to='/mens' style={{ textDecoration: 'none' }}>Mens</Link> {menu === "Mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Womens") }}><Link to='/womens' style={{ textDecoration: 'none' }}>Womens</Link>{menu === "Womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Kids") }}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart '>
        <Link to='/loginsignup'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">0</div>

      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i class="fa-solid fa-bars sidebar">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </i>
      </div>
    </div>
  )
}


export default Navbar