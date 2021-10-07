import React from 'react'
import SliderType from '../Slider/Sliders'
import GetIntouch from './GetIntouch'
import './MainBody.css'
import Pricing from './Pricing'

function MainBody() {
    return (
        <div className="main__body">
            <div className="about__section">
                <img src="/Images/about.png" alt="about" loading="lazy" />
                <div className="about__textsection">
                    <h2>About Us</h2>
                    <p>Team of Crypto & Blockchain Developers, Marketers, & Market Makers with Experience of 4 Years. From Developing fresh blockchain to Market Making and Listing Services Experts in India. 
                        Best-in-Industry Market Making Strategies and Listing on WazirX, BuyUcoin, ZebPay, Coindcx, CoinSwitch and More. Create ERC20, TRC, BSC & Eneterprise Solutions for Development of Blockchain & Cryptocurrency. 
                    </p>
                    <a href="">
                        <span>Know More</span>
                        <img src="/Images/right-arrow.svg" alt="right arrow" />
                    </a>
                </div>
            </div>
            <div className="project__section">
                <div className="project__container">
                    <div className="project__heading">
                        <h2>Some of Our Projects</h2>
                        <hr />
                    </div>
                    <div className="project__images">
                        <img src="/Images/first.svg" alt="first" loading="lazy" />
                        <img src="/Images/second.svg" alt="second" loading="lazy" />
                        <img src="/Images/third.svg" alt="third" loading="lazy" />
                        <img src="/Images/fourth.svg" alt="fourth" loading="lazy" />
                        <img src="/Images/fifth.svg" alt="fifth" loading="lazy" />
                        <img src="/Images/sixth.svg" alt="sixth" loading="lazy" />
                    </div>
                    <SliderType/>
                </div>
            </div>
            <div className="project__empty"></div>
            <Pricing />
        </div>
    )
}

export default MainBody
