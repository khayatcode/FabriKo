import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
    const navigate = useNavigate()


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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Category 1</a>
                                <a className="dropdown-item" href="#">Category 2</a>
                                <a className="dropdown-item" href="#">Category 3</a>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shopping Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar