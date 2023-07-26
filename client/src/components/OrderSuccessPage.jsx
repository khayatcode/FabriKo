import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSuccessPage = (props) => {
    const { firstName, orderNumber } = props;
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    }, []);

    console.log("Order number: " + orderNumber);
    if (orderNumber === "") {
      navigate('/');
    }


  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "800px" }}>
            {firstName && (
            <div className='col-8'>
                <h1 className='mb-3 text-decoration-underline' style={{ fontWeight: 300 }}>Congratulations {firstName}!</h1>
                <h4 className='mb-3' style={{ fontWeight: 300 }}>Your order has been placed.</h4>
                <h6 className='mb-3' style={{ fontWeight: 300 }}>Order Number: <span className='text-decoration-underline' style={{ color: 'blue' }}>#{orderNumber}</span></h6>
            </div>
            )
            }
    </div>
  );
};

export default OrderSuccessPage