  <?php 
          if($booking->checksession()){
          }else{
            header('location:/');
          } ?>
<!DOCTYPE html>
<html>
<head>
  	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title_page; ?></title>
	
    <!-- Bootstrap -->
    <link href="<?php echo $direct?>dist/css/bootstrap.css" rel="stylesheet" media="screen">
    <link href="<?php echo $direct?>assets/css/custom.css" rel="stylesheet" media="screen">

    <!-- Carousel -->
	<link href="<?php echo $direct?>examples/carousel/carousel.css" rel="stylesheet">
   
	<link href='http://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:700,400,300,300italic' rel='stylesheet' type='text/css'>	
	<!-- Font-Awesome -->
    <link rel="stylesheet" type="text/css" href="<?php echo $direct?>assets/css/font-awesome.css" media="screen" />
    <!--[if lt IE 7]><link rel="stylesheet" type="text/css" href="assets/css/font-awesome-ie7.css" media="screen" /><![endif]-->
	
    <!-- REVOLUTION BANNER CSS SETTINGS -->
    <link rel="stylesheet" type="text/css" href="<?php echo $direct?>css/fullscreen.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="<?php echo $direct?>rs-plugin/css/settings.css" media="screen" />

    <!-- Picker UI-->	
	<link rel="stylesheet" href="<?php echo $direct?>assets/css/jquery-ui.css" />		
	<link rel="stylesheet" href="plugins/jslider/css/jslider.css" type="text/css">
	<link rel="stylesheet" href="plugins/jslider/css/jslider.round-blue.css" type="text/css">

  <link href="<?php echo $direct?>assets/css/custom.css" rel="stylesheet" media="screen">

    <!-- Updates -->
    <link href="<?php echo $direct?>updates/update1/css/style01.css" rel="stylesheet" media="screen"> 
  
  <!-- Animo css-->
  <link href="<?php echo $direct?>plugins/animo/animate%2banimo.css" rel="stylesheet" media="screen">
  
  <link href="<?php echo $direct?>examples/carousel/carousel.css" rel="stylesheet">
    <!-- jQuery -->	
    <script src="<?php echo $direct?>assets/js/jquery.v2.0.3.js"></script>
    <script src="assets/js/jquery-ui.js"></script>	
	
	<!-- bin/jquery.slider.min.js -->
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/jshashtable-2.1_src.js"></script>
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/jquery.numberformatter-1.2.3.js"></script>
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/tmpl.js"></script>
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/jquery.dependClass-0.1.js"></script>
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/draggable-0.1.js"></script>
	<script type="text/javascript" src="<?php echo $direct?>plugins/jslider/js/jquery.slider.js"></script>
<script src="https://js.paystack.co/v1/inline.js"></script>
<script src="<?php echo $direct?>completejs/booking.js"></script>

	<!-- 	<script>
  function payWithPaystack(){
    var handler = PaystackPop.setup({
      key: 'pk_test_d0c2a7ce0aadae68507779584a6664237504c5f9',
      email: 'customer@email.com',
      amount: 10000*100,
      // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
        window.location='http://www.oop.com/response/'+response.reference;
          // alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }
</script> -->
  </head>
  <body id="top">
     <?php include"modal.php";?>
	<!-- Top wrapper -->			  
	<div class="navbar-wrapper2 navbar-fixed-top">
      <!-- <div class="container"> -->
		<div class="navbar mtnav">

			<div class="container offset-3">
			  <!-- Navigation-->
			  <div class="navbar-header">
				<button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
				  <span class="icon-bar"></span>
				  <span class="icon-bar"></span>
				  <span class="icon-bar"></span>
				</button>
				<a href="index-2.html" class="navbar-brand"><img src="/images/s.png" alt="Travel Agency Logo" class="logo" style="background-color: transparent;"/></a>
			  </div>
			  <div class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
				
				<?php

            if($extra_function->checksession()){
              ?>
                  <li><a href="/logout">Logout</a></li>
              <?php
            }else{
               ?>
            <li><a href="#" data-toggle="modal" data-target="#iconForm">Login</a></li>
            <li><a href="#" data-toggle="modal" data-target="#register">Register</a></li> 
              <?php
            }

          ?>
				</ul>
			  </div>
			  <!-- /Navigation-->			  
			</div>
		
        </div>
     <!--  </div> -->
    </div>
	<!-- /Top wrapper -->	

