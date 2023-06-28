import React from 'react'
import SuitsPic from '../images/suitsPic.jpeg'
import AllCategories from '../components/AllCategories'
import FitPerfect from '../components/FitPerfect'
import AboutUs from '../components/AboutUs'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

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
            <Featured />
            <AboutUs />
            <AllCategories />
            <FitPerfect />
        </div>
    )
}

export default Home