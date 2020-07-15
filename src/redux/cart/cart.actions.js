import CartActionsTypes from "./cart.actionTypes";
import cartActionsTypes from "./cart.actionTypes";

export const toggleDropDownVisibility = () => ({
  type: CartActionsTypes.TOGGLE_CART_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: CartActionsTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: CartActionsTypes.REMOVE_ITEM_FROM_CART,
  payload: itemId,
});

//in case item quantity is 1 and we remove it then clear the item from cart
export const removeItemByOne = (itemId, quantity) => {
  if (quantity === 1) {
    return removeItemFromCart(itemId);
  } else {
    return { type: CartActionsTypes.REMOVE_ITEM_BY_ONE, payload: itemId };
  }
};
