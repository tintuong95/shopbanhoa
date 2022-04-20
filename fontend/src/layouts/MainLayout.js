import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import FooterComponent from "../components/footer/FooterComponent.js";
import HeaderComponent from "../components/header/HeaderComponent.js";
import Category from "../components/main/Category.js";
import { checkTokenLogin } from "../services/loginService.js";
import Axios from "axios";
import { history } from "../libs/history/history.js";



export default function MainLayout(props) {
 
  async function  handle(){
     let res=await checkTokenLogin()
     let {data,status}=await res
   
      if(data=="1"){
       history.push("/signin")
     }
  }

  handle()
  

  const { Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(propsRouter) => {
        return (
          <div className="container">
            <HeaderComponent />
            <div className="grid grid-cols-5 gap-4 mt-6">
              <Category />
              <div className="col-span-4 ">
                <Component {...propsRouter} />
              </div>
            </div>

            <FooterComponent />
          </div>
        );
      }}
    />
  );
}
