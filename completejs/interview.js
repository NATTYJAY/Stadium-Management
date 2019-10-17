$(document).ready(function(){
	/*Intialization of variable or parameters. or Anything you wan call am*/
	ip_id     = $('#ip_id');
	ip_date   = $('#ip_date');
	ip_oral   = $('#ip_oral');
	ip_write  = $('#ip_write');
   ip_remarks = $('#ip_remarks');

   // Edit 

   	epro_id     = $('#epro_id');
	epro_name   = $('#epro_name');
	epro_date   = $('#epro_date');
	epro_oral   = $('#epro_oral');
    epro_write  = $('#epro_write');
    epro_remarks  = $('#epro_remarks');

   o_marks = W_marks = ip_err = edit_o_marks = edit_W_marks = edit_ip_err =  " ";

	interview();
});


function to_check_oral_marks(){
	if (ip_oral.val()==""){
		ip_err = "Please Insert Oral Marks";
		$('#or_marks').html("<p>"+ip_err+"</p>");
	}else if(ip_oral.val() != ""){
		test_oral = /[^0-9.]+/.test(ip_oral.val());
				if(!test_oral){
					if(ip_oral.val()>40){
						o_marks = "Oral marks must be less than or eqaul to 40%";
						$('#or_marks').html("<p>"+o_marks+"</p>");
					}else{
						o_marks = " ";
						$('#or_marks').html("<p>"+o_marks+"</p>");
					}
				}else{
					o_marks = "Only Numbers are allowed";
					$('#or_marks').html("<p>"+o_marks+"</p>");
				}
	}
		
}

function to_check_written_marks(){
	if (ip_oral.val()==""){
		W_marks = "Please resolve Issue with Oral marks Field First";
		$('#wr_marks').html("<p>"+W_marks+"</p>");
	}else if(ip_oral.val() != ""){
		if(ip_write.val() == ""){
				W_marks = "Please Insert Written Marks";
				$('#wr_marks').html("<p>"+W_marks+"</p>");
		}else if(ip_write.val() != ""){
			test_write = /[^0-9.]+/.test(ip_write.val());
				if(!test_write){
					if(ip_write.val()>60){
					W_marks = " Written Marks Must be less than or eqaul to 60%";
					$('#wr_marks').html("<p>"+W_marks+"</p>");
					}else{
						W_marks = " ";
						$('#wr_marks').html("<p>"+W_marks+"</p>");
					}
				}else{
					W_marks = "Only Numbers are allowed";
					$('#wr_marks').html("<p>"+W_marks+"</p>");
				}
		}
	}

}


function toedit_check_oral_marks(){
	if (epro_oral.val()==""){
		edit_ip_err = "Please Insert Oral Marks";
		$('#edit_or_marks').html("<p>"+edit_ip_err+"</p>");
	}else if(epro_oral.val() != ""){
		test_orals = /[^0-9.]+/.test(epro_oral.val());
				if(!test_orals){
					if(epro_oral.val()>40){
						edit_ip_err = "Oral marks must be less than or eqaul to 40%";
						$('#edit_or_marks').html("<p>"+edit_ip_err+"</p>");
					}else{
						edit_ip_err = " ";
						$('#edit_or_marks').html("<p>"+edit_ip_err+"</p>");
					}
				}else{
					edit_ip_err = "Only Numbers are allowed";
					$('#edit_or_marks').html("<p>"+edit_ip_err+"</p>");
				}
	}
		
}

