import React from "react";
const List2 = () =>{
var members = [
{
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
},
{
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
},
{
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
},
{ id: 66, name: "Emmet Foster", workExp: 22, deptExp: 9, isPermanent: true },
{ id: 89, name: "Brent Dolan", workExp: 16, deptExp: 12, isPermanent: true },
];
const peremp = members.filter(
    (employee)=> employee.isPermanent == true
);
const nonperemp = members.filter(
    (employee)=> employee.isPermanent == false
    );
    return(
        <>
        <h1>peremp</h1>
        <ul>
            {peremp.map(pemp =>{
                return(<li key={pemp.id}>
                    {pemp.name}
                </li>
                )
            })}
        </ul>
        <h1>nonperemp</h1>
        <ul>
            {nonperemp.map(nemp =>{
                return(<li key={nemp.id}>
                    {nemp.name}
                </li>)
            })}
        </ul>
        </>
    )
}
export default List2