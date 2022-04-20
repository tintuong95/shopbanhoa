const initialState = {
    listCart:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_PRODUCT_CARD":{

const index=state.listCart.findIndex(value=>value.item.id==payload.item.id)
    if(index>-1){
      state.listCart[index].quality+=1
      return { ...state }
    } else{
      const value={
        item:payload.item,
        quality:1
  
      }
      return { ...state, listCart:[...state.listCart,value] }
    }  
    
    
    
  }

    
    case "REMOVE_PRODUCT_CART":{
     
      const list=state.listCart.filter(value=>value.item.name!=payload)
     
      return { ...state, listCart:[...list] }
    }

      
  default:
    return state
  }
}
