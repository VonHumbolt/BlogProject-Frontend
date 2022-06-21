import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux/es/exports'

export default function LoggedIn(props) {
  // const user = useSelector(state => state.user)
  const user = JSON.parse( localStorage.getItem("user") );

  return (
    <div>

        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>
              <Link style={{ display: "block" , color:'white'}}
                                to={`/profile/${user.userId}`}>
                PROFILE
              </Link>
              </a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>
                <Link style={{ display: "block" , color:'white'}}
                                to={"/createPost"}>
                    CREATE POST
                </Link>
              </a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={props.signOut} href='#'>LOG OUT</a></li>
        </ul>
    </div>
  )
}
