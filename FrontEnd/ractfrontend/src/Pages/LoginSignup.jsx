import React from 'react';
import './CSS/Loginsignup.css';

export const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>
          Sign Up
        </h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name'/>
            <input type='email' placeholder='Email Address'/>
            <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an Account?
          <span>Login Here</span>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By continuying, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}
