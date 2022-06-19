import React from 'react'
import {Link} from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className='d-flex justify-content-center align-items-center text-center' style={{height:"75vh"}}>
        
            <main>
                <h1>Ups...There is nothing in here!</h1>
                <h3>404 Page Error</h3>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <Link to="/">
                            <button className='btn btn-primary'>Home Page <i className="fa-solid fa-house"></i></button>
                        </Link> 
                    </div>
                    <div className='col-6'>
                        <Link to="/posts">
                            <button className='btn btn-primary'>Posts <i className="fa-solid fa-paste"></i></button>
                        </Link> 
                    </div>
                </div>
            </main>

    </div>
  )
}
