import React from 'react'
import { useState, useEffect } from 'react'
import UpperWear from '../images/upperWear.webp'
import BottomWear from '../images/dressPants.avif'
import DressShoes from '../images/dressShoes.jpeg'

const AllCategories = () => {
    return (
        <div>
            <div className='row text-start mb-3 mt-3 p-5'>
                <h2 style={{fontWeight: 300}}>Fabriko From Head-to-Toe</h2>
            </div>
            <div className='row d-flex justify-content-evenly'>
                <div className='col-3'>
                    <a href='#'>
                        <img className='p-3' src={UpperWear} alt='UpperWear' style={{ width: '50%', backgroundColor: '#E8E8E8' }} />
                        <p className='mt-3' style={{ textAlign: 'center', fontWeight: 300 }}>Upper Wear</p>
                    </a>
                </div>
                <div className='col-3'>
                    <a href='#'>
                        <img className='pb-3' src={BottomWear} alt='BottomWear' style={{ width: '88%', backgroundColor: '#E8E8E8' }} />
                        <p className='mt-3' style={{ textAlign: 'center', fontWeight: 300 }}>Bottom Wear</p>
                    </a>
                </div>
                <div className='col-3'>
                    <a href='#'>
                        <img src={DressShoes} alt='DressShoes' style={{ width: '81%' }} />
                        <p className='mt-3' style={{ textAlign: 'center', fontWeight: 300 }}>Dress Shoes</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AllCategories