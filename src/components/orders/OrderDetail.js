import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getOrderById } from "../../redux/actions/orders";
import { Link } from "react-router-dom";
import moment from "moment";
const OrderDetail = ({ match }) => {
  const orderInfo = useSelector((state) => state.orders?.order);
  console.log("orderInfo", orderInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderById(match.params.id));
  }, [match.params.id]);

  return (
    <div className="app-content dashboard content">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration" className="order-detail">
            <div className="row">
              <div className="col-12">
                <div className="card rounded">
                  <div className="card-body p-md-2 p-lg-3 p-xl-4">
                    <div className="page-title mb-2">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                          <h1>
                            <Link to="/orders">
                              <i className="fa fa-angle-left" />
                            </Link>
                            Order Details
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="order-block mb-1">
                      <div className="row ">
                        <div className="col-12">
                          <h3>Order &amp; Account</h3>
                        </div>
                        <div className="col-12 ">
                          <div className="card light-primary-bg">
                            <div className="card-header">
                              <h4>Order Information</h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12 mb-2">
                                  <h4>Order Date</h4>
                                  <p>
                                    {moment(orderInfo?.createdAt).format("ll")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <h4>Order Status</h4>
                                  <div className="d-block mt-1">
                                    <div className="form-check form-check-inline radio">
                                      <label
                                        htmlFor="radio-1"
                                        className="radio-label"
                                      >
                                        {" "}
                                        {orderInfo?.isPaid ? (
                                          <>Delivered</>
                                        ) : (
                                          <>Pending</>
                                        )}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card light-primary-bg">
                            <div className="card-header">
                              <h4>Account Information</h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12 mb-2">
                                  <h4>Customer Name</h4>
                                  <p>{orderInfo?.user?.firstname}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <h4>Email</h4>
                                  <p>{orderInfo?.user?.email}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-block mb-1">
                      <div className="row ">
                        <div className="col-12 title">
                          <h3>Address</h3>
                        </div>
                        <div className="col-12">
                          <div className="card light-primary-bg">
                            <div className="card-header">
                              <h4>Billing Address</h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12 col-md-6 col-xl-4">
                                  <p>{orderInfo?.shippingAddress}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-block mb-1">
                      <div className="row ">
                        <h3 className="col-md-6 col-12">
                          Payment and Shipping
                        </h3>
                        <div className="col-md-6 col-12 align-self-end text-right"></div>
                        <div className="col-12 mt-2">
                          <div className="card light-primary-bg">
                            <div className="card-header">
                              <h4>Payment Information</h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12">
                                  <h4>Payment Method</h4>
                                  <p>Visa</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card light-primary-bg">
                            <div className="card-header">
                              <h4>Shipping Information</h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12 mb-2">
                                  <h4>Shipping Method</h4>
                                  <p>By-Ship</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <h4>Shipping Price</h4>
                                  <p>{orderInfo?.shippingPrice}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-block ">
                      <div className="row ">
                        <div className="col-12 title">
                          <h3>Products</h3>
                        </div>
                        <div className="col-12">
                          <div className="card mb-0 light-primary-bg">
                            <div className="table-responsive">
                              <table className="table shop_table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-sku">SKU</th>
                                    <th className="product-name">Product</th>
                                    {/* <th className="product-color">Color</th>
                                    <th className="product-color">Size</th> */}
                                    <th className="product-quantity">Qty</th>
                                    <th className="product-price-per">
                                      Price per unit
                                    </th>
                                    <th className="product-price">Price </th>
                                    <th className="product-subtotal">
                                      Sub Total
                                    </th>
                                    <th className="product-tax">Tax Amount</th>
                                    <th className="product-tax-amount">
                                      Tax Percent
                                    </th>
                                    <th className="product-total">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td
                                      className="product-sku"
                                      data-title="sku"
                                    >
                                      {orderInfo?.orderItems[0]?._id}
                                    </td>
                                    <td className="product-name">
                                      {orderInfo?.orderItems[0]?.name}
                                    </td>
                                    {/* <td
                                      className="product-color"
                                      data-title="sku"
                                    >
                                      Red
                                    </td>
                                    <td
                                      className="product-color"
                                      data-title="size"
                                    >
                                      Large
                                    </td> */}
                                    <td
                                      className="product-quantity"
                                      data-title="quantity"
                                    >
                                      {orderInfo?.orderItems[0]?.qty}
                                    </td>
                                    <td
                                      className="product-price-per"
                                      data-title="sku"
                                    >
                                      ${orderInfo?.orderItems[0]?.price}
                                    </td>
                                    <td
                                      className="product-price"
                                      data-title="sku"
                                    >
                                      ${orderInfo?.totalPrice}
                                    </td>
                                    <td
                                      className="product-subtotal"
                                      data-title="subtotal"
                                    >
                                      $
                                      {orderInfo?.orderItems[0]?.price +
                                        orderInfo?.totalPrice}
                                    </td>
                                    <td
                                      className="product-tax"
                                      data-title="tax"
                                    >
                                      ${orderInfo?.taxPrice}
                                    </td>
                                    <td
                                      className="product-tax-amount"
                                      data-title="tax-amount"
                                    >
                                      ${orderInfo?.taxperproduct}
                                    </td>
                                    <td
                                      className="product-total"
                                      data-title="total"
                                    >
                                      $
                                      {orderInfo?.orderItems[0]?.price +
                                        orderInfo?.totalPrice +
                                        orderInfo?.taxPrice +
                                        orderInfo?.taxperproduct}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row info-block justify-content-end">
                      <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-end">
                        <table
                          cellSpacing={0}
                          className="table total-table table-borderless mt-5"
                        >
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Sub Total</th>
                              <td data-title="Subtotal">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>
                                  {orderInfo?.orderItems[0]?.price +
                                    orderInfo?.totalPrice}
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal">
                              <th>Shipping </th>
                              <td data-title="Subtotal">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>
                                  {0}
                                </span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Tax</th>
                              <td data-title="Total">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>
                                  {orderInfo?.taxPrice}
                                </span>{" "}
                              </td>
                            </tr>
                            <tr className="order-total light-primary-bg">
                              <th>Total</th>
                              <td data-title="Total">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>
                                  {orderInfo?.orderItems[0]?.price +
                                    orderInfo?.totalPrice +
                                    orderInfo?.shippingPrice +
                                    orderInfo?.taxPrice}
                                </span>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
