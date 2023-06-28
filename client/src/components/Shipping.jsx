import React from 'react'
import { useState, useEffect } from 'react'

const Shipping = () => {
    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    })

    const onChange = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(shippingAddress)
        fetch("http://localhost:8080/api/shipping", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })
            .then(res => {
                console.log(res)
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    setShippingAddress({
                        firstName: '',
                        lastName: '',
                        address: '',
                        city: '',
                        state: '',
                        zip: '',
                        phone: ''
                    })
                }
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
        <div className='col-md-6'>
            <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Shipping</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='First Name' name="firstName" value={shippingAddress.firstName} onChange={onChange} />
                    <label htmlFor='firstName'>First Name:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='Last Name' name="lastName" value={shippingAddress.lastName} onChange={onChange} />
                    <label htmlFor='lasstName'>Last Name:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='Address' name="address" value={shippingAddress.address} onChange={onChange} />
                    <label htmlFor='address'>Address:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='City' name="city" value={shippingAddress.city} onChange={onChange} />
                    <label htmlFor='city'>City:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='state' name="state" value={shippingAddress.state} onChange={onChange} />
                    <label htmlFor='state'>State:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='Zip' name="zip" value={shippingAddress.zip} onChange={onChange} />
                    <label htmlFor='zip'>Zip:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='Phone' name="phone" value={shippingAddress.phone} onChange={onChange} />
                    <label htmlFor='phone'>Phone:</label>
                </div>
                <input type="submit" value="Submit" className='btn btn-outline-dark' />
            </form>
        </div>
    </div>
  )
}

export default Shipping