import React from 'react'
import { useState, useEffect } from 'react'
import SuitsPic from '../images/suitsPic.jpeg'
import windowOld from '../images/windowOld.jpeg'
import AllCategories from './AllCategories'
import pictureSwitch1 from '../images/pictureSwitch1.png'
import pictureSwitch2 from '../images/pictureSwitch2.png'
import pictureSwitch3 from '../images/pictureSwitch3.png'
import pictureSwitch4 from '../images/pictureSwitch4.png'
import pictureSwitch5 from '../images/pictureSwitch5.png'
import pictureSwitch6 from '../images/pictureSwitch6.png'
import pictureSwitch7 from '../images/pictureSwitch7.webp'
import pictureSwitch8 from '../images/pictureSwitch8.png'
import FitPerfect from './FitPerfect'
import AboutUs from './AboutUs'
import Featured from './Featured'

const Home = () => {
    return (
        <div className=''>
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
                    color: 'black',
                    // fontFamily: 'Roboto',
                    fontWeight: 300
                }}>Unlock Your Style</h1>
                <h4 style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    color: 'black',
                    // fontFamily: 'Roboto',
                    fontWeight: 100
                }}>Fabriko - Where Elegance Reigns.</h4>
            </div>
            <AboutUs />
            <AllCategories />
            <FitPerfect />
            <Featured />
        </div>
    )
}

export default Home