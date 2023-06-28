import React from 'react'

const ShoppingCartConf = (props) => {
    const { firstName, total, shippingInfo, billingInfo } = props

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
        <div className='container d-flex justify-content-center' style={{ padding: '10%' }}>
            <div className='col-9'>
                <h1 className='mb-5' style={{ fontWeight: 300 }}>First Name Shopping Cart</h1>
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <div style={{ borderRight: '1px solid black', paddingRight: '35%' }} className=''>
                        <div className='d-flex' style={{width: '100%', marginLeft: '100%'}}>
                            <h4 className='text-decoration-underline mb-4 text-center' style={{ fontWeight: 300 }}>Shipping Info</h4>

                        </div>
                        <ul>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>First Name: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Last Name: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Address: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>City:</li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>State: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>ZIP: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Phone: </li>
                        </ul>
                    </div>
                    <div className='' style={{width: '47%'}}>
                        <h4 className='text-decoration-underline mb-4' style={{ fontWeight: 300 }}>Billing Info</h4>
                        <ul>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>First Name: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Last Name: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Address: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>City: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>State: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>ZIP: </li>
                            <li className='text-start mb-4' style={{ fontWeight: 300 }}>Phone: </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-evenly align-items-center mt-5'>
                    <h6 style={{ fontWeight: 500 }}>Total: $XXX</h6>
                    <form onSubmit={confirmOrder}>
                        <button type="submit" className='btn btn-outline-dark'>Confirm Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartConf