import React, { useEffect, useState } from "react";
import axios from "axios";
const PostDetails =(props) =>{
const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() =>{
const getPostdetails = async() =>{
const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.postId}`)
setLoading(false);
setPost(postData.data)
}
if(props.postId){getPostdetails()
}
},[props.postId])
return (
<>
    <h1>PostDetails</h1>
    {loading ? "Data is Loading..." : post.title}
</>
);
}
export default PostDetails