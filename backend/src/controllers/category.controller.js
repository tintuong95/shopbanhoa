const CategoryService=require("../services/category.service.js")



function CategoryController(){
      /*---------*/
    this.getAllCategory=async (req,res)=>{
        // res.send("hhhh")
        const result=await CategoryService.getAllCategory()
        if(result){
            res.status(200).send(result)
        }else{
            res.status(404).send("Not Found")
        }
    }
      /*---------*/
    this.createCategory=async (req,res)=>{
        // res.send("hhhh")
        const result =await CategoryService.createCategory(req.body)

        if(result){
           res.status(200).send(result)
        }else{
            res.status(404).send("Not Found")
        }
    }
}


module.exports= new CategoryController