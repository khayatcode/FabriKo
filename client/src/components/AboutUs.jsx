import React from 'react'
import windowOld from '../images/windowOld.jpeg'
import '../css/AboutUs.css'

const AboutUs = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: "#F5F4EF" }}>
            <div className='row d-flex justify-content-around align-items-center p-5'>
                <div className='col-6 aboutUsImg'>
                    <img src={windowOld} alt='windowOld' />
                </div>
                <div className='col-6 aboutUsText'>
                    <h1 style={{ fontWeight: 300, textDecoration: 'underline', color: "#212727" }}>About Us</h1>
                    <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>Revolutionizing elegance since 1937. Enhance your style with our timeless suits, meticulously crafted with exquisite attention to detail. Step into a realm of unmatched refinement, where elegance becomes your signature style.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs