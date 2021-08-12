import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'; //declare that I want to use local storage as my default storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key:'root',   //what point of reducer so we want to start storing everything
    storage, //storage key goes where storage object from redux that we try to use
    whitelist:['cart']   //array that contain string name of any of the reducer that we want to use
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
//modified version of rootReducer with persistance capabilities
