<?php
$title = "My Profile";
$pg = "My Profile";
include('header.php');
include('nav.php');

?>
<div class="app-content content  dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="my-profile">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded">
                            <div class="card-body p-md-2 p-lg-3 p-xl-4">
                                <div class="page-title">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>My Profile</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-block">
                                    <div class="row">
                                        <div class="col-12 col-md-8 col-lg-10">
                                            <div class="media d-sm-flex d-block">
                                                <div class="media-left">
                                                    <div class="profile-img text-center">
                                                        <img src="images/avatar.png" class="img-fluid ml-0" alt="">
                                                        <div class="change-pass text-center">
                                                            <a href="#" class="" data-toggle="modal">Change Password</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <div class="row detail-row d-flex align-items-center">
                                                        <div class="col-12 lablename">
                                                            <label for="">First Name</label>
                                                        </div>
                                                        <div class="col-12">Mark</div>
                                                    </div>
                                                    <div class="row detail-row d-flex align-items-center">
                                                        <div class="col-12 lablename">
                                                            <label for="">Last Name</label>
                                                        </div>
                                                        <div class="col-12">Williams</div>
                                                    </div>
                                                    <div class="row detail-row d-flex align-items-center">
                                                        <div class="col-12 lablename">
                                                            <label for="">Email</label>
                                                        </div>
                                                        <div class="col-12">test@email.co</div>
                                                    </div>
                                                    <div class="row detail-row d-flex align-items-center mb-1 pt-2">
                                                        <div class="col-12">
                                                            <a href="edit-profile.php" class="btn btn-primary btn-fixed-190">Edit</a>
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