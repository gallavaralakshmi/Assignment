import React from "react";
import { useState } from 'react';
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
const Header = () => {
  const navigate=useNavigate();
return(
  <>

    <Nav className="justify-content-end" activeKey="mainpage"
    onSelect={(selectedKey)=>{
      console.log(`selected ${selectedKey}`);
      if(selectedKey=="mainpage")
      {
        navigate("/mainpage");
       
      }
    }}
    >
      <Nav.Item>
        <Nav.Link href="mainpage">GoalTracker</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
)
}
export default Header;