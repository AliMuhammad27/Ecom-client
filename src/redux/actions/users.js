import axios from "axios";
import Swal from "sweetalert2";
import {
  CREATE_USER,
  CREATE_USER_ERROR,
  GET_USERS,
  USERS_ERROR,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";
export const getAllUsers =
  (searchString, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${BaseUrl}/api/user/getAllUsers?searchString=${searchString}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("res", res.data);
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: USERS_ERROR,
      });
    }
  };

//creating a user
export const createUser = (formData) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`${BaseUrl}/api/user`, formData, config);
    console.log("Res", res);
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
    if (dispatch) {
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "User Created Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: CREATE_USER_ERROR,
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
