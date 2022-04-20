import React from "react";
import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const { Meta } = Card;
const Cardcontent = (props) => {
  const dispatch=useDispatch()
  const { name, description, price, images,id } = props.item;
  return (
    <Card
      style={{ width: "100%" }}
      cover={<img alt="example" src={images} />}
      actions={[
        <Button type="link" danger  onClick={()=>{
         
          dispatch({
            type:"ADD_PRODUCT_CARD",
            payload:props
          })
        }}>Thêm vào giỏ</Button>,
        <Button  type="link "  style={{width:120}}>
          <NavLink to={`/card/${id}`}>Chi tiết</NavLink>
        </Button>,
      ]}
    >
      <Meta
        title={name}
        description={`${parseInt(price).toLocaleString()} VND`}
      />
    </Card>
  );
};

export default Cardcontent;
