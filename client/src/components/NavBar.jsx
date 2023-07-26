import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import '../css/NavBar.css'

const NavBar = (props) => {
    const {sessionId, setSessionId, userInfo, setOrderNumber, loaded} = props;
    const navigate = useNavigate()

    // do if the page is in home page and I press the fabriko logo or home button it will scroll to the top of the page in smooth fashion
    const scrollToTop = () => {
        if (window.location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }

    const logOut = () => {
        setSessionId("")
        setOrderNumber("")
        navigate("/login");
        Cookies.remove("sessionId");
        Cookies.remove("orderNumber");
        window.location.reload(true);
    }


  return (
    <div>
        <nav className="navbar NavBarCSS navbar-expand-xl p-4 fixed-top">
            <div className="container-fluid gap-1">
                <Link className="navbar-brand display-5" to={"/"} style={{ fontSize: '2rem' }} onClick={scrollToTop}>Fabriko</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {loaded && (
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <ul className="navbar-nav me-auto gap-3">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link" aria-current="page" onClick={scrollToTop}>Home</Link>
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
                                <Link to={"/shopping/cart"} className="nav-link" >Shopping Cart</Link>
                            </li>
                            {userInfo.accountType === "admin" && (
                            <li className="nav-item mx-auto">
                                <Link className="nav-link" to={"/createProduct"}>
                                Add Product
                                </Link>
                            </li>
                            )}
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link" >Contact Us</Link>
                            </li>
                            {sessionId === "" ? (
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link" >Login</Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={logOut}>Log out</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    </div>
  )
}

export default NavBar