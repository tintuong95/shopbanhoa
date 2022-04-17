const { Users } = require("../model/db.connect.js");

function UserService() {
  /*---------*/
  this.checkLoginUser = async (username, password) => {
    try {
      const result = await Users.findOne({
        where: {
          username: username,
          password: password,
        },
      });
      return result;
    } catch (error) {
      return false;
    }
  };
  /*---------*/
  this.createUser = async (item) => {
    try {
      const result = await Users.create(item);
      return item;
    } catch (error) {
      return false;
    }
  };
}

module.exports = new UserService();
