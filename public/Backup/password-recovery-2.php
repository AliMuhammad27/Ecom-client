<?php
$title = "Password Recovery";
$pg = "password-recovery";
include('header.php');
?>

<section class="login-wrap">
	<div class="container m-auto">
		<div class="login-inner">
			<div class="row">
				<div class="col-lg-12 col-12 ">
					<div class="right">
						<div class="logo text-center"><img src="images/login-logo.png" alt="" /></div>
						<h1 class="">Password Recovery</h1>
						<form action="password-recovery-3.php">
							<div class="row">
								<div class="col-12 form-group position-relative mb-1">
									<label for="">Verification Code <span class="danger">*</span></label>
									<input type="email" class="form-control" placeholder="Enter Verification Code">
								</div>
							</div>
							<div class="flex-row">
								<div class="d-flex justify-content-end">
									<div class="forgot"> <a href="#">Resend Code</a> </div>
								</div>
							</div>
							<div class="row">
								<div class="d-block col-12 text-center mt-4">
									<button type="sumit" class="btn w-100 btn-outline">Continue</button>
								</div>
							</div>
							<div class="row">
								<div class="d-block col-12 text-center mt-1">
									<a href="login.php" class="btn btn-primary w-100">Back To Login</a>
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