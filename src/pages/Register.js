import React from 'react'
import { Link } from 'react-router-dom';
import image from "../images/blog_9.jpg";

export default function Register() {
  return (
    <div className="d-md-flex half  mt-md-5 mt-lg-0 align-items-center">
    <div className="masthead bg order-md-1 order-sm-1"> <img className="img img-fluid" src={image} style={{width:"100vh"}} alt="Blog Imnage" />  </div>
    <div className="contents order-md-2 order-sm-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 mt-3 ">
            <div className="mb-4">
              <h1>Register Now</h1>
              <p className="mb-4">
                Create an account to become an author. Explore articles and write posts.
              </p>
            </div>
            <form action="#" method="post">
              <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
            </div>
              <div className="mb-2">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder='Last Name'/>
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" placeholder='Email'/>
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder='Password'
                />
              </div>
              <Link to="/login">
                <p className='lead'> <u> Already have an account</u>?  Login now  </p>
              </Link>
              <div className="d-flex mb-5 align-items-center justify-content-end">
                
                <input
                type="submit"
                value="Sign Up"
                className="btn btn-block btn-primary"
              />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
