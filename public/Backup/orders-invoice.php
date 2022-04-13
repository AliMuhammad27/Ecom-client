<?php

$title = "Order delivered";
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
                                            <h1><a href="orders.php"><i class="fa fa-angle-left"></i></a>Invoice</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-block order-product-block mb-3">
                                    <div class="row ">
                                        <div class="col-12 col-sm-6">
                                            <h3 class="text-capitalize">Order #001</h3>
                                        </div>
                                        <div class="col-12 col-sm-6 text-right">
                                            <h3 class="post-date">Placed on: mm/dd/yy 00:00:00</h3>
                                        </div>
                                        <div class="col-12">
                                            <div class="media d-sm-flex d-block align-items-center mb-2">
                                                <div class="media-left">
                                                    <div class="rounded-10 preview-thumbs d-inline-block">
                                                        <div class="download-thumb  d-inline-block position-relative mr-2">
                                                            <label for="picture" class="d-block">
                                                                <img src="images/gloves-product.png" alt="" class="img-fluid">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <h3>ABC Product</h3>
                                                    <ul>
                                                        <li><label>Cost:</label> $ 00</li>
                                                        <li><label>Cost per Unit:</label> $ 00</li>
                                                        <li><label>Qty:</label> 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="media d-sm-flex d-block align-items-center">
                                                <div class="media-left">
                                                    <div class="rounded-10 preview-thumbs d-inline-block">
                                                        <div class="download-thumb  d-inline-block position-relative mr-2">
                                                            <label for="picture" class="d-block">
                                                                <img src="images/gloves-product.png" alt="" class="img-fluid">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <h3>ABC Product</h3>
                                                    <ul>
                                                        <li><label>Cost:</label> $ 00</li>
                                                        <li><label>Cost per Unit:</label> $ 00</li>
                                                        <li><label>Qty:</label> 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-block mb-1">
                                    <div class="row ">
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Shipping Address</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 col-xl-4">
                                                            <ul class="address-field">
                                                                <li>Rikkard Ambrose</li>
                                                                <li>ABC Street</li>
                                                                <li>Zip Code</li>
                                                                <li>Country</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4>Shipping Address</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 col-xl-4">
                                                            <ul class="address-field">
                                                                <li>Rikkard Ambrose</li>
                                                                <li>ABC Street</li>
                                                                <li>Zip Code</li>
                                                                <li>Country</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="row info-block ">
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <table cellspacing="0" class="table total-table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th colspan="2" class="text-center header">
                                                        <h3>Total Summary</h3>
                                                    </th>
                                                </tr>
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
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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