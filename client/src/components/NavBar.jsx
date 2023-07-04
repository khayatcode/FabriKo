import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import '../css/NavBar.css'

const NavBar = (props) => {
    const {sessionId, setSessionId, userInfo, setUserInfo} = props;
    const navigate = useNavigate()

    const logOut = () => {
        setSessionId("")
        navigate("/login");
        Cookies.remove("sessionId");
        window.location.reload(true);
    }


  return (
    <div>
        <nav className="navbar NavBarCSS navbar-expand-xl p-4 fixed-top">
            <div className="container-fluid gap-1">
                <a className="navbar-brand display-5" href="/" style={{ fontSize: '2rem' }}>Fabriko</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <ul className="navbar-nav me-auto gap-3">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to={"/category/upper"} className="dropdown-item" >Upper</Link>
                                <Link to={"/category/bottom"} className="dropdown-item" >Bottom</Link>
                                <Link to={'/category/shoes'} className="dropdown-item" >Shoes</Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link" >Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/shopping/cart"} className="nav-link" >Shopping Cart</Link>
                        </li>
                        {sessionId === "" ? (
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link" >Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" onClick={logOut}>Logout</Link>
                            </li>
                        )}
                        {userInfo.accountType === "admin" && (
                        <li className="nav-item mx-auto">
                            <button className="btn btn-outline-dark" onClick={addProduct}>
                            Add Product
                            </button>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar