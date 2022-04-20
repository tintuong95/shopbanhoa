import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useFormik } from "formik";
import { signUpUser } from "../services/loginService.js";
import { history } from "../libs/history/history.js";
export default function Signup() {

  const formik=useFormik({
    initialValues: {},
  })

  const onFinish = async(values) => {
    try{
      const  {data,status}=await signUpUser(formik.values)
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
      <h1 className="text-2xl text-center mb-9">ĐĂNG KÝ</h1>
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
          <Input   name="username" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item
          label="RePassword"
          name="rePassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password  />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
