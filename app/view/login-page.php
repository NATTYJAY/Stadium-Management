<?php include"header.php";?>
	<!-- 100% Width & Height container  -->
	<div class="login-fullwidith">
		
		<!-- Login Wrap  -->
		<div class="login-wrap">
			
			<div class="alert alert-success" role= "alert"><h4>Login Here</h4><p>Please Provide your Username and password to continue booking</p></div>
			<div class="login-c1">
				<div class="cpadding50">
					<label for="email">Email</label>
					<input type="text" class="form-control logpadding" id="email" placeholder="Your Email">
					<br/>
					<label for="password">Password</label>
					<input type="text" class="form-control logpadding" placeholder="Password" id="password">
				</div>
			</div><br>
			<div class="login-c2">
				<div class="logmargfix">
					<div class="chpadding50">
							<div class="alignbottom">
								<button class="btn-search4"  type="submit" onclick="errorMessage()">Login</button>							
							</div>
							<div class="alignbottom2">
							  <div class="checkbox">
								<label>
								  <input type="checkbox">Remember
								</label>
							  </div>
							</div>
					</div>
				</div>
			</div>
			<div class="login-c3">
				<div class="left"><a href="#" class="whitelink"><span></span>Website</a></div>
				<div class="right"><a href="#" class="whitelink">Lost password?</a></div>
			</div>			
		</div>
		<!-- End of Login Wrap  -->
	
	</div>	
	<!-- End of Container  -->

	<!-- Javascript  -->
	<script src="assets/js/initialize-loginpage.js"></script>
	<script src="assets/js/jquery.easing.js"></script>
	<!-- Load Animo -->
	<script src="plugins/animo/animo.js"></script>
	<script>
	function errorMessage(){
		$('.login-wrap').animo( { animation: 'tada' } );
	}
	</script>
	
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="dist/js/bootstrap.min.js"></script>
  </body>

<!-- Mirrored from titanicthemes.com/travel/blue/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Jun 2018 15:14:27 GMT -->
</html>