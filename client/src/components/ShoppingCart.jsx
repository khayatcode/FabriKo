import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ShoppingCart = (props) => {
    const { firstName, total} = props
    const [cart, setCart] = useState([])

  return (
    <div>
        <h1>{firstName} Shopping Cart</h1>
        {cart.length > 0 ? (
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <p>{item.size}</p>
                        <p>{item.total}</p>
                    </div>
                ))}
                <div>
                    <h2>Total: {total}</h2>
                    <Link to="/checkout">Checkout</Link>
                </div>
            </div>
                ) : (
                    <div>
                        <h2>Your cart is empty</h2>
                    </div>
                )}
    </div>
  )
}

export default ShoppingCart