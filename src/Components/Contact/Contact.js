import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
const Contact = () => {
    return (
        <>
        <Header/>
        <div className="contact__page">
            <h1>Contact Us</h1>
            <p>Need help? You can always conatct us</p>
            <div className="parent-info">
            <input type="text" placeholder="Full Name" class="popping-border"/>
            <input type="email" placeholder="Email" class="popping-border"/>
            <input type="text" placeholder="Contat No." class="popping-border"/>
            <input type="text" placeholder="Company" class="popping-border"/>
            <input type="textarea" placeholder="Message" class="popping-border-area"/>
            <div className="submit_btn">Submit</div>
            </div>
        </div>
    </>
    )
}

export default Contact
