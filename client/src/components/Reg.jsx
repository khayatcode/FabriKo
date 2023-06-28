import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Reg = (props) => {
    const { sessionId, setSessionId } = props
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
        e.preventDefault()
        console.log(userInfo)
        fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => {
                console.log(res)
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    setUserInfo({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        accountType: ""
                    })
                    setErrors({})
                    setSessionId(res.data.sessionId)
                    navigate("/dashboard")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container d-flex justify-content-center' style={{ padding: '8%' }}>
            <div className='col-md-6'>
                <h1 className='text-center mb-4' style={{ fontWeight: 300 }}>Registers</h1>
                <form onSubmit={submitReg}>
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='firstName' placeholder='First Name' name='firstName' value={userInfo.firstName} onChange={changeHandler} />
                        <label htmlFor='firstName'>First Name</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='lastName' placeholder='Last Name' name='lastName' value={userInfo.lastName} onChange={changeHandler} />
                        <label htmlFor='lastName'>Last Name</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='email' className='form-control' id='email' placeholder='Email' name='email' value={userInfo.email} onChange={changeHandler} />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='password' className='form-control' id='password' placeholder='Password' name='password' value={userInfo.password} onChange={changeHandler} />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='password' className='form-control' id='confirmPassword' placeholder='Confirm Password' name='confirmPassword' value={userInfo.confirmPassword} onChange={changeHandler} />
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <select className='form-select' id='accountType' aria-label='Floating label select example' name='accountType' value={userInfo.accountType} onChange={changeHandler}>
                            <option selected disabled>Select Account Type</option>
                            <option value='shopper'>Shopper</option>
                            <option value='admin'>Admin</option>
                        </select>
                        <label htmlFor='accountType'>Account Type</label>
                    </div>
                    <button type='submit' className='btn btn-outline-dark'>Register</button>
                    <div className='row mt-3'>
                        <div className='col text-center'>
                            <Link className='text-dark' to='/login'>Already have an account? Login here.</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reg