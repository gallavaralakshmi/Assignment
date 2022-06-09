import React from "react";
import { useNavigate } from "react-router-dom";
import Allroles from "../AllRoles/Allroles";
const SAdmin=()=>{
    const navigate=useNavigate();
    return(
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " ,minHeight:"100vh"}}>
        <Allroles/>
        <p className="click-links" style={{textDecoration:"underline",cursor:"pointer"}}
        onClick={()=>{
        navigate("/viewadmins")}}
        >View All Admins</p>
        </body>
    )
}
export default SAdmin;