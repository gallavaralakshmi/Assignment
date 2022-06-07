const jwt=require('jsonwebtoken');
/*
const verify=(req,res,next)=>{
    const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader){
            const token=authorizationHeader.split(' ')[1];
            if(token){
                try{
                    var decoded=jwt.verify(token,'secret123');
                    next();
                }
                catch(error){
                    res.json({
                        error:error.toString(),
                    });
                }
            }else{
                res.json({
                    message:'Token Missing'
                })
            }
        }
        else{
            res.json({
                message:'authorizationHeader Missing'
            })
        }
}

module.exports=verify;
*/
function isEmployee(req, res, next) {
  console.log(`Inside jwtUtil.isAdmin check `);
  const authHeader = req.headers['authorization'];
  console.log(`authHeader: ${authHeader}`);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(`token: ${token}`);

    try {
      const payload = jwt.verify(token,"secret123")
      console.log(`payload: ${JSON.stringify(payload)}`);
      if (payload.isEmployee||payload.isAdmin||payload.isSAdmin) {
        next();
      } else {
        res
          .status(401)
          .send({ error: "Only users can do this" });
      }
    } catch (err) {
      console.log(err);
      res.status(401).send({ error: err });
    }
  } else {
    console.log("Authorization header missing");
    res.status(401).send({ error: "Authorization header missing" });
  }
}

function isAdmin(req, res, next) {
    console.log(`Inside jwtUtil.isAdmin check `);
    const authHeader = req.headers['authorization'];
    console.log(`authHeader: ${authHeader}`);
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      console.log(`token: ${token}`);
  
      try {
        const payload = jwt.verify(token,"secret123")
        console.log(`payload: ${JSON.stringify(payload)}`);
        if (payload.isAdmin||payload.isEmployee) {
          next();
        } else {
          res
            .status(401)
            .send({ error: "Only admin is allowed to do this" });
        }
      } catch (err) {
        console.log(err);
        res.status(401).send({ error: err });
      }
    } else {
      console.log("Authorization header missing");
      res.status(401).send({ error: "Authorization header missing" });
    }
  }

  function isSAdmin(req, res, next) {
    console.log(`Inside jwtUtil.isAdmin check `);
    const authHeader = req.headers['authorization'];
    console.log(`authHeader: ${authHeader}`);
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      console.log(`token: ${token}`);
  
      try {
        const payload = jwt.verify(token,"secret123")
        console.log(`payload: ${JSON.stringify(payload)}`);
        if (payload.isSAdmin) {
          next();
        } else {
          res
            .status(401)
            .send({ error: "Only super admin is allowed" });
        }
      } catch (err) {
        console.log(err);
        res.status(401).send({ error: err });
      }
    } else {
      console.log("Authorization header missing");
      res.status(401).send({ error: "Authorization header missing" });
    }
  }

  module.exports={isSAdmin,isAdmin,isEmployee}