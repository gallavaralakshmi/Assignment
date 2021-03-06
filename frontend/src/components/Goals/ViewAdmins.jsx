
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import AdminSAdmin from "../Roles/AdminSAdmin/AdminSAdmin";
import { getAdmins } from "../Roles/SAdmin/sadminapi";
import "../../CSS/viewgoals.css";
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
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " ,minHeight:"100vh"}}>
        <Logout/>
         {admins.length==0?<h3 className="click-links">No Admins</h3>:
     <div>
       <h3 className="click-links">Admins</h3>
        <table>  
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>GDO</th>
              <th>Employees</th>
            </tr>
            </thead>
            <tbody>
           {admins.map((admin)=>(
             <tr>
             <td>{admin.name}</td>
             <td>{admin.email}</td>
             <td>{admin.gdo}</td>
             <td style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
               console.log("ho"+admin.id);
               navigate("/adminsadmin",{state:{id:admin.id,name:admin.name,gdo:admin.gdo}})
             }}>View Employees</td>
             </tr>
           ))}
         
            </tbody>
        </table>
        </div>
      }
        </body>
    )
}
export default ViewAdmins;