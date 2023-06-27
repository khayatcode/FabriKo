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
                    <p className='mt-4' style={{ fontWeight: 300, color: "#212727" }}>Revolutionizing elegance since 1937. Enhance your style with our timeless suits, meticulously crafted with exquisite attention to detail. Step into a realm of unmatched refinement, where elegance becomes your signature style.</p>
                    <h1 style={{ fontWeight: 300, textDecoration: 'underline', color: "#212727" }}>Contact Us</h1>
                    <p style={{ fontWeight: 300, color: "#212727" }}>20892 Abner Trace</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}>Gloverstad, TN 33484</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}> Office : 1 (818) 970 - 3118</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}> Email : customersupport@fabriko.com</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;