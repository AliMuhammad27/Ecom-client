<?php
$title = "Category Products";
$pg = "category-products";
include('header.php');
include('nav.php');
?>

<div class="app-content dashboard content">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="user-page">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded">
                            <div class="card-body p-md-2 p-lg-3 p-xl-4">
                                <div class="page-title">
                                    <div class="row">
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <h1>Products</h1>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-6 text-right">
                                            <a href="block-users.php" class="btn btn-primary">Add Product</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="dataTables_wrapper">
                                    <div class="user-listing-top">
                                        <div class="row d-flex justify-content-end mb-1">
                                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
                                                <div class="dataTables_filter">
                                                    <label>Search:<input type="search" class="form-control form-control-sm" placeholder="Search"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-end d-flex mb-1">
                                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block align-items-center">
                                                <label for="" class="d-block">Sort by:</label>
                                                <select name="" class="form-control sort-select" id="">
                                                    <option value="">Latest</option>
                                                    <option value="">Earlier</option>
                                                </select>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                                                <label for="" class="d-block">Filter by Category</label>
                                                <select name="" class="form-control" id="">
                                                    <option value="" selected>Category A</option>
                                                    <option value="">Category B</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row align-items-end d-flex">
                                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block align-items-center">
                                                <div class=" dataTables_length">
                                                    <label>Show <select class="form-control form-control-sm">
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                        </select> entries</label>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                                                <label for="" class="d-block">Filter by Status</label>
                                                <select name="" class="form-control" id="">
                                                    <option value="">Filter</option>
                                                    <option value="">user</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-table">
                                        <div class="main-tabble table-responsive">
                                            <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table class="table table-striped table-bordered zero-configuration dataTable no-footer">
                                                            <thead>
                                                                <tr>
                                                                    <th class="sorting_asc">ID</th>
                                                                    <th class="sorting">SKU</th>
                                                                    <th class="sorting">Name</th>
                                                                    <th class="sorting">Category</th>
                                                                    <th class="sorting">Status</th>
                                                                    <th class="sorting">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="">01</td>
                                                                    <td>ABC</td>
                                                                    <td>ABC</td>
                                                                    <td>Category A</td>
                                                                    <td>Active</td>
                                                                    <td>
                                                                        <div class="btn-group ml-1">
                                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-eye"></i>View Detail</a>
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-edit"></i>Edit</a>
                                                                                <a class="dropdown-item" href="#_" data-toggle="modal" data-target=".delete-product"><i class="fa fa-trash-alt"></i>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">01</td>
                                                                    <td>ABC</td>
                                                                    <td>ABC</td>
                                                                    <td>Category A</td>
                                                                    <td>Inactive</td>
                                                                    <td>
                                                                        <div class="btn-group ml-1">
                                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-eye"></i>View Detail</a>
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-edit"></i>Edit</a>
                                                                                <a class="dropdown-item" href="#_" data-toggle="modal" data-target=".delete-product"><i class="fa fa-trash-alt"></i>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">03</td>
                                                                    <td>ABC</td>
                                                                    <td>ABC</td>
                                                                    <td>Category A</td>
                                                                    <td>Active</td>
                                                                    <td>
                                                                        <div class="btn-group ml-1">
                                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-eye"></i>View Detail</a>
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-edit"></i>Edit</a>
                                                                                <a class="dropdown-item" href="#_" data-toggle="modal" data-target=".delete-product"><i class="fa fa-trash-alt"></i>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">04</td>
                                                                    <td>ABC</td>
                                                                    <td>ABC</td>
                                                                    <td>Category A</td>
                                                                    <td>Inactive</td>
                                                                    <td>
                                                                        <div class="btn-group ml-1">
                                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-eye"></i>View Detail</a>
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-edit"></i>Edit</a>
                                                                                <a class="dropdown-item" href="#_" data-toggle="modal" data-target=".delete-product"><i class="fa fa-trash-alt"></i>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="">05</td>
                                                                    <td>ABC</td>
                                                                    <td>ABC</td>
                                                                    <td>Category A</td>
                                                                    <td>Active</td>
                                                                    <td>
                                                                        <div class="btn-group ml-1">
                                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-eye"></i>View Detail</a>
                                                                                <a class="dropdown-item" href="user-details.php"><i class="fa fa-edit"></i>Edit</a>
                                                                                <a class="dropdown-item" href="#_" data-toggle="modal" data-target=".delete-product"><i class="fa fa-trash-alt"></i>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
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
                                                                <li class="paginate_button page-item"><a href="#" class="page-link">2</a></li>
                                                                <li class="paginate_button page-item"><a href="#" class="page-link">3</a></li>
                                                                <li class="paginate_button page-item"><a href="#" class="page-link">4</a></li>
                                                                <li class="paginate_button page-item"><a href="#" class="page-link">5</a></li>
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

<!-- Delet Product Popup -->
<div class="modal fade delete-product p-0" tabindex="" role="" aria-labelledby="" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="login.php" method="post">
                    <div class="row">
                        <div class="col-12 text-center">
                            <i class="fa fa-question red"></i>
                            <h3>Are you sure you want to delete
                                <span class="d-block">this product?</span>
                            </h3>
                            <button type="submit" class="btn btn-primary mr-1">yes</button>
                            <button type="submit" class="btn btn-secondary ml-1" data-dismiss="modal" aria-label="Close">No</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- <div class="col-12 col-md-6 col-lg-6 col-xl-6  sort-ban sort-datepicker">
    <h4>Sort by:</h4>
    <div class="d-sm-flex d-block">
        <div class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
            <input type="text" id="datepicker-2" placeholder="From" readonly>
        </div>
        <div class="input-wrap">
            <input type="text" id="datepicker-3" placeholder="To" readonly>
        </div>
    </div>
</div> -->


<!-- <div class="modal fade common-modal block-user" data-backdrop="static" tabindex="" role="" aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog modal-lgg">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-main">
                <div class="modal-inner">
                    <form action="">
                        <div class="row">
                            <div class="col-12 text-center">

                                <i class="fa fa-question-circle"></i>
                                <h3>Are You Sure You Want To Block <span>This User?</span></h3>
                                <button type="button" class="btn-default btn-yellow" data-toggle="modal" area-label="Close" data-dismiss="modal" data-target=".confirm-block-user">Yes</button>
                                <button type="button" class="btn-default" data-dismiss="modal" aria-label="Close">No</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->


<!-- <div class="modal fade common-modal confirm-block-user" data-backdrop="static" tabindex="" role="" aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog modal-lgg">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-main">
                <div class="modal-inner">
                    <form action="">
                        <div class="row">
                            <div class="col-12 text-center">
                                <i class="fa fa-check-circle"></i>
                                <h3>User Has Been Blocked</h3>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->


<?php
include('footer.php');
?>