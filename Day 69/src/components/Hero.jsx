import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="text">
                    <h1>Unleash Your Inner Champion Today.</h1>
                    <h1> All in One Place</h1>
                    <h3>Join the ultimate tennis experience - where passion meets performance.</h3>
                    <h3>and every swings bring you closer to victory.</h3>
                    <button>Start your own journey</button>
                </div>
            </div>
            <div className="about-horizon">
                <button>About Horizon</button>
                
                <div className="para">
                <p>At Horizon we don't just play tennis - we live it. Since 2021,</p>
                <p>our club has been a home for players of all levels, from eager</p>
                <p>beginners to seasoned pros.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
