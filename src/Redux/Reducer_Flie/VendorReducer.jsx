// import * as types from "../Type_File/Type";

// const initialState = {
//   vendors: [],
//   loading: false,
//   error: null,
// };

// const VendorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // Fetch
//     case types.FETCH_VENDORS_REQUEST:
//       return { ...state, loading: true };
//     case types.FETCH_VENDORS_SUCCESS:
//       return { ...state, loading: false, vendors: action.payload };
//     case types.FETCH_VENDORS_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     // Create
//     case types.CREATE_VENDOR_SUCCESS:
//       return { ...state, vendors: [...state.vendors, action.payload] };

//     // Update
//     case types.UPDATE_VENDOR_SUCCESS:
//       return {
//         ...state,
//         vendors: state.vendors.map((v) =>
//           v.id === action.payload.id ? action.payload : v
//         ),
//       };

//     // Delete
//     case types.DELETE_VENDOR_SUCCESS:
//       return {
//         ...state,
//         vendors: state.vendors.filter((v) => v.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };

// export default VendorReducer;
import * as types from '../Type_File/VendorType';

const initialState = {
  vendors: [],
  inactiveVendors: [],
  loading: false,
  error: null,
  creationSuccess: false,
};

export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case types.VENDOR_UPDATE_REQUEST:
    case types.FETCH_INACTIVE_REQUEST:
    case types.CREATE_VENDOR_REQUEST:
      return { ...state, loading: true, error: null, creationSuccess: false };

    case types.FETCH_SUCCESS:
      return { ...state, loading: false, vendors: action.payload };

    case types.FETCH_FAILURE:
    case types.FETCH_INACTIVE_FAILURE:
    case types.CREATE_VENDOR_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case types.FETCH_INACTIVE_SUCCESS:
      return { ...state, loading: false, inactiveVendors: action.payload };

    case types.CREATE_VENDOR_SUCCESS:
      return { ...state, loading: false, creationSuccess: true };

    default:
      return state;
  }
}
