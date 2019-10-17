<?php
       if(file_exists("app/view/dash_header.php")){
          include"dash_header.php";
        }if(file_exists("app/view/dash_nav.php")){
          include"dash_nav.php"; 
        }if(file_exists("app/view/dash_menu.php")){
          include"dash_menu.php";
        }if(file_exists("app/view/dash_sidebar.php")){
          include"dash_sidebar.php";
        } if(file_exists("app/view/dash_header.php")){
          include"dash_main_contents.php";
        }if(file_exists("app/view/dash_custom_script.php")){
          include"dash_custom_script.php";
        }else{
          echo "Folder is missing. Please cross check";
        }
 
 ?>

