import React from 'react'
import { useState, useEffect } from 'react'
import SuitsPic from '../images/suitsPic.jpeg'
import windowOld from '../images/windowOld.jpeg'
import AllCategories from './AllCategories'

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
                    color: 'black',
                    // fontFamily: 'Roboto',
                    fontWeight: 100
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
            <div className='container-fluid' style={{backgroundColor: "#F5F4EF"}}>
                <div className='row d-flex justify-content-around p-5'>
                    <div className='col-4 p-3'>
                        <img src={windowOld} alt='windowOld' style={{width: '70%'}}/>
                    </div>
                    <div className='col-4 mt-5'>
                        <h1 style={{fontWeight: 300, textDecoration: 'underline', color: "#212727" }}>About Us</h1>
                        <p className='mt-4' style={{fontWeight: 300, color: "#212727"}}>Since 1937, Fabriko has epitomized elegance in men's fashion. Our timeless suits, crafted with meticulous attention to detail, have adorned influential leaders and stylish icons. With a blend of tradition and innovation, Fabriko redefines the essence of sophistication. Step into our world and experience sartorial excellence.</p>
                    </div>
                </div>
            </div>
            <AllCategories />
        </div>
    )
}

export default Home