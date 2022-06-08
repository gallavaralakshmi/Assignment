var Sequelize = require('sequelize');
const Op=Sequelize.Op;

const Users=require("../models").users;

async function getAllEmployees(){
    return Users.findAll({
        where:{
            role:'Employee'
        },
        attributes:['name','email','mobile','gdo','role']
    })
}

async function getAllAdmins(){
    return Users.findAll({
        where:{
            role:'Admin'
        },
        attributes:['id','name','email','mobile','gdo','role']
    })
}

async function getAllUsersunderGdo(gdo,role){
    return Users.findAll({
        where:{
            gdo:gdo,
            role:{
            [Op.ne]:role
            }
        },
        attributes:['id','name','email','mobile','gdo','role']
    })
}

async function createUser({
   name,age,skills,email,password,mobile,gdo,role
}){
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

async function checkUser(email){
    const data=Users.findOne({
        where:{
            email
        }
    })
    console.log(`data:${data}`);
    return data;

}
module.exports={getAllEmployees,getAllUsersunderGdo,getAllAdmins};