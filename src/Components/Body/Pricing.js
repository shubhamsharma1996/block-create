import React from 'react'
import './Pricing.css'

function Pricing() {
    return (
        <div className="pricing__section">
            <div className="pricing__container">
                <div className="pricing__detail">
                    <h2>Pricings</h2>
                    <p>Compare different available options from Development to Listing and Market Making. Select Basic Plan to Jumpstart a Project or Choose Enterprise to Develop from Scratch and Have your Own Indentity in Cryptocurrency Community.</p>
                    <a href="">
                        <span>Hire Us</span>
                        <img src="/Images/right-arrow.svg" alt="right arrow" />
                    </a>
                </div>
                <div className="pricing__cards">
                    <div className="pricing__card">
                        <h3>Beginers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <button className="quote__price">GET A QUOTE</button>
                        <button className="custom__plan">CUSTOMIZE THIS PLAN</button>
                    </div>
                    <div className="pricing__card">
                        <h3>Beginers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <button className="quote__price">GET A QUOTE</button>
                        <button className="custom__plan">CUSTOMIZE THIS PLAN</button>
                    </div>
                    <div className="more__pricing">
                        <h3>Find a Plan which suits you
                            <img src="/Images/blackarrow.svg" alt="black arrow" loading="lazy" />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
