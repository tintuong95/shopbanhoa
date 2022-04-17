import { Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService.js";

export default function Detail() {
 const [detailProduct,setDetailProduct]=useState({})

  const {id}=useParams()
  useEffect(()=>{
    getProductById(id).then(result=>setDetailProduct(result.data[0]))
  },[])


  
  return (
    <div className="w-4/6 m-auto">
      <div className="listimg flex flex-row">
        <Image.PreviewGroup>
          <Image width={200} src={detailProduct.images} />
          <div className="mx-2"></div>
          <Image width={200} src={detailProduct.images} />
          <div className="mx-2"></div>
          <Image width={200} src={detailProduct.images} />
        </Image.PreviewGroup>
      </div>
      <div class="mt-4 w-2/3 ">
        <h1 className="text-xl">{detailProduct.name}</h1>
        <p className="text-lg">
         {detailProduct.description}
        </p>
        <div className="flex">
            <Button size="large" type="danger" className="mx-2">Mua ngay</Button>
            <Button size="large" type="" >Trở lại</Button>
        </div>
      </div>
    </div>
  );
}
