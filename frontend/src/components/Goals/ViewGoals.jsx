import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import { getGoals } from "../Roles/AllRoles/allrolesapi";
const ViewGoals=()=>{
    const [goals,setGoals]=useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(`id:${location.state.id} name:${location.state.name}`);
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
    useEffect(() => {
        async function fetchGoals() {
          console.log("Inside fetchgoals");
          const responses = getGoals(location.state.id);
          responses.then((response) => setGoals(response));
        }
        fetchGoals();
      }, []);
    return(
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg')"}}>
        <Logout/>
         <h3>Goals of {location.state.name}</h3>
         {goals.length==0?<span>No goals for {location.state.name}</span>:
       
        <table>
           
          <thead>
            <tr>
              <th>Goalname</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            <tbody>
           {goals.map((goal)=>(
             <tr>
             <td>{goal.goal_name}</td>
             <td>{goal.status}</td>
             <td>{goal.created_date}</td>
             </tr>
           ))}
         
            </tbody>
          </thead>
        </table>
      }
      <div style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
        console.log("Inside viewing other employee goals");
        navigate(-1);
      }}>View Other Employee Goals</div>
        </body>
    )
}
export default ViewGoals;