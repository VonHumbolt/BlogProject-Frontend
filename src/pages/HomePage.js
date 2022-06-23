import React from 'react'
import blog_svg from "../images/blog_svg.jpg"
import blog_svg3 from "../images/blog_svg3.svg"
import blog_svg2 from "../images/blog_svg2.jpg"
import blog_svg4 from "../images/blog_svg4.svg"

export default function HomePage() {
  return (
    <div>

            <section className="text-light bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#273036" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,213.3C840,224,960,160,1080,133.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                
                    </path>
                </svg>
                <h1 className='text-center'>EXPLORE POSTS WHICH ABOUT DIFFERENT TOPIC</h1>
                <div className="container mt-5">
                    <div className="row justify-content-between align-items-center g-2">
                        <div className="col-md text-center">
                            <h1> Blog App</h1>
                            <p className="lead my-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit consequuntur in modi, repellat esse iure aliquam. Corrupti, nobis libero!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit consequuntur in modi, repellat esse iure aliquam. Corrupti, nobis libero!
                            </p>
                            <button className="btn btn-primary my-2">Get Started</button>
                            <button className="btn btn-primary my-2 mx-2">Sign In</button>

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
                            <img src={blog_svg4} alt="" className="img-fluid d-none d-sm-block" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h2 className="mb-3">How Can I Become An Author?</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore porro tenetur, tempora quidem, repellat eos iure dolor molestiae aperiam molestias amet nam rerum recusandae, dolorum ratione. Corporis, at cupiditate!
                            </p>
                            <button className="btn btn-dark my-4">Create Account</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-white bg-dark'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0085A1" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,133.3C240,139,300,149,360,144C420,139,480,117,540,90.7C600,64,660,32,720,21.3C780,11,840,21,900,21.3C960,21,1020,11,1080,42.7C1140,75,1200,149,1260,165.3C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row justify-content-center align-self-baseline">
                        <div className="col-md-6 text-center">
                            <h2 className="mb-3">About Blog App</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore porro tenetur, tempora quidem, repellat eos iure dolor molestiae aperiam molestias amet nam rerum recusandae, dolorum ratione. Corporis, at cupiditate!
                            </p>
                        </div>
                    </div>
                </div>

            </section>

    </div>
  )
}
