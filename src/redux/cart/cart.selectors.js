import { createSelector } from "reselect";

//two ways to create selector

//1.input selectors
const selectCart = (state) => state.cart;

//2.create selectors
//since we use createSelctor() it is a memozied selector
//first argument is the array which has all input selectors or createSelecotors or combo
//second argument is a function which recieves the value of each input selectors as arguments
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const countCartItemsSelector = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalItemsAccumulator, item) => totalItemsAccumulator + item.quantity,
      0
    )
);

export const selectCardDropDownVisibility = createSelector(
  [selectCart],
  (cart) => cart.cartDropDownVisible
);

export const selectCartValue = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce(
    (totalCartValueAccumulator, item) =>
      totalCartValueAccumulator + item.price * item.quantity,
    0
  )
);
