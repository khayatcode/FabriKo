import React from 'react'
import SuitsPic from '../images/suitsPic.jpeg'
import AllCategories from '../components/AllCategories'
import FitPerfect from '../components/FitPerfect'
import AboutUs from '../components/AboutUs'
import Featured from '../components/Featured'
import { useEffect } from 'react'
import '../css/Home.css'

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className=''>
            <div className="hero-container" style={{ backgroundImage: `url(${SuitsPic})` }}>
                <h1 className="hero-title">Unlock Your Style</h1>
                <h4 className="hero-subtitle">Fabriko - Where Elegance Reigns.</h4>
            </div>
            <Featured />
            <AboutUs />
            <AllCategories />
            <FitPerfect />
        </div>
    )
}

export default Home

