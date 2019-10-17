<?php include"header.php";?>
	<div class="container breadcrub">
		<div class="clearfix"></div>
	<!-- 	<div class="brlines"></div> -->
	</div>	

	<!-- CONTENT -->
	<div class="container">
		<div class="container mt25 offset-0">
			<!-- CONTENT -->
			<div class="col-md-12 pagecontainer2 offset-0">
				<div class="hpadding50c">
					<p class="lato size22 slim textcenter" style="color:blue;font-weight: bold;">
					Thank You for booking with Us<br/>
					<?php
					echo "<pre>";

				print_r($booking->fetch_stadium_details());

					 // ($booking->all_user_information());
					// if(isset($_SESSION['user_email'])){

					// 	echo $_SESSION['user_email'];
					// }else{
					// 	echo 'not set o';
					// }
					// if($_SERVER['REQUEST_METHOD']== "GET"){
		   //              $leave = explode("/", $_SERVER["REQUEST_URI"]);
		   //              unset($leave[0]);
		   //              $idw = $leave[2];
		   //              	//echo $booking->all_user_information($idw);
		   //              echo "<pre>";
		   //              print_r($idw);
		   //              echo "<pre>"; 
					// }
					  ?> 

					<div class="row">
						<div class="col-md-4"></div>
						<div class="col-md-4">
							<div class="alert alert-success textcenter" role= "alert"><h4>Payment Successful</h4></div>
						</div>
						<div class="col-md-4"></div>
					</div>
					<p class="lato size22 slim textcenter">
					Please kindly click the button below to print or save your ticket to your device,<br/>
					You will only be allowed to enter the stadium when your ticket is verified at the venue
					</p><!-- 
					 -->
					</p>
					<div class="row">
						<div class="col-md-5"></div>
						<div class="col-md-2"><button class="btn-search4 caps center margtop20">Print Ticket</button></div>
						<div class="col-md-5"></div>
					</div>
					<br/>
					<div class="line3"></div>
					<br/>
					<div class="clearfix"></div>
				</div>
			<div class="clearfix"></div><br/><br/>
			</div>
			<!-- END CONTENT -->
		</div>
	</div>
	<!-- END OF CONTENT -->
<?php include"footer.php";?>