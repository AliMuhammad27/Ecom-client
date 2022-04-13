import {
  FEEDBACK_ERROR,
  GET_FEEDBACK,
  GET_FEEDBACKS,
} from "../actions/actionTypes";

const initialState = {
  feedbacks: [],
  feedback: null,
  isLoading: false,
};

const feedBackReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: payload,
        isLoading: false,
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: payload,
        isLoading: false,
      };
    case FEEDBACK_ERROR:
      return {
        ...state,
        feedbacks: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default feedBackReducer;
