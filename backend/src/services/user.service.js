const { Users } = require("../model/db.connect.js");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

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
      if (result == null) {
        return false;
      }
      const accessToken = jwt.sign({ username }, md5("key_access_token"), {
        expiresIn: "24h",
      });
      return { accessToken };
    } catch (error) {
      return false;
    }
  };
  /*---------*/
  this.createUser = async (item) => {
    try {
      await Users.create(item);

      const accessToken = jwt.sign(
        { username: item.username },
        md5("key_access_token"),
        {
          expiresIn: "24h",
        }
      );

      return { accessToken };
    } catch (error) {
      return false;
    }
  };

  /*---------*/
  this.checkTokenLogin = async (token) => {
    if(token==null) return false
    try {
      const decode = await jwt.verify(token, md5("key_access_token"));

       return true;
    } catch (error) {
      return false;
    }
  };
}

module.exports = new UserService();
