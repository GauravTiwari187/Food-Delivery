import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cum placeat blanditiis dolores in mollitia unde quasi, sunt voluptates nobis?</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icons} alt="" />
                <img src={assets.twitter_icons} alt="" />
                <img src={assets.linkedin_icons} alt="" />
             </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tamato.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 c tamato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
