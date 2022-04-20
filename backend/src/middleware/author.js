

const jwt =require("jsonwebtoken")
const md5=require("md5")

 const authorUser=(req,res,next)=>{
    const accessToken=req.header("Authorization")
    
    const token=accessToken.split(" ")[1]
    if(!token) return res.sendStatus(404)
    try{
        const decode=jwt.verify(token,md5("key_access_token"))
        next()
    }catch(err){
        return res.sendStatus(404)
    }
}

module.exports=authorUser