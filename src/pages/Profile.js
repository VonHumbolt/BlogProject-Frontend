import React, { useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import {useParams} from "react-router-dom"
import Footer from '../layouts/Footer'

export default function Profile() {

    let {userId} = useParams()
    const user = JSON.parse(localStorage.getItem("user"))

    const [isUserProfile, setIsUserProfile] = useState(userId == user.userId)

  return (
    <div>
      <Navbar />
      <div className="container px-4 px-lg-5 mt-5">
          
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-8 col-lg-8 col-xl-8">
                <div className="site-heading">
                        <h1>Author's Profile</h1>
                        <span className="subheading">All Posts of Author</span>
                    </div>
                    {/* <!-- Post preview--> */}
                    <div className='row'>
                        <div className="post-preview mt-3 col-sm-10">
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
                        {isUserProfile ? 
                            <div className='col-sm-2 d-flex align-items-center justify-content-between'>
                                <Link to="/edit/9">
                                    <i className="fa-solid fa-pen-to-square fa-2x" style={{color:"#0085A1"}}></i>
                                </Link> 
                                <i className="fa-solid fa-trash fa-2x" data-bs-toggle="modal" data-bs-target="#deleteModal" style={{color:"#dc3545"}}></i>
                            </div>
                        : null }
                    </div>
                    {/* <!-- Divider--> a1391a*/}
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
                <div className='col-md-4 col-lg-4 col-xl-4'>
                  <div className="card mt-3">
                    <h3 className="card-header text-center">Profile
                    </h3>
                    <div className="card-body">
                      <p className="card-text">First Name: </p>
                      <p className="card-text">Last Name: </p>
                      <p className="card-text">Email: </p>
                      <p className="card-text">Posts: </p>
                      <div className="card-footer d-flex justify-content-center align-items-center mt-1">
                        {console.log(userId, user.userId)}
                        {isUserProfile ?
                            <a href="#" className="btn btn-primary align-items-end">Edit <i className="fa-solid fa-pen-to-square"></i></a>
                        : null}  
                         
                    
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <Outlet />
        </div>
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Want to Delete Post?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Deleted posts cannot be recovered.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel <i className="fa-solid fa-close"></i></button>
                    <button type="button" className="btn btn-danger">Delete <i className="fa-solid fa-trash"></i></button>
                </div>
                </div>
            </div>
            </div>
        <Footer/>
    </div>
  )
}
