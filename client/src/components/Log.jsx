import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Log = (props) => {
    const { sessionId, setSessionId } = props
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const submitLog = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                console.log(res)
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    setUser({
                        email: "",
                        password: ""
                    })
                    setErrors({})
                    setSessionId(res.data.sessionId)
                    navigate("/dashboard")
                }
            })
            .catch(err => console.log(err))
    }




    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitLog}>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" name="email" value={user.email} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Password" name="password" value={user.password} onChange={changeHandler} />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="row mb-3">
                    <div className="col">
                        <Link to="/register">Don't have an account? Register here.</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Log