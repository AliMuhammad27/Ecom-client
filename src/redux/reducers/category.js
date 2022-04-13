import { GET_ALL_CAT, GET_ALL_CAT_ERROR } from "../actions/actionTypes";

const initialState = {
  categories: null,
  isLoading: false,
};
const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_CAT:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case GET_ALL_CAT_ERROR:
      return {
        ...state,
        categories: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
