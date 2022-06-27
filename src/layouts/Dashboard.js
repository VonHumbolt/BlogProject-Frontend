import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Route,Routes } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import EditPost from '../pages/EditPost'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import PostDetail from '../pages/PostDetail'
import Posts from '../pages/Posts'
import Profile from '../pages/Profile'
import ProtectedRoute from '../pages/ProtectedRoute'
import Register from '../pages/Register'

export default function Dashboard() {

  // const user = useSelector(state => state.user)
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(JSON.parse( localStorage.getItem("user")))
  }, [])

  return (
    <div>
        <Routes>
           
            <Route exact path="/" element={<HomePage />}/>
            <Route path="posts" element={<Posts />}>
               
            </Route>
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="login/:first" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile/:userId" element={<Profile />} />
           
            <Route path="createPost" element={
              // <ProtectedRoute user={user}>
                  <CreatePost />
              //  </ProtectedRoute>
            } />
        
            <Route path="edit/:postId" element={
              <ProtectedRoute user={user}>
                <EditPost />
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
