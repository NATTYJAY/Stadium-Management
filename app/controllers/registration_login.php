<?php
namespace app\controllers;
use app\models\queryclass as database_query;

class registration_login{

	  public function __construct(){
	        $this->queryclass = new database_query();
	  }

	public function check_employee($email){
	        $this->checkin =  $this->queryclass->select('user','email', 'email="'.$email.'" ');
	       $rr =  $this->queryclass->execute($this->checkin);
	             if($this->queryclass->rowsnumber()){
	                return true;
	             }else{
	              return false;
	             }
    } 
	  public function registration($f_name,$l_name,$email,$phone,$password){
	  		$this->queryclass->begintransact();
	  		$this->register = [];
	  		$this->register = array(
			                    "fname"=>$f_name,
			                    "lname"=>$l_name,
			                    "email" =>$email,
			                    "phone" =>$phone,
			                    "password" =>$password
			                    );
	  		if($this->check_employee($email)){
	  				return 645;
	  		}else{
	  			$this->reg = array("insert_reg"=>$this->queryclass->insert('user',$this->register));
	  		   if($this->reg['insert_reg']){
		                $this->queryclass->begincommit();
		                return 443;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  		}
	  		
	  }

	   public  function login_function($email,$password){
			$empty_array = [];
		    $this->cmm =  $this->queryclass->select('user','*', 'email="'.$email.'" AND password ="'.$password.'" ');
		        $this->check = $this->queryclass->execute($this->cmm);
		        if ($this->queryclass->rowsnumber()){
		                $this->specificarray = $this->check->fetch_array();
		                 $empty_array['user_id']   = $this->specificarray['user_id'];
		            return  $empty_array;
		        }else{
		         return  false;
		        }
 		}


 		 	 public function checksession(){
			        if (isset($_SESSION['tim'])){
			          $this->session = self::encrypt_decrypt('decrypt', $_SESSION['tim']);
			             if($this->xsession_cookie_Rowcount($this->session)){
			               return true;
			              }else{
			                  return false;
			              }
			        }else{
			            return false;
			          }
  			}




}

?>