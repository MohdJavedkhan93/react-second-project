import React from "react";
class Header5 extends React.Component{
    constructor(){
        super();
        this.state = {
            user : {
                firstName : "Abrar",
                lastName : "Ali",
            },
            count : 1
        };
    }
    checkMyName = () =>{
        const user = {...this.state.user};
        user.lastName = "Khan";
        this.setState({user})
    }
    updateCount = () =>{
        this.setState({count : this.state.count + 1})
    }
    render(){
        return (
        <>
        <div>
            <h1>
                {this.state.user.firstName}...{this.state.user.lastName}
            </h1>
            <a onClick={this.checkMyName} style={{ cursor: "pointer" }}>
                Click Me
            </a>
            </div>
            <div>
            <button onClick={this.updateCount}>Update Count</button>
            <h1>{this.state.count}</h1>
            </div>
        </>
        );
    }
}
export default Header5