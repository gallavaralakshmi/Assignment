
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import AdminSAdmin from "../Roles/AdminSAdmin/AdminSAdmin";
import { getAdmins } from "../Roles/SAdmin/sadminapi";
const ViewAdmins=()=>{
    const [admins,setAdmins]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          navigate("/mainpage");
        }
      });
    useEffect(() => {
        async function fetchAdmins() {
          console.log("Inside fetchgoals");
          const responses = getAdmins();
          responses.then((response) => setAdmins(response));
        }
        fetchAdmins();
      }, []);
    return(
        <>
        <Logout/>
         {admins.length==0?<span>No Admins</span>:
       
        <table>
           
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>GDO</th>
              <th>Employees</th>
            </tr>
            <tbody>
           {admins.map((admin)=>(
             <tr>
             <td>{admin.name}</td>
             <td>{admin.email}</td>
             <td>{admin.gdo}</td>
             <td style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
               console.log("ho"+admin.id);
               navigate("/adminsadmin",{state:{id:admin.id,name:admin.name}})
             }}>View Employees</td>
             </tr>
           ))}
         
            </tbody>
          </thead>
        </table>
      }
        </>
    )
}
export default ViewAdmins;