import React from 'react'
import {Link, useNavigate} from "react-router-dom"

export default function LoggedOut(props) {
  const navigate = useNavigate()
  return (
    <div>

        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={props.signIn} href='#'>
                   
                        LOGIN
              </a>
            </li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#' onClick={() => navigate("/register")}>
                   
                        REGISTER
              </a>
            </li>
        </ul>
    </div>
  )
}