function toedit_check_written_marks(){
	if (epro_oral.val()==""){
		edit_W_marks = "Please resolve Issue with Oral marks Field First";
		$('#edit_wr_marks').html("<p>"+edit_W_marks+"</p>");
	}else if(epro_oral.val() != ""){
		if(epro_write.val() == ""){
				edit_W_marks = "Please Insert Written Marks";
				$('#edit_wr_marks').html("<p>"+edit_W_marks+"</p>");
		}else if(epro_write.val() != ""){
			test_write = /[^0-9.]+/.test(epro_write.val());
				if(!test_write){
					if(epro_write.val()>60){
					edit_W_marks = " Written Marks Must be less than or eqaul to 60%";
					$('#edit_wr_marks').html("<p>"+edit_W_marks+"</p>");
					}else{
						edit_W_marks = " ";
						$('#edit_wr_marks').html("<p>"+edit_W_marks+"</p>");
					}
				}else{
					edit_W_marks = "Only Numbers are allowed";
					$('#edit_wr_marks').html("<p>"+edit_W_marks+"</p>");
				}
		}
	}

}

function to_insert_interview(){ // This function send it interview values to the server
	oral_marks = parseFloat(ip_oral.val());
	written_marks = parseFloat(ip_write.val());
	percent_oral = parseFloat(((oral_marks)/100)*100);
	percent_write = parseFloat(((written_marks)/100)*100);
	total_marks = (percent_oral + percent_write);
	
	send_data = new FormData();
	send_data.append("BuenosdíaswaḥdE", "xI6osdíasWW");
	send_data.append("pro_id", ip_id.val());
	send_data.append("interview_date",ip_date.val());
	send_data.append("percent_oral", percent_oral);
	send_data.append("percent_write", percent_write);
	send_data.append("total_marks", total_marks);
	send_data.append("ip_remarks", ip_remarks.val()); 

		$.ajax({   
				url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data:send_data,
		         processData: false,
		         contentType: false,
		         cache:false,
		         dataType: "text",
		        success: function(data){
		        	if(data == 789){
		        	$('#intalert').addClass('alert alert-danger mb-2');
					$('#intalert').html('<p><b> Interview Already Added</b></p>');
		        	$('#interform').trigger('reset');
		        	
		        	}else if(data == 678){
		        	$('#intalert').removeClass('alert alert-danger mb-2');
					$('#intalert').html(' ');
		        	$('#intalert').addClass('alert alert-success mb-2');
					$('#intalert').html('<p><b>Success !</b></p>');
		        		setTimeout(function(){location.reload()}, 200);
		        	}else if(data == 234){
		        		$('#intalert').addClass('alert alert-danger mb-2');
					$('#intalert').html('<p><b>Something went wrong</b></p>');
		        	$('#interform').trigger('reset');
		        	}
		        	
		        }
		     
		});	
}


function ajax_int_edit(idrk){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBeditيةbW  : "يةbnowmeية",
				proid : idrk
			},
			dataType:"json", 
			success: function(datas){
				epro_id.val(datas.pro_id);
				epro_name.val(datas.pro_fname + " " + datas.pro_lname);
				epro_date.val(datas.pro_date);
				epro_oral.val(datas.pro_oral_marks);
				epro_write.val(datas.pro_written_marks);
				epro_remarks.val(datas.pro_remarks);
				$('#updateinterview').modal('show').fadeIn('fast');
			}
		});
}

 function interview_up_success(){
	$('#updateinterview').modal('hide').fadeIn('fast');
		swal({
		    title: "Interview Updated",
		    timer: 3000, 
		    icon: "success",
		    buttons: {
                confirm: {
                    value: '',
                    visible: true,
                    className: "",
                    closeModal: true
                }
		    }
		})
}


