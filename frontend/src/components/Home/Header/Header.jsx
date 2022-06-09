import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../CSS/footer.css";

const Header = () => {
  const navigate=useNavigate();
return(
  <div className="home-container">

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
  </div>
)
}
export default Header;