import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
const Addgoal=()=>{
    const navigate = useNavigate();
    const [goal_name,setGoalname]=useState('');
    const [status,setStatus]=useState('');
    const [goalnameerror,setGoalnameerror]=useState('');
    const [userError,setUserError]=useState('');
   const  created_date=new Date().toISOString().slice(0,10);
   const userobject=JSON.parse(localStorage.getItem("userdetails"));
   const user_id=userobject.id;
    console.log(`date:${created_date}`);
    function handleForm(e){
        e.preventDefault();
        axios({
            method:'post',
            url:'/usergoals/addgoal',
            headers:{
                Authorization:'Bearer '+localStorage.getItem('authToken')
            },
            data:{user_id,goal_name,status,created_date    
            }
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
            if(err.response.data.errors){
                const errors=err.response.data.errors;
                console.log(`errors inside addgoal:${JSON.stringify(errors)}`);
                for(let i=0;i<errors.length;i++){
                    switch(errors[i].param){
                        case "goal_name":setGoalnameerror(errors[i].msg)
                        break;
                    }
                }
            }
            if(err.response.data.message){
                const error=err.response.data.message;
                console.log("Inside addgoal checking if user exists or not");
                console.log(error)
                setUserError(error);
            }
        })

    }
    return(
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " ,minHeight:"100vh"}}>
            <Logout/>
       <div>
           
           <form onSubmit={handleForm} className="update-form">
           <div className="update-header">
                       <h3 className="click-links">AddGoals</h3>
                   </div>
               <div className="update-fields">
                   <label>Goalname</label>
                   <input type="text" placeholder="Enter your goal" value={goal_name} onChange={(e)=>setGoalname(e.target.value)} />
                   <p></p>
               </div>
               <div className="update-select" >
                        <label className="register-select-label">Select Role:</label>
                        <select  value={status} onChange={(e)=>setStatus(e.target.value)}>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Failed</option>
                        </select>
                    </div>
                    <div >
                        <button className="update-button" type="submit" onClick={()=>{
                            console.log("goal added succesfully");
                            <p>Goal added</p>
                            navigate(-1);
                        }}
                        >AddGoal</button>
                    </div>
                    <p></p>
           </form>
          
           
       </div>
       </body>
    )
}
export default Addgoal;