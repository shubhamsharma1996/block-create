import React from 'react'
import { Link } from 'react-router-dom'
import './GetIntouch.css'
function GetIntouch() {
    return (
        <div className="contact___section">
            <div className="contact__container">
                <div className="img__section">
                    <img src="/Images/contact-us.png" alt="contact" />
                </div>
                <div className="getIntouch__text">
                    <h2>Get in Touch</h2>
                    <p>Need Custom Plan & Discussion with Core-Team, Book a slot with us. From Cryptocurrency & Blockchain Development, Listing to Market Making we cover all. Have the Best available to mind in Blockchain-industry &mp; Resources available in One-Go.</p>
                    <Link to="/contact">
                        <span>Hire Us</span>
                        <img src="/Images/right-arrow.svg" alt="right arrow" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetIntouch
