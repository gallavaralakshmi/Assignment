import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getGoals } from "./employeeapi";


const Employee=()=>{
    const [goals,setGoals]=useState([]);
    const [autherror,setAuthError]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    console.log("userdetails of employee");
    const userobject=JSON.parse(localStorage.getItem("userdetails"));
    console.log(userobject.name);
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
    useEffect(() => {
        async function fetchGoals() {
          console.log("Inside fetchgoals");
          const responses = getGoals(userobject.id);
          responses.then((response) => setGoals(response));
        }
        fetchGoals();
      }, []);
    return(
        <div>
        <div>
       <div>
       </div>
           {goals.length==0?<span>No records</span>:goals.map((goal)=>(
          <div>{goal.goal_name}<br/> 
               {goal.status} <br/> 
              
             </div> 
           ))}
           
       </div>
       <p>{autherror}</p>
       </div>
      
    )
}
export default Employee;