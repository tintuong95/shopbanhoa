const express=require("express")
const categoryController = require("../../controllers/category.controller.js")


const categoryRouter=express.Router()

categoryRouter.get("/",categoryController.getAllCategory)

categoryRouter.post("/",categoryController.createCategory)

module.exports=categoryRouter