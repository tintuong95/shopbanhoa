const initialState = {
    listCategory:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "GET_ALL_CATEGORYS":
    return { ...state,listCategory:[...payload] }

  default:
    return state
  }
}
