import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllProduct, getAllProductType, getSizeProduct } from "../../services/productService.js";

function* getProdcutOffsetLimitApiAction({type,payload}) {
    const {category,offset,limit,name}=payload
    
  try {
    const { data, status } = yield call(() => {
      return getAllProduct(category,offset,limit,name);
    });


    yield put({
        type:"GET_PRODUCT_OFFSET_LIMIT",
        payload:{
          data,
          category,
        }
    })
  } catch (err) {
    console.log(err);
  }
}

export function* getProductOffsetLimitApi() {
  yield takeLatest("GET_PRODUCTS_OFFSET_LIMIT_API", getProdcutOffsetLimitApiAction);
  
}


function *getSizeProductsListApiAction({type,payload}){
  const {category,name}=payload
  
  try{
    const {data,status}=yield call(()=>{
        return getSizeProduct(category,name)
    })
    yield put({
        type:"GET_SIZE_LIST_PRODUCTS",
        payload:parseInt(data)
    })

   }catch(err){
    console.log(err);
   }

}



export function * getSizeProductApi(){
    yield takeLatest("GET_SIZE_LIST_PRODUCTS_API",getSizeProductsListApiAction)
}




function* getProdcutOffsetLimitTypeApiAction(action) {
    const {type,payload}=action
  try {
    const { data, status } = yield call(() => {
      return getAllProductType(payload.id,payload.offset,payload.limit);
    });

    

    yield put({
        type:"GET_PRODUCT_OFFSET_LIMIT",
        payload:data
    })
  } catch (err) {
    console.log(err);
  }
}

export function* getProductOffsetLimitTypeApi() {
  yield takeLatest("GET_PRODUCTS_LIST_TYPE_API", getProdcutOffsetLimitTypeApiAction);
  
}