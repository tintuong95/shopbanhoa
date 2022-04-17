import React, { useRef } from "react";
import { Layout, Menu, Breadcrumb, Button, AutoComplete, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../libs/history/history.js";


export default function HeaderComponent() {
const searchRef=useRef(null)
const {listCart}=useSelector(state=>state.cartReducer)

  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      <div className>
        <h1 className="text-3xl mx-6 text-stone-700">Thanh hoa</h1>
      </div>
      <div className="col-span-3 flex justify-end ">
        <Button
        className="mr-6" 
          size="large"
          ghost type="primary"
          onClick={() => {
            dispatch({
              type: "GET_PRODUCTS_OFFSET_LIMIT_API",
              payload: {
                offset: 0,
                limit: 12,
              },
            });

            dispatch({
              type: "GET_SIZE_LIST_PRODUCTS_API",
              payload: {},
            });
            history.push("/");
          }}
        >
          Trang chủ
        </Button>
      
        <Button onClick={()=>{
          history.push("/cart")
        }} className="mr-6"  size="large" ghost type="primary">
       
          Giỏ hàng ({listCart.length})
         
        </Button>
    
        <Button className="mr-6" size="large" ghost   type="primary">
          Hỗ trợ
        </Button>
        <Button  className="mr-6" size="large" ghost  type="primary">
          Địa chỉ
        </Button>
        <AutoComplete
          style={{ width: 200 }}
          size="large"
          placeholder="Nhập hoa cần tìm.."
          onChange={(e) => {
            if(e!=""){
              if(searchRef.current){
                clearTimeout(searchRef.current)
              }
              searchRef.current=setTimeout(()=>{
                
                dispatch({
                  type: "GET_PRODUCTS_OFFSET_LIMIT_API",
                  payload: {
                    offset: 0,
                    limit: 12,
                    name: e,
                  },
                });
  
                dispatch({
                  type: "GET_SIZE_LIST_PRODUCTS_API",
                  payload: {
                    name: e,
                  },
                });
             
              },500)
            }
              
            
          }}
        />
      </div>
    </div>
  );
}
