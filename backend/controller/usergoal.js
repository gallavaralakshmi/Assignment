const { status } = require("express/lib/response");
const Op = require("sequelize").Op;
const sequelize = require("sequelize");

const Usergoals=require("../models").usergoals;
const Users=require("../models").users;

async function getAllUsergoals(){
    Users.belongsTo(Usergoals, {foreignKey:'id',targetKey:'user_id'});
    return Users.findAll(
        {
        include:[
            {
                model:Usergoals,
                attributes:['goal_name','status']
            },    
        ],
        attributes:['name']
    })
}

async function getAllGoalsofGivenId(user_id){
    return Usergoals.findAll(
        {where:{
            user_id:user_id
        },
        attributes:['id','goal_name','status','created_date']
    },
    )
}

async function getAllGoalsofGivenIdlatestmonth(user_id){
    return Usergoals.findAll(
        
        {order:[["created_date","DESC"]],
        limit:1,
            where:{
            user_id:user_id
        },
        attributes:['goal_name','status'],
        
        
    },
    )
}


async function getAllGoalsofGivenIdandMonth(user_id,month){
    return Usergoals.findAll(
        {where:{
            user_id:user_id,
            [Op.and]:[
                sequelize.fn('EXTRACT(MONTH from "created_date")=',month)
            ]
        },
        attributes:['id','goal_name','status','created_date']
            
    },
    )
}

async function updateStatusOfUsergoal(id,status){
    return Usergoals.update({
        status:status,
    },
    {
        where:{id:id}
    })


}

async function updateUsergoal(id,goal_name,status){
    return Usergoals.update({
        goal_name:goal_name,
        status:status,
    },
    {
        where:{id:id}
    })


}

async function deleteUsergoal(id){
    return Usergoals.destroy(
    {
        where:{id:id}
    })
}

async function createUsergoal({
    user_id,
    goal_name,
    status,
    created_date
}){
    return Usergoals.create({
       user_id:user_id,
       goal_name:goal_name,
       status,
       created_date:created_date
    });
}
module.exports={getAllUsergoals,createUsergoal,getAllGoalsofGivenId,updateStatusOfUsergoal,updateUsergoal,deleteUsergoal,getAllGoalsofGivenIdlatestmonth,getAllGoalsofGivenIdandMonth};