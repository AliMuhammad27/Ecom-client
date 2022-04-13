import axios from "axios";
import {
  GET_ORDER,
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDER_ERROR,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";

export const getAllOrders =
  (searchString, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${BaseUrl}/api/order/getAllOrders?searchString=${searchString}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_ORDERS_ERROR,
      });
    }
  };

export const getOrderById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/order/getOrder/${id}`);
    console.log("Res", res);
    dispatch({
      type: GET_ORDER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ORDER_ERROR,
    });
  }
};
