import React from 'react'
import './Plan.css'
import PlanCard from './PlanCard'

function Plan() {
    return (
        <div className="plan__page">
            <div className="plan__conatiner">
                <h1 className="plans__heading">Plans</h1>
                <div className="plan__cards">
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                </div>
            </div>
        </div>
    )
}

export default Plan
