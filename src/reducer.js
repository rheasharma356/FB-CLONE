//initial state of reducer
export const initialState = {
    user: null,
};

export const actionTypes = {
SET_USER: "SET_USER" ,
};

//if you receive an action i.e user into the data layer, then new action would bring user into the data layer
const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case actionTypes.SET_USER:
        return{
            ...state,
            user: action.user,
        };
    default:
        return state;
  }  
};

export default reducer;

