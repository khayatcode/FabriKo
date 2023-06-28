import React from 'react'
import { useState } from 'react'
import windowOld from '../images/windowOld.jpeg'

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
    <div className='d-flex' >
        <div className='fixed-top bg-white' style={{ zIndex: 1, paddingTop: '5%' }}>
            <h1 style={{ fontWeight: 300 }}>Contact Us</h1>
        </div>
        <div className='mx-auto mt-auto'>
            <div className='d-flex justify-content-center align-self-center ' style={{ padding: '14%' , marginTop:"15%",backgroundColor: "#F5F4EF" }}>
                <div className='col-4'>
                    <img src={windowOld} alt='windowOld' style={{ width: '70%' }} />
                </div>
                <div className='col-md-6 align-self-center '>
                    <p style={{ fontWeight: 300, color: "#212727" }}>20892 Abner Trace</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}>Gloverstad, TN 33484</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}> Office : 1 (818) 970 - 3118</p>
                    <p style={{ fontWeight: 300, color: "#212727" }}> Email : customersupport@fabriko.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;