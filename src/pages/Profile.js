import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Navbar from '../layouts/Navbar'

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container px-4 px-lg-5 mt-5">
          
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-8 col-lg-8 col-xl-7">
                <div className="site-heading">
                        <h1>Author's Profile</h1>
                        <span className="subheading">All Posts of Author</span>
                    </div>
                    {/* <!-- Post preview--> */}
                    <div className="post-preview mt-5">
                        
                        <a href="#">
                            <Link
                                style={{ display: "block", margin: "1rem 0" }}
                                to={`/posts/1`}
                            >
                                 <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                            </Link>
                   
                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 24, 2022
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html"><h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 18, 2022
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Science has not yet mastered prophecy</h2>
                            <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on August 24, 2022
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Failure is not an option</h2>
                            <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on July 8, 2022
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                    {/* <!-- Pager--> */}
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-5'>
                  <div class="card mt-3">
                    <h3 class="card-header text-center">Profile
                    </h3>
                    <div class="card-body">
                      <p class="card-text">First Name: </p>
                      <p class="card-text">Last Name: </p>
                      <p class="card-text">Email: </p>
                      <div class="card-footer d-flex justify-content-center align-items-center mt-1">

                          <a href="#" class="btn btn-primary align-items-end">Edit <i className="fa-solid fa-pen-to-square"></i></a>
                    
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <Outlet />
        </div>

    </div>
  )
}
