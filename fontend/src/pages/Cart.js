import React from 'react'
import { List, Typography, Divider, Row, Col, Button, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


export default function Cart() {
    const data=useSelector(state=>state.cartReducer.listCart)
    const dispatch=useDispatch()
  return (
    
    <List 
        className='w-2/3'
      header={<div className='text-lg'>GIỞ HÀNG CỦA BẠN</div>}
      footer={<div ><Button size="large" type="danger">THANH TOÁN</Button></div>}
      bordered
      dataSource={data}
      renderItem={value => (
        <List.Item className='w-full'>
          <Row className='w-full'>
            <Col span={12}>{value.item.name}</Col>
            <Col span={10}> <Tag color="green">{parseInt(value.item.price).toLocaleString()}</Tag> </Col>
            <Col  span={2}>
                <Button type="" onClick={()=>{
                    console.log("dsd")
                    dispatch({
                        type:"REMOVE_PRODUCT_CART",
                        payload:value.item.name
                    })
                }} danger>Xóa</Button>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  )
}
