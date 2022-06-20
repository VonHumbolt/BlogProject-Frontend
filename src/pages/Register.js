import React from 'react'
import { Link } from 'react-router-dom';
import image from "../images/blog_9.jpg";
import { Formik, Form } from 'formik';
import * as yup from "yup";
import KaanKaplanTextInput from '../utils/customFormItems/KaanKaplanTextInput';
import AuthService from '../services/AuthService';

export default function Register() {

  const authService = new AuthService();

  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter your name"),
    lastName: yup.string().required("Please fill this field"),
    email: yup.string().email("Email address must be valid").required("Please enter your email address"),
    password: yup.string().required("Please enter a password")
  })

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
            <Formik 
              initialValues={initValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                authService.register(values).then(result => {
                    console.log("Activation code was send your email! Please activate your account")
                  }).catch(error => {
                    
                  })
                console.log(values);
              }}
            >
              <Form>
                  <div className="mb-2">
                    <KaanKaplanTextInput name="firstName" type="text" className="form-control" id="firstName" placeholder="First Name" />
                  </div>
                  <div className="mb-2">
                    <KaanKaplanTextInput name="lastName" type="text" className="form-control" id="lastName" placeholder='Last Name' />
                  </div>
                  <div className="mb-2">
                    <KaanKaplanTextInput name="email" type="email" className="form-control" id="email" placeholder='Email' />
                  </div>
                  <div className="mb-2">
                    <KaanKaplanTextInput name="password" type="password" className="form-control" id="password" placeholder="Password" />
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


              </Form>
             
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
