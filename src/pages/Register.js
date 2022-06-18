import React from 'react'
import image from "../images/blog_8.jpg";

export default function Register() {
  return (
    <div className="d-lg-flex half mt-2 align-items-center">
    <div className="bg order-2 order-md-1"> <img className="img img-fluid" src={image} style={{width:"100vh"}} alt="Blog Imnage" />  </div>
    <div className="contents order-1 order-md-2 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 ">
            <div className="mb-4">
              <h1>Register Now</h1>
              <p className="mb-4">
                Create an account to become an author. Explore articles and write posts.
              </p>
            </div>
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="form-group first">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
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
