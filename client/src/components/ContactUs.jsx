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
            <div className='col-md-6'>
                <h1 className='mb-3' style={{ fontWeight: 300 }}>Contact Us</h1>
                <form onSubmit={onSubmit}>
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='floatingInput' placeholder='Name' name='name' value={contactInfo.name} onChange={onChange} />
                        <label htmlFor='floatingInput'>Name</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='email' className='form-control' id='floatingInput' placeholder='Email' name='email' value={contactInfo.email} onChange={onChange} />
                        <label htmlFor='floatingInput'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='floatingInput' placeholder='Phone Number' name='phoneNumber' value={contactInfo.phoneNumber} onChange={onChange} />
                        <label htmlFor='floatingInput'>Phone Number</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea className='form-control' placeholder='Message' id='floatingTextarea2' style={{ height: '100px' }} name='message' value={contactInfo.message} onChange={onChange}></textarea>
                        <label htmlFor='floatingTextarea2'>Message</label>
                    </div>
                    <button type='submit' className='btn btn-outline-dark'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs