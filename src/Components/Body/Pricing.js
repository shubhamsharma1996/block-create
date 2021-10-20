import React from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'


function Pricing() {
    return (
        <div className="pricing__section" id="price">
            <div className="pricing__detail">
                    <h2>Pricings</h2>
                    <p>Compare different available options from Development to Listing and Market Making. Select Basic Plan to Jumpstart a Project or Choose Enterprise to Develop from Scratch and Have your Own Indentity in Cryptocurrency Community.</p>
                </div>
            <div className="pricing__container">
                <div className="pricing__cards">
                    
                    <div className="pricing__card">
                        <h3>Basic</h3>
                        <p>Jumpstart Your Dream to Create a Cryptocurrency and Enjoy the enterance to FinTech Industry with No-Hassle. From Cryptocurrency Developement to Market Making and Promtoion on Makor Channels.</p>
                        <Link to="/contact" className="quote__price"><button >GET A QUOTE</button></Link>
                        {/* <button className="custom__plan">CUSTOMIZE THIS PLAN</button> */}
                    </div>
                    <div className="pricing__card">
                        <h3>Advance</h3>
                        <p>Enter the FinTech Market with a Boom!<br></br>Develop your own blockchain from scratch and Get Listed on Top Cryptocurrency Exchange with help of our Experts.</p>
                                                <Link to="/contact" className="quote__price"><button >GET A QUOTE</button></Link>

                        {/* <button className="custom__plan">CUSTOMIZE THIS PLAN</button> */}
                    </div>
                    <div className="pricing__card">
                        <h3>Premium</h3>
                        <p>Become a Pioneer with Custom Designed Blockchain.
Build your Cryptocurrency community, Jump Start with Influencers, Market Making and ICO.</p>
                                                <Link to="/contact" className="quote__price"><button >GET A QUOTE</button></Link>

                        {/* <button className="custom__plan">CUSTOMIZE THIS PLAN</button> */}
                    </div>
                  
                    {/* <div className="more__pricing">
                        <h3>Find a Plan which suits you
                            <img src="/Images/blackarrow.svg" alt="black arrow" loading="lazy" />
                        </h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Pricing
