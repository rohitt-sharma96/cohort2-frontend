import React from 'react'
import './Stats.css';

const Stats = () => {
    return (
        <div>
            <div className="stats">
                <div className="heading">
                    <h3>A few more facts about us in numbers</h3>
                </div>
                   <div className="digit">
                        <div className="h1-1">
                            <h1>12,000+</h1>
                            <p>Hours of play annually</p>
                        </div>
                        <div className="h1-2">
                            <h1>89%</h1>
                            <p>Player Retention Rate</p>
                        </div>
                         <div className="h1-3">
                            <h1>1,200+</h1>
                            <p>Active Members</p>
                        </div>
                           <div className="h1-4">
                            <h1>125+</h1>
                            <p>Annual Tournaments</p>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default Stats
