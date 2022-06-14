import React from "react";
import AdminSAdmin from "../AdminSAdmin/Admin_Employee";
import Allroles from "../Goals/Goals";

const Admin = () => {
    const userobject = JSON.parse(localStorage.getItem("userdetails"));
    return (
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
            <Allroles />
            <AdminSAdmin id={userobject.id} />
        </body>
    )
}
export default Admin;