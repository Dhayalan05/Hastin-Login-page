import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as types from "../Type_File/Type";
import {
  fetchVendorsSuccess,
  fetchVendorsFailure,
  createVendorSuccess,
  createVendorFailure,
  updateVendorSuccess,
  updateVendorFailure,
  deleteVendorSuccess,
  deleteVendorFailure,
} from "../Action_File/VendorAction";

// ✅ API endpoints
const API_BASE = "https://hastin-container.com/staging/app/vendors";

// Fetch Vendors
function* fetchVendorsSaga() {
  try {
    const res = yield call(axios.get, API_BASE);
    yield put(fetchVendorsSuccess(res.data));
  } catch (error) {
    yield put(fetchVendorsFailure(error.message));
  }
}

// Create Vendor
function* createVendorSaga(action) {
  try {
    const res = yield call(axios.post, API_BASE, action.payload);
    yield put(createVendorSuccess(res.data));
  } catch (error) {
    yield put(createVendorFailure(error.message));
  }
}

// Update Vendor
function* updateVendorSaga(action) {
  try {
    const res = yield call(axios.put, `${API_BASE}/${action.payload.id}`, action.payload);
    yield put(updateVendorSuccess(res.data));
  } catch (error) {
    yield put(updateVendorFailure(error.message));
  }
}

// Delete Vendor
function* deleteVendorSaga(action) {
  try {
    yield call(axios.delete, `${API_BASE}/${action.payload}`);
    yield put(deleteVendorSuccess(action.payload));
  } catch (error) {
    yield put(deleteVendorFailure(error.message));
  }
}

// Watcher
export default function* VendorSaga() {
  yield takeLatest(types.FETCH_VENDORS_REQUEST, fetchVendorsSaga);
  yield takeLatest(types.CREATE_VENDOR_REQUEST, createVendorSaga);
  yield takeLatest(types.UPDATE_VENDOR_REQUEST, updateVendorSaga);
  yield takeLatest(types.DELETE_VENDOR_REQUEST, deleteVendorSaga);
}
