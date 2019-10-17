<?php
namespace app\controllers;
use app\models\queryclass as database_query;
use app\controllers\view as execute_html;

class booking extends extra_function{

  public $name;
  public $r;
  public function __construct(){
        $this->queryclass = new database_query();
  }
  public  function display_image(){
    $one = 1;
    $this->cmm = $this->queryclass->select('stadium','*',null, 'stadium_id DESC',1);
        $this->check = $this->queryclass->execute($this->cmm);
        if ($this->queryclass->rowsnumber()){
           $this->r = $this->check->fetch_array();
                if($this->r['reg_ON'] == 1){
                     $this->array  = [];
                      $this->array = array(
                                      "sta_id"=>$this->r['stadium_id'],
                                      "home"=>$this->r['home'],
                                      "away"=>$this->r['away'],
                                      "start_time"=>$this->r['start_time'],
                                      "image"=>$this->r['image']
                                      );
                      $this->rr = explode(",", $this->array['image']);
                      $img .= " ";
                        foreach ($this->rr as $value){
                          $img .= execute_html::display_image_name($value);
                        }
                  return $img;
                }
        }else{
         return  0;
        }
        
  }
   public  function display_small_image(){
                  $img .= " ";
                foreach ($this->rr as $value){
                  $img .= execute_html::display_image_small($value);
                }
                  return $img;
   }
   public function display_match_info(){ 
          $details .=  execute_html::display_match($this->array['sta_id'],$this->array['home'],$this->array['away'],$this->array['start_time']);
          return $details;
   }

      public function fetch_stadium_details(){
        $one = 1;
             $this->m =  $this->queryclass->select('stadium','*', 'reg_ON = "'.$one.'"', 'stadium_id DESC','1');
        $this->chec = $this->queryclass->execute($this->m);
        if ($this->queryclass->rowsnumber()){
             $this->arr  = [];
             $this->re = $this->chec->fetch_array();
              return  $this->re;
            }
      }

       public function portal_status(){
        $zero = 0;
             $this->close =  $this->queryclass->select('stadium','*',null, 'stadium_id DESC',1);
        $this->clsoe = $this->queryclass->execute($this->close);
            if($this->queryclass->rowsnumber()){
              $rest =  $this->clsoe->fetch_array();
                if($rest['reg_ON'] == 0){
                   return true;
                 }
            }else{
              return false;
            }
      }

   public function display_amount_match(){
 
      $this->sql = $this->queryclass->select('book_category','*', '1=1');
         $this->d = $this->queryclass->execute($this->sql);
        if ($this->queryclass->rowsnumber()){
          $ty .=" ";
              while($ry = $this->d->fetch_array()){
                 $arri = array('name'    => $ry['name'],
                               'amt'     => $ry['amount'],
                                );
                 $ty .=  execute_html::display_amount('₦'.number_format($arri['amt'],2),$arri['name']);
              }
               return $ty;
        }

   }

   public function display_detail_amount($id){
      // $this->sql = "SELECT stadium.stadium_id,book_category.* FROM stadium INNER JOIN book_category ON book_category.stadium_id = stadium.stadium_id WHERE stadium.stadium_id = '{$id}' ";
      $this->sql =  $this->queryclass->select('book_category','*', '1=1');
         $this->d = $this->queryclass->execute($this->sql);
        if ($this->queryclass->rowsnumber()){
          $r .=" ";
              while($ry = $this->d->fetch_array()){
                 $arri = array('name'    => $ry['name'],
                               'amt'     => $ry['amount'],
                                );
              
                 $r.= execute_html::details_amount('₦'.number_format($arri['amt'],2),$arri['name']);
              }
               return $r;

        }
   }

   public function all_user_information($idr){
        $this->save =  $this->queryclass->select('user','*', 'user_id = "'.parent::get_session().'"');
        $this->yanni = $this->queryclass->execute($this->save);
           if ($this->queryclass->rowsnumber()){
             $this->naso  = $this->yanni->fetch_array();
              extract($this->naso);
             $this->fname   =  $this->naso['fname'];
             $this->lname   =  $this->naso['lname'];
             $this->email   =  $this->naso['email'];
             $this->phone   =  $this->naso['phone'];
             $this->user_id = parent::get_session();
             return $this;

            }
   }
   
   public function display_side_details($idr){
       $this->cm =  $this->queryclass->select('stadium','*', 'stadium_id= "'.$idr.'"');
        $this->checking = $this->queryclass->execute($this->cm);
        if ($this->queryclass->rowsnumber()){
             $this->rape  = $this->checking->fetch_array();
              extract($this->rape);
                $this->first_image_array = explode(",", $this->rape['image']);
              $k .= " ";
            $k .= execute_html::details_side($this->rape['home'],$this->rape['away'],$this->first_image_array[0],$this->rape['start_time'],'₦ '.number_format($this->rape['vip_amount'],2),'₦ '.number_format($this->rape['regular_amount'],2));
              return $k;
        }else{
          return false;
        }
   }

  

