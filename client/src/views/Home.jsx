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
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [shouldReloadImage, setShouldReloadImage] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsImageLoaded(false);
            setShouldReloadImage(true);
        }, 6000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (shouldReloadImage) {
            setIsImageLoaded(false);
            setShouldReloadImage(false);
        }
    }, [shouldReloadImage]);

    useEffect(() => {
        const imageLoadTimeout = setTimeout(() => {
            setIsImageLoaded(true);
        }, 500); // Set a small delay to simulate image loading

        return () => clearTimeout(imageLoadTimeout);
    }, [currentImageIndex]);



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
                <img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="Hero Image"
                    className={`hero-image ${isImageLoaded ? 'fade-in' : ''}`}
                />
                <h1 className={`hero-title ${isTextWhite ? "text-white" : ""}`}>Unlock Your Style</h1>
                <h4 className={`hero-subtitle ${isTextWhite ? "text-white" : ""}`}>Fabriko - Where Elegance Reigns.</h4>
            </div>
            <Featured />
            <AboutUs />
            <AllCategories />
            <FitPerfect />
        </div>
    )
}

export default Home

