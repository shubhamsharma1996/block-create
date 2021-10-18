import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    const [active, setActive] = useState(false)
    return (
        <div className="header">
            <div className="header__left">
                <h1><Link to="/">
                    <img className="header__logo" src="/Images/logo-icon-black.svg" alt="balck logo"/>
                    </Link></h1>
            </div>
            <div className="header__right">
                <h2><Link to="/contact">Contact Us</Link></h2>
                {/* <ul onClick={e => setActive(!active)} className={active ? 'active' : ''}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
            </div>
        </div>
    )
}

export default Header