import { call, put, takeLatest } from "redux-saga/effects";
import { getAllCategory } from "../../services/categoryService.js";



function * getAllCategoryApiAction(){
    try {
        const {data,status}=yield call(()=>{
            return getAllCategory()
        })
        
        yield put({
            type:"GET_ALL_CATEGORYS",
            payload:data
        })
    } catch (error) {
        
    }
}


export function * getAllCategoryApi(){
    yield takeLatest("GET_ALL_CATEGORY_API",getAllCategoryApiAction)
}