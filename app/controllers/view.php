<?php
namespace app\controllers;
use app\controllers\extra_function as checkseesion_book;
 class view{
	 	 public static function display_image_name($image_name){
	 	 	$imgr = '<img src="../admin/image_folder/'.$image_name.'" alt=""/>';
	 	 	return $imgr;
	 	}
	 	public static function testing(){
	 	 	$imgr = 'fffffffffff';
	 	 	return $imgr;
	 	}
	 	 public static function display_image_small($image_name){
	 	 	$im = '<img src="../admin/image_folder/'.$image_name.'" width="120" height="68" alt=""/>';
	 	 	return $im;
	 	}

	 	public static function display_amount($amount,$name){
	 		$amt = '<div class="col-md-6 col-lg-6"><h4 class="opensans slim green2"><span style="color:gray"><i>'.$name.'</i></span> <b>'.$amount.'</b>  </h4></div>';
	 		return $amt;
	 	}

	 	public static function display_match($id,$home_player,$away_player,$date_time){
	 		if((new checkseesion_book)->checksession()){
					$session_book = ' <div class="hpadding20">
					<!-- <a href="" class="add2fav margtop5">Add to favourite</a> -->
					<a href="details/'.$id.'"><button class="booknow margtop20 btnmarg"> Book now</button></a>
				</div> ';
					}else{
						$session_book = ' <div class="hpadding20">
						<a href=""  data-toggle="modal" data-target="#iconForm" class="add2fav margtop5">Login to continue booking</a>
				</div> ';
					}
	 		$display = '	
				
				<div class="line3 margtop20"></div>
				
				<div class="col-md-6 bordertype1 padding20">
					<span class="opensans size30 bold grey2"><i>'.$home_player.'</i></span><br/>
					Home<br/>
				</div>
				<div class="col-md-6 bordertype2 padding20">
					<span class="opensans size30 bold grey2"><i>'.$away_player.'</i></span><br/>
					Away
				</div>
				
				<div class="col-md-6 bordertype3">
					<a href="#" class="black">'.$date_time.'</a>
				</div>
				<div class="col-md-6 bordertype3">
					<a href="#" class="black">Godswill Akpabio International Stadium, Uyo</a>
				</div>
				<div class="clearfix"></div><br/>
				'.$session_book.'
				
			';
	 			return $display;
	 	}

	 	public static function details_side($home,$away,$One_img_name,$time,$vip_amount,$regular_amount){
	 		$peace = ' <div class="wh33percent left size12 bold dark">
							'.$home.'
						</div>
						<div class="wh33percent right textright size12 bold dark">
							'.$away.'
						</div>
						<div class="clearfix"></div>
						
						<div class="wh33percent left">
							<div class="fcircle">
								<span class="fcaricon"></span>
							</div>
						</div>
						<div class="wh33percent right">
							<div class="fcircle right">
								<span class="fhotelicon"></span>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="fline2px"></div>
						
						<div class="wh33percent left size12 grey">
							Home<br/>
							
						</div>
						<div class="wh33percent right textright size12 grey">
							Away<br/>
							
						</div>
						<div class="clearfix"></div>
					</div>
					<!-- END OF GOING TO -->
					
					
					<br/>
					
					<img src="../view/photos/'.$One_img_name.'" width="300" alt=""/>
					<div class="fdash mt10"></div><br/>
					<b>Venue</b>: 
					God\'swill Obot Akpabio International Stadium<br/>
					<span class="grey2">On:<h3>'.$time.'</h3></span><br/>

					<br/>
					<br/>

					
					</div>	
					<div class="line3"></div>

						 ';
			return $peace;
	 	}

	 	public static function details_amount($amount,$name){
	 		$re = ' 
								
						<span class="left lred2 bold size18">'.$amount.' '." ".' 
							<span class="grey normal size12 mt-10"><i>'.$name.'</i></span>
						</span>
						
						';
				return $re;
	 	}

	 	public static function select_amount_while($id,$name){
	      $oki = 
	          '<option value="'.$id.'">'.$name.'</option>';
	      return  $oki;

    	}

    public static function print_statement($snr,$date_time,$home,$away,$ref_code,$amount,$type,$booked_id){
    		$printer = ' <tr>
                            <td>'.$snr.'</td>
                            <td>'.$date_time.'</td>
                            <td><b>'.$home.'</b> VS <b>'.$away.'</b></td>
                            <td>'.$ref_code.'</td>
                            <td>'.$amount.'</td>
                            <td><h5>'.$type.'</h5></td>
                           <td><a href="print/'.$booked_id.'" target="_blank"><div class="badge badge-success round">
                                <i class="fa fa-print font-medium-2"></i>
                                <span>Print</span>
                              </div></a></td>
                        </tr>';
    		return $printer;
    	}

	public static function noresult(){
  		$nor = ' <tr><td colspan="4"><b>NO RESULT FOUND YET</b></td></tr>';
  		return $nor;
	}

	public static function print_page($match_type,$name,$ref_id,$email,$date,$phone,$type,$paid_amount){

		$pp = '
				<li><h4>'.$match_type.'</h4></li>
				<li>'.$name.'</li>
				<li><h4>'.$ref_id.'</h4></li>
				<li style="text-transform: lowercase;">'.$email.'</li>
				<li>'.$date.'</li>
				<li>'.$phone.'</li>
				<li><span role = "alert" class="badge orange">'.$type.'</span></li>
				<li><span role = "alert" class="badge"  style="background-color: lightblue; color:black;font-size:20px">'.$paid_amount.'</span></li>
			';

		return $pp;
	}

	public static function print_now($idr){

		$eh = ' <a href="/printout/'.$idr.'" target="_blank"><button class="btn-search4 caps center margtop20">Print Ticket</button></a>';

		return $eh;
	}

 }




?>