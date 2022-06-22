import React, { useEffect, useState } from "react";
import axios from "axios";
const UserDetail =(props) =>{
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() =>{
const getUserDetails = async () =>{
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
    
    setUser(userData.data)
    setLoading(false)
}
if(props.userId) {getUserDetails()
}
},[props.userId])
// console.log("userid-->",props.userId)

// console.log("user--->", user)
return(
    <>
    <h1>UserDetail</h1>
    {loading ? "Data is Loading..." : user.email} 
    {/* <>{<p> {user.name}...{user.email}</p>} </> */}
    
    </>

)
}
export default UserDetail

