<?php
$title = "Edit Categories";
$pg = "categories";
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
                                            <h1><a href="categories.php"><i class="fa fa-angle-left"></i></a>Edit Category</h1>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-6 text-right">
                                            <a href="edit-categories.php" class="btn btn-primary">Save</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-block">
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <label>Category Title <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control enter-input" value="Enter Category Title">
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <label>Visible In Menu<span class="text-danger">*</span></label>
                                            <div class="d-block">
                                                <div class="form-check form-check-inline radio">
                                                    <input id="radio-1" name="radio" type="radio" checked="">
                                                    <label for="radio-1" class="radio-label">Yes</label>
                                                </div>
                                                <div class="radio form-check form-check-inline">
                                                    <input id="radio-2" name="radio" type="radio">
                                                    <label for="radio-2" class="radio-label">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row detail-row mb-1">
                                        <div class="col-12 col-md-5">
                                            <h4 class="pl-15">Description and Images</h4>
                                        </div>
                                    </div>

                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <label>Description <span class="text-danger">*</span></label>
                                            <textarea placeholder="Enter Description">Enter Description</textarea>
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6 col-xl-6">
                                            <label>Image</label>
                                            <div class="upload-thumbs">
                                                <div class="upload-thumb  d-inline-block position-relative mr-1">
                                                    <button type="button" class="btn download rotate-45" data-dismiss="modal" aria-label="Close">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                    <label for="picture" class="d-block">
                                                        <img src="images/jacket-product.png" alt="" class="img-fluid">
                                                    </label>
                                                </div>
                                                <div class="upload-thumb  d-inline-block position-relative mr-1">
                                                    <button type="button" class="btn download rotate-45" data-dismiss="modal" aria-label="Close">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                    <label for="picture" class="d-block">
                                                        <img src="images/jacket-product.png" alt="" class="img-fluid">
                                                    </label>
                                                </div>
                                                <div class="d-inline-block align-bottom">
                                                    <label for="upload" class="d-block">
                                                        <i class="fa fa-upload"></i>
                                                    </label>
                                                    <input type="file" id="upload" name="file">
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

<!-- Active Category Popup -->
<div class="modal fade active-category p-0" tabindex="" role="" aria-labelledby="" aria-hidden="true" data-backdrop="static">
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
                            <h3>Are you sure you want to active
                                <span class="d-block">this category?</span>
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


<!-- Inactive Category Popup -->
<div class="modal fade inactive-category p-0" tabindex="" role="" aria-labelledby="" aria-hidden="true" data-backdrop="static">
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
                            <h3>Are you sure you want to Inactive
                                <span class="d-block">this category?</span>
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

<?php
include('footer.php');
?>