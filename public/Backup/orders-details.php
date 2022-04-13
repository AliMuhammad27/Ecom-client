<?php

$title = "Order Details";
$pg = "orders";
include('header.php');
include('nav.php');

?>
<div class="app-content dashboard content">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="order-detail">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded">
                            <div class="card-body p-md-2 p-lg-3 p-xl-4">
                                <div class="page-title mb-2">
                                    <div class="row">
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <h1><a href="orders.php"><i class="fa fa-angle-left"></i></a>Order Details</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-block mb-1">
                                    <div class="row ">
                                        <div class="col-12">
                                            <h3>Order & Account</h3>
                                        </div>
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Order Information</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 mb-2">
                                                            <h4>Order Date</h4>
                                                            <p>mm/dd/yyyy</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>Order Status</h4>
                                                            <div class="d-block mt-1">
                                                                <div class="form-check form-check-inline radio">
                                                                    <input id="radio-1" name="radio" type="radio" checked="">
                                                                    <label for="radio-1" class="radio-label">Yes</label>
                                                                </div>
                                                                <div class="radio form-check form-check-inline">
                                                                    <input id="radio-2" name="radio" type="radio">
                                                                    <label for="radio-2" class="radio-label">No</label>
                                                                </div>
                                                            </div>
                                                            <a href="edit-category.php" class="btn btn-primary mt-2" data-toggle="modal" data-target=".order-update">Update Status</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Account Information</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 mb-2">
                                                            <h4>Customer Name</h4>
                                                            <p>Abc</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>Email</h4>
                                                            <p>test@email.com</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-block mb-1">
                                    <div class="row ">
                                        <div class="col-12 title">
                                            <h3>Address</h3>
                                        </div>
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Billing Address</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 col-xl-4">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. .</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-block mb-1">
                                    <div class="row ">
                                        <div class="col-12 title">
                                            <h3>Payment and Shipping</h3>
                                        </div>
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Payment Information</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>Payment Method</h4>
                                                            <p>Card</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Shipping Information</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 mb-2">
                                                            <h4>Shipping Method</h4>
                                                            <p>Flat Rate - Flat Rate</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h4>Shipping Price</h4>
                                                            <p>$10.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="order-block ">
                                    <div class="row ">
                                        <div class="col-12 title">
                                            <h3>Products</h3>
                                        </div>
                                        <div class="col-12">
                                            <div class="card mb-0">
                                                <div class="table-responsive">
                                                    <table class="table shop_table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th class="product-sku">SKU</th>
                                                                <th class="product-name">Product</th>
                                                                <th class="product-color">Color</th>
                                                                <th class="product-color">Size</th>
                                                                <th class="product-quantity">Qty</th>
                                                                <th class="product-price-per">Price per unit</th>
                                                                <th class="product-price">Price </th>
                                                                <th class="product-subtotal">Sub Total</th>
                                                                <th class="product-tax">Tax Amount</th>
                                                                <th class="product-tax-amount">Tax Percent</th>
                                                                <th class="product-total">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="product-sku" data-title="sku">1sdnk</td>
                                                                <td class="product-name">Product abc</td>
                                                                <td class="product-color" data-title="sku">Red</td>
                                                                <td class="product-color" data-title="size">Large</td>
                                                                <td class="product-quantity" data-title="quantity">1</td>
                                                                <td class="product-price-per" data-title="sku">$00.00</td>
                                                                <td class="product-price" data-title="sku">$00.00</td>
                                                                <td class="product-subtotal" data-title="subtotal">$00.00</td>
                                                                <td class="product-tax" data-title="tax">$20.00</td>
                                                                <td class="product-tax-amount" data-title="tax-amount">$00.00</td>
                                                                <td class="product-total" data-title="total">$00.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row info-block ">
                                    <div class="col-12 col-md-8 col-lg-9 align-self-end">
                                        <a href="orders-invoice.php" class="btn btn-primary">Print Invoice</a>
                                    </div>
                                    <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-end">
                                        <table cellspacing="0" class="table total-table table-borderless mt-5">
                                            <tbody>
                                                <tr class="cart-subtotal">
                                                    <th>Sub Total</th>
                                                    <td data-title="Subtotal"><span class="amount"><span class="currencySymbol">$</span>44.00</span></td>
                                                </tr>
                                                <tr class="cart-subtotal">
                                                    <th>Shipping </th>
                                                    <td data-title="Subtotal"><span class="amount"><span class="currencySymbol">$</span>0.00</span></td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Tax</th>
                                                    <td data-title="Total"><span class="amount"><span class="currencySymbol">$</span>$52.80</span></strong> </td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"><span class="amount"><span class="currencySymbol">$</span>$52.80</span></strong> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>
        </div>
    </div>
</div>

<!-- Order Update Popup -->
<div class="modal fade order-update p-0" tabindex="" role="" aria-labelledby="" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="btn close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="login.php" method="post">
                    <div class="row">
                        <div class="col-12 text-center">
                            <i class="fa fa-question green"></i>
                            <h3 class="mb-0">Your order status has been updated</h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<?php
include('footer.php');
?>