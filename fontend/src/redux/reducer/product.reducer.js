const initialState = {
  productList: [],
  sizeListProduct:undefined,
  category:undefined,

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCT_OFFSET_LIMIT": {
      return { ...state, productList: [...payload.data],category:payload.category };
    }
    case "GET_SIZE_LIST_PRODUCTS":{
      return {...state,sizeListProduct:payload}
    }
    default:
      return state;
  }
};
