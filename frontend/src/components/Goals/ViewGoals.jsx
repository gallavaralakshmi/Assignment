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
          const responses = getGoals(location.state.id,location.state.month);
          responses.then((response) => setGoals(response));
        }
        fetchGoals();
      }, []);
    return(
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " ,minHeight:"100vh"}}>
        <Logout/>
        
         {goals.length==0?<h3 className="click-links">No goals for {location.state.name}</h3>:
       <div>
          <h3 className="click-links">Goals of {location.state.name}</h3>
        <table>
           
          <thead>
            <tr>
              <th>Goalname</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
           {goals.map((goal)=>(
             <tr>
             <td>{goal.goal_name}</td>
             <td>{goal.status}</td>
             <td>{goal.created_date}</td>
             </tr>
           ))}
            </tbody>
        
        </table>
        </div>
      }
      <div className="click-links" style={{textDecoration:"underline",cursor:"pointer",marginTop:"20px"}} onClick={()=>{
        console.log("Inside viewing other employee goals");
        navigate(-1);
      }}>View Other Employee Goals</div>
        </body>
    )
}
export default ViewGoals;