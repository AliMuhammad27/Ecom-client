import {
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";
import Swal from "sweetalert2";
const BaseUrl = "http://localhost:5000";

//loading admin
export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${BaseUrl}/api/adminauth/getprofile`);
    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login admin
export const login = (email, password, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password, history });
  //console.log("body", body);
  try {
    const res = await axios.post(
      `http://localhost:5000/api/adminauth/login`,
      body,
      config
    );
    //console.log(res.data);

    history.push("/dashboard");

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILED,
    });

    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: err?.response?.data?.msg
        ? err?.response?.data?.msg
        : "Invalid Credentials",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