    public function show_ticket_name(){
    $array_contain =[]; 
    $this->qi =  $this->queryclass->select('book_category','*','1=1');
      $this->ddi =  $this->queryclass->execute($this->qi);
         if($this->queryclass->rowsnumber()){
          $y .= " ";
            while($this->raper  = $this->ddi->fetch_array()){
              extract($this->raper);
          $y .= execute_html::select_amount_while($this->raper['cat_id'],$this->raper['name']);
            }
           return $y;
         }else{
          return false;
         }
    }

     public function select_amount_o($id){
      $array_am = [];
      $details = [];
         $this->amounted =  $this->queryclass->select('book_category','amount,cat_id','cat_id = "'.$id.'" ');
          $this->u_up =  $this->queryclass->execute($this->amounted);
             if($this->queryclass->rowsnumber()){
            $array_am = $this->queryclass->fetchrows($details['amount'],$details['cat_id']);
                 $array_am['amount'];
                 $array_am['cat_id'];
                    return  $array_am; 
             }else{
              return false;
             }
    }


    public function display_print_layout(){
            $arri = [];
            $this->p_stst =  'SELECT stadium.stadium_id AS main_stadiumID,stadium.home,stadium.away, booked.booked_id, booked.user_id,booked.pay_reff_id,booked.amount_paid,booked.cat_id AS booked_catID,booked.date_booked, book_category.cat_id AS category_catID,book_category.name FROM booked INNER JOIN book_category ON book_category.cat_id = booked.cat_id INNER JOIN stadium ON stadium.stadium_id = booked.stadium_id WHERE booked.user_id = "'.parent::get_session().'" ORDER BY booked_id DESC ';
                $this->state =  $this->queryclass->execute($this->p_stst);
             if($this->queryclass->rowsnumber()){
                $snr = 1;
                $dis .= " ";
                while($this->lakala = $this->state->fetch_array()){
                      extract($this->lakala);
                     $dis .= execute_html::print_statement($snr++,$this->lakala['date_booked'],$this->lakala['home'],$this->lakala['away'],$this->lakala['pay_reff_id'],'₦'.number_format($this->lakala['amount_paid'],2),$this->lakala['name'],$this->lakala['booked_id']);
                }
                return $dis;
            }else{
              $noresult = execute_html::noresult();
                return $noresult;
            }
    }

    public function _print_user_ticket($booked_id){
  $arri = [];
  $this->print_ =  'SELECT stadium.stadium_id AS main_stadiumID,stadium.home,stadium.away,booked.booked_id, booked.user_id,booked.pay_reff_id,booked.amount_paid,booked.cat_id AS booked_catID,booked.date_booked, book_category.cat_id AS category_catID,book_category.name,user.user_id,user.fname,user.lname,user.phone,user.email FROM booked INNER JOIN book_category ON book_category.cat_id = booked.cat_id INNER JOIN stadium ON stadium.stadium_id = booked.stadium_id INNER JOIN user WHERE booked.booked_id = "'.$booked_id.'" AND user.user_id = "'.parent::get_session().'" ';
                $this->query =  $this->queryclass->execute($this->print_);
             if($this->queryclass->rowsnumber()){
                     $this->nasoena = $this->query->fetch_array();
                     $dpk = " ";
                     $this->arri = array(
                                   'home'    => $this->nasoena['home'],
                                   'away'    =>  $this->nasoena['away'],
                                   'booked_id'     =>  $this->nasoena['booked_id'],
                                   'pay_reff_id'   =>  $this->nasoena['pay_reff_id'],
                                   'amount_paid'   =>  $this->nasoena['amount_paid'],
                                   'date_booked'   =>  $this->nasoena['date_booked'],
                                   'type'          =>  $this->nasoena['name'],
                                   'fname'         =>  $this->nasoena['fname'],
                                   'lname'         =>  $this->nasoena['lname'],
                                   'phone'         =>  $this->nasoena['phone'],
                                   'email'         =>  $this->nasoena['email']
                                );
                     $dpk .= execute_html::print_page($this->arri['home']."  "."&"."  ".$this->arri['away'],$this->arri['fname']." ".$this->arri['lname'],$this->arri['pay_reff_id'],$this->arri['email'],$this->arri['date_booked'],$this->arri['phone'],$this->arri['type'],'₦'.number_format($this->arri['amount_paid'],2));
                
                 return $dpk;
            }else{
              $noresult = 'nothing is found';
                return $noresult;
            }
      }

      public function print_now_function(){
        $ro .= execute_html::print_now($this->arri['booked_id']);
        return $ro;
      }

      


}