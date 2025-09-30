
import * as types from "../Type_File/Type";

// Fetch
export const fetchVendorsRequest = () => ({ type: types.FETCH_VENDORS_REQUEST });
export const fetchVendorsSuccess = (vendors) => ({ type: types.FETCH_VENDORS_SUCCESS, payload: vendors });
export const fetchVendorsFailure = (error) => ({ type: types.FETCH_VENDORS_FAILURE, payload: error });

// Create
export const createVendorRequest = (vendor) => ({ type: types.CREATE_VENDOR_REQUEST, payload: vendor });
export const createVendorSuccess = (vendor) => ({ type: types.CREATE_VENDOR_SUCCESS, payload: vendor });
export const createVendorFailure = (error) => ({ type: types.CREATE_VENDOR_FAILURE, payload: error });

// Update
export const updateVendorRequest = (vendor) => ({ type: types.UPDATE_VENDOR_REQUEST, payload: vendor });
export const updateVendorSuccess = (vendor) => ({ type: types.UPDATE_VENDOR_SUCCESS, payload: vendor });
export const updateVendorFailure = (error) => ({ type: types.UPDATE_VENDOR_FAILURE, payload: error });

// Delete
export const deleteVendorRequest = (id) => ({ type: types.DELETE_VENDOR_REQUEST, payload: id });
export const deleteVendorSuccess = (id) => ({ type: types.DELETE_VENDOR_SUCCESS, payload: id });
export const deleteVendorFailure = (error) => ({ type: types.DELETE_VENDOR_FAILURE, payload: error });
