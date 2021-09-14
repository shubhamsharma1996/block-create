import React, { useContext, useState } from 'react'
import './Header.css'
function Header() {
    const [active, setActive] = useState(false)
    return (
        <div className="header">
            <div className="header__left">
                <h1>Logo Here</h1>
            </div>
            <div className="header__right">
                <ul onClick={e => setActive(!active)} className={active ? 'active' : ''}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Header