function to_update_interview(){ // This function send it interview values to the server
	edit_oral_marks = parseFloat(epro_oral.val());
	edit_written_marks = parseFloat(epro_write.val());
	epercent_oral = parseFloat(((edit_oral_marks)/100)*100);
	epercent_write = parseFloat(((edit_written_marks)/100)*100);
	etotal_marks = (epercent_oral + epercent_write);
	
	send_data = new FormData();
	send_data.append("testsdíaswaḥdE", "xI6ohhelpdíasWW");
	send_data.append("epro_id", epro_id.val());
	send_data.append("epro_date",epro_date.val());
	send_data.append("epercent_oral", epercent_oral);
	send_data.append("epercent_write", epercent_write);
	send_data.append("etotal_marks", etotal_marks);
	send_data.append("epro_remarks", epro_remarks.val()); 

		$.ajax({   
				url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data:send_data,
		         processData: false,
		         contentType: false,
		         cache:false,
		         dataType: "text",
		        success: function(write){
			        if(write == 898){
			        	interview_up_success();
			        	setTimeout(function(){location.reload()}, 200);
			        }else if(write == 895){
			        	$('#alertview').addClass('alert alert-danger mb-2');
						$('#alertview').html('<p><b> Interview Could not be Updated</b></p>');
			        }else{
			        	$('#alertview').addClass('alert alert-danger mb-2');
						$('#alertview').html('<p><b> Something Went Wrong</b></p>');
			        }

		        }
		     
		});	
}

function ajax_interview_view($idrp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIkingpinةbaثW  : "يةbhonchoeية",
				pro_id : idrp
			},
			dataType:"json",
			success: function(datas){
				$('.names').text(datas.pro_fname + " " + datas.pro_lname );
					if(datas.pro_total_marks >=60){
						$('.select_status').html('<button class="badge badge-success"><i class="fa fa-check fa-xs"></i> Selected</button>');
					}else{
						$('.select_status').html('<button class="badge badge-danger"><i class="fa fa-times-circle-o fa-xs"></i> De-Selected</button>');
					}
				$('.inter_date').text(datas.pro_date);
				$('.oral_marks').text(datas.pro_oral_marks + '%');
				$('.writ').text(datas.pro_written_marks + '%');
				$('.total_m').text(datas.pro_total_marks + '%');
				$('.remarks').text(datas.pro_remarks);
				$('#viewinterview').modal('show').fadeIn('fast');
			}
		});
}

function ajax_delete_int(idp_del){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBenaثWIB  : "يDEةbabasiDE",
				proid : idp_del
			},
			dataType:"json",
			success: function(datas){
				$('.name_inter').text(datas.pro_fname + " " + datas.pro_lname );
				$('#proeee_id').val(datas.pro_id);
				$('#delete_interview').modal('show').fadeIn('fast');
			}
		});
}

		function ajax_sms(id_prospect){

					$.ajax({
					url:'angenda/kingdom/alright',
					method:'POST',
					data:{
						xIBdomWIB  : "يDEةphpsiDE",
						pro_id : id_prospect
					},
					dataType:"json",
					success: function(writein){
						$('#sms_phone').val(writein['pro_phone']);
						$('#namep').text(writein['pro_fname'] + " " + writein['pro_lname']);
						$('#prospmessage').modal('show').fadeIn('fast');
					}
				});

		}

		function ajax_congrat_sms(proidsms){

					$.ajax({
					url:'angenda/kingdom/alright',
					method:'POST',
					data:{
						xIchurchmWIB  : "يDEةphGodpsiDE",
						pros_id : proidsms
					},
					dataType:"json",
					success: function(writein){
						$('#sms_congrat_phone').val(writein['pro_phone']);
						$('.name_p').text(writein['pro_fname'] + " " + writein['pro_lname']);
						$('#congratmessage').modal('show').fadeIn('fast');
					}
				});

		}

		function loading_before(){
        $('.inviteclass').block({
            message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 3000, //unblock after 2 seconds
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
	  
 }

 function sms_success(){
	$('#prospmessage').modal('hide').fadeIn('fast');
	$('#congratmessage').modal('hide').fadeIn('fast');
	
		swal({
		    title: "Message Sent !",
		    timer: 3000, 
		    icon: "success",
		    buttons: {
                confirm: {
                    value: '',
                    visible: true,
                    className: "",
                    closeModal: true
                }
		    }
		})
}

function sms_error(){
	$('#prospmessage').modal('hide').fadeIn('fast');
	$('#congratmessage').modal('hide').fadeIn('fast');
		swal({
		    title: "Message Failed",
		    icon: "error",
		    buttons: {
                confirm: {
                    value: '',
                    visible: true,
                    className: "",
                    closeModal: true
                }
		    }
		})
}


function ajax_invite_message(){
	p_phone_num = $('#sms_congrat_phone').val();
	congratmessage = $('#congratmessage').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xAثsmajaxsنانW  : "ثaناnewageaE",
				p_phone_num : p_phone_num,
				congratmessage : congratmessage
			},
			dataType:"json",
			beforeSend: function() {
	        	loading_before();                              
            },
            complete: function(){ 
            },
			success: function(data){
				if(data == 511) {
					sms_success();
				}else if(data == 115){
					sms_error();
				}else{
					alert('Something went wrong');
				}
				
			}
		});
}

