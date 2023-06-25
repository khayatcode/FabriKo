import React from 'react'
import { useState, useEffect } from 'react'
import SuitsPic from '../images/suitsPic.jpeg'

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${SuitsPic})`,
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
                position: 'relative'
            }}>
                <h1 style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    color: 'black'
                }}>Unlock Your Style</h1>
                <h4 style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    color: 'black'
                }}>Fabriko - Where Elegance Reigns.</h4>
            </div>
        </div>
    )
}

export default Home