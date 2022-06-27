import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux/es/exports'

export default function LoggedIn(props) {
  // const user = useSelector(state => state.user)
  const user = JSON.parse( localStorage.getItem("user") );
  const navigate = useNavigate()

  return (
    <div>

        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={() => navigate(`/profile/${user.userId}`)}>
              
                PROFILE
              
              </a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={() => navigate("/createPost")}>
               
                    CREATE POST
              </a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={props.signOut} >LOG OUT</a></li>
        </ul>
    </div>
  )
}
