import React from 'react'
import { useState } from 'react'

const ContactUs = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(contactInfo)
        fetch('http://localhost:8080/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
            .then(res => {
                console.log(res)
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    setContactInfo({
                        name: '',
                        email: '',
                        phoneNumber: '',
                        message: ''
                    })
                    setErrors({})
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='container d-flex justify-content-center' style={{ padding: '14%' }}>
            <div className='col-md-10'>
                <h1 className='mb-4' style={{ fontWeight: 300 }}>Contact Us</h1>
                <div className='card p-4'>
                    <div className='card-body'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex align-items-center mb-4 gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Address:</p>
                                <p className=''>20892 Abner Trace, Gloverstad, TN 33484</p>
                            </div>
                            <div className='d-flex align-items-center mb-4 gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Office:</p>
                                <p className=''>1 (818) 970 - 3118</p>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <p className='font-weight-bold text-decoration-underline'>Email:</p>
                                <p className=''>customersupport@fabriko.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs