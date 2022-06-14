async function getEmployeesOfAdmin(id) {
    console.log("inside getemployeesofadmin  function")
    console.log(id);
    console.log(typeof (id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method: "GET",
    };
    return fetch(`users/employeesunderadmin/?id=${id}`, requestedOptions)
        .then((response) => response.json())
        .catch((error) => error)

}
export { getEmployeesOfAdmin };