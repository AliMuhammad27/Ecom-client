import {
  CREATE_USER,
  CREATE_USER_ERROR,
  GET_USERS,
  USERS_ERROR,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  userCreatedToken: null,
  isLoading: true,
  user: null,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        userCreatedToken: payload,
        isLoading: false,
      };
    case USERS_ERROR:
    case CREATE_USER_ERROR:
      return {
        ...state,
        users: null,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
