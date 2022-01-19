export const User = { 
  userToken: null
}

const reducer = (state, action) => {
  
  switch(action.type) {
    case "login":
      return {
        ...state,
        userToken: action.payload
      }
    case "logout":
      return {
        ...state,
        userToken: null
      }
  }
}

export default reducer;