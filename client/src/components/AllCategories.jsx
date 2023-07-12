import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear from '../images/upperWear.webp'
import BottomWear from '../images/dressPants.avif'
import DressShoes from '../images/dressShoes.jpeg'
import '../css/AllCategories.css'

const AllCategories = () => {
    return (

        <div className='container-fluid bg-info'>
            <div className='row text-start mb-3 mt-3 p-5'>
                <h2 style={{ fontWeight: 300 }}>Fabriko From Head-to-Toe</h2>
            </div>
            <div className='row d-flex justify-content-around align-items-center pb-5 bg-danger' style={{ height: 'auto' }}>
                <Link to={"category/upper"} className='text-decoration-none col-md-3 col-sm-6 bg-success d-flex flex-column align-items-center'>
                    <div className="image-container">
                        <img
                            className='img-fluid p-3 image'
                            src={UpperWear}
                            alt='UpperWear'
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: 'black' }}>Upper Wear</h5>
                </Link>
                <Link to={"category/bottom"} className='text-decoration-none col-md-3 col-sm-6 bg-success d-flex flex-column align-items-center'>
                    <div className="image-container">
                        <img
                            className='pb-3 img-fluid image'
                            src={BottomWear}
                            alt='BottomWear'
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: 'black' }}>Bottom Wear</h5>
                </Link>
                <Link to={"category/shoes"} className='text-decoration-none col-md-3 col-sm-6 bg-success d-flex flex-column align-items-center'>
                    <div className="image-container">
                        <img
                            className='img-fluid image'
                            src={DressShoes}
                            alt='DressShoes'
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                    <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: 'black' }}>Dress Shoes</h5>
                </Link>
            </div>
        </div>




    )
}

export default AllCategories