
import React from "react";
import { useDispatch } from "react-redux";

import ContentMain from "../components/main/ContentMain.js";

export default function Main () {
  const dispatch=useDispatch()
  dispatch({
    type:"HELLO1"
  })


  return <ContentMain />;
}
