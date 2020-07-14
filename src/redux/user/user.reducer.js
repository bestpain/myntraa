import ActionTypes from './user.actionTypes'

const INITIAL_STATE = {
    currentUser: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        };
      case ActionTypes.CLEAR_CURRENT_USER:
        return {
          ...state,
          currentUser: null
        }
      default:
        return state;
    }
  };
  
  export default userReducer;