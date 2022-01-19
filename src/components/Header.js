import './Header.css';
import './Menu.css';
import React, {useState, useEffect} from 'react'

function Header ()  {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

    return (
        <div className="header_container">
            <div className="header_2 list">
            <h2>THE GYM</h2> 
                <nav>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="header_menu">
                        <li className="items"><a href="#home">Home</a></li>
                        <li className="items"><a href="#about">About Us</a></li>
                        <li className="items"><a href="#packages">Packages</a></li>
                        <li className="items"><a href="#team">Our Team</a></li>
                        <li className="items"><a href="#join">Join Us</a></li>
                    </ul>
                    )}
                    <button onClick={toggleNav} className="btn">☰</button>
                </nav>
            </div>

        </div>
    )
}

export default Header