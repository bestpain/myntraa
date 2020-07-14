import ActionTypes from "./user.actionTypes";

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const clearCurrentUser = () => ({
  type: ActionTypes.CLEAR_CURRENT_USER,
});
