import React, {useState, useEffect} from 'react'
import convertDate from './convertDate'
import { Link, Navigate, Outlet } from 'react-router-dom'
import LikedPostService from '../services/LikedPostService'

export default function LikedPostLister(props) {

    const [pageNo, setPageNo] = useState(1)
    const [userLikedPosts, setUserLikedPosts] = useState([])

    function getUserAllLikePosts(pageNo) {

        const likedPostService = new LikedPostService()
        likedPostService.getUsersAllLikedPosts(props.user.userId, pageNo, props.user.token).then(result => {
            setUserLikedPosts(result.data)
            console.log(result.data)
        })
    }

    useEffect(() => {
        getUserAllLikePosts(1)
    }, [])

    function getOlderPosts(){
        let number = pageNo + 1;
        setPageNo(number)
        getUserAllLikePosts(number);
    }

    function getPreviousPosts(){
        let number = pageNo - 1;
        setPageNo(number)
        getUserAllLikePosts(number);
    }

  return (
    <div>
        {userLikedPosts.map(post => (
            <div className='row' key={post.post.postId}>
                <div className="post-preview col-sm-10">
                    <a href="#">
                                <Link
                                    to={`/posts/${post.post.postId}`}
                                >
                                    <h2 className="post-title">{post.post.title}</h2>
                                </Link>
                                    <h3 className="post-subtitle">{post.post.description}</h3>
                    
                                </a>
                            <p className="post-meta">
                                Posted by
                              
                                {" " + post?.post?.author?.firstName + " " + post?.post?.author?.lastName + " " }
                                on {convertDate(post.post.publishedDate)}
                            </p>
                </div>
                <hr className="my-4" />
            </div>
        ))}

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
                        {(Math.ceil(props.numberOfLikedPosts / 5) !== pageNo && props.numberOfLikedPosts !== 0) ?
                            <div className='col'>
                                <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#" onClick={()=> getOlderPosts()}>
                                        Older Posts <i class="fa-solid fa-right-long"></i>
                                    </a>
                                </div>
                            </div>
                        :null} 
                    </div>
        
        <Outlet />
    </div>
  )
}
