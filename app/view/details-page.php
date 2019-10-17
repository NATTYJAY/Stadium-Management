<?php include"header_details.php";?>

	<div class="container breadcrub">
		<div class="clearfix"></div>
		<div class="brlines"></div>
	</div>	

	<?php

		if($_SERVER['REQUEST_METHOD']== "GET"){
					          $leave = explode("/", $_SERVER["REQUEST_URI"]);
					          unset($leave[0]);
					          $idr_p = $leave[2];


      					}
	?>

	<!-- CONTENT -->
	<div class="container">
		<div class="container mt25 offset-0">
			<!-- LEFT CONTENT -->
			<div class="col-md-8 pagecontainer2 offset-0">

				<div class="padding30 grey">
				
				
					<span class="size16px bold dark left">Booking information</span>
					<div class="roundstep active right">1</div>
					<div class="clearfix"></div>
					<div class="line4"></div>
					
					PLEASE KINDLY ENSURE ALL INFORMATION IS CORRECT BEFORE PROCEDDING TO BOOKING SECTION. ENSURE YOU CHOOSE YOUR TICKET TYPE BEFORE BOOKING. GOOD LUCK
					
					<br/>
					
					<div class="col-md-4 textleft margtop15">

					</div>
					<div class="clearfix"></div>
					
					<br/>
					<div class="col-md-4 textright">
						<div class="margtop7"><span class="dark">Full Names</span><span class="red">*</span></div>
					</div>
					<div class="col-md-4">
						<span class="size12">First Name</span>						
						<input type="text" class="form-control" placeholder="First Name" 
						value="<?php echo ($booking->all_user_information($idr_p)->fname) ?>" readonly = "readonly" id = "first_na">
					</div>
					<div class="col-md-4 textleft">
						<span class="size12">Last Name</span>	
						<input type="text" class="form-control" placeholder="Last Name" value="<?php echo ($booking->all_user_information($idr_p)->lname) ?>" readonly = "readonly" id="last_na">
					</div>
					<div class="clearfix"></div>
					
					<br/>
					<div class="col-md-4 textright">
						<div class="margtop7"><span class="dark">Emails</span><span class="red">*</span></div>
					</div>
					<div class="col-md-8">
						<span class="size12">Preferred Email</span>						
						<input type="email" class="form-control" placeholder="Email"  value="<?php echo ($booking->all_user_information($idr_p)->email) ?>" readonly = "readonly" id="email_na">
					</div><div class="clearfix"></div>
					
					<br/>
					<div class="col-md-4 textright">
						<div class="margtop7"><span class="dark">Mobile</span><span class="red">*</span></div>
					</div>
					<div class="col-md-8">
						<span class="size12">Preferred Phone Number</span>						
						<input type="text" class="form-control" placeholder="Phone Number"  value="<?php echo ($booking->all_user_information($idr_p)->phone) ?>" readonly = "readonly" id="phone_na">
					</div>
					<div class="clearfix"></div>
					<br/>
					<div class="col-md-4 textright">
						<div class="margtop7"><span class="dark">Choose Plan</span><span class="red">*</span></div>
					</div> 

					<div class="col-md-4 textleft" hidden="hidden">
						<span class="size12">id*</span>	
						<input type="text" class="form-control" id="stadium_id" value="<?php print_r($idr_p) ?>" readonly = "readonly">

						
					</div> 
						<div class="col-md-4 textleft" hidden="hidden">
						<span class="size12">user_id*</span>	
						<input type="text" class="form-control" id="user_id" value="<?php echo ($booking->all_user_information($idr_p)->user_id) ?>" readonly = "readonly">
						<!-- <span style="color:red" id="c_phone_err"></span> -->
					</div> 
					<div class="col-md-8">
						<span class="size12">Ticket Type</span>	
										<select class="form-control mySelectBoxClass" id="ticket_plans">
										  <option value="selected">Select Plan Please</option>
										  <?php echo $booking->show_ticket_name(); ?>
										</select>
						<span style="color:red" id="plan_err"></span>
					</div><br/><br/>

					<div class="col-md-4 textright">
						<div class="margtop7"><span class="dark"></span><span class="red">*</span></div>
					</div>
					<div class="col-md-8" hidden="hidden" >
										<input type="text" class="form-control" placeholder=""  readonly="readonly" id="amount">
					</div>
					<br/>
					<span class="size16px bold dark left">Review and buy your ticket</span>
					<div class="roundstep right">5</div>
					<div class="clearfix"></div>
					<div class="line4"></div>		
					
					<div class="alert alert-warning">
					Attention! Please read important booking information! <br/>
					<p class="size12">• please ensure that you print your ticket when once the booking is succesful !. Or you ensure you keep your refrence Identification code safe. Since the Ref identity will be used for authetication before entering the stadium.</p>
					</div>		
					By selecting to complete this booking I acknowledge that I have read and accept the <a href="#" class="clblue">rules & 
					restrictions</a> <a href="#" class="clblue">terms & conditions</a> , and <a href="#" class="clblue">privacy policy</a>.	<br/>	

					<div class="row">
						<div class="col-md-4"><button type="button" class="bluebtn margtop20" id="completebookings" >Complete booking</button></div>
						<div class="col-md-8"><div role= "alert" id="suc"></div></div>
					</div>
					

					<!-- <br/><br/>
					<div class="alert alert-success textcenter" role= "alert"><h5><b>PAYMENT SUCCESSFUL !</b></h5> Click <a href="#">here</a> to print your ticket</h4></div> -->
					<!-- onclick="payWithPaystack()" -->	
				</div>
			</div>
			<!-- END OF LEFT CONTENT -->			
			
			<!-- RIGHT CONTENT -->
			<div class="col-md-4" >
				
				<div class="pagecontainer2 paymentbox grey">
					<div class="padding20">
						<span class="opensans size18 dark bold caps">Match Preview Details</span>
					</div>
					<div class="line3"></div>
					
					<div class="hpadding30 margtop30">
					
					

					<!-- GOING TO -->
					<div>
						
				 <?php 
	 			  echo($booking->display_side_details($idr_p));
		          ?><div class="padding30">	<?php	
		          echo ($booking->display_detail_amount($idr_p));
		          ?><div class="clearfix"></div></div><?php
				?>
				</div><br/>
				<div class="pagecontainer2 needassistancebox">
					<div class="cpadding1">
						<br>
						<div class="alert alert-info">
					Lost Your ticket or you can't remember your reference Identity Number ?.<br/>
					<p class="size12">• Click <a href="/preview">Here</a> to print your ticket again</p>
					</div>	
					</div>
				</div><br/>
				<div class="pagecontainer2 needassistancebox">
					<div class="cpadding1">
						<span class="icon-help"></span>
						<h3 class="opensans">Need Assistance?</h3>
						<p class="size14 grey">Our team is 24/7 at your service to help you with your booking issues or answer any related questions</p>
						<p class="opensans size30 lblue xslim">(+234)8060860316</p>
					</div>
				</div><br/>
			</div>
			<!-- END OF RIGHT CONTENT -->
		</div>
	</div>
	<!-- END OF CONTENT -->
	<?php include"footer_details.php";?>