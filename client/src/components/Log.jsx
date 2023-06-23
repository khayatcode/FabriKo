import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Log = () => {
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
        </form>
    </div>
  )
}

export default Log