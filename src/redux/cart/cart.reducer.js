import CartActionsTypes from "./cart.actionTypes";

const INITIAL_STATE = {
  cartDropDownVisible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_DROPDOWN_VISIBILITY:
      return {
        ...state,
        cartDropDownVisible: !state.cartDropDownVisible,
      };

    default:
      return state;
  }
};

export default cartReducer;
