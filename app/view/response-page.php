<?php
require'paystack/src/autoload.php';

 if($_SERVER['REQUEST_METHOD']== "GET"){
                $leave = explode("/", $_SERVER["REQUEST_URI"]);
                unset($leave[0]);
                $ref = $leave[2];
}
// $ref = $_GET['ref'];
// $r = new executeclass($ref);
// if($r->verifypayment()){

// }
// $t = $r->responseObj
// $t->data->syccdidi = hbjjndd
$paystack = new Yabacon\Paystack('sk_test_7c9ea14d7ee9d3d9b8857da672cecdfed76d3742');
$responseObj = $paystack->transaction->verify(["reference"=>$ref]);
echo "<pre>";
//print_r($responseObj->data->status); 


 print_r($responseObj);

echo"</pre>";
// $result = array();
// //The parameter after verify/ is the transaction reference to be verified

// if(isset($_GET['ref'])){
//   $ref = $_GET['ref'];
//   $url = 'https://api.paystack.co/transaction/verify/'.$ref;

// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt(
//   $ch, CURLOPT_HTTPHEADER, [
//     'Authorization:  Bearer sk_test_7c9ea14d7ee9d3d9b8857da672cecdfed76d3742']
// );
// $request = curl_exec($ch);
// curl_close($ch);

// if ($request) {
//     $result = json_decode($request, true);
//     // print_r($result);
//     if($result){
//       if($result['data']){
//         //something came in
//         if($result['data']['status'] == 'success'){
//           // the transaction was successful, you can deliver value
           
//           @ also remember that if this was a card transaction, you can store the 
//           @ card authorization to enable you charge the customer subsequently. 
//           @ The card authorization is in: 
//           @ $result['data']['authorization']['authorization_code'];
//           @ PS: Store the authorization with this email address used for this transaction. 
//           @ The authorization will only work with this particular email.
//           @ If the user changes his email on your system, it will be unusable
          
//           echo "Transaction was successful";
//         }else{
//           // the transaction was not successful, do not deliver value'
//           // print_r($result);  //uncomment this line to inspect the result, to check why it failed.
//           echo "Transaction was not successful: Last gateway response was: ".$result['data']['gateway_response'];
//         }
//       }else{
//         echo $result['message'];
//       }

//     }else{
//       //print_r($result);
//       die("Something went wrong while trying to convert the request variable to json. Uncomment the print_r command to see what is in the result variable.");
//     }
//   }else{
//     //var_dump($request);
//     die("Something went wrong while executing curl. Uncomment the var_dump line above this line to see what the issue is. Please check your CURL command to make sure everything is ok");
//   }
// }


  ?>