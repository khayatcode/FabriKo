import React from 'react'
import FaceBook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import { Link } from 'react-router-dom';
import '../css/Footer.css'
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
        <div className='container-fluid bg-light'>
            <footer className=" ">
                <div className="p-5 d-flex justify-content-evenly align-items-start footerDiv">
                    <section className="mb-4 bg-inf">
                        <h5 className='text-dark text-decoration-underline mb-3 '>Check Us Out</h5>
                        <a className="btn btn-outline-light m-1" href="#!" role="button">
                            <img src={FaceBook} alt="Facebook"   className='imageFoot'/>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={Twitter} alt="Twitter"  className='imageFoot'/>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <img src={Instagram} alt="Instagram"  className='imageFoot'/>
                        </a>
                    </section>
                    
                    <div className=" d-inline-block bg-inf footerInfo" style={{paddingRight: '10%', paddingLeft: '10%' }}>
                        <h5 className='text-dark text-decoration-underline'>Shop</h5>
                        <div className="mt-3 d-flex flex-column gap-2">
                            <Link to={'/category/upper'} className="text-secondary mx-3"  style={{ textDecoration: 'none'}} >Upperwear</Link>
                            <Link to={'/category/bottom'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Bottomwear</Link>
                            <Link to={'/category/shoes'} className="text-secondary mx-3" style={{ textDecoration: 'none'}} >Shoes</Link>
                        </div>
                    </div>
                    
                    <div className=" d-inline-block bg-dange footerCompany footerInfo">
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