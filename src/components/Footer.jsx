import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Links</h2>
            <Link to='/'>Main Page</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/prices'>Prices</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            <span to='/'>Address: str. Random street name 53</span>
            <span to='/'>Email: info@powergym.com</span>
            <span to='/'>Phone: 088 888 888</span>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Work Schedule</h2>
            <span to='/'>Week: 7:00 - 22:00 </span>
            <span to='/'>Saturday: 8:00 - 21:00</span>
            <span to='/'>Sunday: 9:00 - 20:00</span>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <div className="social-media">
            <Link
              class='social-media-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-media-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-media-link'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div class='footer-bottom'>
        <div class='footer-wrap'>
            <Link to='/' className='footer-logo'>
              POWER
            </Link>
          <small class='website-rights'>POWER © 2023</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;