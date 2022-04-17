const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("shopbanhoa", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//product table
const Products = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },

  category: {
    type: DataTypes.STRING,
  },
  images: {
    type: DataTypes.STRING,
}
});
//user table

const Users = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//category table
const Category =sequelize.define("categorys",{
  name:{
    type:DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING
  }
})



//export
module.exports = {
  sequelize,
  Products,
  Users,
  Category,
};
