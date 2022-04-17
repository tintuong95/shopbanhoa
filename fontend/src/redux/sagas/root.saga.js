import {all} from "redux-saga/effects"

import * as ProductSaga from "./product.saga.js"
import * as Category from "./category.saga.js"

export default function* rootSaga(){
    yield all([
        ProductSaga.getProductOffsetLimitApi(),
        ProductSaga.getSizeProductApi(),
        ProductSaga.getProductOffsetLimitTypeApi(),
        Category.getAllCategoryApi(),
    ])
}