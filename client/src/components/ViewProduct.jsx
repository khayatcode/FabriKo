import React from 'react'
import { useState, useEffect } from 'react'
import ViewProduct1 from '../images/ViewProduct1.webp'
import ViewProduct3 from '../images/ViewProduct3.webp'
import ViewProduct4 from '../images/ViewProduct4.webp'

const ViewProduct = (props) => {

    const [currentImage, setCurrentImage] = useState(0);
    const images = [ViewProduct1, ViewProduct3, ViewProduct4];

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((currentImage + images.length - 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    // const { productId } = props
    // const [product, setProduct] = useState({})
    // const [cart, setCart] = useState({
    //     productId: 0,
    //     quantity: 0,
    //     size: '',
    //     total: 0
    // })
    // const [errors, setErrors] = useState({})2
    // const [totalPrice, setTotalPrice] = useState(0);

    // const onChange = (e) => {
    //     setCart({
    //         ...cart,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setCart({
    //       ...cart,
    //       [name]: value
    //     });
    //     if (name === 'quantity') {
    //       setTotalPrice(product.price * value);
    //     }
    //   };

    // useEffect(() => {
    //     fetch(`http://localhost:3000/products/${productId}`)
    //       .then(response => response.json())
    //       .then(product => {
    //         setProduct(product);
    //         setTotalPrice(product.price);
    //       });
    //   }, [productId])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(cart)
    //     fetch("http://localhost:8080/api/cart", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(cart)
    //     })
    //         .then(res => {
    //             console.log(res)
    //             if (res.data && res.data.errors) {
    //                 setErrors(res.data.errors)
    //             } else {
    //                 setCart({
    //                     productId: 0,
    //                     quantity: 0,
    //                     size: ''
    //                 })
    //                 setErrors({})
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        // create a page to view a product and select wich picture to view. Create a form to choose size and quantity and add to cart
        <div className='container' style={{ padding: '8%', paddingTop: '10%'  }}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='d-flex flex-column justify-content-center align-items-center view-product-image-container' style={{ position: "relative" }}>
                        <img
                            className='view-product-image'
                            src={images[currentImage]}
                            alt='product'
                            style={{ width: '40%' }}
                        />
                        <div className='d-flex gap-3 justify-content-center mt-3'>
                            <button className='btn btn-outline-dark' onClick={prevImage}>Prev</button>
                            <button className='btn btn-outline-dark' onClick={nextImage}>Next</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6' style={{ borderLeft: '1px solid #ccc', paddingLeft: '10%' }}>
                    <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Product Example</h1>
                    <form className='view-product-form'>
                        <div className='mb-4'>
                            <label htmlFor='size' className='form-label'>Size</label>
                            <select className='form-select' id='size'>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M' selected>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <input type='number' className='form-control' id='quantity' min='1' max='10' />
                        </div>
                        <button type='submit' className='btn btn-outline-dark'>Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ViewProduct