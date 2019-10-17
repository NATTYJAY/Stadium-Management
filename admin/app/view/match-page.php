<?php


 if(file_exists("app/view/dash_header.php")){
          include"dash_header.php";
        }if(file_exists("app/view/dash_nav.php")){
          include"dash_nav.php"; 
        }if(file_exists("app/view/dash_menu.php")){
          include"dash_menu.php";
        }if(file_exists("app/view/dash_sidebar.php")){
          include"dash_sidebar.php";
        }if(file_exists("app/view/update_form.php")){
          include"update_form.php";
        }if(file_exists("app/view/dash_custom_script.php")){
          include"dash_custom_script.php";
        }else{
          echo "Folder is missing. Please cross check";
        }


?>
  
<!-- /Main Content --> 
<!-- /#wrapper --> 
<!-- JavaScript --> 
<!-- jQuery --> 
<script src="plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
<!-- Bootstrap Core JavaScript --> 
<script src="plugins/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script> 
<!-- data-table js --> 
<script src="plugins/vendors/bower_components/datatables.net/js/jquery.dataTables.min.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js"></script> 
<script src="plugins/vendors/bower_components/data-table/js/jszip.min.js"></script> 
<script src="plugins/vendors/bower_components/data-table/js/pdfmake.min.js"></script> 
<script src="plugins/vendors/bower_components/data-table/js/vfs_fonts.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-responsive/js/dataTables.responsive.min.js"></script> 
<script src="plugins/vendors/bower_components/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script> 
<!-- Slimscroll JavaScript --> 
<script src="plugins/assets/js/jquery.slimscroll.js"></script> 
<!-- Fancy Dropdown JS --> 
<script src="plugins/assets/js/dropdown-bootstrap-extended.js"></script> 
<!-- Switchery JavaScript --> 
<script src="plugins/vendors/bower_components/switchery/dist/switchery.min.js"></script> 
<script src="plugins/vendors/bower_components/data-table/js/data-table-custom.js"></script> 
<!-- Init JavaScript --> 
<script src="plugins/assets/js/init.js"></script>
</body>

<!-- Mirrored from creativethemes.co.in/demo/studioux/admin-dashborad-template/dt-advance.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 02 Jun 2018 10:08:11 GMT -->
</html>
