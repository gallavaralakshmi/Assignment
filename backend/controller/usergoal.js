const { Sequelize, sequelize } = require("../models");

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
        attributes:['goal_name','status']
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

/*
async function getMonth(){
    return Usergoals.findAll(
        {
       // attributes:['created_date']
       attributes:[[sequelize.fn('month',sequelize.col('created_date')),'month']]
        }
    )
    
}

async function getAllGoalsofGivenIdandMonth(user_id){
    return Usergoals.findAll(
        {where:
            {
            user_id:user_id,
            created_date:[Sequelize.where(Sequelize.fn('MONTH',Sequelize.col(created_date)),month)]
            
        },
        attributes:['goal_name','status']
    },
    )
}
*/
async function updateStatusOfUsergoal(id){
    return Usergoals.update({
        status:"In Progrss",
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
    created_date
}){
    return Usergoals.create({
       user_id:user_id,
       goal_name:goal_name,
       created_date:created_date
    });
}
module.exports={getAllUsergoals,createUsergoal,getAllGoalsofGivenId,updateStatusOfUsergoal,deleteUsergoal,getAllGoalsofGivenIdlatestmonth};