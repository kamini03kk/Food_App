import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolore voluptatum? Consequuntur eius architecto repellat ratione. Rem, ipsum odio impedit culpa recusandae quos. Quisquam repellat quaerat tempore natus voluptas ut?</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-890</li>
            <li>contact@foodapp.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">Copyright 2024 © FoodApp.com - All Rights Reserved</div>
    </div>
  )
}

export default Footer