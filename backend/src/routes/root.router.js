const express=require("express")
const categoryRouter = require("./categorys/category.router.js")
const productRouter = require("./products/products.router.js")
const userRouter = require("./users/user.router.js")

const rootRouter=express.Router()



rootRouter.use("/products",productRouter)


rootRouter.use("/login",userRouter)


rootRouter.use("/categorys",categoryRouter)

module.exports=rootRouter