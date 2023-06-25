import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light p-3 fixed-top" style={{ backgroundColor: 'transparent', opacity: 0.5 }}>
            <div className="container-fluid gap-1">
                <a className="navbar-brand display-4" href="#">Fabriko</a>
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