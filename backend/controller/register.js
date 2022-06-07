const Users=require("../models").users;


async function createUser({
   name,age,skills,email,password,mobile,gdo,role
}){
    console.log("Inside create users")
    return Users.create({
        name:name,
        age:age,
        skills:skills,
        email:email,
        password:password,
        mobile:mobile,
        gdo:gdo,
        role:role,
    });
}


module.exports={createUser};