import React from 'react'
import FaceBook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    const scrollToTop = () => {
        if (window.location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }



    return (
        <div className='container-fluid'>
            <footer className="bg-light text-center text-white">
                <div className="p-5 d-flex justify-content-evenly align-items-center">
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
                            <Link to={'/category/upper'} className="text-secondary mx-3"  style={{ textDecoration: 'none'}} >Upperwear</Link>
                            <Link to={'/category/bottom'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Bottomwear</Link>
                            <Link to={'/category/shoes'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Shoes</Link>
                        </div>
                    </div>
                    <div className="mt-3 d-inline-block">
                        <h5 className='text-dark  text-decoration-underline'>Company</h5>
                        <div className="mt-3 d-flex flex-column gap-2">
                            <Link to={'/'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Home</Link>
                            <Link to={'/contact'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "#F5F4EF" }}>
                    <p className="text-dark" >@2023 Fabriko: <Link className="text-dark" to={'/'} onClick={scrollToTop}>fabriko.com</Link> </p>
                    <div className="mt-3">
                        <Link to={'/terms'} className="text-dark mx-3">Terms and Conditions</Link>
                        <Link to={'/privacy'} className="text-dark mx-3">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer