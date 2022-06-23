import React, { useEffect, useState } from 'react'
import {Outlet, Link} from "react-router-dom"
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import PostService from '../services/PostService'
import convertDate from '../utils/convertDate'

export default function Posts() {

    const postService = new PostService();
    const [numberOfPosts, setNumberOfPosts] = useState(0)
    const [pageNo, setPageNo] = useState(1)
    const [searchText, setSearchText] = useState("")

    const [posts, setPosts] = useState([])

    async function handleSearch() {
        if(searchText.trim().length > 0){
            setTimeout(() => {
                postService.filterByTitle(searchText.toLowerCase()).then(result => 
                    setPosts(result.data)
                )
            }, 2000)
        } else{
            getSortedPost(1)
        }
    }
   
    async function getSortedPost(pageNo) {
        await postService.getSortedDate(pageNo).then(result => {
            setPosts(result.data)

        })
    }

    useEffect(() => {
        postService.getNumberOfPosts().then(result => setNumberOfPosts(result.data))
        getSortedPost(pageNo)
    }, [])

    function getOlderPosts(){
        let number = pageNo + 1;
        setPageNo(number)
        getSortedPost(number);
    }

    function getPreviousPosts(){
        let number = pageNo - 1;
        setPageNo(number)
        getSortedPost(number);
    }

    function handlingFilterSelectBox(){
        let selectBox = document.getElementById('filterBox');
        let value = selectBox.options[selectBox.selectedIndex].value; 
        if (value == 2) {
            postService.getMostLiked(1).then(result => setPosts(result.data))
        } else {
            getSortedPost(1)
        }
    }

  return (
      <div>
        <Navbar />
        <header className="masthead" style={{backgroundImage:`url(${require("../images/blog_6.jpg")})`}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>Clean Blog</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </header>
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">

                <div className="col-md-10 col-lg-8 col-xl-7">
                        {/* Filter Posts */}
                        <div className="row g-2 mb-5">
                            <div className="col-sm-9">
                                <i className="fa fa-search ps-2 py-2" style={{position:"absolute"}}></i><input type="email" className="form-control rounded-pill ps-5" onKeyUp={() => handleSearch()} id="floatingInputGrid" placeholder="Search Post..." value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{borderColor: "darkblue"}} />
                            </div>
                            <div className="col-sm-3">
                                <select className="form-select rounded-pill" id="filterBox" onChange={() => handlingFilterSelectBox()} style={{borderColor: "darkblue"}}>
                                    <option defaultValue="1" value="1">Latest Posts </option>
                                    <option value="2">Most Liked Posts</option>
                                </select>
                            </div>
                        </div>

                    {posts.length === 0 ? <div className='justify-content-center text-center'> <h1>Search Result  <i className="fa fa-search"></i> </h1>  <h3> No posts found...</h3> </div> : null}
                    {posts.map(post => (
                        <div className="post-preview" key={post.postId}>
                        <a href="#">
                        <Link
                            style={{ display: "block", margin: "1rem 0",  }}
                            to={`/posts/${post.postId}`}>
                            <h2 className="post-title">{post?.title}</h2>
                        </Link>
                            <h3 className="post-subtitle">{post?.description}</h3>
                        </a>
                            <p className="post-meta">
                                Posted by
                                    <a href="#!">
                                        <Link style={{textDecoration:"none"}}
                                            to={`/profile/${post?.author?.userId}`}>
                                        
                                        {" " + post?.author?.firstName + " " + post?.author?.lastName + " "}
                                        
                                        </Link>
                                    </a>
                                on {convertDate(post?.publishedDate)}
                            </p>
                            <hr className="my-4" />
                        </div>
                    ))}
                    {/* <div className="post-preview">
                        <a href="post.html">
                        <Link
                            style={{ display: "block", margin: "1rem 0",  }}
                            to={`/posts/1`}>
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
                    <hr className="my-4" />
                    <div className="post-preview">
                        <a href="post.html"><h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 18, 2022
                        </p>
                    </div>
                    <hr className="my-4" />
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
                    <hr className="my-4" />
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
                    <hr className="my-4" /> */}
                    <div className='row'>
                        {pageNo > 1 ?
                            <div className='col'>
                                <div className="d-flex justify-content-start mb-4"><a className="btn btn-primary text-uppercase" href="#" onClick={()=> getPreviousPosts()}>Previous Posts →</a></div>

                            </div>
                        : null}
                        {numberOfPosts === 0 ? <div> <h3>There is no posts...</h3></div> : null}
                        {(Math.ceil(numberOfPosts / 5) !== pageNo && numberOfPosts !== 0) ?
                            <div className='col'>
                                <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#" onClick={()=> getOlderPosts()}>Older Posts →</a></div>
                            </div>
                        :null}
                    </div>
                </div>
            </div>
        </div>

      <Footer />

    </div>

  )
}
