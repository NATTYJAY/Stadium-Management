<?php
namespace admin\app\controllers;
use admin\app\models\queryclass as database_query;
use admin\app\controllers\view as execute_html;

class admin extends extra_function{
  public $name;
  public $r;
  public function __construct(){
        $this->queryclass = new database_query();
  }

    public  function admin_login($email,$password,$access_type){
      $empty_array = [];
        $this->cmm =  $this->queryclass->select('admin','*', 'email="'.$email.'" AND password ="'.$password.'" AND accessType = "'.$access_type.'" ');
            $this->check = $this->queryclass->execute($this->cmm);
            if($this->queryclass->rowsnumber()){
                    $this->specificarray = $this->check->fetch_array();
                     $empty_array['email']   = $this->specificarray['email'];
                     $empty_array['accessType']   = $this->specificarray['accessType'];
                return  $empty_array;
            }else{
             return  false;
            }
    }

     public  function cross_check($ref){
      $empty_array = [];
      $zero = 0;
        $this->cmm =  $this->queryclass->select('booked','ref_id', 'ref_id="'.$ref.'" AND ref_id !="'.$zero.'" ');
            $this->check = $this->queryclass->execute($this->cmm);
            if($this->queryclass->rowsnumber()){
              $this->_checker = array(
                          "ref_id"=>0
                          );
                $this->reger = array("check"=>$this->queryclass->update('booked',$this->_checker,'ref_id = "'.$ref.'"'));
                     if($this->reger['check']){
                          $this->queryclass->begincommit();
                          return 2121;
                     }else{
                      $this->queryclass->beginrollback();
                      return 2314;
                     }
    
            }else{
             return  2451;
            }
    }

   
    public function session_set_already(){
      if (parent::checksession()){
        return true;
      }else{
        return false;
      }
    }

    public function sess(){
     echo parent::get_session();
    }


     public function display_last_stadium(){
      $arri = [];
        $this->qi =  $this->queryclass->select('stadium','*',null,' stadium_id DESC','1'); 
          $this->dd =  $this->queryclass->execute($this->qi);
             if($this->queryclass->rowsnumber()){
               $sn = 1;
                while($this->nasoena = $this->dd->fetch_array()){
                 
                   $arri = array(
                                 'home' =>  $this->nasoena['home'],
                                 'away' =>  $this->nasoena['away'],
                                 'start_time' =>  $this->nasoena['start_time'],
                                 'reg_ON' =>  $this->nasoena['reg_ON'],
                                 'stadium_id' =>  $this->nasoena['stadium_id']
                                );
                      $getwhile .= execute_html::show_match_details($arri['stadium_id'],$sn,$arri['home'],$arri['away'],$arri['start_time'],$arri['reg_ON']);
                }
               return $getwhile;

             }else{
              return false;
             }
    
    }

    public function fetch_stadium_info($_id){
      $array_containers = [];
      $details = [];
       $this->emp_info = $this->queryclass->select('stadium', '*','stadium_id = "'.$_id.'"');
          $this->d_up =  $this->queryclass->execute($this->emp_info);
             if($this->queryclass->rowsnumber()){
               $array_containers = $this->queryclass->fetchrows($details['home'],$details['away'],$details['start_time'],$details['reg_ON'],$details['stadium_id'],$details['total_vip_seats'],$details['total_regular_seats']); 

                 $array_containers['home'];
                 $array_containers['away'];
                 $array_containers['start_time'];
                 $array_containers['reg_ON'];
                 $array_containers['total_vip_seats'];
                 $array_containers['total_regular_seats'];
                 $array_containers['stadium_id'];
                    return  $array_containers; 
             }else{
              return false;
             }
    }


    public function fetch_checker_info($_id){
      $array_containers = [];
      $details = [];
       $this->emp_info = $this->queryclass->select('admin', '*','agent_id = "'.$_id.'"');
          $this->d_up =  $this->queryclass->execute($this->emp_info);
             if($this->queryclass->rowsnumber()){
               $array_containers = $this->queryclass->fetchrows($details['fname'],$details['lname'],$details['email'],$details['phone'],$details['password'],$details['agent_id']); 

                 $array_containers['fname'];
                 $array_containers['lname'];
                 $array_containers['phone'];
                 $array_containers['password'];
                 $array_containers['email'];
                 $array_containers['agent_id'];
                    return  $array_containers; 
             }else{
              return false;
             }
    }

