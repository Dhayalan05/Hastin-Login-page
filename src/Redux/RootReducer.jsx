
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Reducer_Flie/UserReducer';
import VendorReducer from './Reducer_Flie/VendorReducer';


const rootReducer = combineReducers({
  user: userReducer,
  vendor: VendorReducer

});



export default rootReducer;