import React from 'react'
import FaceBook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'

const Footer = () => {
    const handleLinkClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <footer className="bg-light text-center text-white">
                <div className="container p-5 d-flex justify-content-evenly align-items-center">
                    <section className="mb-4">
                        <h5 className='text-dark text-decoration-underline mb-3'>Check Us Out</h5>
                        <a className="btn btn-outline-light m-1" href="#!" role="button">
                            <img src={FaceBook} alt="Facebook" style={{ height: '37.5px' }} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={Twitter} alt="Twitter" style={{ height: '37.5px' }} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={Instagram} alt="Instagram" style={{ height: '37.5px' }} />
                        </a>
                    </section>
                    <div className="mt-3 d-inline-block" style={{ borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc', paddingRight: '150px', paddingLeft: '150px' }}>
                        <h5 className='text-dark text-decoration-underline'>Shop</h5>
                        <div className="mt-3 d-flex flex-column gap-2">
                            <a href="#" className="text-secondary mx-3"  style={{ textDecoration: 'none'}} onClick={handleLinkClick}>Upperwear</a>
                            <a href="#" className="text-secondary mx-3" style={{ textDecoration: 'none'}} onClick={handleLinkClick}>Bottomwear</a>
                            <a href="#" className="text-secondary mx-3" style={{ textDecoration: 'none'}} onClick={handleLinkClick}>Shoes</a>
                        </div>
                    </div>
                    <div className="mt-3 d-inline-block">
                        <h5 className='text-dark  text-decoration-underline'>Company</h5>
                        <div className="mt-3 d-flex flex-column gap-2">
                            <a href="#" className="text-secondary mx-3" style={{ textDecoration: 'none'}} onClick={handleLinkClick}>Categories</a>
                            <a href="#" className="text-secondary mx-3" style={{ textDecoration: 'none'}} onClick={handleLinkClick}>About Us</a>
                            <a href="#" className="text-secondary mx-3" style={{ textDecoration: 'none'}} onClick={handleLinkClick}>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "#F5F4EF" }}>
                    <p className="text-dark" >@2023 Fabriko: <a className="text-dark" href="#" onClick={handleLinkClick}>fabriko.com</a> </p>
                    <div className="mt-3">
                        <a href="#" className="text-dark mx-3">Terms and Conditions</a>
                        <a href="#" className="text-dark mx-3">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer