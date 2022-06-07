async function getGoals(id){
    console.log("inside getgoals of employee function")
    console.log(id);
    console.log(typeof(id));
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions={
        headers:{
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method:"GET",
    };
    return fetch(`usergoals/monthly/userid/?user_id=${id}`,requestedOptions)
    .then((response)=>response.json())
    .catch((error)=>error)
}

export {getGoals};