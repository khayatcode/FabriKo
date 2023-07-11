import React from 'react'
import { useEffect } from 'react'

const OrderSuccessPage = (props) => {
    const { firstName} = props

    // Generate a random order number
    const orderNumber = Math.floor(Math.random() * 1000000000)

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }, [])

  return (
    <div className='container d-flex justify-content-center' style={{ padding: '12%' }}>
      <div className='col-8'>
          <h1 className='mb-3' style={{ fontWeight: 300 }}>Congratulations {firstName}!</h1>
          <h2 className='mb-3' style={{ fontWeight: 300 }}>Your order has been placed!</h2>
          <h6 className='mb-3' style={{ fontWeight: 300 }}>Order Number: #{orderNumber}</h6>
      </div>
    </div>
  )
}

export default OrderSuccessPage