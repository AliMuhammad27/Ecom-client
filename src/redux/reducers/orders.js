const {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDER,
  GET_ORDER_ERROR,
} = require("../actions/actionTypes");

const initialState = {
  orders: [],
  order: null,
  isLoading: true,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        order: null,
        isLoading: false,
      };
    case GET_ORDER:
      return {
        ...state,
        orders: null,
        order: payload,
        isLoading: false,
      };
    case GET_ORDERS_ERROR:
    case GET_ORDER_ERROR:
      return {
        ...state,
        orders: null,
        order: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default orderReducer;
