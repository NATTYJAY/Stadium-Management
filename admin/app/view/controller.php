<?php  
  spl_autoload_register(function($class){
    if (file_exists("{$class}.php")) {
      include_once("{$class}.php");
    }elseif (file_exists("../{$class}.php")) {
      include_once("../{$class}.php");
    }elseif (file_exists("../../{$class}.php")) {
      include_once("../../{$class}.php");
    }else{
      echo " can not load $class";
    }
  });

 $title_page = 'Stadium Management System : Administrator';
use admin\app\models\database;
use admin\app\controllers\admin_priv;
use admin\app\models\queryclass;
use admin\app\controllers\extra_function;
use admin\app\controllers\admin;

database::startmysession(0, '/', $_SERVER['SERVER_NAME'], false, true);
$admin_object       = new admin_priv();
$queryclass    = new queryclass();
$extra_function = new extra_function();
$admin = new admin();



 
?>