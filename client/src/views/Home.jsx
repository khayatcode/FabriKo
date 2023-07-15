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
    // const [currentImage, setCurrentImage] = useState(ImagesHome1);
    // const [imageIndex, setImageIndex] = useState(0);
    // const images = [ImagesHome1, ImagesHome2, ImagesHome3, ImagesHome4, ImagesHome5];

    // const heroImage = document.querySelector('.hero-image');

    // heroImage.addEventListener('load', () => {
    //     heroImage.classList.add('loaded');
    // });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setImageIndex((imageIndex + 1) % images.length);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [imageIndex, images.length]);

    // useEffect(() => {
    //     setCurrentImage(images[imageIndex]);
    // }, [imageIndex, images]);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    // const isTextWhite = currentImage === ImagesHome3 || currentImage === ImagesHome4 || currentImage === ImagesHome5 || currentImage === ImagesHome2;
    return (
        <div className=''>
            <div className="hero-container">
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

