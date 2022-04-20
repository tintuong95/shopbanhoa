import { Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService.js";

export default function Detail() {
 const [detailProduct,setDetailProduct]=useState({})

  const {id}=useParams()

useEffect(()=>{
  async function handle(){
    let res=await getProductById(id)
    let {data,status}=res
    setDetailProduct(data.result[0])
  }
  handle()
},[])
  
  

  const dispatch =useDispatch()
  
  return (
    <div className="w-4/6 m-auto">
      <div className="listimg flex flex-row">
        <Image.PreviewGroup>
          <Image width={200} src={detailProduct?.images} />
          <div className="mx-2"></div>
          <Image width={200} src={detailProduct?.images} />
          <div className="mx-2"></div>
          <Image width={200} src={detailProduct?.images} />
        </Image.PreviewGroup>
      </div>
      <div class="mt-4 w-2/3 ">
        <h1 className="text-xl">{detailProduct?.name}</h1>
        <p className="text-lg">
         {detailProduct?.description}
        </p>
        <div className="flex">
            <Button size="large" type="danger" className="mx-2" onClick={()=>{
          dispatch({
            type:"ADD_PRODUCT_CARD",
            payload:{item:detailProduct}
          })
        }}>Thêm vào giỏ</Button>

        </div>
      </div>
    </div>
  );
}
