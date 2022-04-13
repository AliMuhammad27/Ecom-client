import {
  ADD_TAX,
  ADD_TAX_ERROR,
  DELETE_TAX,
  GET_TAXES,
  TAX_ERROR,
} from "../actions/actionTypes";

const initialState = {
  taxes: [],
  isLoading: true,
  taxMsg: null,
};
const taxReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TAX:
      return {
        ...state,
        taxMsg: payload,
        isLoading: false,
      };
    case GET_TAXES:
      return {
        ...state,
        taxes: payload,
        isLoading: false,
      };
    case DELETE_TAX:
      let t = { ...state };

      t.taxes.docs = t.taxes.docs.filter((item) => item._id != payload.TaxID);
      console.log("t.taxes.docs", t.taxes.docs);
      return {
        ...t,
        isLoading: false,
      };
    case TAX_ERROR:
      return {
        ...state,
        taxes: null,
        isLoading: false,
      };
    case ADD_TAX_ERROR:
      return {
        ...state,
        taxMsg: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default taxReducer;
