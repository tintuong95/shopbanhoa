const initialState = {
    listCart:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_PRODUCT_CARD":

    return { ...state, listCart:[...state.listCart,payload] }
    case "REMOVE_PRODUCT_CART":{
     
      const list=state.listCart.filter(value=>value.item.name!=payload)
     
      return { ...state, listCart:[...list] }
    }

      
  default:
    return state
  }
}
