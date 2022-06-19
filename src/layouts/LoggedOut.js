import React from 'react'
import {Link} from "react-router-dom"

export default function LoggedOut(props) {
  return (
    <div>

        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={props.signIn} href='#'>
                    <Link style={{ display: "block", color:'white',fontSize:"medium"  }}
                                to="/login">
                        LOGIN
                    </Link>
              </a>
            </li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>
                    <Link style={{ display: "block", color:'white', fontSize:"medium" }}
                                to="/register">
                        REGISTER
                    </Link>
              </a>
            </li>
        </ul>
    </div>
  )
}
