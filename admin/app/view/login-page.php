
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from creativethemes.co.in/demo/studioux/admin-dashborad-template/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 02 Jun 2018 10:08:31 GMT -->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $title_page; ?></title>
<meta name="description" content="" />
<meta name="keywords" content="admin, admin dashboard, admin template" />
<meta name="author" content="SRGIT"/>
<!-- Favicon -->
<link rel="shortcut icon" href="<?php echo $direction;?>plugins/assets/img/favicon/favicon.png">
<link rel="icon" href="<?php echo $direction;?>plugins/assets/img/favicon/favicon.png" type="image/x-icon">
<!-- Custom CSS -->
<link href="<?php echo $direction;?>plugins/assets/css/default.css" rel="stylesheet" type="text/css">
<script src="<?php echo $direction; ?>plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
      <script src="<?php echo $direction?>adminjs/stadium_admin.js"></script>
</head>
<body class="login-sidebar-background">
<!-- Preloader -->
<div class="preloader-it">
  <div class="preloader">
    <div class="circles-1">
      <div class="circles-1-center"></div>
      <div class="circles-1"></div>
      <div class="circles-1"></div>
      <div class="circles-1"></div>
      <div class="circles-1"></div>
      <div class="circles-1"></div>
      <div class="circles-1"></div>
    </div>
  </div>
</div>
<!-- //Preloader -->
<section id="wrapper" class="login-register login-sidebar">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 text-center parallax-fade-top subscribe-bg">
        <div class="main-title on-dark text-center mb-0"> <a href="#" class="text-center db"><img src="<?php echo $direction;?>plugins/assets/img/logo-dark.png" alt="Home" /><br/>
          <span class="brand-text">[Stadium Management<strong> System</strong>]</span> </a>
          <!-- <div class="main-subtitle-bottom smaller mt-10">Welcome back!</div> -->
        </div>
        <form class="form-horizontal form-material" id="loginform" action="">
          <div id="alert" role="alert">
            
            
          </div>
          <div class="form-group mt-20">
            <div class="col-xs-12">
              <div class="input-group"> <span class="input-group-addon b-0  bg-primary" id="basic-addon4"><i class="mdi mdi-account"></i></span>
                <input type="text" class="form-control" placeholder="Username/Email" name="email">
              </div>
            </div>
          </div>
           <div class="form-group" hidden="hidden">
                <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                  <input class="form-control" name="token_login" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfirolwarewuḥdī') ?>" >
                  <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                </div>
            </div>
          <div class="form-group ">
            <div class="col-xs-12">
              <div class="input-group"> <span class="input-group-addon b-0  bg-primary" id="basic-addon4"><i class="mdi mdi-lock"></i></span>
                <input type="password" class="form-control" placeholder="Password" name="password">
               
              </div>
            </div>
          </div>

          <div class="form-group ">
            <div class="col-xs-12">
              <div class="input-group"> <span class="input-group-addon b-0  bg-primary" id="basic-addon4"><i class="mdi mdi-account"></i></span>
                <select class="form-control" data-placeholder="Choose a Category" tabindex="1" name="access" >
                  <option value="A">Administrator</option>
                  <option value="C">Check-In Personnel</option>
                 
                </select>
              </div>
            </div>
          </div>

         
         <!--  <div class="form-group">
            <div class="col-xs-12">
              <div class="checkbox checkbox-primary"> <span class="pull-left">
                <input id="checkbox-signup" type="checkbox">
                <label for="checkbox-signup">Remember me</label>
                </span> <a href="#" class="pull-right"><i class="mdi mdi-lock"></i> Forgot your Password?</a> </div>
            </div>
          </div> -->
          <div class="form-group text-center mt-20">
            <div class="col-xs-12" id="userBtxlogin1">
              <button class="btn btn-success btn-lg btn-block text-uppercase" type="submit" > Login</button>
   
            </div>
            <div class="col-xs-12" hidden="hidden" id="logremove1">
    <button type="button" class="btn btn-default submit-btn btn-block"  >Please Wait...</button> 
            </div>
          </div>
          <!-- <div class="form-group m-b-0">
            <div class="col-sm-12 text-center">
              <p>Already have an account? <a href="login.html" class="text-danger ml-5"><b>Sign In</b></a></p>
            </div>
          </div> -->
         <!--  <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-0 mb-20 text-center">
              <div class="social"><a href="javascript:void(0)" class="btn pl-15 pr-15  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a> <a href="javascript:void(0)" class="btn pl-15 pr-15 btn-tumblr" data-toggle="tooltip" title="Login with tumblr"> <i aria-hidden="true" class="fa fa-tumblr"></i> </a> </div>
            </div>
          </div> -->
        </form>
      </div>
    </div>
  </div>
  </div>
</section>
<!-- /Main Content --> 
<!-- /#wrapper --> 
<!-- JavaScript --> 
<!-- jQuery --> 
<script src="<?php echo $direction;?>plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
<!-- Bootstrap Core JavaScript --> 
<script src="<?php echo $direction;?>/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script> 
<!-- Slimscroll JavaScript --> 
<script src="<?php echo $direction;?>/assets/js/jquery.slimscroll.js"></script> 
<!-- Fancy Dropdown JS --> 
<script src="<?php echo $direction;?>/assets/js/dropdown-bootstrap-extended.js"></script> 
<!-- Switchery JavaScript --> 
<script src="<?php echo $direction;?>plugins/vendors/bower_components/switchery/dist/switchery.min.js"></script> 
<!-- Init JavaScript --> 
<script src="<?php echo $direction;?>plugins/assets/js/init.js"></script>
</body>

<!-- Mirrored from creativethemes.co.in/demo/studioux/admin-dashborad-template/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 02 Jun 2018 10:08:31 GMT -->
</html>
