import React from 'react'

export default function LoggedIn(props) {
  return (
    <div>

        <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>PROFILE</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href='#'>CREATE POST</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" onClick={props.signOut} href='#'>LOG OUT</a></li>
        </ul>
    </div>
  )
}
