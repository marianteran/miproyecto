import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import './navb.css'

const Navb = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark scrolling-navbar fixed-top   py-3 shadow-sm">
                <div className="container">
                    <LinkRouter className="navbar-brand fw-bold fs-4" to="/">LOGO</LinkRouter>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkRouter className="nav-link active" aria-current="page" to="/">Home</LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter className="nav-link" to="product">Products</LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter className="nav-link" to="">Service</LinkRouter>
                            </li>
                      


                        </ul>

                        <div className="buttons">
                            <LinkRouter to='' className="btn btn-outline-light">
                                <i className="fa fa-user-plus me-1"></i> Login
                            </LinkRouter>
                        {/*     <LinkRouter to='' className="btn btn-outline-light ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register
                            </LinkRouter>
                            <LinkRouter to='' className="btn btn-outline-light ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart(0)
                            </LinkRouter> */}

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navb