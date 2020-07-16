export const AddItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove);
};

export const removeItemByOneQuantity = (cartItems, itemToRemove) => {
  return cartItems.map((item) =>
    item.id === itemToRemove ? { ...item, quantity: item.quantity - 1 } : item
  );
};
