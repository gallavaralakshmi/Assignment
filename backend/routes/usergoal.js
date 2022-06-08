const express=require("express");
const router=express.Router();
const usergoalController=require("../controller/usergoal");
const loginController=require("../controller/login");
const bodyParser=require("body-parser");
const jsonParser=bodyParser.json();
const verifyToken=require("./verify");
const db=require("../models/");
const {body,validationResult}=require("express-validator");
const validate=[
    body('goal_name').isLength({min:4,max:100}).withMessage("Description must be a sentence")
]




router.post("/addgoal",jsonParser,validate,verifyToken.isEmployee,async(req,res,next)=>{
    console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty){
        console.log("inside if");
        res.status(400).json({errors:errors.array()});
    }
    else{
    try{    
        const usercheck=loginController.checkUser(req.body.user_id);
        console.log("=========");
        console.log("UserGoal routes");
        console.log(`usercheck:${JSON.stringify(usercheck),null,2}`);
        if(usercheck)
        {
    const newusergoal=await usergoalController.createUsergoal(req.body);
    res.json({message:`Created new usergoal with usergoal_id:${newusergoal.id}`});
    }
    else{
        res.status(400).json({
            message:"User not exists"
        })
    }
    }
    catch(err){
        res.json({
            error:err.toString(),
        });
    }
}
});


router.get("/usergoal",verifyToken.isSAdmin,async(req,res)=>{
    try{
        const usergoals=await usergoalController.getAllUsergoals();
        res.json(usergoals);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});


router.get("/userid",verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router given userid:${req.query.user_id}`)
        const goals=await usergoalController.getAllGoalsofGivenId(req.query.user_id);
        res.json(goals);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});


router.get("/monthly/userid",verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router given userid:${req.query.user_id}`)
        const goals=await usergoalController.getAllGoalsofGivenIdlatestmonth(req.query.user_id);
        res.json(goals);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});
/*
router.get("/userid/month",verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router given userid:${req.query.user_id}`)
        const goals=await usergoalController.getAllGoalsofGivenIdandMonth(req.query);
        res.json(goals);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});


router.get("/month",async(req,res)=>{
    try{
        console.log(`usergoals router given month`)
        const months=await usergoalController.getMonth(req.query);
        res.json(months);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

*/

router.put("/updatestatusofgoal",jsonParser,verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router for put given usergoalid:${req.body.id}`)
        const goals=await usergoalController.updateStatusOfUsergoal(req.body.id,req.body.status);
        res.json({
            message:"Goal Status updated successfully "
            
        });
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.put("/updategoal",jsonParser,verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router for put given usergoalid:${req.body}`)
        const goals=await usergoalController.updateUsergoal(req.body.id,req.body.goal_name,req.body.status);
        res.json({message:"Goal updated Successfully"});
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.delete("/DELETE",verifyToken.isEmployee,async(req,res)=>{
    try{
        console.log(`usergoals router for delete given usergoalid:${req.query.id}`)
        const goals=await usergoalController.deleteUsergoal(req.query.id);
        res.json({
            message:"Selected goal deleted successfully"
        });
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});
module.exports=router;