import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from './shop-data/shop-data.reducer'
import directoryReducer from './directory/directory.reducer'

//specify the type of storage we need
//getting local storage 
import storage from 'redux-persist/lib/storage'

//specify the persist config ...it is a json object 
const persistConfig={
  key:'root', //at what level or point we want to store our store or redux state
  storage, // 'key' will get stored to whaterever storage we selected from redux-persist
  whitelist:['cart'] //consist array of string name of the reducers we want to store ...since user is getign fetched from server everytime no need to store
}

const rootReducer=combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});

//creating persisted/modified version of our reducer passing in the config
export default persistReducer(persistConfig,rootReducer)