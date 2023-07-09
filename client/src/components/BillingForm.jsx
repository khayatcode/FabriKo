import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BillingForm = (props) => {
    const { sessionId } = props;
    const [billingForm, setBillingForm] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        card: '',
        exp: '',
        cvv: '',
        user: {}
    });
    const navigate = useNavigate();


useEffect(() => {
    Promise.all([
        fetch(`http://localhost:8080/api/getuser/${sessionId}`).then(res => res.json()),
        fetch(`http://localhost:8080/billing/find/${sessionId}`).then(res => res.json())
    ])
    .then(([user, billing]) => {
        const { id, firstName, lastName, email, accountType } = user;
        const { user: billingUser, ...billingWithoutUser } = billing;
        setBillingForm({
            ...billingWithoutUser,
            user: { id, firstName, lastName, email, accountType }
        });
    })
    .catch(err => console.log(err));
}, []);


    const onChange = (e) => {
        setBillingForm({
            ...billingForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(billingForm);
        fetch(`http://localhost:8080/billing/create/${sessionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(billingForm),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('billing Form response', res);
                setBillingForm({
                    name: '',
                    email: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    card: '',
                    exp: '',
                    cvv: '',
                    user: {},
                });
                navigate('/shippingInfo');
            }
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className='container d-flex justify-content-center' style={{ padding: '10%' }}>
            <div className='col-md-12'>
                <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Billing Info</h1>
                <form onSubmit={handleSubmit} className="row">
                    {/* Error below */}
                    
                    <div className="col-md-6">
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
                                maxLength={2}
                            />
                            <label htmlFor="floatingInput">State</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Country"
                                name="country"
                                value={billingForm.country}
                                onChange={onChange}
                            />
                            <label htmlFor="floatingInput">Country</label>
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
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                type="number"
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
                                type="date"
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
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="CVV"
                                name="cvv"
                                value={billingForm.cvv}
                                onChange={onChange}
                            />
                            <label htmlFor="floatingInput">CVV</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-dark">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillingForm;