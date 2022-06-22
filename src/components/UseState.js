import React, {useState} from "react";
const Header3 = (props) =>{
    const[count, setCount] = useState(9)
    const updateCount = () =>{
        setCount(count+1)
    }
    return(
        
        <div>
            <h1>{props.firstName}</h1>
            <h2>{props.lastName}</h2>
            <h1>{count}</h1>
            <button onClick={updateCount}>update count in fn components</button>
        </div>
        
    )
}
export default Header3