import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()
    const checkLogin = () => {
        if (localStorage.getItem("authToken")) {
            return true;
        }
    }
        const logout = () => {
            localStorage.clear("authToken")
            navigate('/login')
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link  className="nav-link active" aria-current="page" to={`${checkLogin()?"/":"/login"}`}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                            <div className={`${checkLogin()?"d-none":""}`}>
                            <button className="btn btn-primary mx-2 ">
                                <Link className='text-light' to="/login">
                                    Login
                                </Link>
                            </button>
                            <button className="btn btn-primary mx-2" >
                                <Link className='text-light' to="/Signup">
                                    Signup
                                </Link>
                            </button>
                            </div>
                            <button onClick={logout} className={`btn btn-primary ${checkLogin()?"":"d-none"}`}>Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
