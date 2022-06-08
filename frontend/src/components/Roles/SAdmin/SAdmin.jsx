import React from "react";
import { useNavigate } from "react-router-dom";
import Allroles from "../AllRoles/Allroles";
const SAdmin=()=>{
    const navigate=useNavigate();
    return(
        <>
        <Allroles/>
        <p style={{textDecoration:"underline",cursor:"pointer"}}
        onClick={()=>{
           // console.log(`employee id:${employee.id} ${employee.name}`);
        navigate("/viewadmins")}}
        >View All Admins</p>
        </>
    )
}
export default SAdmin;