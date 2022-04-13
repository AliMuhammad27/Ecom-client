import axios from "axios";
import Swal from "sweetalert2";
import {
  DELETE_FEEDBACK,
  DELETE_FEEDBACK_ERROR,
  FEEDBACK_ERROR,
  GET_FEEDBACK,
  GET_FEEDBACKS,
  GET_FEEDBACK_ERROR,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";
export const getAllFeedbacks =
  (searchString, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${BaseUrl}/api/feedback/getAllFeedbacks?searchString=${searchString}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("res", res.data);
      dispatch({
        type: GET_FEEDBACKS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FEEDBACK_ERROR,
      });
    }
  };

export const deleteFeedback =
  (id, searchString, status, from, to, sort, page, perPage) =>
  async (dispatch) => {
    try {
      const res = await axios.delete(
        `${BaseUrl}/api/feedback/deleteFeedback/${id}`
      );
      dispatch({
        type: DELETE_FEEDBACK,
        payload: res.data,
      });
      if (dispatch) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Feedback Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      dispatch(
        getAllFeedbacks(searchString, status, from, to, sort, page, perPage)
      );
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: DELETE_FEEDBACK_ERROR,
      });
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.msg
          ? err?.response?.data?.msg
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

export const getFeedBackById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/feedback/getfeed/${id}`);
    console.log("Res", res.data);
    dispatch({
      type: GET_FEEDBACK,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: GET_FEEDBACK_ERROR,
    });
  }
};
