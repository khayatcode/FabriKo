import React from 'react'
import windowOld from '../images/windowOld.jpeg'

const AboutUs = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: "#F5F4EF" }}>
            <div className='row d-flex justify-content-around align-items-center p-5'>
                <div className='col-4'>
                    <img src={windowOld} alt='windowOld' style={{ width: '70%' }} />
                </div>
                <div className='col-4'>
                    <h1 style={{ fontWeight: 300, textDecoration: 'underline', color: "#212727" }}>About Us</h1>
                    <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>Since 1937, Fabriko has epitomized elegance in men's fashion. Our timeless suits, crafted with meticulous attention to detail, have adorned influential leaders and stylish icons. With a blend of tradition and innovation, Fabriko redefines the essence of sophistication. Step into our world and experience sartorial excellence.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs