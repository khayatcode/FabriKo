import React from 'react'

const OrderSuccessPage = (props) => {
    const { firstName} = props

    // Generate a random order number
    const orderNumber = Math.floor(Math.random() * 1000000000)

  return (
    <div>
        <h1>Congratulations {firstName}!</h1>
        <h2>Your order has been placed!</h2>
        <h2>Order Number: {orderNumber}</h2>
    </div>
  )
}

export default OrderSuccessPage