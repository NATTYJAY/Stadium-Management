<?php require"../app/view/controller.php"; session_start();
	   use app\controllers\extra_function;

	   if(isset($_POST['chaneg']) && $_POST['chaneg'] == "yanni"){
			$amount = $_POST['tt'];
			// $sta_id = $_POST['stadium_id'];
			$reti = $booking->select_amount_o($amount);
			echo json_encode($reti);
		}

		if(isset($_POST['xIB26W']) && $_POST['xIB26W'] == "peace346X"){
			$ref_code = trim($_POST['ref_code']);
			$category_id = trim($queryclass->clean($_POST['cat_id']));
			$user_id = trim($queryclass->clean($_POST['user_id']));
			$stadium_id = trim($queryclass->clean($_POST['stadium_id'])); 
			$exit_before = $payment->check_user_booked($stadium_id,$user_id); 
					$insertdata = $payment->respond_payment($ref_code,$user_id,$stadium_id,$category_id);
					if($insertdata == 88){
						echo 13;
					}else if($insertdata == 09){
						echo 185;
					}else{
						echo 14;
					}
		
		}

		if(isset($_POST['iwillbound']) && $_POST['iwillbound'] == "youtoohalone"){
			$user_id = trim($queryclass->clean($_POST['user_id']));
			$stadium_id = trim($queryclass->clean($_POST['stadium_id'])); 
			 $alrightna =  $payment->check_user_booked($stadium_id,$user_id);
			 	if($alrightna){
			 		echo 82;
			 	}else{
			 		echo 44;
			 	}

		}

		if(isset($_POST['understand']) && $_POST['understand'] == "ajaxunderstand"){
			$f_name = trim($queryclass->clean(strtoupper(($_POST['first_name']))));
			$l_name = trim($queryclass->clean(strtoupper(($_POST['last_name']))));
			$phone_number = trim($queryclass->clean($_POST['phone_number'])); 
			$email = trim($queryclass->clean(strtolower(($_POST['email']))));
			$password = trim($queryclass->clean($_POST['password'])); 
				$registration = $reg_log->registration($f_name,$l_name,$email,$phone_number,$password);
					if($registration == 443){
						echo 8;
					}else if($registration ==  645){
						echo 7;
					}else{
						echo 9;
					}
		}

		if(isset($_POST['ISdWW']) && $_POST['ISdWW'] == "AByanniE"){
			$maila = trim($queryclass->clean(strtolower(($_POST['emaillog']))));
			$pass = trim($queryclass->clean($_POST['passlog']));
			$empty_array = $reg_log->login_function($maila,$pass);
					if($empty_array){
						$_SESSION["user_id"] =   $empty_array['user_id'];
						extra_function::setcookie_session($_SESSION["user_id"]);
						echo 9;
					}else{
						echo 10;
					}
		}

	
?>