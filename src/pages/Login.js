import React from "react";
import { Link } from "react-router-dom";
import image from "../images/blog_9.jpg";
import { Formik, Form } from "formik";
import * as yup from "yup";
import KaanKaplanTextInput from "../utils/customFormItems/KaanKaplanTextInput";
import AuthService from "../services/AuthService";

export default function Login() {

  const authService = new AuthService();

  const initValues = {
    email:"",
    password:""
  }

  const validationSchema = yup.object({

    email: yup.string().required("Please enter an email"),
    password: yup.string().required("Please fill this field")
  })

  return (

    <div className="d-md-flex half mt-md-5 mt-lg-0 align-items-center">
      <div className="masthead bg order-md-2 order-sm-2"> <img className="img img-fluid" src={image} style={{width:"100vh"}} alt="Blog Imnage" />  </div>
      <div className="contents order-md-1 order-sm-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 mt-3">
              <div className="mb-4">
                <h1>Sign In</h1>
                <p className="mb-4">
                  Login now and Create new posts.
                  Explore hundreds of articles on different topics.
                </p>
              </div>
              <Formik 
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  authService.login(values).then(result => {
                    // Email ile redux a kullanıcı ekle
                    // navigation ile posts page e yönlendir.
                  }).catch(error => console.log(error))
                  
                 
                }}>

                <Form>
                    <div className="mb-3">
                      <KaanKaplanTextInput name="email" type="text" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <KaanKaplanTextInput name="password" type="password" className="form-control" id="password" placeholder="Password" />
                    </div>

                    <Link to="/register"> 
                      <p className='lead'> <u> Don't have an account</u>?  Sign up now </p>
                    </Link>
                    <div className="d-flex mb-5 align-items-center justify-content-end">
                      
                      <input
                      type="submit"
                      value="Login"
                      className="btn btn-block btn-primary"
                    />
                    </div>
                </Form>

              </Formik>
              
                {/* <span className="d-block text-center my-4 text-muted">
                  — or —
                </span>
                <div className="social-login">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
