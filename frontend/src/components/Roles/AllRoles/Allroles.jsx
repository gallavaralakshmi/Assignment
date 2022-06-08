import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../Home/Logout/Logout";
import { deleteGoal, getGoals } from "./allrolesapi";
import "../../../CSS/viewgoals.css";


const Allroles=()=>{
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
      <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg')"}}>
      <div className="viewgoals-page">
          <Logout/>
        <h3 className="viewgoals-head">Welcome {userobject.name}</h3>
        {goals.length==0?<span>You didn't set any goals</span>:
        <table>
          <thead>
            <tr>
              <th>Goalname</th>
              <th>Status</th>
              <th>Date</th>
              <th>Delete</th>
              <th>Update</th>
              <th>UpdateStatus</th>
            </tr>
            </thead>
            <tbody>
           {goals.map((goal)=>(
             <tr>
             <td>{goal.goal_name}</td>
             <td>{goal.status}</td>
             <td>{goal.created_date}</td>
             <td>
               <button onClick={()=>{
                 console.log(`created date:${JSON.stringify(goal)}`)
                 deleteGoal(goal.id)
                 window.location.reload(false)
               }}>Delete Goal</button>
             </td>
             <td>
               <button onClick={( )=>{
                  console.log(`update goal of ${goal.id}`);
                  navigate("/updategoal",{state:{id:goal.id}})
                  window.location.reload(false)
               }}>Update Goal</button>
             </td>
             <td>
               <button onClick={( )=>{
                  console.log(`update status of goal of ${goal.id}`);
                  navigate("/updatestatus",{state:{id:goal.id}})
                  window.location.reload(false)
               }}>Update Status</button>
             </td>
             </tr>
           ))}
         
            </tbody>
         
        </table>
      }<br/>
<button className="viewgoals-button" onClick={()=>{
  navigate("/addgoal")
}}>Add Goal</button>
      </div>
      <p style={{ height: "500px" }}></p>
      </body>
    )
}
export default Allroles;