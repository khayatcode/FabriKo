import React from 'react'

const ShoppingCartConf = (props) => {
    const { firstName, total, shippingInfo, billingInfo} = props 

    const confirmOrder = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/api/confirmOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ shippingInfo, billingInfo })
        })
            .then(res => {
                console.log(res)
            })
    }

  return (
    <div>
        <h1>{firstName} Shopping Cart</h1>
        <div>
            <h2>Total: {total}</h2>
            <h2>Shipping Info</h2>
            <p>{shippingInfo.firstName}</p>
            <p>{shippingInfo.lastName}</p>
            <p>{shippingInfo.address}</p>
            <p>{shippingInfo.city}</p>
            <p>{shippingInfo.state}</p>
            <p>{shippingInfo.zip}</p>
            <p>{shippingInfo.phone}</p>
            <h2>Billing Info</h2>
            <p>{billingInfo.firstName}</p>
            <p>{billingInfo.lastName}</p>
            <p>{billingInfo.address}</p>
            <p>{billingInfo.city}</p>
            <p>{billingInfo.state}</p>
            <p>{billingInfo.zip}</p>
            <p>{billingInfo.phone}</p>
        </div>
        <form onSubmit={confirmOrder}>
            <button type="submit">Confirm Order</button>
        </form>
    </div>
  )
}

export default ShoppingCartConf