const productService = require("../services/product.service.js");

function Products() {
  // /*---------*/
  this.getAllProductByTypeOffsetLimit = async (req, res) => {
    const {category,offset,limit,name}=req.query

    const result = await productService.getAllProductByTypeOffsetLimit(category,offset,limit,name);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send(" @@!Error");
    }
  };

   /*---------*/
   this.getAllProductsTotal = async (req, res) => {
    const result = await productService.getAllProductByTypeOffsetLimitSize(req.query.category,req.query.name);
    if (result) {
      res.status(200).send(`${result.length}`);
    } else {
      res.status(404).send(" @@!Error");
    }
  };
  /*---------*/
  // this.getAllProducts = async (req, res) => {
   
  //   const {offset,limit}=req.query
  //   const result = await productService.getAllProduct(offset,limit);
  //   if (result) {
  //     res.status(200).send(result);
  //   } else {
  //     res.status(404).send(" @@!Error");
  //   }
  // };
  /*---------*/
  this.getProductsById = async (req, res) => {
    const { id } = req.params;

    const result = await productService.getProductsById(id);
   
   
    if (result) {
      res.status(200).json({result});
      
    } else {
      res.status(404).send(" @@!Error");
    }
  };
  /*---------*/
  this.createProduct = async (req, res) => {
    const item = req.body;

    const result = await productService.createProduct(item);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send(" @@!Error");
    }
  };
  /*---------*/
  this.updateProductById = async (req, res) => {
    const result = await productService.updateProductById(
      req.body,
      parseInt(req.params.id)
    );
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send(" @@!Error");
    }
  };
  /*---------*/
  this.deleteProductById = async (req, res) => {
    const result = await productService.deleteProductById(req.params.id);
    if (result) {
      res.status(200).send("Success!");
    } else {
      res.status(404).send(" @@!Error");
    }
  };
  /*---------*/
}

module.exports = new Products();
