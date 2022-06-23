import React from "react";
import { Link } from "react-router-dom";
import image from "../images/blog_9.jpg";
import { Formik, Form } from "formik";
import * as yup from "yup";
import KaanKaplanTextInput from "../utils/customFormItems/KaanKaplanTextInput";
import AuthService from "../services/AuthService";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addUserToRedux } from "../store/actions/userActions";
import UserService from "../services/UserService";
import {useNavigate} from "react-router-dom";

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authService = new AuthService();
  const userService = new UserService();

  const initValues = {
    email:"",
    password:""
  }

  const validationSchema = yup.object({

    email: yup.string().required("Please enter an email"),
    password: yup.string().required("Please fill this field")
  })

  const handleStoreUserInRedux = (user) =>{
    dispatch(addUserToRedux(user))
  }

  async function handleLogin(values) {

      const response = await authService.login(values)
      if (response.status === 200) {
        await userService.getUserByEmail(values.email).then(result => {
          const user = {
            userId: result.data.userId,
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            email: values.email,
            token: response.headers['authorization']
          }
          handleStoreUserInRedux(user)
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/posts")
          
        }).catch(error => console.log(error))

      } else {
        
        
      }  
     
}

  return (

    <div className="d-md-flex half mt-md-5 mt-lg-0 align-items-center">
      <div className="masthead bg order-md-2 order-sm-2"> <img className="img img-fluid" src={image} style={{width:"100vh"}} alt="Blog Imnage" />  </div>
      <div className="contents order-md-1 order-sm-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 mt-3" >
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
               
                  handleLogin(values);
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
                    <div className="d-grid gap-2 col-6 mx-auto">
                      
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
