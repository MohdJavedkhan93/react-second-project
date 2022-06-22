import React, { useEffect, useState} from "react";
import axios from "axios";

const UserList = (props) =>{
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
    const fetchData = async () => {
    setLoading(true)
    const user = await axios.get("https://jsonplaceholder.typicode.com/users");
        setLoading(false)
        setData(user.data)
    }
    fetchData()
},[])
// console.log(loading)
// console.log("prop", props.changeId)
return(
    <>
    <h1>UserList</h1>
    {loading ? (
        <p>loading...</p>
    ) : (
        data.map((user) =>{
            return(
                <li style={{cursor: "pointer"}} onClick={()=>{props.changeId(user.id)}} key={user.id}>
                    {" "}
                    {user.name} : {user.email}
                    console.log(user);
                    {" "}
                </li>
            )
        })
    )}
    </>
)
}
export default UserList 