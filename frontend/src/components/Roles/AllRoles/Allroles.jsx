import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../Home/Logout/Logout";
import { deleteGoal, getGoals } from "./allrolesapi";
import "../../../CSS/viewgoals.css";


const Allroles=()=>{
  const current_month=new Date().toISOString().slice(5,7);
  console.log("Inside all roles selecting current month"+current_month);
    const [goals,setGoals]=useState([]);
    const [autherror,setAuthError]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const [month,setMonth]=useState(current_month)
    console.log("userdetails of employee");
    const userobject=JSON.parse(localStorage.getItem("userdetails"));
    console.log(userobject.name);
    const handleChange=(event)=>{
      setMonth(event.target.value);
    }
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
    useEffect(() => {
        async function fetchGoals() {
          console.log("Inside fetchgoals");
          const responses = getGoals(userobject.id,month);
          responses.then((response) => setGoals(response));
        }
        fetchGoals();
      }, []);

     /* const onClickhandler=()=>{
        console.log("onclickhandler of month")
        console.log(`${userobject.id} and ${month}`);
        const responses=getGoals(userobject.id,month);
        responses.then((response)=>{console.log(response);setGoals(response);})
      
  
}*/
    return(
      <body  style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') "}}>
      <div className="viewgoals-page">
          <Logout/>
        <h3 className="viewgoals-head">Welcome {userobject.name}</h3>
        <label htmlFor="selectmonth">Select Month</label>
        <input type="month"  onChange={handleChange}  value={month}/>
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
      </body>
    )
}
export default Allroles;