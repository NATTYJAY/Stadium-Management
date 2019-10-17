$(document).ready(function(){

	ad_first = $('#ad_first');
	ad_last		= $('#ad_last');
	ad_phone = $('#ad_phone');
	ad_email = $('#ad_email');
	ad_password = $('#ad_password');

	ch_first = $('#ch_first');
	ch_last  = $('#ch_last');
	ch_email = $('#ch_email');
	ch_phone = $('#ch_phone');
	ch_password = $('#ch_password');
	//alert(333333);

admins_functions();
getsearch();
});


	var reg_create_priv = function(){

		// alert(ad_first.val()+" "+ad_last.val()+" "+ad_phone.val()+" "+ad_email.val()+" "+ad_password.val());
		send_data = new FormData();
		send_data.append("admin_registration", "getthattoyourskull");
		send_data.append("first_name",ad_first.val());
		send_data.append("last_name",ad_last.val());
		send_data.append("phone_number",ad_phone.val());
		send_data.append("email",ad_email.val());
		send_data.append("password",ad_password.val());
      		$.ajax({
		        url: './rastar/scan/admin ',
		       	type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html", 
		        success: function(data){
		        	if(data==81){
		        		$('#alrt').removeClass('alert alert-danger textcenter').html('');
		        		$('#alrt').addClass('alert alert-success textcenter');
		        		$('#alrt').html('<h5>Registration Successful</h5>');
         			}else if(data== 71){
         				setTimeout(function(){$('#alrt').addClass('alert alert-danger textcenter');
		        		$('#alrt').html('<h5>Priviledge Already granted ! </h5>');}, 500);
         			}else{
         				$('#alrt').addClass('alert alert-danger textcenter');
		        		$('#alrt').html('<h5>Something went wrong o ! </h5>');
         			}
		        }
		});
}

var reg_checker = function(){

		send_data = new FormData();
		send_data.append("checker_registration", "babaskilodkudubjb");
		send_data.append("ch_first",ch_first.val());
		send_data.append("ch_last",ch_last.val());
		send_data.append("ch_email",ch_email.val());
		send_data.append("ch_phone",ch_phone.val());
		send_data.append("ch_password",ch_password.val());
      		$.ajax({
		        url: './rastar/scan/admin ',
		       	type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html", 
		        success: function(data){
		        	if(data==811){
		        		$('#justforme').removeClass('alert alert-danger textcenter').html('');
		        		$('#justforme').addClass('alert alert-success textcenter');
		        		$('#justforme').html('<h5>Registration Successful</h5>');
		        		$('#form').trigger('reset');
         			}else if(data== 711){
         				setTimeout(function(){$('#justforme').addClass('alert alert-danger textcenter');
		        		$('#justforme').html('<h5>Personnel Already Exits ! </h5>');}, 500);
         			}else{
         				$('#justforme').addClass('alert alert-danger textcenter');
		        		$('#justforme').html('<h5>Something went wrong o ! </h5>');
         			}
		        }
		});
}


 function ajax_edit(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				fishers : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				var yea = datas['start_time'];
					var t = yea.split(";");
					date = t[1];
					time = t[0];
				$('#um').val(date);
				$('.ut').val(time);
				$('#hmt').val(datas['home']);
				$('#awt').val(datas['away']);
				$('#sta').val(datas.reg_ON);
				$('#totalvipseat').val(datas['total_vip_seats']);
				$('#trs').val(datas['total_regular_seats']);
				$('#iid').val(datas['stadium_id']);
				$('#update_match').modal('show').fadeIn('fast');
			}
		});
}



 function ajax_edit_checkers(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				checkers : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('#uch_first').val(datas.fname);
				$('#uch_last').val(datas.lname);
				$('#uch_email').val(datas.email);
				$('#uch_phone').val(datas.phone);
				$('#uch_password').val(datas.password);
				$('#idrp').val(datas.agent_id);
				$('#editcheckers').modal('show').fadeIn('fast');
			}
		});
}


 function ajax_del_users(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				userso : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('.name_users').val(datas.fname+" "+datas.lname);
				$('#userid').val(datas.user_id);
				$('#delete_user').modal('show').fadeIn('fast');
			}
		});
}


function ajax_del_checkers(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				checkersdel : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('.name_').text(datas.fname+" "+datas.lname);
				$('.idp').val(datas.agent_id);
				$('#delete_checker').modal('show').fadeIn('fast');
			}
		});
}

function ajax_del_cat(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				checkerscatdel : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('.name_cat').text(datas['name']);
				$('#catidp').val(datas['cat_id']);
				$('#delete_cat').modal('show').fadeIn('fast');
			}
		});
}



 function ajax_edit_category(id){
		$.ajax({
			url:'./rastar/scan/admin ',
			method:'POST',
			data:{
				checkeupdate : "meno",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('#ucatn').val(datas.name);
				$('#ucata').val(datas.amount);
				$('#catid').val(datas.cat_id);
				$('#catmodalupdate').modal('show').fadeIn('fast');
			}
		});
}


