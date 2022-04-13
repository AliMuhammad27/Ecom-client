<?php
$title = "Dashboard";
$pg = "Dashboard";
include('header.php');
include('nav.php');

?>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded">
                            <div class="card-body p-md-2 p-lg-3 p-xl-4">
                                <div class="page-title mb-0">
                                    <div class="row">
                                        <div class="col-12 col-sm-12">
                                            <h1>Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-dashboard mt-3 mb-3">
                                    <div class="row">
                                        <div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0 d-flex align-items-stretch">
                                            <div class="card">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="media d-flex align-items-stretch w-100">
                                                        <div class="media-body text-left">
                                                            <div class="card-title">TOTAL CUSTOMERS</div>
                                                            <h3>100</h3>
                                                        </div>
                                                        <div class="align-self-center text-right">
                                                            <h4><i class="fa fa-sort-up"></i>100.0%</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4 col-xl-3 pl-md-0 mb-2 mb-md-0 d-flex align-items-stretch">
                                            <div class="card">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="media d-flex align-items-stretch w-100">
                                                        <div class="media-body text-left ">
                                                            <div class="card-title">TOTAL ORDERS</div>
                                                            <h3>100</h3>
                                                        </div>
                                                        <div class="align-self-center text-right">
                                                            <h4><i class="fa fa-sort-up"></i>100.0%</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4 col-xl-3 pl-md-0 mb-2 mb-md-0 d-flex align-items-stretch">
                                            <div class="card">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="media d-flex align-items-stretch w-100">
                                                        <div class="media-body text-left ">
                                                            <div class="card-title">TOTAL SALE</div>
                                                            <h3>$1500</h3>
                                                        </div>
                                                        <div class="align-self-center text-right">
                                                            <h4><i class="fa fa-sort-up"></i>100.0%</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4 col-xl-3 pl-md-0 mb-2 mb-md-0 d-flex align-items-stretch">
                                            <div class="card">
                                                <div class="card-body d-flex align-items-center">
                                                    <div class="media d-flex align-items-stretch w-100">
                                                        <div class="media-body text-left ">
                                                            <div class="card-title">AVERAGE ORDER SALE</div>
                                                            <h3>$1500</h3>
                                                        </div>
                                                        <div class="align-self-center text-right">
                                                            <h4><i class="fa fa-sort-up"></i>100.0%</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <div class="chartbox">
                                            <div class="row">
                                                <div class="col-12 tckt-srch-row text-left">
                                                    <h2>Sales Analytics</h2>
                                                    <div class="select-input">
                                                        <select name="" id="">
                                                            <option value="">Select Year</option>
                                                            <option value="">2012</option>
                                                            <option value="">2012</option>
                                                            <option value="">2012</option>
                                                            <option value="">2012</option>
                                                            <option value="">2012</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chart-main position-relative">
                                                <div class="row">
                                                    <div class="col-12 col-xl-12 text-center">
                                                        <img src="images/chart.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content">
                                <div class="card-body card-body p-md-2 p-lg-3 p-xl-4">
                                    <h2>Order ID</h2>
                                    <div class="row row-table">
                                        <div class="main-tabble table-responsive">
                                            <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="dataTables_length">
                                                            <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-control form-control-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select> entries</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6">
                                                        <div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0"></label></div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table class="table table-borderless dataTable">
                                                            <thead>
                                                                <tr>
                                                                    <th class="sorting_asc">S.NO</th>
                                                                    <th class="sorting">Base Total</th>
                                                                    <th class="sorting">Order Date</th>
                                                                    <th class="sorting">STATUS</th>
                                                                    <th class="sorting">Billed To</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="">01</td>
                                                                    <td>$100</td>
                                                                    <td>DD\mm\yyyy</td>
                                                                    <td>In Progress</td>
                                                                    <td>Mark Carson</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">01</td>
                                                                    <td>$100</td>
                                                                    <td>DD\mm\yyyy</td>
                                                                    <td>In Progress</td>
                                                                    <td>Mark Carson</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">01</td>
                                                                    <td>$100</td>
                                                                    <td>DD\mm\yyyy</td>
                                                                    <td>In Progress</td>
                                                                    <td>Mark Carson</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-5">
                                                        <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-7">
                                                        <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button page-item previous disabled"><a href="#" class="page-link">Previous</a></li>
                                                                <li class="paginate_button page-item active"><a href="#" class="page-link">1</a></li>
                                                                <li class="paginate_button page-item next disabled" i><a href="#" class="page-link">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

<?php
include('footer.php');
?>