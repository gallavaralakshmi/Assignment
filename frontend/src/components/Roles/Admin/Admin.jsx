import React from "react";

import AdminSAdmin from "../AdminSAdmin/AdminSAdmin";
import Allroles from "../AllRoles/Allroles";

const Admin = () => {
    const userobject=JSON.parse(localStorage.getItem("userdetails"));
    return (
        <>
            <Allroles />
            <AdminSAdmin id={userobject.id} />
        </>
    )
}
export default Admin;