     public function fetch_category_info($_id){
      $array_containers = [];
      $details = [];
       $this->emp_info = $this->queryclass->select('book_category', '*','cat_id = "'.$_id.'"');
          $this->d_up =  $this->queryclass->execute($this->emp_info);
             if($this->queryclass->rowsnumber()){
               $array_containers = $this->queryclass->fetchrows($details['name'],$details['amount'],$details['cat_id']); 
                 $array_containers['name'];
                 $array_containers['amount'];
                 $array_containers['cat_id'];
                    return  $array_containers; 
             }else{
              return false;
             }
    }


    public function fetch_user_info($_id){
      $array_containers = [];
      $details = [];
       $this->emp_info = $this->queryclass->select('user', '*','user_id = "'.$_id.'"');
          $this->d_up =  $this->queryclass->execute($this->emp_info);
             if($this->queryclass->rowsnumber()){
               $array_containers = $this->queryclass->fetchrows($details['fname'],$details['lname'],$details['user_id']); 
                 $array_containers['fname'];
                 $array_containers['lname'];
                 $array_containers['user_id'];
                    return  $array_containers; 
             }else{
              return false;
             }
    }

    public function fetch_stadium_id(){
       $this->sta = $this->queryclass->select('stadium', '*');
          $this->d_up =  $this->queryclass->execute($this->sta);
             if($this->queryclass->rowsnumber()){
                 while($this->nasoena = $this->d_up->fetch_array()){
                   $arri = array(
                                 'home' =>  $this->nasoena['home'],
                                 'away' =>  $this->nasoena['away'],
                                 'stadium_id' =>  $this->nasoena['stadium_id']
                                );
                      $getwhile .= execute_html::show_stadium($arri['stadium_id'],$arri['home'],$arri['away']);
                }
               return $getwhile;
             }
    }

    public function display_booked($id){
      $arri = [];
        $this->query =  'SELECT booked.*, user.user_id,user.fname,user.lname,user.phone,book_category.cat_id,book_category.name,stadium.stadium_id,stadium.home,stadium.away
                      FROM booked 
                      INNER JOIN user ON user.user_id = booked.user_id
                      INNER JOIN stadium ON stadium.stadium_id = booked.stadium_id
                      INNER JOIN book_category ON book_category.cat_id = booked.cat_id
                      WHERE stadium.stadium_id="'.$id.'" ORDER BY booked.booked_id DESC
                      '; 
          $this->result =  $this->queryclass->execute($this->query);
             if($this->queryclass->rowsnumber()){
               $sn = 1;
                while($this->nasoena = $this->result->fetch_array()){
                   $arri = array(
                                 'name' =>  $this->nasoena['fname']."  ".$this->nasoena['lname'],
                                 'match' =>  $this->nasoena['home']." VS ".$this->nasoena['away'],
                                 'cat_name' =>  $this->nasoena['name'],
                                 'amount_paid' =>  $this->nasoena['amount_paid'],
                                 'date_booked' =>  $this->nasoena['date_booked'],
                                 'pay_reff_id' => $this->nasoena['pay_reff_id'],
                                 'phone' => $this->nasoena['phone']
                                );
                      $getwhile .= execute_html::show_booked($sn++,$arri['name'],$arri['match'],$arri['cat_name'],number_format($arri['amount_paid'],2),$arri['date_booked'],$arri['pay_reff_id'],$arri['phone']);
                }
               return $getwhile;

             }else{
              return false;
             }
    
    }

    public function all_slip($id){
        $this->sliper = "SELECT booked.*,stadium.stadium_id,COUNT(stadium.stadium_id) as count,stadium.home,stadium.away FROM booked INNER JOIN stadium ON stadium.stadium_id = booked.stadium_id
                      WHERE stadium.stadium_id= '{$id}' ORDER BY booked.booked_id DESC";
                  $this->slip =  $this->queryclass->execute($this->sliper);
                    $this->shwn = $this->slip->fetch_array();
                    $this->count = $this->shwn['count'];
                    $this->match =  $this->shwn['home'].' VS '.$this->shwn['away'];  
                        return $this;
    }

