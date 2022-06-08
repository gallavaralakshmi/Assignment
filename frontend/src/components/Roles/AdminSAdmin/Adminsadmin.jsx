import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getEmployeesOfAdmin } from "./adminsadminapi";
const Adminsadmin=()=>{
    const location=useLocation();
    console.log(`received admin id is:${location.state.id} ${location.state.name}`);
    const [employees,setEmployees]=useState([]);
    const userobject=JSON.parse(localStorage.getItem("userdetails"));
    console.log(userobject.name);
    const navigate=useNavigate();
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
   useEffect(()=>{
       async function fetchEmployeesOfAdmin(){
           console.log("INside fetching employees of particular admin");
           const responses=getEmployeesOfAdmin(location.state.id);
           responses.then((response)=>setEmployees(response));
       }
       fetchEmployeesOfAdmin();
   },[]);
    return(
        <>
           {employees.length==0?<span>No Employees under you</span>:
           <div> <h3>Employees under {location.state.name} are:</h3>
        <table>
           
            <thead>
                <th>Username</th>
                <th>View Goals</th>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                <tr>
                    <td>{employee.name}</td>
                    <td style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
                        console.log(`employee id:${employee.id} ${employee.name}`);
                    navigate("/viewgoals",{state:{id:employee.id,name:employee.name}})}}
                    >View Goals</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
 }  
  <div style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
        console.log("Inside viewing other admins");
        navigate(-1);
      }}>View Other Admins</div>
        
        </>
    )
}
export default Adminsadmin;