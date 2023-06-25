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
    <div>
        <h1>Shipping</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={shippingAddress.firstName} onChange={onChange} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={shippingAddress.lastName} onChange={onChange} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={shippingAddress.address} onChange={onChange} />
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={shippingAddress.city} onChange={onChange} />
            </div>
            <div>
                <label>State:</label>
                <input type="text" name="state" value={shippingAddress.state} onChange={onChange} />
            </div>
            <div>
                <label>Zip:</label>
                <input type="text" name="zip" value={shippingAddress.zip} onChange={onChange} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={shippingAddress.phone} onChange={onChange} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Shipping