    public function display_checkers(){
      $arri = [];
      $c = 'C';
        $this->query =  $this->queryclass->select('admin', '*','accessType = "'.$c.'"','agent_id DESC');
          $this->result =  $this->queryclass->execute($this->query);
             if($this->queryclass->rowsnumber()){
               $sn = 1;
                while($this->nasoena = $this->result->fetch_array()){
                   $arri = array(
                                 'fname' =>  $this->nasoena['fname'],
                                 'lname' =>  $this->nasoena['lname'],
                                 'email' =>  $this->nasoena['email'],
                                 'phone' =>  $this->nasoena['phone'],
                                 'agent_id' =>  $this->nasoena['agent_id']
                                );
                      $getwhile .= execute_html::show_chekers($sn++,$arri['agent_id'],$arri['fname'],$arri['lname'],$arri['email'],$arri['phone']);
                }
               return $getwhile;

             }else{
              return false;
             }
    
    }

    public function display_users(){
      $arri = [];
      
        $this->query =  $this->queryclass->select('user', '*',null,'user_id DESC');
          $this->result =  $this->queryclass->execute($this->query);
             if($this->queryclass->rowsnumber()){
              
                while($this->nasoena = $this->result->fetch_array()){
                   $arri = array(
                                 'fname' =>  $this->nasoena['fname'],
                                 'lname' =>  $this->nasoena['lname'],
                                 'email' =>  $this->nasoena['email'],
                                 'phone' =>  $this->nasoena['phone'],
                                 'user_id' =>  $this->nasoena['user_id']
                                );
                      $getwhile .= execute_html::show_users($arri['user_id'],$arri['fname'],$arri['lname'],$arri['email'],$arri['phone']);
                }
               return $getwhile;

             }else{
              return false;
             }
    
    }

       public function display_category(){
      $arri = [];
        $this->query =  $this->queryclass->select('book_category', '*');
          $this->result =  $this->queryclass->execute($this->query);
             if($this->queryclass->rowsnumber()){
               $sn = 1;
                while($this->nasoena = $this->result->fetch_array()){
                   $arri = array(
                                 'name' =>  $this->nasoena['name'],
                                 'amount' =>  $this->nasoena['amount'],
                                 'cat_id' =>  $this->nasoena['cat_id']
                                );
                      $getwhile .= execute_html::show_category($sn++,$arri['name'],$arri['amount'],$arri['cat_id']);
                }
               return $getwhile;

             }else{
              return false;
             }
    }

    public function chckers(){
        $c = 'C';
      $this->query =  $this->queryclass->select('admin', 'COUNT(agent_id) AS count','accessType = "'.$c.'"');
                  $this->slip =  $this->queryclass->execute($this->query);
                    $this->shwn = $this->slip->fetch_array();
                    $this->count = $this->shwn['count'];
                        return $this->count;
    }

     public function count_cat(){
      $this->query =  $this->queryclass->select('book_category', 'COUNT(cat_id) AS count');
                  $this->slip =  $this->queryclass->execute($this->query);
                    $this->shwn = $this->slip->fetch_array();
                    $this->count = $this->shwn['count'];
                        return $this->count;
    }

    public function count_match(){
      $this->query =  $this->queryclass->select('stadium', 'COUNT(stadium_id) AS count');
                  $this->slip =  $this->queryclass->execute($this->query);
                    $this->shwn = $this->slip->fetch_array();
                    $this->count = $this->shwn['count'];
                        return $this->count;
    }

      public function count_users(){
      $this->query =  $this->queryclass->select('user', 'COUNT(user_id) AS countuser');
                  $this->gg =  $this->queryclass->execute($this->query);
                    $this->shwnd = $this->gg->fetch_array();
                    $this->countuser = $this->shwnd['countuser'];
                        return $this->countuser;
    }
    

 


}