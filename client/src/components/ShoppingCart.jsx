import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear from '../images/upperWear3.webp'
import Pants from '../images/pants2.webp'
import Shoes from '../images/shoes2.webp'


const ShoppingCart = (props) => {
    const { sessionId, firstName } = props
    const [allCartItems, setAllCartItems] = useState([])
    const [total, setTotal] = useState(0)

useEffect(() => {
    fetch(`http://localhost:8080/cart/find/uncomplete/${sessionId}`)
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
        })
        .catch(err => console.log(err))
}, [])

const removeItem = (cartId) => {
    fetch(`http://localhost:8080/cart/delete/${cartId}`, {
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
        <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
            <div className='col-10'>
                <h1 className='mb-5' style={{ fontWeight: 300 }}>{firstName} Shopping Cart</h1>
                {/* <div className='row d-flex justify-content-between align-items-center mb-5'>
                <div className='col-3'>
                    <img src={UpperWear} style={{height: '250px' }}/>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Product Name: XXX</h6>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Quantity: X</h6>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Total: $X</h6>
                </div>
            </div> */}
                {allCartItems.length === 0 ? <h1 className='text-center'>No Items in Cart</h1> : allCartItems.map((item, index) => {
                    return (
                        <div className='row d-flex justify-content-between align-items-center mb-5' key={index}>
                            <div className='col-3'>
                                <img src={item.product.productImage1} style={{ height: '250px' }} />
                            </div>
                            <div className='col-2'>
                                <h6 style={{ fontWeight: 300 }}>Product Name: 
                                    <Link to={`/product/view/${item.product.id}`} style={{ textDecoration: 'none', color: 'black' }}> {item.product.productName}</Link>
                                </h6>
                            </div>
                            <div className='col-2'>
                                <h6 style={{ fontWeight: 300 }}>size: {item.size}</h6>
                            </div>
                            <div className='col-2'>
                                <h6 style={{ fontWeight: 300 }}>Quantity: {item.quantity}</h6>
                            </div>
                            <div className='col-2'>
                                <h6 style={{ fontWeight: 300 }}>Total: ${item.total}</h6>
                                <button className='btn btn-outline-dark' onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    )
                }
                )
                }
                <div className='row'>
                    <div className='col-9'>
                        <h4 style={{ fontWeight: 300 }}>Total: ${total}</h4>
                    </div>
                    { allCartItems.length > 0 && (
                        <div className='col-3'>
                            <Link to='/billing' className='btn btn-outline-dark'>Continue to Checkout</Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart