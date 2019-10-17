<?php 
          if($admin->checksession()){
          }else{
            header('location:/');
          }

  ?>

<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from creativethemes.co.in/demo/studioux/admin-dashborad-template/index-dark.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 02 Jun 2018 09:54:05 GMT -->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $title_page; ?></title>
<meta name="description" content="" />
<meta name="keywords" content="admin, admin dashboard, admin template" />
<meta name="author" content="SRGIT"/>
<!-- Favicon -->
<link rel="shortcut icon" href="<?php echo $direction; ?>plugins/assets/img/favicon/favicon.png">
<link rel="icon" href="<?php echo $direction; ?>plugins/assets/img/favicon/favicon.png" type="image/x-icon">
<!-- Data table CSS -->
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css" rel="stylesheet">
<!-- Page plugins css -->
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/clockpicker/dist/jquery-clockpicker.min.css" rel="stylesheet">
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/datatables/media/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.css" rel="stylesheet" type="text/css">
<!-- Custom CSS -->
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/timepicker/bootstrap-timepicker.min.css" rel="stylesheet">
<link href="<?php echo $direction; ?>plugins/assets/css/default.css" rel="stylesheet" type="text/css">
<link href="<?php echo $direction; ?>plugins/vendors/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
<script src="<?php echo $direction; ?>plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
      <script src="<?php echo $direction?>adminjs/stadium_admin.js"></script>
</head>
<body>
<!-- Preloader -->
<!-- <div class="preloader-it">
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
</div> -->