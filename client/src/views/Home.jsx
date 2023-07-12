import React from 'react'
import SuitsPic from '../images/suitsPic.jpeg'
import AllCategories from '../components/AllCategories'
import FitPerfect from '../components/FitPerfect'
import AboutUs from '../components/AboutUs'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className=''>
            <div style={{
                backgroundImage: `url(${SuitsPic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                position: 'relative'
            }}>
                <h1 style={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '5%',
                    color: 'black',
                    // fontFamily: 'Roboto',
                    fontWeight: 300
                }}>Unlock Your Style</h1>
                <h4 style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '5%',
                    color: 'black',
                    // fontFamily: 'Roboto',
                    fontWeight: 100
                }}>Fabriko - Where Elegance Reigns.</h4>
            </div>
            <Featured />
            <AboutUs />
            <AllCategories />
            <FitPerfect />
        </div>
    )
}

export default Home