import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from '../Constants';

const Shipping = (props) => {
    const { sessionId, setOrderNumber } = props
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
    const [allCartItems, setAllCartItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const SERVER_URL = config.url;

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

    if (sessionId == "") {
        navigate('/login');
    }

    useEffect(() => {
        fetch(`${SERVER_URL}/api/getuser/${sessionId}`)
            .then(res => res.json())
            .then(user => {
                const { id, firstName, lastName, email, accountType } = user;
                setShippingAddress(prevShippingAddress => ({
                    ...prevShippingAddress,
                    user: { id, firstName, lastName, email, accountType }
                }));
            })
            .catch(err => console.log(err));

        fetch(`${SERVER_URL}/shipping/user/${sessionId}`)
            .then(res => res.json())
            .then(shipping => {
                const { user: shippingUser, ...shippingWithoutUser } = shipping;
                setShippingAddress(prevShippingAddress => ({
                    ...prevShippingAddress,
                    ...shippingWithoutUser
                }));
            })
            .catch(err => console.log(err));

        fetch(`${SERVER_URL}/cart/find/uncomplete/${sessionId}`)
            .then(res => res.json())
            .then(cartItems => {
                console.log("cartItems", cartItems)
                if (cartItems.length > 0) {
                    setAllCartItems(cartItems)
                    setLoaded(true)
                } else {
                    navigate('/shopping/cart')
                }
            })
            .catch(err => console.log(err));
    }, [sessionId]);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(shippingAddress)
        fetch(`${SERVER_URL}/shipping/add/update/${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json()
                    console.log("order Number", data)
                    setOrderNumber(data)
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
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container d-flex justify-content-center mb-5' style={{ minHeight: "800px", marginTop: '150px', marginBottom: "50px" }}>
            {loaded && (
                <div className='col-10'>
                    <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Shipping</h1>
                    {errors.length > 0 && (
                        <div className='alert alert-danger'>
                            {errors.map((error, index) => (
                                <div key={index} className='mb-2'>{error}</div>
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
            )}
        </div>
    )
}

export default Shipping