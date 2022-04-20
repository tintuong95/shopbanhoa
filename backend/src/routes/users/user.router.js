const express =require("express")
const userController = require("../../controllers/user.controller.js")


const userRouter=express.Router()



userRouter.post("/signin",userController.checkLoginUser)

userRouter.post("/signup",userController.createUser)

userRouter.get("/checklogin",userController.checkTokenLogin)

module.exports=userRouter