<?php include"header.php";?>

	<div id="dajy" class="fullscreen-container mtslide sliderbg fixed">
			<div class="fullscreenbanner">
				<ul>

					<!-- papercut fade turnoff flyin slideright slideleft slideup slidedown-->
				
					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300"> 										
						<img src="images/slider/Webp.net-resizeimage.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
							 data-x="center"
							 data-y="120"
							 data-speed="1000"
							 data-start="800"
							 data-easing="easeOutExpo">
							  <div class="sboxpurple textcenter">
							  
							  	<?php 

										if($booking->portal_status()){
											?>	<a href="#"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;" disabled="disabled"><i>PORTAL IS CLOSE.</i></button></a><?php
										}else{
											?><span class="lato size28 slim caps white">Upcoming Fix matches</span><br/><br/><br/>
								<span style="font-size: 90px;font-weight: bold; color: white; text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['home'] ?></span> <span style="font-size:60px;font-style: italic; color: white; text-decoration: none;">vs</span>  <span style="font-size: 90px;font-weight: bold; color: yellow;text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['away'] ?></span><br/><br/><br/>
								<span class="lato size48 slim uppercase yellow"><?php echo $booking->fetch_stadium_details()['start_time'] ?></span><br/><br/><span class="lato size20 normal caps white">@ Godswill Akpabio Internation Stadium, UYO</span><br/>
								<span class="lato size20 normal caps white">
						
						<a href="booking"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;"><i>Buy Ticket Now</i></button></a>
					</span><br/><br/><?php
										}

									 ?>
							<!-- 	 -->
							 </div>
						</div>	
					</li>	

					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300"> 										
						
						<img src="images/slider/t.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
							 data-x="center"
							 data-y="120"
							 data-speed="1000"
							 data-start="800"
							 data-easing="easeOutExpo"  >
							  <div class="sboxpurple textcenter">
									<?php 

										if($booking->portal_status()){
											?>	<a href="#"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;" disabled="disabled"><i>PORTAL IS CLOSE.</i></button></a><?php
										}else{
											?><span class="lato size28 slim caps white">Upcoming Fix matches</span><br/><br/><br/>
								<span style="font-size: 90px;font-weight: bold; color: white; text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['home'] ?></span> <span style="font-size:60px;font-style: italic; color: white; text-decoration: none;">vs</span>  <span style="font-size: 90px;font-weight: bold; color: yellow;text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['away'] ?></span><br/><br/><br/>
								<span class="lato size48 slim uppercase yellow"><?php echo $booking->fetch_stadium_details()['start_time'] ?></span><br/><br/><span class="lato size20 normal caps white">@ Godswill Akpabio Internation Stadium, UYO</span><br/>
								<span class="lato size20 normal caps white">
						
						<a href="booking"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;"><i>Buy Ticket Now</i></button></a>
					</span><br/><br/><?php
										}

									 ?>
							 </div>
						</div>	
					</li>	
					
					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300"> 										
						<img src="images/slider/r.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
							 data-x="center"
							 data-y="120"
							 data-speed="1000"
							 data-start="800"
							 data-easing="easeOutExpo">
							  <div class="sboxpurple textcenter">
									<?php 

										if($booking->portal_status()){
											?>	<a href="#"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;" disabled="disabled"><i>PORTAL IS CLOSE.</i></button></a><?php
										}else{
											?><span class="lato size28 slim caps white">Upcoming Fix matches</span><br/><br/><br/>
								<span style="font-size: 90px;font-weight: bold; color: white; text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['home'] ?></span> <span style="font-size:60px;font-style: italic; color: white; text-decoration: none;">vs</span>  <span style="font-size: 90px;font-weight: bold; color: yellow;text-decoration: underline;"><?php echo $booking->fetch_stadium_details()['away'] ?></span><br/><br/><br/>
								<span class="lato size48 slim uppercase yellow"><?php echo $booking->fetch_stadium_details()['start_time'] ?></span><br/><br/><span class="lato size20 normal caps white">@ Godswill Akpabio Internation Stadium, UYO</span><br/>
								<span class="lato size20 normal caps white">
						
						<a href="booking"><button type="submit" class="btn-search" style="height:50px; width:250px; font-weight:bold; font-size:20px;"><i>Buy Ticket Now</i></button></a>
					</span><br/><br/><?php
										}

									 ?>
							 </div>
						</div>	
					</li>
					

				</ul>
				<div class="tp-bannertimer none"></div>
			</div>
		</div>
