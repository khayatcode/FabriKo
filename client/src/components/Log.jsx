import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Log = (props) => {
    const { sessionId, setSessionId } = props
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const submitLog = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                    const data = await res.json();
                    console.log("login data" + data)
                    setUser({
                        email: "",
                        password: ""
                    })
                    setErrors([])
                    console.log(data)
                    setSessionId(data.id)
                    navigate("/")
                } else {
                    const data = await res.json();
                    console.log("login data" + data)
                    setErrors(data)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container d-flex justify-content-center' style={{ height: '80vh', marginTop: '200px' }}>
            <div className='col-10'>
                <h1 className='text-center mb-5' style={{ fontWeight: 300 }}>Login</h1>
                {errors.length > 0 && (
                    <div className='alert alert-danger'>
                        {errors.map((err, index) => (
                            <p key={index}>{err}</p>
                        ))}
                    </div>
                )}
                <form onSubmit={submitLog}>
                    <div className='form-floating mb-3'>
                        <input type='email' className='form-control' id='email' placeholder='Email' name='email' value={user.email} onChange={changeHandler} />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type='password' className='form-control' id='password' placeholder='Password' name='password' value={user.password} onChange={changeHandler} />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button type='submit' className='btn btn-outline-dark'>Login</button>
                    <div className='row mt-3'>
                        <div className='col text-center'>
                            <Link className='text-dark' to='/register'>Don't have an account? Register here.</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Log