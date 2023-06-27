import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear1 from '../images/upperWear1.webp'
import UpperWear2 from '../images/upperWear2.webp'
import UpperWear3 from '../images/upperWear3.webp'
import UpperWear4 from '../images/upperWear4.webp'
import UpperWear5 from '../images/upperWear5.webp'
import UpperWear6 from '../images/upperWear6.webp'
import UpperWear7 from '../images/upperWear7.webp'

const UpperCategory = (props) => {
    // const { categoryId, sessionId } =  props
    // const [productsInCategory, setProductsInCategory] = useState([])
    // const [category, setCategory] = useState({})

    // useEffect(() => {
    //     fetch('http://localhost:8080/api/category/' + categoryId)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res)
    //             setCategory(res)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    // useEffect(() => {
    //     fetch('http://localhost:8080/api/showProducts/category/' + categoryId)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res)
    //             setProductsInCategory(res)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    return (
        <div style={{ padding: '13%' }}>
            <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '8%' }}>
                <h1 className='mb-4' style={{ fontWeight: 300 }}>Upperwear Category</h1>
            </div>
            <div >
                <div className="row p-3">
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/1">
                            <img src={UpperWear1} alt="UpperWear1" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Blue six buttons double-breasted Suit </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$354USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/2">
                            <img src={UpperWear2} alt="UpperWear2" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>Royal Blue double breasted Suit </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$484USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/3">
                            <img src={UpperWear3} alt="UpperWear3" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}> Blue Seersucker Suit </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$359USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/4">
                            <img src={UpperWear4} alt="UpperWear4" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}>All White Linen unlined Suit  </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$423USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/5">
                            <img src={UpperWear5} alt="UpperWear5" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}> Grey Mao Suit  </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$344USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/6">
                            <img src={UpperWear6} alt="UpperWear6" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-column flex-wrap pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}> Brown Tweed Wedding Suit   </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$5694USD</p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center gap-2">
                        <Link to="/product/7">
                            <img src={UpperWear7} alt="UpperWear7" style={{ height: '300px', backgroundColor: '#E8E8E8', transition: 'transform 0.2s', paddingRight: '30px', paddingLeft: '30px' }} onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }} />
                        </Link>
                        <div className='d-flex flex-wrap flex-column pb-2' style={{ width: '52%' }}>
                            <p className='text-start text-muted' style={{ fontSize: '15px' }}> Beige Linen Suit  </p>
                            <p className='text-start fw-bold' style={{ fontSize: '12px' }}>$392USD</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpperCategory