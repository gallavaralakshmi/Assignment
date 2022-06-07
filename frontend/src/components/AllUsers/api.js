import axios from "axios";
/*
async function getUsers(authToken){
    axios({
        method:'get',
        url:'/users/employees',
        headers:{
            Authorization:'Bearer '+authToken
        }
    }).then((response)=>{
        console.log('function')
        console.log(response.data)
        return JSON.stringify(response);
    });
}
*/

async function getUsers(){
    console.log(`authToken:${localStorage.getItem("authToken")}`);
    const requestedOptions={
        headers:{
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        method:"GET",
    };
    return fetch(`/users/employees`,requestedOptions)
    .then((response)=>response.json())
    .catch((error)=>error)
}

export {getUsers};