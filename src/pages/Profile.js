import React, { useState, useEffect } from 'react'
import { Link, Outlet} from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import {useParams} from "react-router-dom"
import Footer from '../layouts/Footer'
import PostService from "../services/PostService";
import AuthorService from "../services/AuthorService";
import convertDate from '../utils/convertDate'
import KaanKaplanTextInput from '../utils/customFormItems/KaanKaplanTextInput';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import UserService from '../services/UserService'
import LikedPostService from '../services/LikedPostService'
import LikedPostLister from '../utils/LikedPostLister'
import ProfileNavbar from '../utils/ProfileNavbar'


export default function Profile() {

    let {userId} = useParams()
    let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null

    const [isUserProfile, setIsUserProfile] = useState( user ? userId == user.userId : false)
    const [userClickLikedPost, setUserClickLikedPost] = useState(null)

    const [numberOfPosts, setNumberOfPosts] = useState(0)
    const [pageNo, setPageNo] = useState(1)

    const [author, setAuthor] = useState({})
    const [userPosts, setUserPost] = useState([])
    const [numberOfUserLikedPosts, setNumberOfUserLikedPosts] = useState(0)
    const [postIdForDelete, setPostIdForDelete] = useState(null)

    const postService = new PostService();
    const likedPostService = new LikedPostService()

    function getPostsByAuthorId(pageNo){
        setUserClickLikedPost(false)

        let allPostBtn = document.getElementById("allPostButton");
        allPostBtn.className="btn btn-primary btn-sm";

        let btn = document.getElementById("likedButton")
        if (btn) {
            btn.className = "btn btn-outline-primary btn-sm position-relative"
        }

        postService.getByAuthorId(userId, pageNo).then(result => {
            setUserPost(result.data)
        })

    }

    useEffect(() => { 
        let authorService = new AuthorService();

        getPostsByAuthorId(1);
        postService.getAuthorPostCount(userId).then(result => setNumberOfPosts(result.data))

        authorService.getById(userId).then(result => setAuthor(result.data))

        if(user) {
            likedPostService.getNumberOfUsersLikedPosts(userId, user.token).then(result => setNumberOfUserLikedPosts(result.data))

        }

    }, [])

    function handlePostDelete(postId){
        postService.delete(postId, user.token).then(result => {
            // Toast
            let newPosts = userPosts.filter(p => p.postId !== postId);
            setUserPost(newPosts)

        })
    }

    function getOlderPosts(){
        let number = pageNo + 1;
        setPageNo(number)
        getPostsByAuthorId(number);
    }

    function getPreviousPosts(){
        let number = pageNo - 1;
        setPageNo(number)
        getPostsByAuthorId(number);
    }

    const initValues={
        firstName:author.firstName,  
        lastName: author.lastName,
        email: author.email
    }

    const validationSchema = yup.object({
        firstName: yup.string().required("Enter your First Name"),
        lastName: yup.string().required("Enter your Last Name"),
        email:yup.string().email("Please enter a valid email address").required("Enter an email")
    })

    function handleUsersLikePost() {
        setUserClickLikedPost(true)

        let btn = document.getElementById("likedButton")
        btn.className = "btn btn-primary btn-sm position-relative"
        let allPostBtn = document.getElementById("allPostButton");
        allPostBtn.className="btn btn-outline-primary btn-sm";

    }

  return (
    <div>
      <ProfileNavbar />

      <div className="container px-4 px-lg-5 mt-sm-1 mt-md-4">
          
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-8 col-lg-8 col-xl-8">
                <div className="site-heading mt-5 mt-lg-0">
                        <h1>{author.firstName + " " + author.lastName + "'s"} Profile</h1>
                        
                        <div className='col d-flex align-items-center justify-content-between'>
                            <a href="#" id="allPostButton" className="btn btn-primary btn-sm" onClick={() => getPostsByAuthorId(1)}> <span className="subheading">All Posts of Author  -  {numberOfPosts} Post</span> </a>
                            {isUserProfile ? 

                                <button id="likedButton" type="button" className="btn btn-outline-primary btn-sm position-relative"  onClick={() => handleUsersLikePost()}>
                                    Liked Posts <i className="fa-solid fa-heart"> </i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {numberOfUserLikedPosts > 10 ? "10+" : numberOfUserLikedPosts}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                    
                            : null}
                        </div>
                    </div>
                    <hr className="my-4" />

                    {/* <!-- Post preview--> */}
                    {userClickLikedPost ? <LikedPostLister user={user} numberOfLikedPosts={numberOfUserLikedPosts} /> : 
                    
                        <div>
                            {userPosts.map(post => (

                                <div className='row' key={post.postId}>
                                    <div className="post-preview col-sm-10">
                                        <a href="#">
                                                    <Link
                                                        to={`/posts/${post.postId}`}
                                                    >
                                                        <h2 className="post-title">{post.title}</h2>
                                                    </Link>
                                                        <h3 className="post-subtitle">{post.description}</h3>
                                        
                                                    </a>
                                                <p className="post-meta">
                                                    Posted by
                                                        <a href="#!">{" " + post?.author?.firstName + " " + post?.author?.lastName + " " }</a>

                                                    on {convertDate(post.publishedDate)}
                                                </p>
                                    </div>
                                    {isUserProfile ? 
                                        <div className='col-sm-2 d-flex align-items-center justify-content-between'>
                                            <Link to="/edit/9">
                                                <i className="fa-solid fa-pen-to-square fa-2x" style={{color:"#0085A1"}}></i>
                                            </Link> 
                                            <i className="fa-solid fa-trash fa-2x" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setPostIdForDelete(post.postId)} style={{color:"#dc3545"}}></i>
                                        </div>
                                    : null }
                                    <hr className="my-3" />
                                </div>
                            ))}
                    </div>
                    

                    }   
                    
                   
                    {/* <!-- Pager--> */}
                    <div className='row'>
                        {pageNo > 1 ?
                            <div className='col'>
                                <div className="d-flex justify-content-start mb-4"><a className="btn btn-primary text-uppercase" href="#" onClick={()=> getPreviousPosts()}>
                                        <i class="fa-solid fa-left-long"></i>Previous Posts
                                    </a>
                                </div>

                            </div>
                        : null}
                        {(Math.ceil(numberOfPosts / 5) !== pageNo && numberOfPosts !== 0) ?
                            <div className='col'>
                                <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#" onClick={()=> getOlderPosts()}>
                                        Older Posts <i class="fa-solid fa-right-long"></i>
                                    </a>
                                </div>
                            </div>
                        :null} 
                    </div>

                </div>

                {/* Profile Settings */}
                <div className='col-md-4 col-lg-4 col-xl-4 mt-md-5 mt-lg-0'>
                  <div className="card mt-3" style={{borderRadius:"10px"}}>
                    <h3 className="card-header text-center">Profile Informations
                    </h3>
                    <div className="card-body">
                      <p className="card-text"> <i><strong>First Name:</strong>  {author.firstName} </i></p>
                      <p className="card-text"> <i><strong>Last Name: </strong> {author.lastName} </i> </p>
                      {isUserProfile ?  <p className="card-text"> <i><strong>Email: </strong> {author.email} </i></p> : null}
                      <p className="card-text"><i><strong> Posts: </strong> {numberOfPosts} </i> </p>
                      <div className="card-footer d-flex justify-content-center align-items-center mt-1">
                        {isUserProfile ?
                            <a href="#" className="btn btn-primary align-items-end" data-bs-toggle="modal" data-bs-target="#editModal" >Edit <i className="fa-solid fa-pen-to-square"></i></a>
                        : null}  
                         
                    
                      </div>
                    </div>
                  </div>
                </div>
            </div>
           
        </div>

        {/* Delete Modal */}
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
                        <button type="button" className="btn btn-danger" onClick={() => { handlePostDelete(postIdForDelete) } }> Delete <i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Edit Modal */}
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Change User Informations</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       
                        <Formik
                            enableReinitialize 
                            initialValues={initValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                const userService = new UserService();
                                userService.updateUser(user.userId, values, user.token).then(result => {
                                    
                                })
                            }}>

                            <Form>
                                <div className="mb-3">
                                    <KaanKaplanTextInput name="firstName" type="text" className="form-control" id="firstName" placeholder="First Name" />
                                </div>
                                <div className="mb-3">
                                    <KaanKaplanTextInput name="lastName" type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <KaanKaplanTextInput name="email" type="email" className="form-control" id="email" placeholder="Email" />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel <i className="fa-solid fa-close"></i></button>
                                    <button type="sumbit" className="btn btn-primary">Edit <i className="fa-solid fa-pen-to-square"></i> </button>
                                </div>
                            
                            </Form>
                        </Formik>

                    </div>
                   
                </div>
            </div>
        </div>  
                       
            
                        
        <Footer/>
        <Outlet />
    </div>
  )
}