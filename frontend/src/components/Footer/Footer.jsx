import React from 'react';
import './Footer.css'
import {assets, menu_list} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>sadffffffffffffffffffffffffffffffffffffaaaaasdfffffffffffffffffffffffffffffffffffff</p>
              <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+84-345-323-666</li>
                <li>contact@tomato.com</li>
            </div>
        </div>
      <hr />
      <div className="footer-copyright">Copyright 2024 @ tomato.com - All Right Reserved</div>
    </div>
  );
}
import './Footer.css'
export default Footer;
