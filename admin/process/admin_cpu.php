<?php  require"../app/view/controller.php"; session_start();


		if(isset($_POST['admin_registration']) && $_POST['admin_registration'] == "getthattoyourskull"){
			$f_name = trim($queryclass->clean(strtoupper(($_POST['first_name']))));
			$l_name = trim($queryclass->clean(strtoupper(($_POST['last_name']))));
			$phone_number = trim($queryclass->clean($_POST['phone_number'])); 
			$email = trim($queryclass->clean(strtolower(($_POST['email']))));
			$password = trim($queryclass->clean($_POST['password'])); 
				$registration = $admin_object->registration($f_name,$l_name,$email,$phone_number,$password);
					if($registration == 44){
						echo 81;
					}else if($registration ==  649){
						echo 71;
					}else{
						echo 91;
					}
		}

		if(isset($_POST['checker_registration']) && $_POST['checker_registration'] == "babaskilodkudubjb"){
			$f_name = trim($queryclass->clean(strtoupper(($_POST['ch_first']))));
			$l_name = trim($queryclass->clean(strtoupper(($_POST['ch_last']))));
			$phone_number = trim($queryclass->clean($_POST['ch_phone'])); 
			$email = trim($queryclass->clean(strtolower(($_POST['ch_email']))));
			$password = trim($queryclass->clean($_POST['ch_password'])); 
				$registration = $admin_object->register_checker($f_name,$l_name,$email,$phone_number,$password);
					if($registration == 441){
						echo 811;
					}else if($registration ==  611){
						echo 711;
					}else{
						echo 911;
					}
		}

		if(isset($_POST['token_data']) && $_POST['token_data'] == $extra_function::encrypt_decrypt('encrypt','āfirudoluwawaḥdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_data']);
				if($ro == 'āfirudoluwawaḥdī'){
					$image_name = $_FILES['files']['name'];
					$image_tmp  = $_FILES['files']['tmp_name'];
					$home_team = $_POST['home_team'];
					$away_team = $_POST['away_team'];
					$match_time = $_POST['match_time'];
					$match_date = $_POST['match_date'];
					$seat_vip = $_POST['seat_vip'];
					$seat_regular = $_POST['seat_regular'];
					$regsiter_true = $admin_object->register_matcho($image_name,$image_tmp,$home_team,$away_team,$match_time,$match_date,$seat_vip,$seat_regular);
							echo json_encode($regsiter_true);
				}
			
		}

		if(isset($_POST['token_cat']) && $_POST['token_cat'] == $extra_function::encrypt_decrypt('encrypt','āfiruhīīīmmḥīdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_cat']);
				if($ro == 'āfiruhīīīmmḥīdī'){
					$catname = trim($queryclass->clean(strtoupper($_POST['catname'])));
					$catamount = trim($queryclass->clean($_POST['catamount']));
					$regsiter_ = $admin_object->register_category($catname,$catamount);
							echo json_encode($regsiter_);
				}
			
		}

		

		if(isset($_POST['token_datau']) && $_POST['token_datau'] == $extra_function::encrypt_decrypt('encrypt','āfirudaoluwaaḥdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_datau']);
				if($ro == 'āfirudaoluwaaḥdī'){
					$image_name = $_FILES['files']['name'];
					$tmp_name  = $_FILES['files']['tmp_name'];
					$home_team = $_POST['uhome_team'];
					$away_team = $_POST['uaway_team'];
					$match_start_time = $_POST['umatch_time'];
					$match_date = $_POST['umatch_date'];
					$total_vip = $_POST['useat_vip'];
					$status = $_POST['pst'];
					$total_reg = $_POST['useat_regular'];
					$stadium_id = $_POST['sta_id'];
					$update_true = $admin_object->update_match($image_name,$tmp_name,$home_team,$away_team,$match_start_time,$match_date,$total_vip,$total_reg,$status,$stadium_id);
							echo json_encode($update_true);
				}
		}

		if(isset($_POST['token_login']) && $_POST['token_login'] == $extra_function::encrypt_decrypt('encrypt','āfirolwarewuḥdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_login']);
				if($ro == 'āfirolwarewuḥdī'){
					$email = $_POST['email'];
					$password = $_POST['password'];
					$access_type = $_POST['access'];
						$empty_ = $admin->admin_login($email,$password,$access_type);
							if($empty_){
								$_SESSION["email"] = $empty_['email'];
								if($admin->session_set_already()){
									echo 8;
								}else{
									$extra_function::setcookie_session($_SESSION["email"]);
										if($access_type == 'C'){
											echo 9;
										}else{
											echo 13;
										}
								}
							}else{
								echo 10;
							}
				}
		}

		if (isset($_POST['fishers']) && $_POST['fishers'] == "meno"){
				$emp_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_stadium_info($emp_id);
				echo json_encode($i_d); 
		} 


		if (isset($_POST['checkers']) && $_POST['checkers'] == "meno"){
				$p_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_checker_info($p_id);
				echo json_encode($i_d); 
		} 

		if (isset($_POST['userso']) && $_POST['userso'] == "meno"){
				$p_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_user_info($p_id);
				echo json_encode($i_d); 
		}

		

		if (isset($_POST['checkersdel']) && $_POST['checkersdel'] == "meno"){
				$_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_checker_info($_id);
				echo json_encode($i_d); 
		} 

		if (isset($_POST['checkerscatdel']) && $_POST['checkerscatdel'] == "meno"){
				$_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_category_info($_id);
				echo json_encode($i_d); 
		} 


		if(isset($_POST['token_da']) && $_POST['token_da'] == $extra_function::encrypt_decrypt('encrypt','āfiruwḥdīāāaaḥdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_da']);
				if($ro == 'āfiruwḥdīāāaaḥdī'){
					$uch_first = trim($queryclass->clean(strtoupper($_POST['ufnamec'])));
					$uch_last = trim($queryclass->clean(strtoupper($_POST['ulnamec'])));
					$email = trim($queryclass->clean(strtolower($_POST['uenamec'])));
					$utnamec = trim($queryclass->clean($_POST['utnamec']));
					$upnamec = trim($queryclass->clean($_POST['upnamec']));
					$ied = trim($queryclass->clean($_POST['ied']));
					$update_true = $admin_object->checker_update($uch_first,$uch_last,$email,$utnamec,$upnamec,$ied);
							echo json_encode($update_true);
				}
		}

		if (isset($_POST['checkeupdate']) && $_POST['checkeupdate'] == "meno"){
				$p_id = trim($queryclass->clean($_POST['_id']));
				$i_d = $admin->fetch_category_info($p_id);
				echo json_encode($i_d); 
		} 

		if(isset($_POST['token_updatecat']) && $_POST['token_updatecat'] == $extra_function::encrypt_decrypt('encrypt','āfihmīmmḥīdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_updatecat']);
				if($ro == 'āfihmīmmḥīdī'){
					$ucatid = trim($queryclass->clean($_POST['ucatid']));
					$_name = trim($queryclass->clean(strtoupper($_POST['ucatname'])));
					$amount = trim($queryclass->clean($_POST['ucatamount']));
					$update_true = $admin_object->_update_cat($_name,$amount,$ucatid);
							echo json_encode($update_true);
				}
		}


		if(isset($_POST['token_checker']) && $_POST['token_checker'] == $extra_function::encrypt_decrypt('encrypt','āfiroawolowoewuḥdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_checker']);
				if($ro == 'āfiroawolowoewuḥdī'){
					$refnumber = $_POST['refnumber'];
						$empty_ref = $admin->cross_check($refnumber);
							echo json_encode($empty_ref);
				}
		}

		
		if(isset($_POST['token_delcat']) && $_POST['token_delcat'] == $extra_function::encrypt_decrypt('encrypt','āfihmīmmḥīdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_delcat']);
				if($ro == 'āfihmīmmḥīdī'){
					$idp = $_POST['proeee_id'];
						$empty_ref = $admin_object->checkers_delete($idp);
							echo json_encode($empty_ref);
				}
		}

		if(isset($_POST['token_delcate']) && $_POST['token_delcate'] == $extra_function::encrypt_decrypt('encrypt','āfihmīcatḥīdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_delcate']);
				if($ro == 'āfihmīcatḥīdī'){
					$idp = $_POST['cat_id'];
						$empty_ref = $admin_object->cat_delete($idp);
							echo json_encode($empty_ref);
				}
		}

		if(isset($_POST['token_user']) && $_POST['token_user'] == $extra_function::encrypt_decrypt('encrypt','āfihmīuserḥīdī')){
			$ro = $extra_function::encrypt_decrypt('decrypt',$_POST['token_user']);
				if($ro == 'āfihmīuserḥīdī'){
					$idp = $_POST['user_id'];
						$empty_ref = $admin_object->user_delete($idp);
							echo json_encode($empty_ref);
				}
		}


		


?>