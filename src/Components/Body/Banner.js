import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="Banner">
                <div className="banner__container">
                    <h1>BLOCKCHAIN</h1>
                    <img src="/Images/block.png" className="block__img" loading="lazy" alt="block" />
                    <div className="banner__second">
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore .
                        </h2>
                        <a className="banner__cta">
                            <p>Get Started</p>
                            <img src="/Images/right-arrow.svg" alt="right arrow" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="banner___empty"></div>
        </>
    )
}

export default Banner
