<?php
namespace admin\app\controllers;
use admin\app\controllers\extra_function as checkseesion_book;
 class view{

	public static function show_match_details($id,$sn,$home,$away,$time,$status){
		switch ($status) {
			case '0':
				$statu = 'PORTAL CLOSED';
				break;
				case '1':
				$statu = 'PORTAL OPENED';
				break;
			
			default:
				$statu = 'NOTHING';
				break;
		}
		$idrr = ' <tr>
                        <td>'.$sn.'</td>
                        <td>'.$home.'  vs '.$away.'</td>
                        <td>'.$time.'</td>
                        <td></td>
                        <td>'.$statu.'</td>
                         <td class="text-center"><a href="#" class="text-inverse edit" title="Edit" data-toggle="tooltip"  id="'.$id.'"><i class="mdi mdi-lead-pencil"></i></td>
                      </tr>
                      ';

		return $idrr;
	}

	public static function show_stadium($id,$home,$away){

		$option = ' <option value="'.$id.'">'.$home.' Vs '.$away.'</option>';
			return $option;
	}

	public static function show_booked($sn,$name,$match,$category,$amount,$date_booked,$refid,$phone){
		$options = '  <tr>
                        <td>'.$sn.'</td>
                        <td>'.$name.'</td>
                        <td>'.$match.'</td>
                        <td></td>
                        <td>'.$category.'</td>
                        <td>'.$phone.'</td>
                        <td>₦ '.$amount.'</td>
                        <td>'.$date_booked.'</td>
                        <td>'.$refid.'</td>
                      </tr> ';
			return $options;
	}

	public static function show_chekers($sn,$id,$fname,$lname,$email,$phone){
		$options = '  <tr>
                        <td>'.$sn.'</td>
                        <td>'.$fname.'</td>
                        <td>'.$lname.'</td>
                        <td></td>
                        <td>'.$email.'</td>
                        <td>'.$phone.'</td>
                        <td class="text-center"><a href="#" class="text-inverse editedc" title="Edit" data-toggle="tooltip"  id="'.$id.'"><i class="mdi mdi-lead-pencil"></i></a> <a href="#" class="btn-xs btn-danger del" title="Delete" data-toggle="tooltip"  id="'.$id.'">Delete</a></td>
                      </tr> ';
			return $options;
	}

	public static function show_users($id,$fname,$lname,$email,$phone){
		$options = '  <tr>
                       
                        <td>'.$fname.'</td>
                        <td>'.$lname.'</td>
                     
                        <td>'.$email.'</td>
                        <td>'.$phone.'</td>
                        <td class="text-center"> <a href="#" class="btn-xs btn-danger deluser" title="Delete" data-toggle="tooltip"  id="'.$id.'">Delete</a></td>
                      </tr> ';
			return $options;
	}

	public static function show_category($sn,$name,$desc,$id){
		$options = '  <tr>
                        <td>'.$sn.'</td>
                        <td>'.$name.'</td>
                        <td>'.$desc.'</td>
                        <td></td>
                        <td class="text-center"><a href="#" class="text-inverse editcatgory" title="Edit" data-toggle="tooltip"  id="'.$id.'"><i class="mdi mdi-lead-pencil"></i></a> <a href="#" class="btn-xs btn-danger delcat" title="Delete" data-toggle="tooltip"  id="'.$id.'">Delete</a></td>
                      </tr> ';
			return $options;
	}

 }




?>