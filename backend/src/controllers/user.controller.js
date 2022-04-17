const userService = require("../services/user.service.js");

function UserController() {
  /*---------*/
  this.checkLoginUser = async (req, res) => {
    const { username, password } = req.body;
    const result = await userService.checkLoginUser(username, password);
    console.log("result",result)
    
    if (result) {
      //xu ly dang nhap

      res.status(200).send("Success!");
    } else {
      res.status(404).send("Failure!");
    }
  };
  /*---------*/
  this.createUser = async (req, res) => {
   
    const result = await userService.createUser(req.body);

    
    if (result) {
      //xu ly dang nhap

      res.status(200).send("Success!");
    } else {
      res.status(404).send("Failure!");
    }
  };
  /*---------*/
}

module.exports = new UserController();
