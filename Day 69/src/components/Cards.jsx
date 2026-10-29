import React from 'react'
import './Cards.css';

const Cards = () => {
    return (
        <div className='cards'>
            <div className="card1 card">
                <i className="home ri-home-8-fill"></i>

                <p className="para light-para">Professional hard courts</p>
                <p className="para dark-para">with tournament-grade</p>
                <p className="para dark-para">lifting & climate control-</p>
                <p className="para light-para"><span className='dark-para para'>play in</span>perfect conditions,</p>
                <p className="para light-para">in any season.</p>

                <i className="toggle ri-toggle-fill"></i>
            </div>

            <div className="card2 card">
                <p>Private & Group Lessons</p>
            </div>

            <div className="card3 card">
                <div className="text-3">
                    <h1>100+</h1>
                    <p className='para-1'>Pro Coaches</p>
                    <p className='para-2'>Certified professionals ready to boost your game from first serve to tournament level</p>
                </div>
                <div className="graph">
                    <div className="beginner">
                        <div>Beginner</div> <div>🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵</div> <div>55</div>
                    </div>
                    <div className="intermediate">
                        <div>Intermediate</div> <div>🔵🔵🔵🔵🔵🔵🔵🔵</div> <div>55</div>
                    </div>
                    <div className="advanced">
                        <div>Advanced</div> <div>🔵🔵🔵🔵🔵🔵🔵</div> <div>55</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards
