import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {removeUserToRedux} from "../store/actions/userActions";

export default function Navbar() {

    const navigate = useNavigate()
    const user = JSON.parse( localStorage.getItem("user") );

    const userRedux = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(user)

    let handleLoggedOut = () => {
        setIsLoggedIn(false);
        dispatch(removeUserToRedux(userRedux))
        localStorage.clear();
        navigate("/");
    }

    let handleLoggedIn = () => {
        navigate("/login")
        setIsLoggedIn(true);
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id ="mainNav">
        <div className="container px-4 px-lg-5">
           
                <Link style={{ display: "block", color: 'white'}}
                        to="/"
                        key={1}>
                    <a className="navbar-brand" href='#'>
                            BLOG-APP
                    
                    </a>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item">
                    
                    <a className="nav-link px-lg-3 py-3 py-lg-4" href='#' onClick={() => navigate("/posts")}>
                            ARTICLES
                        </a>
                </li>
                               
                    {isLoggedIn ? <LoggedIn signOut={handleLoggedOut}/> : <LoggedOut signIn={handleLoggedIn}/> }
                </ul>
            </div>
        </div>
    </nav>
  )
}
