import {
  PASSWORD_ERROR,
  PASSWORD_UPDATED,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../actions/actionTypes";

const initialState = {
  profile: null,
  isLoading: true,
  passwordmsg: {},
  errors: {},
};
const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false,
      };
    case PASSWORD_UPDATED:
      return {
        ...state,
        passwordmsg: payload,
        isLoading: false,
      };
    case PROFILE_ERROR:
    case PASSWORD_ERROR:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
