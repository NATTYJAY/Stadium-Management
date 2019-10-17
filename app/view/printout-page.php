<?php include"head_print.php";?>
	<!-- CONTENT -->
	<div class="container">

		
		<div class="container mt25 offset-0">
			
			
			<!-- CONTENT -->
			<div class="col-md-12 pagecontainer2 offset-0">
				
				
				<div class="hpadding50c">
					<img src="../images/s.png" class="login-img" alt="logo"/><br/>
				<div class="searchingbg">
				<ul class="leftatr">
					<li>Match Booked</li>
					<li>Name</li>
					<li>Booking Number</li>
					<li>Email</li>
					<li>Date Booked</li>
					<li>Phone</li>
					<li style="font-weight: bold">Plan</li>
					<li>Amount Paid</li>
				</ul>
				<ul class="rightatr">
					<?php

					if($_SERVER['REQUEST_METHOD']== "GET"){
				          $leave = explode("/", $_SERVER["REQUEST_URI"]);
				          unset($leave[0]);
				          $ide = $leave[2];

				          echo $booking->_print_user_ticket($ide);
  	}
					?>
					<!-- <?php echo $ide;  ?> -->
					<!-- <?php ?> -->

				</ul>
			</div>
			
				</div>
				
			<div class="clearfix"></div><br/>
			
			</div>

			<!-- END CONTENT -->			
			

			
		</div>
		
		
	</div>
	<!-- END OF CONTENT -->
	