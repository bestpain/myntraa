import CartActionsTypes from "./cart.actionTypes";
import {
  AddItemToCart,
  removeItemFromCart,
  removeItemByOneQuantity,
} from "./cart.utils";

const INITIAL_STATE = {
  cartDropDownVisible: false,
  cartItems: [],
};

// const newCart=(state)=>{

// }

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_DROPDOWN_VISIBILITY:
      return {
        ...state,
        cartDropDownVisible: !state.cartDropDownVisible,
      };
    case CartActionsTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    case CartActionsTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionsTypes.REMOVE_ITEM_BY_ONE:
      return {
        ...state,
        cartItems: removeItemByOneQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
