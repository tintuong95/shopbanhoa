const express =require("express")
const Products = require("../../controllers/product.controller.js")

const productRouter=express.Router()



productRouter.get("/",Products.getAllProductByTypeOffsetLimit)

productRouter.get("/size",Products.getAllProductsTotal)

productRouter.get("/:id",Products.getProductsById)

productRouter.post("/",Products.createProduct)

productRouter.put("/:id",Products.updateProductById)

productRouter.delete("/:id",Products.deleteProductById)



module.exports=productRouter