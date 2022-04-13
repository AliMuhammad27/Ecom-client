<?php
$title = "Feedback Detail";
$pg = "feedback";
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
                                            <h1>Feedback</h1>
                                        </div>
                                        <div class="col-12">
                                            <h3>Feedback Information </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-block">
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label>First Name</label>
                                        </div>
                                        <div class="col-12">Mark</div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label>Last Name</label>
                                        </div>
                                        <div class="col-12">Carson</div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label for="">Email</label>
                                        </div>
                                        <div class="col-12">testing@test.com</div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label for="">Subject</label>
                                        </div>
                                        <div class="col-12">Abc</div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label for="">Date</label>
                                        </div>
                                        <div class="col-12">mm/dd/yyyy</div>
                                    </div>
                                    <div class="row detail-row">
                                        <div class="col-12 lablename">
                                            <label for="">Message</label>
                                        </div>
                                        <div class="col-12 col-md-5">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. .</p>
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