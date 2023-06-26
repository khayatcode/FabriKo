import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Stripe from 'stripe';

const BillingInfo = () => {
    const [billingForm, setBillingForm] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        card: '',
        exp: '',
        cvv: '',
        billing: false,
    });

//     useEffect(() => {
//     const stripe = window.Stripe('sk_test_51NMg77BuZ9fgdSow523FwBH4tQMXMTzRT0q3i0W9xOet8C6AsshHMDqCz3hQ8VosFzQIB06ND4R589RvFSro7Yd100dzw9am9p');
//     const elements = stripe.elements();
//     const cardElement = elements.create('card');
//     cardElement.mount('#card-element');
// }, []);

    const onChange = (e) => {
        setBillingForm({
            ...billingForm,
            [e.target.name]: e.target.value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const stripe = new Stripe('sk_test_XXXXXXXXXXXXXXXXXXXXXXXX');
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card: cardElement,
    //     });
    //     if (!error) {
    //         console.log(paymentMethod);
    //         const { id } = paymentMethod;
    //         try {
    //             const { data } = await axios.post('/api/stripe/charge', { id, amount: 10000 });
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };

    return (
        <div>
            <h1>Billing Info</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Name"
                        name="name"
                        value={billingForm.name}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Email"
                        name="email"
                        value={billingForm.email}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Address"
                        name="address"
                        value={billingForm.address}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="City"
                        name="city"
                        value={billingForm.city}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">City</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="State"
                        name="state"
                        value={billingForm.state}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">State</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Zip"
                        name="zip"
                        value={billingForm.zip}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Zip</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Card"
                        name="card"
                        value={billingForm.card}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Card</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Exp"
                        name="exp"
                        value={billingForm.exp}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">Exp</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="CVV"
                        name="cvv"
                        value={billingForm.cvv}
                        onChange={onChange}
                    />
                    <label htmlFor="floatingInput">CVV</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <div id="card-element"></div>
        </div>
    );
};

export default BillingInfo;