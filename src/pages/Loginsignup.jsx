import React from 'react'
import '../pages/CSS/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="login-signup-login">Already have an account?<span>Login Here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i am agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup