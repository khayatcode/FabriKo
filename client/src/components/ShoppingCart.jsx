import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpperWear from '../images/upperWear3.webp'
import Pants from '../images/pants2.webp'
import Shoes from '../images/shoes2.webp'


const ShoppingCart = (props) => {
    const { sessionId } = props
    const [allCartItems, setAllCartItems] = useState([])

  return (
    // do a row for each product having picture, product name, quantity, and total for product. make it spaced out evenly and have a button to remove it from the cart. have a total at the bottom with continue to checkout button. 
    <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
        <div className='col-10'>
            <h1 className='mb-5' style={{ fontWeight: 300 }}>First Name Shopping Cart</h1>
            <div className='row d-flex justify-content-between align-items-center mb-5'>
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
            </div>
            <div className='row d-flex justify-content-between align-items-center mb-5'>
                <div className='col-3'>
                    <img src={Pants} style={{height: '250px' }}/>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Product Name: XXX </h6>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Quantity: X</h6>
                </div>
                <div className='col-3'>
                    <h6 style={{ fontWeight: 300 }}>Total: $X</h6>
                </div>
            </div>
            <div className='row d-flex justify-content-between align-items-center mb-5'>
                <div className='col-3'>
                    <img src={Shoes} style={{height: '80px' }}/>
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
            </div>
            <div className='row'>
                <div className='col-9'>
                    <h4 style={{ fontWeight: 300 }}>Total: $XX</h4>
                </div>
                <div className='col-3'>
                    <Link to='/billing'><button className='btn btn-outline-dark'>Continue to Checkout</button></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShoppingCart