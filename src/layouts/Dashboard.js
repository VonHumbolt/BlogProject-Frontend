import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import PostDetail from '../pages/PostDetail'
import Posts from '../pages/Posts'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

export default function Dashboard() {
  return (
    <div>
        <Routes>
           
            <Route exact path="/" element={<Posts />}/>
            <Route path="posts" element={<Posts />}>
               
            </Route>
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="createPost/:userId" element={<CreatePost />} />
            <Route
                path="*"
                element={
                    <ErrorPage />
                }
                />
        </Routes>

    </div>
  )
}
