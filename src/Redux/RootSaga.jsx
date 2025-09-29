import { all } from 'redux-saga/effects';
import userSaga from './Saga_File/UserSaga';
import vendorSaga from './Saga_File/VendorSaga';

export default function* rootSaga() {
  yield all([userSaga(),
     vendorSaga(),
     
    
  ]);
}