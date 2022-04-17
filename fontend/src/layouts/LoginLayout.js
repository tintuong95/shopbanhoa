import React from "react";
import { Route } from "react-router-dom";

export default function LoginLayout(props) {
  const { Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(propsRouter) => {
        return (
          <div class="grid grid-cols-4 gap-4 ">
            <div class="col-span-3 ">
              <img className="h-screen" src="./login.jpg" alt="" />
            </div>
            <Component {...propsRouter} />
          </div>
        );
      }}
    />
  );
}
