import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Shipping = (props) => {
    const { sessionId } = props
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phoneNumber: '',
        user: {}
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const onChange = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

useEffect(() => {
    Promise.all([
        fetch(`http://localhost:8080/api/getuser/${sessionId}`).then(res => res.json()),
        fetch(`http://localhost:8080/shipping/user/${sessionId}`).then(res => res.json())
    ])
    .then(([user, shipping]) => {
        const { id, firstName, lastName, email, accountType } = user;
        const { user: shippingUser, ...shippingWithoutUser } = shipping;
        setShippingAddress({
            ...shippingWithoutUser,
            user: { id, firstName, lastName, email, accountType }
        });
    })
    .catch(err => console.log(err));
}, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(shippingAddress)
        fetch(`http://localhost:8080/shipping/add/update/${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json()
                    console.log(data)
                    setShippingAddress({
                        name: '',
                        address: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: '',
                        phoneNumber: '',
                        user: {}
                    })
                    setErrors([])
                    navigate('/order/success')
                } else {
                    const data = await res.json()
                    setErrors(data)
                }
            })
            .catch(err => console.log(err))
    }


  return (
    <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
        <div className='col-md-6'>
            <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Shipping</h1>
            {errors.length > 0 && (
                    <div className='alert alert-danger'>
                        {errors.map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </div>
                )}
            <form onSubmit={handleSubmit}>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control' placeholder='Name' name="name" value={shippingAddress.name} onChange={onChange} />
                    <label htmlFor='name'> Name:</label>
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
                    <input type="text" className='form-control' placeholder='Country' name="country" value={shippingAddress.country} onChange={onChange} />
                    <label htmlFor='country'>Country:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="number" className='form-control' placeholder='Phone' name="phoneNumber" value={shippingAddress.phoneNumber} onChange={onChange} />
                    <label htmlFor='phoneNumber'>Phone:</label>
                </div>
                <p>Order Created Upon Form Submission</p>
                <input type="submit" value="Create Order" className='btn btn-outline-dark' />
            </form>
        </div>
    </div>
  )
}

export default Shipping