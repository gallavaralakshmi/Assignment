const express=require("express");
const router=express.Router();
const loginController=require("../controller/login");
const bodyParser=require("body-parser");
const jsonParser=bodyParser.json();
const jwt=require('jsonwebtoken');
const bcrypt=require("bcrypt");
const db=require("../models/");
const {body,validationResult}=require("express-validator");

const validate=[
    body('email')
    .isEmail().withMessage("Enter valid email"),
    body('password').notEmpty().withMessage('Password not be empty')
]

router.post("/",jsonParser,validate,async(req,res,next)=>{
    console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{
    try{ 
        const email=req.body.email;   
    const givenUser=await db.users.findOne({where:{email:email}});
    console.log(givenUser);
    if(!givenUser){
        res.status(400).json({
            message:"Not a valid user u can register"
        });
    }
    else{
        let givenUserPassword=givenUser.toJSON().password;
        console.log(`Userpassword:${givenUserPassword}`);
        console.log(`givenPassword:${req.body.password}`);
        const checkPassword=bcrypt.compareSync(req.body.password,givenUserPassword);
        console.log(`Check user password result:${checkPassword}`);
        const payload={email:req.body.email,password:req.body.password}
        if(checkPassword){
            let givenUserRole=givenUser.toJSON().role;
            console.log(`givenUserRole:${givenUserRole}`);
            if(givenUserRole=="SAdmin"){
                payload.isSAdmin=true;
                payload.isAdmin=true;
                payload.isEmployee=true;
            }
            else if(givenUserRole=="Admin"){
                payload.isSAdmin=false;
                payload.isAdmin=true;
                payload.isEmployee=true;
            }
            else if(givenUserRole=="Employee"){
                payload.isSAdmin=false;
                payload.isAdmin=false;
                payload.isEmployee=true;
            }
            console.log(`Payload:${JSON.stringify(payload)}`);
            const token=jwt.sign(payload,"secret123");
            res.json({jwt:token,details:givenUser});
        }
        else{
            res.status(400).json({
                message:'Password is not valid'
            })
        }
    }
    }
    catch(err){
        res.json({
            error:err.toString(),
        });
    }
}
});

module.exports=router;