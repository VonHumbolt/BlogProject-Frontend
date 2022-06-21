import React, {useState} from 'react'
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import PostService from '../services/PostService';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import KaanKaplanTextInput from '../utils/customFormItems/KaanKaplanTextInput';
import { useSelector } from 'react-redux/es/exports';

export default function CreatePost() {

  const user = useSelector(state => state.user)

  const [postText, setPostText] = useState("")
  
  const initValues = {
    title: "",
    description: "",
  }

  const validationSchema = yup.object({
    title: yup.string().required("Please Give a Title For Your Post"),
    description: yup.string().required("Your post must have a simple description"),
  })
  
  const postService = new PostService();

  return (
    <div>
        <Navbar />
        <header className="masthead">
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>Create New Post</h1>
                            <span className="subheading">Write about a topic you want...</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className='container px-4 px-lg-5' >
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-10">

                <Formik 
                  initialValues={initValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    values.content = postText;
                    postService.add(user.userId, values, user.token).then(result => {
                      
                      if(result.status === 201) {
                        // Post Detail e git!
                      }

                    }).catch(error => console.log(error))
                  }}
                  >

                  <Form>
                    <div className="mb-3">
                      <KaanKaplanTextInput name="title" id="postTitle" type="text" placeholder="Post Title" className="form-control"/>
                    </div>
                    <div className="mb-3">
                      <KaanKaplanTextInput name="description" type="text" id="postDescription" placeholder="Post Description" className="form-control" />
                    </div>

                    <label htmlFor="editor" className="form-label"><strong> Post Content </strong> </label>

                    <div className="editor" id="editor" style={{height:"100vh"}}>

                      <CKEditor
                        name="postContent"
                        editor={ClassicEditor}
                        data={postText}
                        config={{placeholder: "Post Content..."}} 
                        onReady={(editor) => {
                          editor.ui.view.editable.element.style.minHeight = "500px";
                        }}
                        onFocus= {(event, editor) => {
                          editor.ui.view.editable.element.style.minHeight = "500px";
                        }}
                        onChange={(event, editor) => {
                          editor.ui.view.editable.element.style.minHeight = "500px";
                          const data = editor.getData()
                          setPostText(data)
                        }} >

                        </CKEditor>

                        <div className='d-flex justify-content-end mt-4'>
                          <button type='submit' className='btn btn-primary' >Create <i className="fa-solid fa-feather-pointed"></i></button>
                        </div>

                    </div>
                  </Form>

                </Formik>
                  

                  
                </div>
            </div>
          
              
        </div>
      <Footer/>
    </div>
  )
}
