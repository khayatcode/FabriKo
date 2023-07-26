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
    const [errors, setErrors] = useState([]);
    const [allCartItems, setAllCartItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    // do a if statement to check if the user is logged in. if not, redirect to login page
    if (sessionId == "") {
        navigate('/login');
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/getuser/${sessionId}`)
            .then(res => res.json())
            .then(user => {
                const { id, firstName, lastName, email, accountType } = user;
                console.log(user);
                setBillingForm(prevState => ({
                    ...prevState,
                    user: { id, firstName, lastName, email, accountType }
                }));
            })
            .catch(err => console.log(err));

        fetch(`http://localhost:8080/billing/find/${sessionId}`)
            .then(res => res.json())
            .then(billing => {
                const { user: billingUser, ...billingWithoutUser } = billing;
                console.log(billing);
                setBillingForm(prevState => ({
                    ...prevState,
                    ...billingWithoutUser,
                    exp: billingWithoutUser.exp.substring(0, 10)
                }));
            })
            .catch(err => console.log(err));

        fetch(`http://localhost:8080/cart/find/uncomplete/${sessionId}`)
            .then(res => res.json())
            .then(cartItems => {
                console.log("cartItems", cartItems)
                if (cartItems.length > 0) {
                    setAllCartItems(cartItems)
                    setLoaded(true)
                } else {
                    navigate('/shopping/cart')
                }
            })
            .catch(err => console.log(err));
    }, [sessionId]);


    const onChange = (e) => {
        setBillingForm({
            ...billingForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(billingForm);
        fetch(`http://localhost:8080/billing/create/update/${sessionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(billingForm),
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json();
                    console.log(data);
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
                    setErrors([]);
                    navigate('/shippingInfo');
                } else {
                    const data = await res.json();
                    setErrors(data);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='container d-flex justify-content-center mb-5' style={{ minHeight: "800px", marginTop: '150px', marginBottom: "50px" }}>
            {loaded && (
                <div className='col-md-12'>
                    <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Billing Info</h1>
                    {errors.length > 0 && (
                        <div className='alert alert-danger'>
                            {errors.map((error, index) => (
                                <div key={index} className='mb-2'>{error}</div>
                            ))}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="row">

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
                        <button type="submit" className="btn btn-outline-dark col-3 mx-auto mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BillingForm;