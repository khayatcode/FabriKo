import React from 'react'
import ImagesHome1 from '../images/suitsPic.jpeg';
import ImagesHome2 from '../images/ImageHome2.jpeg';
import ImagesHome3 from '../images/ImageHome3.jpeg';
import ImagesHome4 from '../images/ImageHome4.jpeg';
import ImagesHome5 from '../images/ImageHome5.jpeg';
import AllCategories from '../components/AllCategories'
import FitPerfect from '../components/FitPerfect'
import AboutUs from '../components/AboutUs'
import Featured from '../components/Featured'
import { useEffect, useState } from 'react'
import '../css/Home.css'

const Home = () => {
    const images = [ImagesHome1, ImagesHome2, ImagesHome3, ImagesHome4, ImagesHome5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const isTextWhite = currentImageIndex > 0;

    return (
        <div className=''>
            <div className="hero-container">
                <div className="image-wrapper">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Hero Image ${index + 1}`}
                            className={`hero-image ${currentImageIndex === index ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="hero-content">
                    <div className="text-pad">
                        <h1 className={`hero-title text ${isTextWhite ? 'text-white' : ''}`}>
                            Unlock Your Style
                        </h1>
                        <h4 className={`hero-subtitle text ${isTextWhite ? 'text-white' : ''}`}>
                            Fabriko - Where Elegance Reigns.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='other-components'>
                <Featured />
                <AboutUs />
                <AllCategories />
                <FitPerfect />
            </div>
        </div>
    )
}

export default Home