<!-- modal -->

</div>


<!-- modal ends -->
		<!--
		##############################
		 - ACTIVATE THE BANNER HERE -
		##############################
		-->
		<script type="text/javascript">

			var tpj=jQuery;
			tpj.noConflict();

			tpj(document).ready(function() {

			if (tpj.fn.cssOriginal!=undefined)
				tpj.fn.css = tpj.fn.cssOriginal;

				tpj('.fullscreenbanner').revolution(
					{
						delay:9000,
						startwidth:1170,
						startheight:600,

						onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

						thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
						thumbHeight:50,
						thumbAmount:3,

						hideThumbs:0,
						navigationType:"bullet",				// bullet, thumb, none
						navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

						navigationStyle:false,				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


						navigationHAlign:"left",				// Vertical Align top,center,bottom
						navigationVAlign:"bottom",					// Horizontal Align left,center,right
						navigationHOffset:30,
						navigationVOffset:30,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						touchenabled:"on",						// Enable Swipe Function : on/off


						stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
						stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

						hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
						hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
						hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


						fullWidth:"on",							// Same time only Enable FullScreen of FullWidth !!
						fullScreen:"off",						// Same time only Enable FullScreen of FullWidth !!


						shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

					});


		});
		</script>
		

		



	<!-- WRAP -->
	<div class="wrap cstyle03">
		
		
		<!-- <div class="lastminute lcfix">
			<div class="container lmc">	
				<img src="images/rating-4.png" alt=""/><br/>
				LAST MINUTE: <b>Barcelona</b> - 2 nights - Flight+4* Hotel, Dep 27h Aug from $209/person<br/>
				<form action="http://titanicthemes.com/travel/blue/details.html" >
					<button class="btn iosbtn" type="submit">Read more</button>
				</form>
			</div>
		</div> -->
		

		
		
		<!-- FOOTER -->
		
		<div class="footerbg sfix">
			<div class="container">		
				<footer>
					<div class="footer">
						<a href="#" class="social1"><img src="images/icon-facebook.png" alt=""/></a>
						<a href="#" class="social2"><img src="images/icon-twitter.png" alt=""/></a>
						<a href="#" class="social3"><img src="images/icon-gplus.png" alt=""/></a>
						<a href="#" class="social4"><img src="images/icon-youtube.png" alt=""/></a>
						<br/><br/>
						Copyright &copy; 2018 <a href="http://facebook.com/orackel">Israel Honcho</a> All rights reserved.
						<br/><br/>
						<a href="#top" id="gotop2" class="gotop"><img src="images/spacer.png" alt=""/></a>
					</div>
				</footer>
			</div>	
		</div>
		
		

		
		
	</div>
	<!-- END OF WRAP -->
	
	
	

    <!-- Javascript -->
	
    <!-- This page JS -->
	<script src="<?php echo $direction?>assets/js/js-index.js"></script>	
	
    <!-- Custom functions -->
    <script src="<?php echo $direction?>assets/js/functions.js"></script>
	
    <!-- Picker UI-->	
	<script src="<?php echo $direction?>assets/js/jquery-ui.js"></script>		
	
	<!-- Easing -->
    <script src="<?php echo $direction?>assets/js/jquery.easing.js"></script>
	
    <!-- jQuery KenBurn Slider  -->
    <script type="text/javascript" src="<?php echo $direction?>rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
	
   <!-- Nicescroll  -->	
	<script src="<?php echo $direction?>assets/js/jquery.nicescroll.min.js"></script>
	
    <!-- CarouFredSel -->
    <script src="<?php echo $direction?>assets/js/jquery.carouFredSel-6.2.1-packed.js"></script>
    <script src="<?php echo $direction?>assets/js/helper-plugins/jquery.touchSwipe.min.js"></script>
	<script type="text/javascript" src="<?php echo $direction?>assets/js/helper-plugins/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="<?php echo $direction?>assets/js/helper-plugins/jquery.transit.min.js"></script>
	<script type="text/javascript" src="<?php echo $direction?>assets/js/helper-plugins/jquery.ba-throttle-debounce.min.js"></script>
	
    <!-- Custom Select -->
	<script type='text/javascript' src='<?php echo $direction?>assets/js/jquery.customSelect.js'></script>	

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?php echo $direction?>dist/js/bootstrap.min.js"></script>
    
  </body>

<!-- Mirrored from titanicthemes.com/travel/blue/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Jun 2018 14:59:57 GMT -->
</html>
