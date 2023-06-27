import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Reg = (props) => {
    const {sessionId, setSessionId} = props
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitReg = (e) => {
        console.log(userInfo)
        fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Registration failed. Please try again.");
            }
            return res.json();
        })
        .then(data => {
            setUserInfo({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                accountType: ""
            });
            setErrors({});
            setSessionId(data.email);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
            setErrors({ err });
        });
    };


    return (
        <div>
            <h1>Registers</h1>
            <form onSubmit={submitReg}>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="First Name" name="firstName" value={userInfo.firstName} onChange={changeHandler} />
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" name="lastName" value={userInfo.lastName} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" name="email" value={userInfo.email} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Password" name="password" value={userInfo.password} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Confirm Password" name="confirmPassword" value={userInfo.confirmPassword} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="accountType" value={userInfo.accountType} onChange={changeHandler}>
                        <option selected disabled>Select Account Type</option>
                        <option value="shopper">Shopper</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label htmlFor="floatingSelect">Account Type</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
                <div className="row mb-3">
                    <div className="col">
                        <Link to="/login">Already have an account? Login here.</Link>
                    </div>
                </div>
        </div>
    )
}

export default Reg