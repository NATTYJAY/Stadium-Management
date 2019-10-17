<?php

require('app/view/controller.php');
$direction = '../../';  //This determines the linking of the application
$direct = '../';
if (isset($_GET['page1'])){
    $filename = 'app/view/'.$_GET['page1'].'-page.php';
    if ($_GET['page1'] == 'logout') {
     $booking->logout();
    }elseif (file_exists($filename)){
    include $filename;
    }
}else{
      include "app/view/landing-page.php";  ///This is the home page
    }
    
  

  ?>



   

