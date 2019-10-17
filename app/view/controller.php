<?php  
  spl_autoload_register(function($class){
    if (file_exists("{$class}.php")) {
      include_once("{$class}.php");
    }elseif (file_exists("../{$class}.php")) {
      include_once("../{$class}.php");
    }
    elseif (file_exists("paystack/{$class}.php")) {
      include_once("paystack/{$class}.php");
    }
    elseif (file_exists("../paystack/{$class}.php")) {
      include_once("../paystack/{$class}.php");
    }else{
      echo " can not load $class";
    }
  });


  // print_r($_SERVER['PHP_SELF']);
 $title_page = 'Stadium Management System : SMS';
define("BASE_URL", "");
use app\models\database;
use app\controllers\booking as userbooking;
use app\controllers\payment;
use app\models\queryclass;
use app\controllers\registration_login as reg_log;
use app\controllers\extra_function;

database::startmysession(0, '/', $_SERVER['SERVER_NAME'], false, true);
$booking       = new userbooking();
$payment       = new payment();
$queryclass    = new queryclass();
$reg_log       = new reg_log();
$extra_function = new extra_function();


 
?>