function ajax_congrats_message(){
	phone_num = $('#sms_phone').val();
	smsmessage = $('#smsmessage').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xAثsmsنانW  : "AثaناmessageaE",
				phone_num : phone_num,
				smsmessage : smsmessage
			},
			dataType:"json",
			beforeSend: function() {
	        	loading_before();                              
            },
            complete: function(){ 
            },
			success: function(data){
				if(data == 465) {
					sms_success();
				}else if(data == 436){
					sms_error();
				}else{
					alert('Something went wrong');
				}
				
			}
		});
}

function ajax_final_delete(){
	getid = $('#proeee_id').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xAثاBagbaraaنانW  : "AثaناناBaنagabaE",
				proid : getid
			},
			dataType:"html",
			success: function(data){
				if(data == 152){
					$('#alertdeleteint').addClass('alert alert-success mb-2');
		        	$('#alertdeleteint').html('<p><b>Interview Deleted.</b></p>');
		        		setTimeout(function(){$("#delete_interview").modal("hide");location.reload()}, 200);
				}else{
					$('#alertdeleteint').addClass('alert alert-danger mb-2');
		        	$('#alertdeleteint').html('<p><b>Failed to Delete. Try Again Later</b></p>');
				}
			}
		});
}

function update(){
	toedit_check_oral_marks();
	toedit_check_written_marks();
		if(edit_ip_err == " " && edit_W_marks == " "){
				to_update_interview();
			}else{
				
			}
}

function interview(){
	$('#saveinterviewBtx').on('click',function(){
		to_check_oral_marks();
		to_check_written_marks();
			if(o_marks == " " && W_marks == " "){
				to_insert_interview();
			}else{
				
			}
	});

	ip_oral.on('keyup',function(){
	to_check_oral_marks();
	to_check_written_marks();
	});

	ip_write.on('keyup',function(){
		to_check_oral_marks();
		to_check_written_marks();
	});

	$(document).on('click', '.editinterview', function(){
		 	idrk = $(this).attr("id");
		 	ajax_int_edit(idrk);	// alert(idrk);
		});

	$(document).on('click', '.viewinter', function(){
		 	idrp = $(this).attr("id");
		 	ajax_interview_view(idrp);
		});

	$(document).on('click', '.messagepp', function(){
		 	id_prospect = $(this).attr("id");
		 	ajax_sms(id_prospect);
		});

	$('#invitenowBtx').on('click',function(){
		ajax_invite_message();
	});

	$('#congratnowBtx').on('click',function(){
		ajax_congrats_message();
	})

	$(document).on('click', '.congratsms', function(){
		 	proidsms = $(this).attr("id");
		 	// alert(proidsms);
		 	ajax_congrat_sms(proidsms);
		});

	$(document).on('click', '.deleteinter', function(){
	 		idp_del = $(this).attr("id");
	 		ajax_delete_int(idp_del);
		});

	$('#interBTXdelete').on('click', function(){
			ajax_final_delete();
		})

	$('#editinterviewBtx').on('click',update);

	epro_oral.on('keyup',function(){
	toedit_check_oral_marks();
	toedit_check_written_marks();
	});

	epro_write.on('keyup',function(){
	toedit_check_oral_marks();
	toedit_check_written_marks();
	});
}