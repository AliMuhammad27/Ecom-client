import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import feedbacks from "./feedbacks";
import users from "./users";
import products from "./products";
import taxes from "./taxes";
import orders from "./orders";
import categories from "./category";
export default combineReducers({
  auth,
  profile,
  feedbacks,
  taxes,
  users,
  products,
  orders,
  categories,
});
