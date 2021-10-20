import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="Banner">
                <div className="banner__container">
                    <h1>BLOCKREATE</h1>
                    <img src="/Images/block.png" className="block__img" loading="lazy" alt="block" />
                    <div className="banner__second">
                        <h2>
                            Meet Industry-Specialist in Blockchain &amp; Cryptocurrency development
                            to curate, innovate and strategies ICO development and Launch.
                        </h2>
                        <a className="banner__cta" href="#price">
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
