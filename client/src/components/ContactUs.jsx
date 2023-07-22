import React from 'react'
import { useState, useEffect } from 'react'
import '../css/Privacy.css'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div className='container d-flex justify-content-center' style={{ padding: '14%' }}>
            <div className='col-10'>
                <h1 className='mb-4 display-4 text-center fw-light'>Contact Us</h1>
                <div className='card p-4'>
                    <div className='card-body'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex align-items-center mb-4 gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Address:</p>
                                <p className='text-wrap '>20892 Abner Trace, Gloverstad, TN 33484</p>
                            </div>
                            <div className='d-flex align-items-center mb-4 gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Office:</p>
                                <p className='text-wrap '>1 (818) 970 - 3118</p>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Email:</p>
                                <p className='text-wrap '>customersupport@fabriko.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs