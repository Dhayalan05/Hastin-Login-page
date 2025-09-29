
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Reducer_Flie/UserReduce';
import vendorReducer from './Reducer_Flie/VendorReducer';


const rootReducer = combineReducers({
  user: userReducer,
  vendor:vendorReducer,

});



export default rootReducer;