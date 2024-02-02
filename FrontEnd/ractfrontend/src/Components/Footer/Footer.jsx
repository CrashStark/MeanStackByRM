import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinteresr_icon from '../Assets/pintester_icon.png';
import whatapp_app from '../Assets/whatsapp_icon.png';
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt=''/>
                </div>
                <div className='footer-icons-container'>
                    <img src={pinteresr_icon} alt=''/>
                </div>
                <div className='footer-icons-container'>
                    <img src={whatapp_app} alt=''/>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 -All Right Reserved.</p>
        </div>
    </div>
  )
}
