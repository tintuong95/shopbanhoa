import { Card, Pagination } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardcontent from "./CardContent.js";
import SliderContent from "./SliderContent.js"
export default function ContentMain() {
  const { productList, sizeListProduct, category } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
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
  }, []);

  return (
    <>
    <SliderContent />
    <div className="mt-6"></div>
      <div className="grid grid-cols-4 gap-x-11 gap-y-11">
        {productList.map((item) => (
          <Cardcontent item={item} />
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Pagination
          onChange={(e) => {
            dispatch({
              type: "GET_PRODUCTS_OFFSET_LIMIT_API",
              payload: {
                offset: (e - 1) * 12,
                limit: 12,
                category,
              },
            });
          }}
          total={sizeListProduct}
          defaultPageSize={12}
          defaultCurrent={1}
        />
      </div>
    </>
  );
}
