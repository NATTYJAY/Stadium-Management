<?php


 if(file_exists("app/view/_header.php")){
          include"_header.php";
        }if(file_exists("app/view/_nav.php")){
          include"_nav.php"; 
        }if(file_exists("app/view/_menu.php")){
          include"_menu.php";
        }if(file_exists("app/view/dash_sidebar.php")){
          include"dash_sidebar.php";
        }if(file_exists("app/view/bookerstable.php")){
          include"bookerstable.php";
        }if(file_exists("app/view/_custom_script.php")){
          include"_custom_script.php";
        }if(file_exists("app/view/customs.php")){
          include"customs.php";
        }else{
          echo "Folder is missing. Please cross check";
        }


?>
