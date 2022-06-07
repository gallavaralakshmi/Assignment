const Users=require("../models").users;



async function checkUser(id){
    const data=Users.findOne({
        where:{
            id
        }
    })
    console.log(`data:${data}`);
    return data;

}
module.exports={checkUser};