import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className="Navbar">
    <div className="navbar-container">
      <Link to ="/" className="navbar-logo">
      POWER
      </Link>
      <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prices'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prices
              </Link>
            </li>
            </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar