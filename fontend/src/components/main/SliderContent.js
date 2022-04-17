import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",

};
export default function SliderContent() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={{...contentStyle,backgroundImage:"url(/slider/1.png)"}}></h3>
      </div>
      <div>
        <h3 style={{...contentStyle,backgroundImage:"url(/slider/2.png)"}}></h3>
      </div>
      <div>
        <h3 style={{...contentStyle,backgroundImage:"url(/slider/3.png)"}}></h3>
      </div>
     
    </Carousel>
  );
}
