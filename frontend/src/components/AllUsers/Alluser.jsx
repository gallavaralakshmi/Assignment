import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUsers } from "./api";

const Alluser=()=>{
    const [employees,setEmployees]=useState([]);
    const [autherror,setAuthError]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    function handleEmployees(e){
      /*  e.preventDefault();
        console.log("Inside employees data");
        console.log(`${localStorage.getItem('authToken')}`);
        const result= getUsers(localStorage.getItem('authToken'))
        result.then((response)=>{console.log(`response fetched:${response.data}`)})
        console.log("after function call:");*/

       
       // console.log(`response returned:${(response(response.data))}`)
      /*  axios({
            method:'get',
            url:'/users/employees',
            headers:{
                Authorization:'Bearer '+localStorage.getItem('authToken')
            }
        }).then((response)=>{
            console.log(response);
            setEmployees(response.data)
        }).catch((error)=>{
            console.log(error.response.data.error);
            if(error.response.status=="401"){
                console.log("Inside error setting");
                setAuthError(error.response.data.error);
                console.log({autherror});
            }
        })*/
    }
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
    useEffect(() => {
        async function fetchUsers() {
          const responses =  getUsers();
          responses.then((response) => setEmployees(response));
        }
        fetchUsers();
      }, []);
    return(
        <div>
        <div>
       <div>
       </div>
           {employees.length==0?<span>No records</span>:employees.map((employee)=>(
          <div>{employee.name}<br/> 
               {employee.email} <br/> 
               {employee.mobile}<br/>
               {employee.email}<br/>
               {employee.gdo}<br/>
             </div> 
           ))}
           
       </div>
       <p>{autherror}</p>
       </div>
      
    )
}
export default Alluser;