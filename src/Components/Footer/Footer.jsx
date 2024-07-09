import React from 'react'
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPING</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Pffices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={instagram_icon} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={pinterest_icon} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt=''/>
            </div>

        </div>
        <div className='footer-copyright'>
            <hr/>
            copyright @ 2024 - All Right Reserved

        </div>
    </div>
  )
}

export default Footer