import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer__conatiner">
            <div className="footer__first">
            <img className="footer__logo" src="/Images/logo-icon-white.svg" alt="logo-icon-white"/>
                <div className="footer__links">
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/contact">Contact</Link></li> */}
                    </ul>
                    {/* <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul> */}
                </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
        </div>
    )
}

export default Footer
