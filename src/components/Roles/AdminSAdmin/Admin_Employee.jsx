import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeesOfAdmin } from "./adminsadminapi";
const AdminSAdmin = (props) => {
    console.log(`received admin id is:${props.id}`);
    const [employees, setEmployees] = useState([]);
    const userobject = JSON.parse(localStorage.getItem("userdetails"));
    console.log(userobject.name);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
            navigate("/mainpage");
        }
    });
    useEffect(() => {
        async function fetchEmployeesOfAdmin() {
            console.log("INside fetching employees of particular admin");
            const responses = getEmployeesOfAdmin(props.id);
            responses.then((response) => setEmployees(response));
        }
        fetchEmployeesOfAdmin();
    }, []);
    return (
        <>
            {employees.length == 0 ? <span>No Employees under you</span> :
                <div> <h3 className="click-links">Employees under {userobject.name} are:</h3>
                    <table>

                        <thead>
                            <th>Username</th>
                            <th>View Goals</th>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => {
                                        console.log(`employee id:${employee.id} ${employee.name}`);
                                        navigate("/viewgoals", { state: { id: employee.id, name: employee.name } })
                                    }}
                                    >View Goals</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
export default AdminSAdmin;