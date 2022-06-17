import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PostDetail from '../pages/PostDetail'
import Posts from '../pages/Posts'

export default function Dashboard() {
  return (
    <div>
        <Routes>
           
            <Route exact path="/" element={<Posts />}/>
            <Route path="posts" element={<Posts />}>
               
            </Route>
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="login" element={<Login />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
                />
        </Routes>

    </div>
  )
}
