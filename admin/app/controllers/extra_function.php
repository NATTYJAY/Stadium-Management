<?php
namespace admin\app\controllers;
use admin\app\models\queryclass as database_query;

class extra_function{

  public $session;
   public function __construct(){
        $this->queryclass = new database_query();
  }

    public  function logout(){
        unset($_COOKIE['tim']);
        unset($_SESSION['tim']);
        unset($_COOKIE['justlogin']);
        setcookie( 'tim', FALSE, -5, '/', $_SERVER['SERVER_NAME'], isset($_SERVER["HTTPS"]), true);
        session_destroy();
        header("location:./");
    }
	
    public static function encrypt_decrypt($action, $string){
           $output = false;
           $encrypt_method = "AES-256-CBC";
           $secret_key = 'indanā ʾusāfiru laisa ʿindanā';
           $secret_iv = 'anā ʾusāfiru waḥdī  laisa ʾanā lā ʾusāfiru waḥdī';
           $key = hash('sha256', $secret_key);
           $iv = substr(hash('sha256', $secret_iv), 0, 16);
           if( $action == 'encrypt' ) {
               $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
               $output = base64_encode($output);
           }
           else if( $action == 'decrypt' ){
               $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
           }
           return $output;
    }

		public static function setcookie_session($user_id) {
		    $usersidentity = $user_id;
		    $hashed_user = self::encrypt_decrypt('encrypt', $usersidentity);
		    $expire = mktime(date('H'), date('i'),  date('s'), date('m'), date('d'), date('Y')+3);
		         setcookie( 'tim', $hashed_user,  $expire, '/', $_SERVER['SERVER_NAME'], isset($_SERVER["HTTPS"]), true);
		         setcookie('justlogin', 'hello', time() + 360,'/', $_SERVER['SERVER_NAME'], isset($_SERVER["HTTPS"]), true);
		         $_SESSION['tim'] = $hashed_user;
   		}

    protected function xsession_cookie_Rowcount($param){
        $this->checkquery =  $this->queryclass->select('admin','*', 'email="'.$param.'" ');
          $exe =  $this->queryclass->execute($this->checkquery);
             if($this->queryclass->rowsnumber()){
                return true;
             }else{
              return false;
             }
    }

      public  function checksession(){
            if(isset($_SESSION['tim'])) {
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

      public function get_session(){
         if($this->checksession()){
            $e = $this->session;
           return $e;
         }else{
         }
      }

      

}




?>