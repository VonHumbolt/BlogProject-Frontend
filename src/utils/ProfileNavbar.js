
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProfileNavbar() {

    const navigate = useNavigate()
    const user = JSON.parse( localStorage.getItem("user"));

    const [isLoggedIn, setIsLoggedIn] = useState(user)

    let handleLoggedOut = () => {
        setIsLoggedIn(false);
      
        localStorage.clear();
        navigate("/");
    }

    let handleLoggedIn = () => {
        navigate("/login")
        setIsLoggedIn(true);
    }


  return (
    <div>
        <nav class="navbar sticky-top navbar-expand-lg bg-dark"  style={{fontFamily: "sans-serif"}}>
            <div class="container px-4 px-lg-5">
                
                    <a class="navbar-brand text-white" onClick={() => navigate("/")}>
                        BLOG-APP
                    </a>
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <i className="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0 text-white">
                        <li className="nav-item">
                            <a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => navigate("/posts")}>
                                ARTICLES
                            </a>
                        </li>
                        <div className='text-white'>

                        {isLoggedIn ?  
                            (<ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => navigate(`/profile/${user.userId}`)}>
                                
                                    PROFILE
                                
                                    </a></li>
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => navigate("/createPost")}>
                                
                                        CREATE POST
                                    </a></li>
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => handleLoggedOut()}>LOG OUT</a></li>
                            </ul>) : 
                            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => handleLoggedIn()}>
                                        LOGIN
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => navigate("/register")}>
                                        REGISTER
                                </a>
                                </li>
                            </ul> }
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
