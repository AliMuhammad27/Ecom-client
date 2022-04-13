import React, { useEffect, Fragment } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { loadAdmin } from "./redux/actions/auth";
import { setAuthToken } from "./utils/setAuthToken";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Profile from "./components/profile-forms/Profile";
import Product from "./components/product/Product";
import EditProfile from "./components/profile-forms/EditProfile";
import UpdatePassword from "./components/password/UpdatePassword";
import AddProduct from "./components/product/AddProduct";
import Orders from "./components/orders/Orders";
import Taxes from "./components/taxes/Taxes";
import Users from "./components/user/Users";
import FeedBacks from "./components/feedback/FeedBacks";
import AddTax from "./components/taxes/AddTax";
import NewUser from "./components/user/NewUser";
import FeedBackDetails from "./components/feedback/FeedBackDetails";
import ProductDetail from "./components/product/ProductDetail";
import EditProduct from "./components/product/EditProduct";
import OrderDetail from "./components/orders/OrderDetail";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute exact path="/Taxes" component={Taxes} />
            <PrivateRoute
              exact
              path="/UpdatePassword"
              component={UpdatePassword}
            />
            <PrivateRoute path="/add-tax" component={AddTax} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/products" component={Product} />
            <PrivateRoute path="/add-product" component={AddProduct} />
            <PrivateRoute path="/orders" component={Orders} />
            <PrivateRoute path="/taxes" component={Taxes} />
            <PrivateRoute path="/Users" component={Users} />
            <PrivateRoute exact path="/Feedbacks" component={FeedBacks} />
            <PrivateRoute exact path="/new-user" component={NewUser} />
            <PrivateRoute exact path="/edit-product" component={EditProduct} />
            <PrivateRoute
              exact
              path="/edit-product/:id"
              component={EditProduct}
            />
            <PrivateRoute
              exact
              path="/product-detail/:id"
              component={ProductDetail}
            />
            <PrivateRoute
              exact
              path="/feedback-details/:id"
              component={FeedBackDetails}
            />
            <PrivateRoute
              exact
              path="/order-detail/:id"
              component={OrderDetail}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
