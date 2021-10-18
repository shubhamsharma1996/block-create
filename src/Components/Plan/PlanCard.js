import React from 'react'
import './Plan.css'

function PlanCard() {
    return (
        <div className="pricing__card">
            <h3>Beginers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button className="quote__price">GET A QUOTE</button>
            <button className="custom__plan">CUSTOMIZE THIS PLAN</button>
        </div>
    )
}

export default PlanCard
