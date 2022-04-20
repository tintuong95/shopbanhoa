const userService = require("../services/user.service.js");

function UserController() {
  /*---------*/
  this.checkLoginUser = async (req, res) => {
    const { username, password } = req.body;
    const result = await userService.checkLoginUser(username, password);
    
    
    if (result) {
      //xu ly dang nhap

      res.status(200).json(result);
    } else {
      res.status(404).send("Failure!");
    }
  };
  /*---------*/
  this.createUser = async (req, res) => {
   
    const result = await userService.createUser(req.body);

    
    if (result) {
      //xu ly dang nhap

      res.status(200).json(result);
    } else {
      res.status(404).send("Failure!");
    }
  };
  /*---------*/
  this.checkTokenLogin = async (req, res) => {
   const accessToken=req.header("Authorization")
   
   const token=accessToken.split(" ")[1]
    if(token=="null") return  res.status(200).send("1");
    const result = await userService.checkTokenLogin(token);

    
    if (result) {
      //xu ly dang nhap

      return res.status(200).send("0");
    } else {
      return res.status(200).send("1");
    }
  };
}

module.exports = new UserController();
