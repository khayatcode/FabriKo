import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Shoes1 from '../images/shoes1.webp'
import Shoes2 from '../images/shoes2.webp'
import Shoes3 from '../images/shoes3.webp'
import Shoes4 from '../images/shoes4.webp'
import Shoes5 from '../images/shoes5.webp'
import Shoes6 from '../images/shoes6.webp'

const ShoesCategory = () => {
    return (
        <div style={{ padding: '13%' }}>
            <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '8%' }}>
                <h1 className='mb-4' style={{ fontWeight: 300 }}>Shoes Category</h1>
            </div>
            <div >
                <div className="row p-3">
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/11">
                            <img src={Shoes1} alt="Shoes1" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Wholecut Oxford shoes - brown italian calf leather</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$207USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/12">
                            <img src={Shoes2} alt="Shoes2" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Brogues - black & grey leather & tweed</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$219USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/13">
                            <img src={Shoes3} alt="Shoes3" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Wingtip Oxford dress shoes - black & blue leather & suede</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$199USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/13">
                            <img src={Shoes4} alt="Shoes4" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Derby shoes - burgundy flora leather</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$229USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/13">
                            <img src={Shoes5} alt="Shoes5" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Monk Shoes - black italian calf leather</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$195USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/13">
                            <img src={Shoes6} alt="Shoes6" style={{width: '100%', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Brogues - brown leather & tweed</p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$249USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoesCategory