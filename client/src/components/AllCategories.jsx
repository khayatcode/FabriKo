import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear from '../images/upperWear.webp'
import BottomWear from '../images/dressPants.avif'
import DressShoes from '../images/dressShoes.jpeg'
import '../css/AllCategories.css'

const AllCategories = () => {
    return (

        <div className='container-fluid bg-infoCSS pb-3'>
            <div className='row text-start mb-3 mt-3 p-5'>
                <h2 style={{ fontWeight: 300 }}>Fabriko From Head-to-Toe</h2>
            </div>
            <hr />
            <div className='row d-flex justify-content-evenly align-items-center bg-dangerCSS '>
                <Link to={"category/upper"} className='col-md-3 col-sm-6 bg-successCSS'>
                    <div className="image-container bg-warningCSS">
                        <img
                            className='img-fluid p-3'
                            src={UpperWear}
                            alt='UpperWear'
                            style={{backgroundColor: '#E8E8E8' }}
                        />
                    </div>
                        <h5 className='mt-3' style={{ fontWeight: 300, color: 'black' }}>Upper Wear</h5>
                </Link>
                <hr />
                <br />
                <Link to={"category/bottom"} className='col-md-3 col-sm-6 bg-successCSS'>
                    <div className="image-container bg-warningCSS ">
                        <img
                            className='img-fluid'
                            src={BottomWear}
                            alt='BottomWear'
                            style={{backgroundColor: '#E8E8E8',  objectPosition: 'top'}}
                        />
                    </div>
                    <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: 'black' }}>Bottom Wear</h5>
                </Link>
                <hr />
                <br />
                <Link to={"category/shoes"} className='col-md-3 col-sm-6 bg-successCSS'>
                    <div className="image-container bg-warningCSS">
                        <img
                            className='img-fluid'
                            src={DressShoes}
                            alt='DressShoes'
                        />
                    </div>
                    <h5 className='mt-3' style={{ textAlign: 'center', fontWeight: 300, color: 'black' }}>Dress Shoes</h5>
                </Link>
                <br />
            </div>
        </div>

    )
}

export default AllCategories