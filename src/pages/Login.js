import React from "react";
import image from "../images/blog_8.jpg";

export default function Login() {
  return (

    <div className="d-lg-flex half mt-2 align-items-center">
      <div className="bg order-1 order-md-2"> <img className="img-fluid" src={image} style={{width:"100vh"}} alt="Blog Imnage" />  </div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 ">
              <div className="mb-4">
                <h1>Sign In</h1>
                <p className="mb-4">
                  Login now and Create new posts.
                  Explore hundreds of articles on different topics.
                </p>
              </div>
              <form action="#" method="post">
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
                  value="Log In"
                  className="btn btn-block btn-primary"
                />
                </div>
                {/* <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                /> */}
                {/* <span className="d-block text-center my-4 text-muted">
                  — or —
                </span> */}
                {/* <div className="social-login">
                  <a
                    href="#"
                    className="btn btn-secondary d-flex justify-content-center align-items-center my-1"
                  >
                    <span className="me-3"><i className="fa-brands fa-facebook"></i></span> Login with
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary d-flex justify-content-center align-items-center my-1"
                  >
                    <span className="me-3"><i className="fa-brands fa-twitter"></i></span> Login with
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger d-flex justify-content-center align-items-center my-1"
                  >
                    <span className="me-3"><i className="fa-brands fa-google"></i></span> Login with Google
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
