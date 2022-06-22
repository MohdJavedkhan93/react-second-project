import React from "react";
class Header4 extends React.Component{
    constructor(){
        super();
        this.state ={
            user:{
            firstName : "Zahid",
            lastName : "khan",
    },
    count : 1
    };
    this.checkMyName = this.checkMyName.bind(this);
    }
    checkMyName = function (){
        this.setState({
            user:{
                firstName : "Zuber",
                lastName : "Zak",
            },
        });
    }
    updateCount = () =>{
        this.setState({count : this.state.count + 1})
    }
    render(){
        return(
            <>
            <div>
                <h1>{this.state.user.firstName}..{this.state.user.lastName}</h1>
                <a onClick={this.checkMyName} style={{cursor: "pointer"}}>click</a>
                </div>
                <div>
                <button onClick={this.updateCount}>Update Count</button>
                <h1>{this.state.count}</h1>
            </div>
            </>
        )
    }
}
export default Header4