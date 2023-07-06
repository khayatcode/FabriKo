import React from 'react'
import { useState, useEffect } from 'react'
import ViewProduct1 from '../images/ViewProduct1.webp'
import ViewProduct3 from '../images/ViewProduct3.webp'
import ViewProduct4 from '../images/ViewProduct4.webp'
import { useParams } from "react-router-dom";

const ViewProduct = (props) => {
    const { sessionId} = props
    const { productId } = useParams()
    const [product, setProduct] = useState({
        productId: productId,
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
        productImage1: ""
    })
    const [cart, setCart] = useState({
            user_id: sessionId,
            product_id: productId,
            quantity: "",
            size: '',
            total: "",
            complete: false
        })
    const [errors, setErrors] = useState({})
    const [currentImage, setCurrentImage] = useState(0);

    const onChange = (e) => {
    const { name, value } = e.target;
    let total = 0;
    if (name === 'quantity') {
        total = value * product.productPrice;
    } else {
        total = cart.quantity * product.productPrice;
    }
    setCart({
        ...cart,
        [name]: value,
        total: total
    });
}

    const images = [product.productImage1, ViewProduct1, ViewProduct3, ViewProduct4];

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

    useEffect(() => {
        fetch(`http://localhost:8080/product/${productId}`)
            .then(response => response.json())
            .then(product => {
                console.log(product)
                setProduct(product);
            });
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cart)
        fetch(`http://localhost:8080/cart/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => {
                console.log(res)
                    setCart({
                        user_id: sessionId,
                        product_id: productId,
                        quantity: "",
                        size: '',
                        total: "",
                        complete: false
                    })
                    setErrors({})
                }
            )
            .catch(err => console.log(err))
    }

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
                    <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>{product.productName}</h1>
                    <div className='mb-4'>
                            <p className='text-center' style={{ fontWeight: 300 }}>Description: {product.productDescription}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-center' style={{ fontWeight: 300 }}>Price: ${product.productPrice}</p>
                    </div>
                    <form className='view-product-form' onSubmit={handleSubmit}>
                        <div className='form-floating mb-4'>
                            <select className='form-select' id='floatingSelect' name='size' onChange={onChange} value={cart.size}> 
                                <option disabled value=''>Select Size</option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                            </select>
                            <label htmlFor='size' className='form-label'>Size</label>
                        </div>
                        <div className='form-floating mb-4'>
                            <input type='number' className='form-control' placeholder='Quantity' id='floatingInput' min='1' name='quantity' onChange={onChange} value={cart.quantity}/>
                            <label htmlFor='quantity' className='floatingInput'>Quantity</label>
                        </div>
                        <button type='submit' className='btn btn-outline-dark'>Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ViewProduct