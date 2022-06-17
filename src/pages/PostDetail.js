import React from 'react'
import {useParams} from "react-router-dom";

export default function PostDetail() {
    let params = useParams();
  return (
    <div>

        PostDetail
        <p>{params.postId}</p>
    </div>
  )
}
