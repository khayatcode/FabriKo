import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UpperWear from '../images/upperWear3.webp'
import Pants from '../images/pants2.webp'
import Shoes from '../images/shoes2.webp'
import '../css/ShoppingCart.css'
import { config } from '../Constants';


const ShoppingCart = (props) => {
    const { sessionId, firstName } = props
    const [allCartItems, setAllCartItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const SERVER_URL = config.url;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    // This is not working. It is not redirecting to the login page when the user is not logged in.

    useEffect(() => {
        if (sessionId === "") {
            navigate('/login');
        } else {
        fetch(`${SERVER_URL}/cart/find/uncomplete/${sessionId}`)
            .then(res => res.json())
            .then(res => {
                console.log("all cart items: ", res)
                let updatedRes = res.map(cart => {
                    return {
                        id: cart.id,
                        quantity: cart.quantity,
                        size: cart.size,
                        total: cart.total,
                        complete: cart.complete,
                        product: {
                            id: cart.product.id,
                            productName: cart.product.productName,
                            productImage1: cart.product.productImage1
                        }
                    };
                });
                setAllCartItems(updatedRes);
                let sum = 0;
                updatedRes.forEach(cart => {
                    sum += cart.total;
                });
                setTotal(sum);
                setLoaded(true);
            })
            .catch(err => console.log(err))
        }
    }, [sessionId])

    const removeItem = (cartId) => {
        fetch(`${SERVER_URL}/cart/delete/${cartId}`, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res)
                setAllCartItems(allCartItems.filter(cart => cart.id != cartId))
                let sum = 0;
                allCartItems.filter(cart => cart.id != cartId).forEach(cart => {
                    sum += cart.total;
                });
                setTotal(sum);
            })
            .catch(err => console.log(err))
    }


    return (
        // do a row for each product having picture, product name, quantity, and total for product. make it spaced out evenly and have a button to remove it from the cart. have a total at the bottom with continue to checkout button. 
        <div className='container containerCart'>
            {loaded &&
                <div className='col-12'>
                    <h1 className='mb-5 text-decoration-underline cartTitle' style={{ fontWeight: 300 }}>{firstName} Shopping Cart</h1>
                    {allCartItems.length === 0 ? <h3 className='text-center'>No Items in Cart</h3> : allCartItems.map((item, index) => {
                        return (
                            <div className='row d-flex justify-content-between align-items-center mb-5' key={index} style={{ borderBottom: '1px solid #89898964', paddingBottom: '50px' }}>

                                <div className='col-3'>
                                    <img src={item.product.productImage1} className='cartImage' />
                                </div>
                                <div className='col-2 d-flex flex-column'>
                                    <h6 style={{ wordWrap: 'break-word' }} >Product Name:
                                        <Link to={`/product/view/${item.product.id}`} style={{ textDecoration: 'underline', color: 'black' }}> {item.product.productName}</Link>
                                    </h6>
                                </div>
                                <div className='col-2'>
                                    <h6>size: {item.size}</h6>
                                </div>
                                <div className='col-2'>
                                    <h6>Quantity: {item.quantity}</h6>
                                </div>
                                <div className='col-2 d-flex justify-content-evenly align-items-center gap-3'>
                                    <h6>Total: ${item.total}</h6>
                                    <button className='btn btn-outline-danger btn-sm buttonCart' onClick={() => removeItem(item.id)}>Remove</button>
                                </div>

                            </div>
                        )
                    }
                    )
                    }
                    <div className='row'>
                        <div className='d-flex justify-content-around mt-4'>
                            <h4 className="" style={{ fontWeight: 300 }}>Total: ${total}</h4>
                            {allCartItems.length > 0 && (
                                <div className=''>
                                    <Link to='/billing' className='btn btn-outline-dark '>Continue to Checkout</Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default ShoppingCart