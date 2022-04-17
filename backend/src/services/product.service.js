const { Products } = require("../model/db.connect.js");
const { Op } = require("sequelize");
function ProductService() {
  /*---------*/
  // this.getAllProductTotal = async () => {
  //   try {
  //     const listProduct = await Products.findAll();
  //     return listProduct;
  //   } catch (err) {
  //     return false;
  //   }
  // };
  /*---------*/
  // this.getAllProduct = async (offset, limit) => {
  //   try {
  //     const listProduct = await Products.findAll({
  //       offset: parseInt(offset),
  //       limit: parseInt(limit),
  //     });
  //     return listProduct;
  //   } catch (err) {
  //     return false;
  //   }
  // };
  /*---------*/
  this.getProductsById = async (id) => {
    try {
      const listProduct = await Products.findAll({
        where: {
          id: id,
        },
      });
      return listProduct;
    } catch (err) {
      return false;
    }
  };
  /*---------*/
  this.createProduct = async (item) => {
    try {
      Products.create(item);
      return item;
    } catch (err) {
      return false;
    }
  };
  /*---------*/
  this.updateProductById = async (item, id) => {
    try {
      Products.update(item, {
        where: {
          id: id,
        },
      });
      return item;
    } catch (err) {
      return false;
    }
  };
  /*---------*/
  this.deleteProductById = async (id) => {
    try {
      Products.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (err) {
      return false;
    }
  };
  /*---------*/
  this.getAllProductByTypeOffsetLimit = async (category, offset, limit,search) => {
    console.log(category, offset, limit,search)
    let obj = {};
    if(category==undefined && search==undefined){
      obj = {
            offset: parseInt(offset),
            limit: parseInt(limit),
          };
    }else if(category==undefined && search){
      obj = {
            where: { name:{ [Op.like]: `%${search}%`} },
            offset: parseInt(offset),
            limit: parseInt(limit),
          };
    }else if(category){
      obj = {
            where: { category: category },
            offset: parseInt(offset),
            limit: parseInt(limit),
          };
    }
  

    try {
      const listProduct = await Products.findAll(obj);
      return listProduct;
    } catch (err) {
      return false;
    }
  };
  /*---------*/
  this.getAllProductByTypeOffsetLimitSize = async (category,search) => {
    let obj = {};
    if (category == undefined && search==undefined) {
      obj = {};
    }else if(category){
      obj = {
        where: { category: category },
      };
    } else if(search) {
      obj = {
        where: { name:{ [Op.like]: `%${search}%`} }
      };
    }

    try {
      const listProduct = await Products.findAll(obj);
      return listProduct;
    } catch (err) {
      return false;
    }
  };

}

module.exports = new ProductService();
