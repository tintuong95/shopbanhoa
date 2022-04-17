const { Category } = require("../model/db.connect.js");

function CategoryService() {
  /*---------*/
  this.getAllCategory = async () => {
    try {
      const result = await Category.findAll();
      return result;
    } catch (error) {
      return false;
    }
  };
  /*---------*/
  this.createCategory = async (item) => {
    try {
      const result = await Category.create(item);
      return item;
    } catch (error) {
      return false;
    }
  };
}


module.exports =new CategoryService();
