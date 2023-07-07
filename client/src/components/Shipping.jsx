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
        phone: '',
        user: {}
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const onChange = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        fetch(`http://localhost:8080/shipping/user/${sessionId}`)
            .then(res => res.json())
            .then(res => {
                console.log("shipping res", res)
                if (res.status == 404) {
                    console.log("shipping res is null")
                } else {
                    // const { user, ...shippingWithoutUser } = res
                    console.log(res)
                    setShippingAddress(res)
                }
            })
            .catch(err => console.log(err))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(shippingAddress)
        fetch(`http://localhost:8080/shipping/add/${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })
            .then(res => {
                console.log(res)
                    setShippingAddress({
                        name: '',
                        address: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: '',
                        phone: '',
                        user: {}
                    })
                    navigate('/order/success')
                }
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/getuser/${sessionId}`)
            .then(res => res.json())
            .then(res => {
                setShippingAddress({
                    ...shippingAddress,
                    user: res
                })
            })
            .catch(err => console.log(err))
    }, [])


  return (
    <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
        <div className='col-md-6'>
            <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Shipping</h1>
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
                    <input type="number" className='form-control' placeholder='Phone' name="phone" value={shippingAddress.phone} onChange={onChange} />
                    <label htmlFor='phone'>Phone:</label>
                </div>
                <input type="submit" value="Submit" className='btn btn-outline-dark' />
            </form>
        </div>
    </div>
  )
}

export default Shipping