import React, { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from "react-router-dom";
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import LikedPostService from '../services/LikedPostService';
import PostService from '../services/PostService';
import UserService from '../services/UserService';
import convertDate from '../utils/convertDate';
import { ToastContainer, toast } from 'react-toastify';

export default function PostDetail() {
    let {postId} = useParams();
    let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null
    
    const userService = new UserService();
    const likedPostService = new LikedPostService();
    const navigate = new useNavigate();

    const [postLikeCount, setPostLikeCount] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    function isUserLikeThisPost(){
        if (user){
            likedPostService.getUserLikedPost(user.userId, postId, user.token).then(result => {
                if(result.data){
                    setIsLiked(true)
                }
            })
        }
    }

    const [post, setPost] = useState({})
    useEffect(() => {
        let postService = new PostService();
        postService.getByPostId(postId).then(result => {
            setPost(result.data)
        })
        isUserLikeThisPost()
        likedPostService.getPostLikeCount(postId).then(result => setPostLikeCount(result.data));
    }, [])

    function handleLikeProcess() {
        if (user) {
            if(isLiked){
                userService.removeLikePost(postId, user.userId, user.token).then(result => {
                    console.log(result.data) // Toast!
                    setIsLiked(false);
                })
            } else {
                console.log(postId, user.userId, user.token)
                userService.likePost(postId, user.userId, user.token).then(result => {
                    toast("Post is Liked", {position: 'bottom-right', theme: "dark"})
                    setIsLiked(true);
                })
            }
        } else {
            toast("You must login for like posts", {position: "bottom-right", theme: "dark"})
        }
    }

  return (
    <div>
        <Navbar />
        <header className="masthead" style={{backgroundImage: `url(${require("../images/post_detail2.jpg")})` }} >
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading" style={{textAlign:"center"}}>
                            <h1>{post?.title}</h1>
                            <h2 className="subheading">{post?.description}</h2>
                            <span className="meta">
                                Posted by
                                <a>
                                    <u>
                                        <Link
                                            to={`/profile/${post?.author?.userId}`}>

                                            {" " + post?.author?.firstName + " " + post?.author?.lastName + " " }
                                        </Link>
                                    </u>
                                </a>
                                on {convertDate(post?.publishedDate)}
                            </span>
                            <h4 className='meta pt-3'> 
                                 {postLikeCount === 0 || postLikeCount===1 ? (postLikeCount + " Like" ) :  (postLikeCount + " Likes" ) }
                                 <i class="fa-solid fa-thumbs-up ps-2"></i>     
                            </h4>
                                
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Post Content--> */}
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7" style={{textAlign:"justify"}}>
                        
                        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                        
                          <div className="d-flex justify-content-end">
                              <span >
                                {isLiked ? <i className="fa-solid fa-thumbs-up fa-3x" onClick={() => handleLikeProcess()}></i> 
                                  :  <i className="fa-regular fa-thumbs-up fa-3x" onClick={() => handleLikeProcess()} ></i>}
                               
                              </span>
                          </div>

                    </div>
                </div>
                
            </div>
        </article>
      

        <Footer />
        <ToastContainer />
    </div>
  )
}
