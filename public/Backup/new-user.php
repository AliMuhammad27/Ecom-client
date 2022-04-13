<?php
$title = "New Users";
$pg = "users";
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
                                        <div class="col-12">
                                            <h1><a href="users.php"><i class="fa fa-angle-left"></i></a>New User</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-block">
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6  col-xl-4 form-group">
                                            <label>First Name<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter First Name">
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6  col-xl-4 form-group">
                                            <label>Last Name <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter Last Name">
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6  col-xl-4 form-group">
                                            <label>Email Address <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" placeholder="Enter Email Address">
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6  col-xl-4 form-group">
                                            <label>Password <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control enter-input" placeholder="Enter Password">
                                                <button class="view-btn position-absolute" onclick="event.preventDefault()">
                                                    <i class="fa enter-icon right-icon fa-eye-slash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 col-md-6  col-xl-4 form-group">
                                            <label>Confirm Password <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control enter-input" placeholder="Confirm New Password">
                                                <button class="view-btn position-absolute" onclick="event.preventDefault()">
                                                    <i class="fa enter-icon right-icon fa-eye-slash" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row detail-row mt-1">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <a href="#_" class="btn btn-primary btn-fixed-190">Create</a>
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