import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer__conatiner">
            <div className="footer__first">
            <img className="footer__logo" src="/Images/white-new.svg" alt="logo-icon-white"/>
                <div className="footer__links">
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UCiWR2CyGz9WzF70ZOaadfRA/">
                            <img src="/Images/youtube.svg"/>Youtube</a></li>
                        <li><a href="https://twitter.com/blockreate/">
                        <img src="/Images/twitter.svg"/>Twitter</a></li>
                        <li><a href="https://www.facebook.com/blockreate/">
                        <img src="/Images/facebook.svg"/>Facebook</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/blockreate/">
                        <img src="/Images/instagram.svg"/>Instagram</a></li>
                        <li><Link to="/contact">
                        <img src="/Images/mail.svg"/>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <p>© Copyright 2021 | Blockreate Technologies Private Limited</p>
        </div>
    )
}

export default Footer
