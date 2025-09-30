import * as types from "../Type_File/Type";

const initialState = {
  vendors: [],
  loading: false,
  error: null,
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch
    case types.FETCH_VENDORS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_VENDORS_SUCCESS:
      return { ...state, loading: false, vendors: action.payload };
    case types.FETCH_VENDORS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Create
    case types.CREATE_VENDOR_SUCCESS:
      return { ...state, vendors: [...state.vendors, action.payload] };

    // Update
    case types.UPDATE_VENDOR_SUCCESS:
      return {
        ...state,
        vendors: state.vendors.map((v) =>
          v.id === action.payload.id ? action.payload : v
        ),
      };

    // Delete
    case types.DELETE_VENDOR_SUCCESS:
      return {
        ...state,
        vendors: state.vendors.filter((v) => v.id !== action.payload),
      };

    default:
      return state;
  }
};

export default VendorReducer;