var admins_functions = function(){
	$('#savenow').on('click',function(){
		reg_create_priv();
	});
	

	$('#checkser_saveBTX').on('click',function(){
		reg_checker();
	});

	$('.edit').on('click',function(){
		id = $(this).attr("id");
		ajax_edit(id);
	});

	$('.editedc').on('click',function(){
		id = $(this).attr("id");
		ajax_edit_checkers(id);
	});

	$('.del').on('click',function(){
		id = $(this).attr("id");
		// alert(77);
		ajax_del_checkers(id);
		//ajax_edit_checkers(id);
	});

	$('.deluser').on('click',function(){
		id = $(this).attr("id");
		 //alert(id);
		ajax_del_users(id);
		//ajax_edit_checkers(id);
	});

	

	$('.delcat').on('click',function(){
		id = $(this).attr("id");
		// alert(77);
		ajax_del_cat(id);
		//ajax_edit_checkers(id);
	});

	$('.editcatgory').on('click',function(){
		id = $(this).attr("id");
		ajax_edit_category(id);
		//ajax_edit_checkers(id);
	});


	   $('#formp').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){  
                	if(data == 441){
                		$('#in').removeClass('alert alert-danger textcenter').html('');
		        		$('#in').addClass('alert alert-success textcenter');
		        		$('#in').html('<p> Match Added Successful</p>');
		        		//$('#formp').trigger('reset');
                	}else if(data == 567){
		        		$('#in').addClass('alert alert-danger textcenter');
		        		$('#in').html('<p>Wrong Image Format Or you haven\'t choose any image</p>');
                	}else if(data == 213){
	        			$('#in').addClass('alert alert-danger textcenter');
		        		$('#in').html('<p>Only One match can be added. click here to update</p>');
                	}else{
		        		$('#in').addClass('alert alert-danger textcenter');
		        		$('#in').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	    $('#uform').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	if(data == 446){
                		$('#ini').removeClass('alert alert-danger textcenter').html('');
		        		$('#ini').addClass('alert alert-success textcenter');
		        		$('#ini').html('<p> Match Updated Successful</p>');
		        		setTimeout(function(){$("#update_match").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else if(data == 568){
		        		$('#ini').addClass('alert alert-danger textcenter');
		        		$('#ini').html('<p>Wrong Image Format Or you haven\'t choose any image</p>');
                	}else if(data == null){
		        		$('#ini').addClass('alert alert-danger textcenter');
		        		$('#ini').html('<p>Data not exits</p>');
                	}else{
		        		$('#ini').addClass('alert alert-danger textcenter');
		        		$('#ini').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	    $('#loginform').on('submit', function(e){  
	    	e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType: "json",
		        beforeSend: function() {
		        	$('#userBtxlogin1').attr("hidden", "hidden");
					$('#logremove1').removeAttr('hidden');                              
	            },
	            complete: function(){ 
	            },
		        success: function(values){
		        	//console.log(values);
		        	if(values==9){
		        		location.assign("checkid");
		        	}else if(values == 13){
		        		location.assign("dashboard");
		        	}else if(values == 8){
		        		    $('#alert').addClass('alert alert-danger mb-2');
		        			$('#alert').html('<p><b>User already Logged in</b></p><p><b>Proceed to <a href ="home" style = "color:green;">dashboard</a></b></p>');
		        			$('#logremove1').attr('hidden','hidden'); 
		        			$('#userBtxlogin1').removeAttr("hidden");
		        	}
		        	else if(values==10){
		        			$('#alert').addClass('alert alert-danger mb-2');
		        			$('#alert').html('<p><b>Email or Password Incorrect.</b></p>');
		        			$('#logremove1').attr('hidden','hidden'); 
		        			$('#userBtxlogin1').removeAttr("hidden");
		        	}else{
							console.log('Something went wrong');
		        	}
		        }
           });
        
      });

	     $('#catform').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	if(data == 414){
                		$('#report').removeClass('alert alert-danger textcenter').html('');
		        		$('#report').addClass('alert alert-success textcenter');
		        		$('#report').html('<p> Category Added succesfully</p>');
		        		setTimeout(function(){$("#catform").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#report').addClass('alert alert-danger textcenter');
		        		$('#report').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      }); 


	     $('#delc').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	//console.log(data);
                	if(data == 1){
                		$('#alertdeleteint').removeClass('alert alert-danger textcenter').html('');
		        		$('#alertdeleteint').addClass('alert alert-success textcenter');
		        		$('#alertdeleteint').html('<p> Checker Deleted succesfully</p>');
		        		setTimeout(function(){$("#delc").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#alertdeleteint').addClass('alert alert-danger textcenter');
		        		$('#alertdeleteint').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	     $('#delu').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	//console.log(data);
                	if(data == 1){
                		$('#alertdeluser12').removeClass('alert alert-danger textcenter').html('');
		        		$('#alertdeluser12').addClass('alert alert-success textcenter');
		        		$('#alertdeluser12').html('<p> Checker Deleted succesfully</p>');
		        		setTimeout(function(){$("#delete_user").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#alertdeluser12').addClass('alert alert-danger textcenter');
		        		$('#alertdeluser12').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	      $('#delcat').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	//console.log(data);
                	if(data == 1){
                		$('#alertdeleteint1').removeClass('alert alert-danger textcenter').html('');
		        		$('#alertdeleteint1').addClass('alert alert-success textcenter');
		        		$('#alertdeleteint1').html('<p> Checker Deleted succesfully</p>');
		        		setTimeout(function(){$("#delcat").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#alertdeleteint1').addClass('alert alert-danger textcenter');
		        		$('#alertdeleteint1').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	      $('#checkform').on('submit', function(e){  
	    	e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType: "json",
		        beforeSend: function() {
		        	$('#userBtxlogin11').attr("hidden", "hidden");
					$('#logremove11').removeAttr('hidden');                              
	            },
	            complete: function(){ 
	            },
		        success: function(values){
		        	if(values == 2121){
		        		    $('#alerted').addClass('alert alert-success mb-2');
		        			$('#alerted').html('<p><b>GO-IN[Validation Successful]</b></p>');
		        			$('#logremove11').attr('hidden','hidden'); 
		        			$('#userBtxlogin11').removeAttr("hidden");
		        	}else if(2314){
		        		    $('#alerted').addClass('alert alert-danger mb-2');
		        			$('#alerted').html('<p><b>CAN\'T-GO IN[Cant find the Refrence Number]</b></p>');
		        			$('#logremove11').attr('hidden','hidden'); 
		        			$('#userBtxlogin11').removeAttr("hidden");
		        	}else if(2451){
							$('#alerted').addClass('alert alert-danger mb-2');
		        			$('#alerted').html('<p><b>CAN\'T-GO IN[Validation UnSuccessful]</b></p>');
		        			$('#logremove11').attr('hidden','hidden'); 
		        			$('#userBtxlogin11').removeAttr("hidden");
		        	}else{
		        		alert('Something Went wrong');
		        	}
		        	
		     //    	if(values==9){
		     //    		location.assign("checkid");
		     //    	}else if(values == 13){
		     //    		location.assign("dashboard");
		     //    	}else if(values == 8){
		     //    		    $('#alert').addClass('alert alert-danger mb-2');
		     //    			$('#alert').html('<p><b>User already Logged in</b></p><p><b>Proceed to <a href ="home" style = "color:green;">dashboard</a></b></p>');
		     //    			$('#logremove1').attr('hidden','hidden'); 
		     //    			$('#userBtxlogin1').removeAttr("hidden");
		     //    	}
		     //    	else if(values==10){
		     //    			$('#alert').addClass('alert alert-danger mb-2');
		     //    			$('#alert').html('<p><b>Reg no or Password Incorrect.</b></p>');
		     //    			$('#logremove1').attr('hidden','hidden'); 
		     //    			$('#userBtxlogin1').removeAttr("hidden");
		     //    	}else{
							// console.log('Something went wrong');
		     //    	}
		        }
           });
        
      });

	       $('#catformupdate').on('submit', function(e){  
           e.preventDefault();
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	if(data == 439){
                		$('#catupreport').removeClass('alert alert-danger textcenter').html('');
		        		$('#catupreport').addClass('alert alert-success textcenter');
		        		$('#catupreport').html('<p> Category Updated succesfully</p>');
		        		setTimeout(function(){$("#catmodalupdate").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#catupreport').addClass('alert alert-danger textcenter');
		        		$('#catupreport').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });

	    $('#uformc').on('submit', function(e){  
           e.preventDefault();
           //alert('okan');
         	 $.ajax({  
                url:"./rastar/scan/admin",  
                type: "POST",  
                data: new FormData(this),  
                contentType: false,  
                processData:false,
                dataType : "Json",  
                success: function(data){
                	if(data == 433){
                		$('#al').removeClass('alert alert-danger textcenter').html('');
		        		$('#al').addClass('alert alert-success textcenter');
		        		$('#al').html('<p> Checker Updated succesfully</p>');
		        		setTimeout(function(){$("#editcheckers").modal("hide");location.reload();faint();}, 1000);
		        		//$('#uform').trigger('reset');
                	}else{
		        		$('#al').addClass('alert alert-danger textcenter');
		        		$('#al').html('<p>Something Went Wrong</p>');
                	}
                }  
           });
        
      });
  
}

function getsearch(){
	$('#search11').on('click', function(){
		searchid = $('#serc').val();
		url = "bookers/"+searchid; 
		location.assign(url);
	});
}


	


