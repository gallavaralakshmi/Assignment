import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Allroles from "../AllRoles/Allroles";



const Employee=()=>{
   
    return(
      <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " ,minHeight:"100vh"}}>
      <Allroles/>
      </body>
    )
}
export default Employee;