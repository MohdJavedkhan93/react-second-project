import React, { useEffect, useState,  } from "react";
import axios from "axios";

const PostList = (props) =>{
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() =>{
const fetchData = async () =>{
const post = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setLoading(false)
    setData(post.data)
}
fetchData()
},[])
return(
    <>
    <h1>PostList</h1>
    {loading ? (
        <p>data is loading</p>
    ) : (
        data.map((post) =>{
            return(
                <li style={{cursor: "pointer"}} onClick={()=>{props.changeId(post.id)}} key={post.id}>
                    {" "}
                    {post.title}
                </li>
            )
        })
    )
}
    </>
)
}
export default PostList