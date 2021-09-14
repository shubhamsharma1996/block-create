import React from 'react'
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.</p>
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
                </div>
            </div>
            <div className="project__empty"></div>
            <Pricing />
        </div>
    )
}

export default MainBody
