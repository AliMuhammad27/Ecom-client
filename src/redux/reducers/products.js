import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_ERROR,
  PRODUCT_ERROR,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  product: null,
  productAdded: null,
  productEdited: null,
  productDeleted: null,
  isLoading: true,
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        isLoading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productAdded: payload,
        isLoading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        productEdited: payload,
        isLoading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productDeleted: payload,
        isLoading: false,
      };
    case PRODUCT_ERROR:
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        products: null,
        product: null,
        productAdded: null,
        productDeleted: null,
        productEdited: null,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default productReducer;
