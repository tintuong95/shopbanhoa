import { Button, Form, Input, InputNumber, Modal, Space, Table, Tag } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createProductById,
  removeProductById,
  updateProductById,
} from "../services/productService.js";

const Admin = () => {
  const { productList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_PRODUCTS_OFFSET_LIMIT_API",
      payload: {
        offset: 0,
        limit: 1000,
      },
    });
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      render: (text, record, index) => ++index,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Giá",

      key: "price",
      render: (text) => {
        return `${parseInt(text.price).toLocaleString()}  VND`;
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onChange={async () => {
              //   await updateProductById(text.id,text)
              //   await dispatch({
              //     type: "GET_PRODUCTS_OFFSET_LIMIT_API",
              //     payload: {
              //       offset: 0,
              //       limit: 1000,
              //     },
              //   });
            }}
          >
            Sửa
          </Button>
          <Button
            danger
            onClick={async () => {
              await removeProductById(text.id);
              await dispatch({
                type: "GET_PRODUCTS_OFFSET_LIMIT_API",
                payload: {
                  offset: 0,
                  limit: 1000,
                },
              });
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
   
    },
   
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="flex flex-col my-5">
        <div>
          <Button type="primary" onClick={showModal}>
            THÊM SẢN PHẨM
          </Button>
          <Modal
            title="Thêm sản phẩm"
            visible={isModalVisible}
            onOk={async()=>{
                console.log(formik.values)
               await createProductById(formik.values)
            }}
            onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Tên sản phẩm">
                <Input name="name" onChange={formik.handleChange} placeholder="Vui lòng nhập" />
              </Form.Item>
              <Form.Item label="Mô tả sản phẩm">
                <Input.TextArea name="description" onChange={formik.handleChange} placeholder="Vui lòng nhập" />
              </Form.Item>
              <Form.Item label="Giá sản phẩm">
                <Input name="price" onChange={formik.handleChange} placeholder="Vui lòng nhập" />
              </Form.Item>
              <Form.Item label="Loại sản phẩm">
                <Input name="category" onChange={formik.handleChange} placeholder="Vui lòng nhập" />
              </Form.Item>
              <Form.Item label="Hình sản phẩm">
                <Input name="images" onChange={formik.handleChange} placeholder="Vui lòng nhập" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div>
          <Table columns={columns} dataSource={productList} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
