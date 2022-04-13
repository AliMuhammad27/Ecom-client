<?php
$title = "Edit Profile";
$pg = "Edit Profile";
include('header.php');
include('nav.php');
?>

<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="edit-profile">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-body p-md-2 p-lg-3 p-xl-4">
                                <div class="page-title">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1><a href="profile.php"><i class="fa fa-angle-left"></i></a>Edit profile</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-block">
                                    <div class="row">
                                        <div class="col-md-8 col-lg-10">
                                            <div class="media d-sm-flex d-block">
                                                <div class="media-left">
                                                    <div class="profile-img text-center">
                                                        <div class="attached">
                                                            <img src="images/avatar.png" class="img-fluid ml-0" alt="">
                                                            <button name="file" class="camera-btn" onclick="document.getElementById('upload').click()">
                                                                <i class="fa fa-camera"></i></button>
                                                            <input type="file" id="upload" name="file">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <div class="row detail-row">
                                                        <div class="col-12 col-md-6  col-xl-5 form-group">
                                                            <label>First Name <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" Value="Mark">
                                                        </div>
                                                    </div>
                                                    <div class="row detail-row">
                                                        <div class="col-12 col-md-6  col-xl-5 form-group">
                                                            <label>Last Name <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" Value="Carson">
                                                        </div>
                                                    </div>
                                                    <div class="row detail-row">
                                                        <div class="col-12 col-md-6  col-xl-5 form-group">
                                                            <label>Email</label>
                                                            <input type="email" class="form-control border-0" Value="test@email.co">
                                                        </div>
                                                    </div>
                                                    <div class="row detail-row mt-1">
                                                        <div class="col-12 col-md-6 col-xl-5">
                                                            <a href="update-password.php" class="btn btn-primary btn-fixed-190">Update</a>
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


<!--change password modal start here-->
<div class="login-fail-main">
    <div class="featured inner">
        <div class="modal fade another-modal change-password-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lgg">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main">
                        <div class="payment-modal-inner"> <img src="images/payme.png" class="img-fluid" alt="">
                            <h1>Change Password</h1>
                            <form action="">
                                <div class="row">
                                    <div class="col-12 form-group">
                                        <label for="">Current Password</label>
                                        <input type="password" placeholder="Enter Current Password" class="form-control">
                                        <button class="view" type="button"><i class="fa fa-eye"></i></button>
                                    </div>
                                    <div class="col-12 form-group">
                                        <label for="">New Password</label>
                                        <input type="password" placeholder="Enter New Password" class="form-control">
                                        <button class="view" type="button"><i class="fa fa-eye"></i></button>
                                    </div>
                                    <div class="col-12 form-group">
                                        <label for="">Retype Password</label>
                                        <input type="password" placeholder="Retype Password" class="form-control">
                                        <button class="view" type="button"><i class="fa fa-eye"></i></button>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button type="submit" class="orange-btn">update </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--change password modal end here-->

<?php
include('footer.php');
?>