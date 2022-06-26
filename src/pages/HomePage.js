import React from 'react'
import {useNavigate} from "react-router-dom"
import blog_svg3 from "../images/blog_svg3.svg"
import wave from "../images/wave.svg"
import blog_svg4 from "../images/blog_svg4.svg"

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <div className='bg-dark'>
            <div className='px-4 py-5' style={{height:"50vh", backgroundImage: `url(${wave})`, backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>

                <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#273036", fontFamily: "sans-serif"}}>
                    <div class="container px-4 px-lg-5">
                        
                            <a class="navbar-brand text-white" href="#" onClick={() => navigate("/")}>
                                <h1>BLOG-APP</h1> 
                            </a>
                        <button class="navbar-toggler text-white" style={{border: "1px solid transparent", borderColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <i className="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ms-auto py-4 py-lg-0 text-white">
                                <li className="nav-item">
                                    <a className="nav-link px-lg-3 py-3 py-lg-4 text-white" href='#' onClick={() => navigate("/posts")}>
                                        <h4> ARTICLES </h4>
                                    </a>
                                </li>
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" href='#' onClick={() => navigate("/login")}>
                                    <h4>
                                        LOGIN
                                    </h4>
                                </a></li>
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 text-white" href='#' onClick={() => navigate("/register")}>
                                    <h4>
                                        REGISTER
                                    </h4>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                    
            </div>

            <section className="text-light bg-dark">
                <h1 className='text-center'>EXPLORE POSTS WHICH ABOUT DIFFERENT TOPICS</h1>
                <div className="container mt-5">
                    <div className="row justify-content-between align-items-center g-2">
                        <div className="col-md text-center">
                            <h1> What's Blog App</h1>
                            <p className="lead my-3">
                                Blog App is a sharing platform with more than 1000 blog posts in it. 
                                Many authors share about the topics they are interested in. You can like the ones you like by reading these posts.
                                Join now and discover posts on different topics
                            </p>
                            <button className="btn btn-primary my-2 mx-2" onClick={() => navigate("/login")}>Sign In</button>
                            <button className="btn btn-primary my-2" onClick={() => navigate("/posts")}>Get Started <i class="fa-solid fa-chevron-right"></i></button>

                        </div>
                        <div className="col-md text-center">
                            <img src={blog_svg3} alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>
            {/* 212529 */}
            <section className="text-dark bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,256L30,218.7C60,181,120,107,180,96C240,85,300,139,360,149.3C420,160,480,128,540,112C600,96,660,96,720,112C780,128,840,160,900,154.7C960,149,1020,107,1080,90.7C1140,75,1200,85,1260,112C1320,139,1380,181,1410,202.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <img src={blog_svg4} alt="" className="img-fluid w-100" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h1 className="mb-3">How Can I Become An Author?</h1>
                            <p>
                                Start writing and publishing blog posts on a topic you want right now.
                                Let other people read what you share and like your posts. 
                                Easily convey what you know about a topic to others.                                
                                To write, all you have to do is create an account!


                            </p>
                            <button className="btn btn-dark my-4" onClick={() => navigate("/register")}>Create Account</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-white bg-dark pb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0085A1" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,133.3C240,139,300,149,360,144C420,139,480,117,540,90.7C600,64,660,32,720,21.3C780,11,840,21,900,21.3C960,21,1020,11,1080,42.7C1140,75,1200,149,1260,165.3C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row justify-content-center align-items-start">
                        <div className="col-md-6 text-center">
                            <h2 className="mb-3">About Blog App</h2>
                            <p className="lead">
                                In this blog app you can share your ideas with other people and learn their ideas while reading their posts.
                                After creating an account, you can write and like posts. You can view the posts you like on your profile.
                                You can edit your posts after sharing them. If you are looking for a specific post, you can easily filter the posts. 
                            </p>
                        </div>
                    </div>
                </div>
                

                    <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                                        <i className="fab fa-twitter fa-stack-1x "></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/VonHumbolt/BlogProject-Frontend">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                                        <i className="fab fa-github f fa-stack-1x"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/kaan-kaplan/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                                        <i className="fab fa-linkedin fa-stack-1x"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>


            </section>

    </div>
  )
}
