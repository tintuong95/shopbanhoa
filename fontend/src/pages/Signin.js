import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import { useFormik } from "formik";
import { history } from "../libs/history/history.js";
import { signInUser } from "../services/loginService.js";
export default function Signin() {
  const formik = useFormik({
    initialValues: {},
  });

  const onFinish = async() => {
    try{
      const  {data,status}=await signInUser(formik.values)
      if(status==200){
        localStorage.setItem("accessToken",data.accessToken)
        history.push("/")
      }else{
        console.log("Thất bại")
      }
     
    }catch(err){
      console.log("Thất bại")
    }
    
    
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col mt-44">
      <h1 className="text-2xl text-center mb-9">ĐĂNG NHẬP</h1>
      <Form
        style={{ width: 400 }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={formik.handleChange} name="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={formik.handleChange} name="password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
