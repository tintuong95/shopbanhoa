import { combineReducers,createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import productReducer from "./reducer/product.reducer.js"
import rootSaga from "./sagas/root.saga.js";
import categoryReducer from "./reducer/category.reducer.js"
import cartReducer from "./reducer/cart.reducer.js";

const sagaMiddleware=createSagaMiddleware()

const rootReducer=combineReducers({
    productReducer,
    categoryReducer,
    cartReducer,

})



const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store