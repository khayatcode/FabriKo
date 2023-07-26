import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import "../css/ViewProduct.css"

const ViewProduct = (props) => {
    const { sessionId, userInfo } = props
    const { productId } = useParams()
    const [productInfo, setProductInfo] = useState({})
    const [loaded, setLoaded] = useState(false)

    const [cart, setCart] = useState({
        user: {},
        product: {},
        quantity: "",
        size: '',
        total: 0,
        orderNumber: 0,
        complete: false
    })
    const [errors, setErrors] = useState([])
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    useEffect(() => {
        if (sessionId) {
            Promise.all([
                fetch(`http://localhost:8080/api/getuser/${sessionId}`).then(res => res.json()),
                fetch(`http://localhost:8080/product/${productId}`).then(res => res.json())
            ])
                .then(([user, product]) => {
                    const { id, firstName, lastName, email, accountType } = user;
                    const { id: productId, productName, productDescription, productPrice, productImage1 } = product;
                    setCart({
                        ...cart,
                        user: { id, firstName, lastName, email, accountType },
                        product: { id: productId, productName, productDescription, productPrice, productImage1 }
                    });
                    setProductInfo(product);
                    setLoaded(true);
                })
                .catch(err => console.log(err));
        } else {
            fetch(`http://localhost:8080/product/${productId}`)
                .then(res => res.json())
                .then(res => {
                    setProductInfo(res)
                    setLoaded(true)
                })
                .catch(err => console.log(err));
        }
    }, [sessionId]);




    const images = [productInfo.productImage1, productInfo.productImage2, productInfo.productImage3];

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


    const onChange = (e) => {
        const { name, value } = e.target;
        let total = 0;
        if (name === 'quantity') {
            total = value * productInfo.productPrice;
        } else {
            total = cart.quantity * productInfo.productPrice;
        }
        setCart({
            ...cart,
            [name]: value,
            total: total
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cart)
        fetch(`http://localhost:8080/cart/create/${productId}/${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json();
                    console.log(data);
                    setCart({
                        user: {},
                        product: {},
                        quantity: "",
                        size: '',
                        total: 0,
                        orderNumber: 0,
                        complete: false
                    })
                    setErrors([])
                    navigate("/shopping/cart")
                } else {
                    const data = await res.json();
                    console.log(data);
                    setErrors(data);
                }
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = (productId) => {
        console.log(productId)
        fetch("http://localhost:8080/product/delete/" + productId, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status === 200) {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        // create a page to view a product and select wich picture to view. Create a form to choose size and quantity and add to cart
        <div className='container viewProductContainer' style={{ marginTop: "150px", paddingBottom: "10%" }}>
            {loaded &&
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column justify-content-center align-items-center view-product-image-container' style={{ position: "relative" }}>
                            <img
                                className='view-product-image'
                                src={images[currentImage]}
                                alt='product'
                                style={{ width: '260px' }}
                            />
                            <div className='d-flex gap-5 justify-content-center mt-5'>
                                <button className='btn btn-outline-dark' onClick={prevImage}>Prev</button>
                                <button className='btn btn-outline-dark' onClick={nextImage}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 viewProductInfo'>
                        <h4 className='text-start mb-4' style={{ fontWeight: 300, wordWrap: 'break-word' }}>Product Name: {productInfo.productName}</h4>
                        <div className='mb-4'>
                            <h5 className='text-start' style={{ fontWeight: 300, wordWrap: 'break-word' }}>Price: ${productInfo.productPrice}</h5>
                        </div>
                        {errors.length > 0 && (
                            <div className='alert alert-danger'>
                                {errors.map((error, index) => (
                                    <p key={index}>{error}</p>
                                ))}
                            </div>
                        )}
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
                                <input type='number' className='form-control' placeholder='Quantity' id='floatingInput' name='quantity' onChange={onChange} value={cart.quantity} />
                                <label htmlFor='quantity' className='floatingInput'>Quantity</label>
                            </div>
                            <div className=''>
                                {sessionId ? (
                                    <button type='submit' className='btn btn-outline-dark btn-sm'>Add to Cart</button>
                                ) : (
                                    <Link to='/login' className='btn btn-outline-success btn-sm'>Login to Add to Cart</Link>
                                )}
                                {userInfo.accountType === 'admin' &&
                                    <>
                                        <Link to={`/product/edit/${productId}`} className='btn btn-outline-dark btn-sm ms-3 me-3'>Edit Product</Link>
                                        <button className='btn btn-outline-danger btn-sm' onClick={() => deleteProduct(productId)}>Delete Product</button>
                                    </>
                                }

                            </div>
                        </form>
                        <div className='mt-4'>
                            <p className='text-start' style={{ fontWeight: 300, wordWrap: 'break-word' }}>Description: {productInfo.productDescription}</p>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default ViewProduct