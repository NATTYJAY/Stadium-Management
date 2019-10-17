<?php
namespace admin\app\controllers;
use admin\app\models\queryclass as database_query;

class admin_priv{

	  public function __construct(){
	        $this->queryclass = new database_query();
	  }

	public function check_admin($email){
	        $this->checkin =  $this->queryclass->select('admin','email', 'email="'.$email.'" AND accessType ="A" ');
	       $rr =  $this->queryclass->execute($this->checkin);
	             if($this->queryclass->rowsnumber()){
	                return true;
	             }else{
	              return false;
	             }
    } 

    public function check_checker($email){
	        $this->checker =  $this->queryclass->select('admin','email', 'email="'.$email.'" AND accessType ="C" ');
	       $read =  $this->queryclass->execute($this->checker);
	             if($this->queryclass->rowsnumber()){
	                return true;
	             }else{
	              return false;
	             }
    } 
	  public function registration($f_name,$l_name,$email,$phone,$password){
	  		$this->queryclass->begintransact();
	  		$this->register_dmin = [];
	  		$this->register_dmin = array(
			                    "fname"=>$f_name,
			                    "lname"=>$l_name,
			                    "email" =>$email,
			                    "phone" =>$phone,
			                    "password" =>$password,
			                    "accessType"=> 'A'
			                    );
	  		if($this->check_admin($email)){
	  				return 649;
	  		}else{
	  			$this->reg = array("admin_reg"=>$this->queryclass->insert('admin',$this->register_dmin));
	  		   if($this->reg['admin_reg']){
		                $this->queryclass->begincommit();
		                return 44;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  		}
	  		
	  }


	  public function register_checker($f_name,$l_name,$email,$phone,$password){
	  		$this->queryclass->begintransact();
	  		$this->register_checker = [];
	  		$this->register_checker = array(
			                    "fname"=>$f_name,
			                    "lname"=>$l_name,
			                    "email" =>$email,
			                    "phone" =>$phone,
			                    "password" =>$password,
			                    "accessType"=> 'C'
			                    );
	  		if($this->check_checker($email)){
	  				return 611;
	  		}else{
	  			$this->reger = array("admin_checker"=>$this->queryclass->insert('admin',$this->register_checker));
	  		   if($this->reger['admin_checker']){
		                $this->queryclass->begincommit();
		                return 441;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  		}
	  		
	  }

	  public function register_category($name,$amount){
	  		$this->queryclass->begintransact();
	  		$this->register_ = [];
	  		$this->register_ = array(
			                    "name"=>$name,
			                    "amount"=>$amount
			                    );
	  			$this->reger = array("booked_category"=>$this->queryclass->insert('book_category',$this->register_));
	  		   		if($this->reger['booked_category']){
		                $this->queryclass->begincommit();
		                return 414;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  }

	public  function register_matcho($image_name,$tmp_name,$home_team,$away_team,$match_start_time,$match_date,$total_vip,$total_reg){
	              $output = '';
	 	 		  $image = '';  
			 if(is_array($_FILES)){  
			      foreach ($image_name as $name => $value){
			           $file_name = explode(".", $image_name[$name]);  
			           $allowed_ext = array("jpg", "jpeg", "png", "gif");  
			           if(in_array($file_name[1], $allowed_ext)){  
			                $new_name = md5(rand()) . '.' . $file_name[1];  
			                $sourcePath = $tmp_name[$name];  
			                $targetPath = "../image_folder/".$new_name;  
				                if(move_uploaded_file($sourcePath, $targetPath)){
				                	$image .= $new_name.",";
					                  		$this->rege = [];
					             $total_available_seats = ($total_vip) + ($total_reg);       		
									 $this->rege = array(
											        "home"=>$home_team,
											        "away"=>$away_team,
											        "start_time" =>$match_start_time.";".$match_date,
											        "total_available_seats" =>$total_available_seats,
											        "total_vip_seats" =>intval($total_vip),
											        "total_regular_seats" =>intval($total_reg),
											        "reg_ON"=>1,
											        "image"=>$image
											       );
				                }                 
			           }else{
			           	return 567;
			           }            
			      }
			     	$this->queryclass->begintransact();
			      	$this->rege = array("stadium"=>$this->queryclass->insert('stadium',$this->rege));
			       if($this->rege['stadium']){
		                $this->queryclass->begincommit();
		                return 441;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
			 } 

	 }



	public  function update_match($image_name,$tmp_name,$home_team,$away_team,$match_start_time,$match_date,$total_vip,$total_reg,$status,$stadium_id){ 
	              $output = '';
	 	 		  $image = '';  
			if(is_array($_FILES)){  
			    foreach ($image_name as $name => $value){
			           $file_name = explode(".", $image_name[$name]);  
			           $allowed_ext = array("jpg", "jpeg", "png", "gif");  
			           if(in_array($file_name[1], $allowed_ext)){  
			                $new_name = md5(rand()) . '.' . $file_name[1];  
			                $sourcePath = $tmp_name[$name];  
			                $targetPath = "../image_folder/".$new_name;  
				                if(move_uploaded_file($sourcePath, $targetPath)){
				                	 $gg .= $new_name.",";
                					$image = substr(trim($gg),0,-1);
					                  		$this->rege = [];
					             $total_available_seats = ($total_vip) + ($total_reg);       		
									 $this->urege = array(
											        "home"=>$home_team,
											        "away"=>$away_team,
											        "start_time" =>$match_start_time.";".$match_date,
											        "total_available_seats" =>$total_available_seats,
											        "total_vip_seats" =>intval($total_vip),
											        "total_regular_seats" =>intval($total_reg),
											        "reg_ON" =>$status,
											        "image"=>$image
											       );
				                }                 
			           }else{
			           	return 568;
			           }            
			    }
			     	$this->queryclass->begintransact();
			      	$this->regre = $this->queryclass->update('stadium',$this->urege,'stadium_id="'.$stadium_id.'" ');
			       	if($this->regre){
		                $this->queryclass->begincommit();
		                return 446;
		            }else{
		              $this->queryclass->beginrollback();
		              return false;
		            }
			} 
	    
	 }

	  public function checker_update($f_name,$l_name,$email,$phone,$password,$id){
	  		$this->queryclass->begintransact();
	  		$this->register_checker = [];
	  		$this->register_checker = array(
			                    "fname"=>$f_name,
			                    "lname"=>$l_name,
			                    "email" =>$email,
			                    "phone" =>$phone,
			                    "password" =>$password
			                    );
	  			$this->reger = array("admin_checker"=>$this->queryclass->update('admin',$this->register_checker,'agent_id = "'.$id.'"'));
	  		   if($this->reger['admin_checker']){
		                $this->queryclass->begincommit();
		                return 433;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  }

	  public function _update_cat($_name,$amount,$id){
	  		$this->queryclass->begintransact();
	  		$this->register_c = [];
	  		$this->register_c = array(
			                    "name"=>$_name,
			                    "amount"=>$amount
			                    );
	  			$this->reg = array("catgory"=>$this->queryclass->update('book_category',$this->register_c,'cat_id = "'.$id.'"'));
	  		   if($this->reg['catgory']){
		                $this->queryclass->begincommit();
		                return 439;
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
	  }

	public function checkers_delete($idp){
        $this->queryclass->begintransact();
        $this->updateds = array(
                    "deleted"=>$this->queryclass->delete('admin', 'agent_id="'.$idp.'" ')
                    );
        //$this->oppress =  $this->queryclass->execute($this->updateds['deleted']);
      		if($this->updateds['deleted']){
                $this->queryclass->begincommit();
                return 1;
             }else{
              $this->queryclass->beginrollback();
              return 0;
             }
      
   }

   public function cat_delete($idp){
        $this->queryclass->begintransact();
        $this->updateds = array(
                    "deleted"=>$this->queryclass->delete('book_category', 'cat_id="'.$idp.'" ')
                    );
        //$this->oppress =  $this->queryclass->execute($this->updateds['deleted']);
      		if($this->updateds['deleted']){
                $this->queryclass->begincommit();
                return 1;
             }else{
              $this->queryclass->beginrollback();
              return 0;
             }
      
   }

     public function user_delete($idp){
        $this->queryclass->begintransact();
        $this->updateds = array(
                    "deleted"=>$this->queryclass->delete('user', 'user_id="'.$idp.'" ')
                    );
        //$this->oppress =  $this->queryclass->execute($this->updateds['deleted']);
      		if($this->updateds['deleted']){
                $this->queryclass->begincommit();
                return 1;
             }else{
              $this->queryclass->beginrollback();
              return 0;
             }
      
   }

}

?>