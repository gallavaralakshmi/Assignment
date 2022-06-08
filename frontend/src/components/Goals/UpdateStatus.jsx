import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
const UpdateStatus=()=>{
    const navigate = useNavigate();
    const [status,setStatus]=useState('');
    const [userError,setUserError]=useState('');
    const [goalnameerror,setGoalnameerror]=useState('');
    const location=useLocation();
    const id=location.state.id;
    function handleForm(e){
        e.preventDefault();
        axios({
            method:'put',
            url:'/usergoals/updatestatusofgoal',
            headers:{
                Authorization:'Bearer '+localStorage.getItem('authToken')
            },
            data:{id,status   
            }
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
            if(err.response.data.message){
                const error=err.response.data.message;
                console.log("Inside addgoal checking if user exists or not");
                console.log(error)
                setUserError(error);
            }
        })

    }
    return(
        <div>
        <Logout/>
        <form onSubmit={handleForm} className="register-form">
        <div className="register-header">
                    <h3>UpdateStatus</h3>
                </div>
            <div className="register-select" >
                     <label className="register-select-label">Select Role:</label>
                     <select  value={status} onChange={(e)=>setStatus(e.target.value)}>
                         <option>In Progress</option>
                         <option>Completed</option>
                         <option>Failed</option>
                     </select>
                 </div>
                 <div className="register-button">
                     <button type="submit" onClick={()=>{
                         console.log("goal updated succesfully");
                         <p>Status Updated</p>
                         navigate(-1);
                     }}
                     >UpdateGoalStatus</button>
                 </div>
                 <p></p>
        </form>
       
        
    </div>
    )
}
export default UpdateStatus;