import { Route, Switch } from "react-router-dom";
import Adminlayout from "./layouts/AdminLayout.js";
import LoginLayout from "./layouts/LoginLayout.js";
import MainLayout from "./layouts/MainLayout.js";
import Admin from "./pages/Admin.js";
import Cart from "./pages/Cart.js";
import Detail from "./pages/Detail.js";
import Main from "./pages/Main.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";

function App() {
  return (
    <Switch>
        <Adminlayout exact path="/admin" Component={Admin}/>
      <LoginLayout exact path="/signup" Component={Signup}/>
      <LoginLayout exact path="/signin" Component={Signin}/>
      <MainLayout exact path="/card/:id" Component={Detail} />
      <MainLayout exact path="/home" Component={Main} />
      <MainLayout exact path="/cart" Component={Cart} />
      <MainLayout exact path="/" Component={Main} />
      <MainLayout exact path="/*" Component={Main} />
    </Switch>
  );
}

export default App;
