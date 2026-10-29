import React from 'react'
import { Rnd } from 'react-rnd'
import './macwindow.scss'




const MacWindow = ({ children }) => {
    return (
        <Rnd
            default={{
                width: "65vw",
                height: "70vh",
                x: 200,
                y: 100
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">

                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>rohitsharma - zsh</p>
                    </div>
                </div>
                <div className="main-content"></div>
                {children}
            </div>
        </Rnd>
    )
}

export default MacWindow
