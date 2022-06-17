import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

export default function Navbar() {

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    let handleLoggedOut = () => {
        setIsLoggedIn(false);
        navigate("/");
    }
    let handleLoggedIn = () => setIsLoggedIn(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href='#'>BLOG-APP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>ARTICLES</a></li>
                    {isLoggedIn ? <LoggedIn signOut={handleLoggedOut}/> : <LoggedOut signIn={handleLoggedIn}/> }
                </ul>
            </div>
        </div>
    </nav>
  )
}
