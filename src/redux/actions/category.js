import axios from "axios";
import { GET_ALL_CAT, GET_ALL_CAT_ERROR } from "./actionTypes";
const BaseUrl = "http://localhost:5000";
export const getAllCategory = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/category/getAllCats`, {
      params: { page: 1, limit: 5 },
    });
    console.log("Res", res);
    dispatch({
      type: GET_ALL_CAT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_CAT_ERROR,
    });
  }
};
