import React from 'react'
import { useSelector } from 'react-redux'
import { Route,Routes } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import PostDetail from '../pages/PostDetail'
import Posts from '../pages/Posts'
import Profile from '../pages/Profile'
import ProtectedRoute from '../pages/ProtectedRoute'
import Register from '../pages/Register'

export default function Dashboard() {

  const user = useSelector(state => state.user)

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
           
            <Route path="createPost" element={
               <ProtectedRoute user={user}>
                  <CreatePost />
               </ProtectedRoute>
            } />
        
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
