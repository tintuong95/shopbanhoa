import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../libs/history/history.js";

export default function Category() {
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_ALL_CATEGORY_API",
    });
  }, []);

  const handleCategory=async(category,offset,limit)=>{

    await history.push("/")
    await dispatch({
      type:"GET_PRODUCTS_OFFSET_LIMIT_API",
      payload:{
        category,
        offset,
        limit,
      }
    })

    await dispatch({
      type:"GET_SIZE_LIST_PRODUCTS_API",
      payload:{
        category,
      }
    })
  }

  return (
    <div className="flex flex-col px-5">
      <div className="bg-blue-100 px-6">
        <Button size="large" type="link">
          Danh mục
        </Button>
      </div>
      <div className="flex flex-col px-6 mt-2 bg-slate-100">
        {listCategory.map((item, index) => (
          <div>
            <Button key={index} size="large" type="link" onClick={()=>{
              handleCategory(item.id,0,12)
            }}>
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
