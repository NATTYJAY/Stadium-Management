<?php include"header.php";?>
	<div class="container breadcrub">
		<div class="clearfix"></div>
	</div>	
	<!-- CONTENT -->
	<div class="container">
		<div class="container pagecontainer offset-0">	
			<!-- SLIDER -->
			<div class="col-md-8 details-slider">
				<div id="c-carousel">
				<div id="wrapper">
				<div id="inner">
					<div id="caroufredsel_wrapper2">
						<div id="carousel">
							<?php echo $booking->display_image();  ?>			
						</div>
					</div>
					<div id="pager-wrapper">
						<div id="pager">
							<?php echo $booking->display_small_image();  ?>	
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
				<button id="prev_btn2" class="prev2"><img src="images/spacer.png" alt=""/></button>
				<button id="next_btn2" class="next2"><img src="images/spacer.png" alt=""/></button>	
		</div>
		</div> <!-- /c-carousel -->
			</div>
	<div class="col-md-4 detailsright offset-0">
				<div class="line3"></div>
				<div class="hpadding20">
					<div class="row">
					 <?php echo $booking->display_amount_match(); ?>
					</div>
				</div>
<?php echo $booking->display_match_info(); ?>
			</div>
		</div>
	</div>
	<!-- END OF CONTENT -->
	<?php include"footer.php";?>