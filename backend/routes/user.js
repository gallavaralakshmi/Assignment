const express=require("express");
const router=express.Router();
const userController=require("../controller/user");
const bodyParser=require("body-parser");
const verifyToken=require("./verify");
const db = require("../models");
const jsonParser=bodyParser.json();

router.get("/employees",verifyToken.isSAdmin,async(req,res)=>{
    try{
        const users=await userController.getAllEmployees();
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/admins",verifyToken.isSAdmin,async(req,res)=>{
    try{
        const users=await userController.getAllAdmins();
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/",verifyToken.isAdmin,async(req,res)=>{
    try{
        const id=req.query.id;
        const givenUser=await db.users.findOne({where:{id}});
        console.log(`given admin gdo is:${givenUser.toJSON().gdo}`);
        const users=await userController.getAllUsersunderGdo(givenUser.toJSON().gdo,givenUser.toJSON().role);
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});



module.exports=router;