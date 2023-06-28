import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    
    const navigate = useNavigate()
    const {sessionId, setSessionId, userInfo, setUserInfo} = props;
    const [category, setCategory] = useState(""); 

    const logOut = () => {
        setUserInfo("")
        setSessionId("")
        navigate("/");
        window.location.reload(true);
    }

    const addProduct = () => {
        navigate("/product/add");
        window.location.reload(true);
    }
    const selectCategory = (category) => {
        setCategory(category);
        navigate("/product/" + category);
        window.location.reload(true);
        return category;
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
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="dropdown-item" onClick={ () => selectCategory("Upper Wear")}>Upper Wear</li>
                                <li className="dropdown-item" onClick={ () => selectCategory("Bottom Wear")}>Bottom Wear</li>
                                <li className="dropdown-item" onClick={ () => selectCategory("Shoes")}>Shoes</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shoppingcart/:userid">Shopping Cart</a>
                        </li>
                        {!sessionId == "" ? (
                            <li className="nav-item mx-auto">
                                <button className="btn btn-outline-dark" onClick={logOut}>Log Out</button>
                            </li>
                            ) : (
                            <li className="nav-item mx-auto">
                                <a className="btn btn-outline-dark" href="/login">Log In</a>
                            </li>
                        )}
                        {userInfo.accountType === "admin" && (
                        <li className="nav-item mx-auto">
                            <button className="btn btn-outline-dark" onClick={addProduct}>
                            Add Product
                            </button>
                        </li>
                        )}
                        <li className="nav-item">
                            <p className="nav-link active">Welcome {userInfo.firstName}!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar