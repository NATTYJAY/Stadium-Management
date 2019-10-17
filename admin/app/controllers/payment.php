<?php 
 namespace app\controllers;
use app\models\queryclass as database_query;
use app\controllers\view as execute_html;

class payment{
	 public function __construct(){
        $this->queryclass = new database_query();
        $this->paystack      = new \Yabacon\Paystack('sk_test_7c9ea14d7ee9d3d9b8857da672cecdfed76d3742');
  	}

  	protected function substract_seat_now($stadium_id,$category_id){
  		  $this->key =  $this->queryclass->select('stadium','*', 'stadium_id = "'.$stadium_id.'"');
        $this->peace = $this->queryclass->execute($this->key);
        if ($this->queryclass->rowsnumber()){
             $this->array  = [];
             $this->riki = $this->peace->fetch_array();
          $this->king_array = array(
                          "total_vip_seats"=>$this->riki['total_vip_seats'],
                          "total_regular_seats"=>$this->riki['total_regular_seats'],
                          "stadium_id"=>$this->riki['stadium_id']
                          );
          		if($category_id == 1){
        			$change_vip_seat =  ($this->king_array['total_vip_seats'] - 1);
        				$this->update_vip_seat = array(
                                  "total_vip_seats"=>$change_vip_seat
                                  );
        		$rita = $this->queryclass->update('stadium',$this->update_vip_seat,'stadium_id="'.$stadium_id.'" ');
        		}else if($category_id == 2){
        			$change_regular_seat =  ($this->king_array['total_regular_seats'] - 1);
        				$this->update_regular_seat = array(
                                  "total_regular_seats"=>$change_regular_seat
                                  );
        		$rita2 = $this->queryclass->update('stadium',$this->update_regular_seat,'stadium_id="'.$stadium_id.'" ');
        		}
	       	if($rita || $rita2){
	       		return true;
	       	}else{
	       		return 00;
	       	}
        }else{
         return  false;
        }
  	}

  	public function check_user_booked($stadium_id,$user_id){
  		 $this->exits =  $this->queryclass->select('booked','*', 'stadium_id = "'.$stadium_id.'" AND user_id = "'.$user_id.'"');
        $this->peace = $this->queryclass->execute($this->exits);
        if($this->queryclass->rowsnumber()){
        	return true;
        }else{
        	return false;
        }
  	}

  	public function respond_payment($ref,$user_id,$stadium_id,$category_id){
		$this->responseObj =  $this->paystack->transaction->verify(["reference"=>$ref]);
			if('success' === $this->responseObj->data->status && ('Approved'=== $this->responseObj->data->gateway_response || 'Successful'=== $this->responseObj->data->gateway_response)){
					$amount = ($this->responseObj->data->amount)/100;
					$email =  $this->responseObj->data->customer->email;
					$this->insert = [];
        		$this->queryclass->begintransact();

          		$this->insert = array(
                                "booked_now"=>$this->queryclass->insert('booked',array(
                                                      "user_id"=>$user_id,
                                                      "pay_reff_id"=>$ref,
                                                      "amount_paid"=>$amount,
                                                      "stadium_id" =>$stadium_id,
                                                      "cat_id" =>$category_id,
                                            "date_booked" => (date('l jS \of F Y') ." BY ".date('h:i:s A')))
                                                      
			                    ));
		             if($this->insert['booked_now']){
		             	if($this->substract_seat_now($stadium_id,$category_id)){
 									$this->queryclass->begincommit();
		                			return 88;
		             	}else if($this->substract_seat_now($stadium_id,$category_id) == 00){
		             		return 09;
		             	}
		             }else{
		              $this->queryclass->beginrollback();
		              return false;
		             }
			}else{
				return 'payment Unsuccesfull. If you have been debited your referral id is '.$ref.' Please contact your bank';
			}
  		 
  	}

  	// public function insert_data(){


  	// }



}


?>