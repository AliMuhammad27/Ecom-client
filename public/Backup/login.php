<?php
$title = "Login";
$pg = "Login In";
include('header.php');
?>

<section class="login-wrap">
	<div class="container m-auto">
		<div class="login-inner">
			<div class="row">
				<div class="col-lg-12 col-12 ">
					<div class="right">
						<div class="logo text-center"><img src="images/login-logo.png" alt="" /></div>
						<h1 class="">Login</h1>
						<form action="dashboard.php">
							<div class="row">
								<div class="col-12 form-group position-relative">
									<label for="">Email <span class="text-danger">*</span></label>
									<input type="email" class="form-control" placeholder="Enter Email Address">
								</div>
								<div class="col-12 form-group mb-1">
									<label for="">Password <span class="text-danger">*</span> </label>
									<div class="position-relative">
										<input type="password" class="form-control enter-input" placeholder="Enter Password">
										<button class="btn view-btn position-absolute" onclick="event.preventDefault()"> <i class="fa fa-eye-slash enter-icon right-icon" aria-hidden="true"></i></button>
									</div>

								</div>
							</div>
							<div class="flex-row">
								<div class="d-flex justify-content-end">
									<div class="forgot"> <a href="password-recovery-1.php">Forgot Password?</a> </div>
								</div>
							</div>
							<div class="row">
								<div class="d-block col-12 text-center mt-4">
									<button type="sumit" class="btn btn-primary btn-login w-100">Login</button>
								</div>
							</div>
						</form>						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php include('footer.php') ?>