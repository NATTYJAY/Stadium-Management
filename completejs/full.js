
$(document).ready(function(){
	 fname       = $('#first_name'); 
	 mname       = $('#middle_name');
	 lname       = $('#last_name');
	 deptp       = $('#crole');
	 occupet     = $('#crole1');
	 emailer      = $('#emailer');
	 password6   = $('#password6');
	 telo1       = $('.telo1');
	 submited    = $('#subit');
	 fname_error = $('#fname_error');
	 mname_error = $('#mname_error');
	 lname_error = $('#lname_error');
	 depterr     = $('#depterr');
	 joberr      = $('#joberr');
	 sex         = $('input[type="radio"]');
	 passfield   = $('.passfield');
	 datepicker  = $('.datepicker');
	 email_error5 = $('#email_error5');
	 telo1_e     = $('#telo1_e');
	 password_erro = $('#password_erro');
	 datepicker_erro = $('#datepicker_erro');
	 messag          = $('#messag');
	 messag1         = $('#messag1');
	 messag_erro	 = $('#add1');
	 messag_erro_1	 = $('#add2');
	 /*Send admin message*/
	 sendadmin     =$('#senta');
	 compose1		=$('#subject');

	 /*Business Data Instantiation Goes Here*/

	 b_upgrades = $('#b_upgrades');
	 duration_business = $('#dbus');
	 typeb			   = $('#typeb');
	 b_premsis			= $('#b_premsis');
	 business_location = $('#rp');
	 nature_of_bus 		=$('#nature_of_b');
	 number_of_staff   = $('#num_staff');
	 need_a_load       = $('#loanyes');
	 indepted          = $('#indebed');
	 name_of_organisation_indepted = $('#dp');
	 other_type_bus = $('#other_type_busi');

	 /*NAtural Groups Data */
	 natural_group  = $('#ng');
	 name_of_leader = $('#n_name');
	 Phone_number   = $('#p_naure');
	 comment        = $('#message');
	 HOD			= $('#HOD');
	 p_phone        = $('#p_phone');
	 hod_comment    = $('#coment');


	 /*Update Refreees Details Here Now*/

	 UpdateRefBTX   = $('#alliswell');

	 unatural_group  = $('#ung');
	 uname_of_leader = $('#un_name');
	 uPhone_number   = $('#up_naure');
	 ucomment        = $('#umessage');
	 uHOD			= $('#uHOD');
	 up_phone        = $('#up_phone');
	 uhod_comment    = $('#ucoment');

	 /*Update Business Details Here*/

	  /*Business Data Instantiation Goes Here*/

	 ub_upgrades = $('#ub_upgrades');
	 uduration_business = $('#udbus');
	 utypeb			   = $('#utypeb');
	 ub_premsis			= $('#ub_premsis');
	 ubusiness_location = $('#urp');
	 unature_of_bus 		=$('#unature_of_b');
	 unumber_of_staff   = $('#unum_staff');
	 uneed_a_load       = $('#uloanyes');
	 uindepted          = $('#uindebed');
	 uname_of_organisation_indepted = $('#udp');
	 uother_type_bus = $('#uother_type_busi');

	 /*FLags Goes Here..........*/

	 // ng_error = $('#ng_error');
	 // n_name_error = $('#n_name_error');
	 // p_naure_error = $('#p_naure_error');
	 // message_error = $('#message_error');
	 // HOD_error     = $('#HOD_error');
	 // p_phone_error = $('#p_phone_error');
	 // coment_error  = $('#coment_error');

	 successes = $('#aleted');
	 fef1 = fef = fef1u = fefu = " ";
	 compose1_write1 = compose1_write2 = compose1_write21 = compose1_write211 =   " "
	 fname_write1=lname_write1=mname_write1=depterr_write_o1=depterr_write1=datepicker_write_o1=password_write_o1=sex_write_o1=telo1_write1=email_write1=date_write_o1=" ";
		get_dept();	
	  	get_occupation();
	  	get_email();
		updated();
		loadmore();
		displayinfo();
		submitForm();
		businessData();
		refreedata();
		get_refrees();
		updaterefreedata();
		get_business();
		upbusinessData();
		getuser();

})		
			function val_name(valid_name){
					name_filter = /[^A-Za-z]/;
				if (name_filter.test(valid_name)){
					return 1;
				}else{
					return 0;
				}
			}
					function fname_val(){
							if(fname.val() == ""){
							cssObj1 = {'color' : '#F00', 'font-weight' : '5px'};
							fname_write1 = "First Name cannot be Blank";
							fname_error.html("<p>" +fname_write1 +"</p>");
							fname_error.css(cssObj1);
						}
						else if(fname.val() != ""){
							if(val_name(fname.val())){
							cssObj1 = {'color' : '#F00', 'font-weight' : '5px'};
							fname_write1 = "Only alpahabets please. No Space or characters"
							fname_error.html("<p>" +fname_write1 +"</p>");
							fname_error.css(cssObj1);
							}else{
							fname_write1 = " "
							fname_error.html("<p>" +fname_write1 +"</p>");
							}
						}

					}

				function mname_val(){
								if(mname.val() == ""){
							cssObj1 = {'color' : '#F00', 'font-weight' : '5px'};
							mname_write1 = "Middle Name cannot be Blank";
							mname_error.html("<p>" +mname_write1 +"</p>");
							mname_error.css(cssObj1);

							}
							else if(mname.val() != ""){
								if(val_name(mname.val())){
								cssObj1 = {'color' : '#F00', 'font-weight' : '5px'};
								mname_write1 = "Only alpahabets please. No Space or characters"
								mname_error.html("<p>" +mname_write1 +"</p>");
								mname_error.css(cssObj1);
								}else{
								mname_write1 = " "
								mname_error.html("<p>" +mname_write1 +"</p>");

								}
							}
						}

				function lname_val(){
								if(lname.val() == ""){
							cssObj1 = {'color' : '#F00', 'font-weight' : '5px'};
							lname_write1 = "Last Name cannot be Blank";
							lname_error.html("<p>" +lname_write1 +"</p>");
							lname_error.css(cssObj1);

							}
							else if(lname.val() != ""){
								if(val_name(lname.val())){
								lname_write1 = "Only alpahabets please. No Space or characters"
								lname_error.html("<p>" +lname_write1 +"</p>");
								}else{
								lname_write1 = " "
								lname_error.html("<p>" +lname_write1 +"</p>");
								}
							}
						} 

						

						function val_email(){
							if (emailer.val()==""){
								email_write1 = "Please provide your email address";
								email_error5.html("<p>"+email_write1+"</p>");
							}else if(emailer.val()){
								user_email5 = emailer.val();
								email_filter5 = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
								if(email_filter5.test(user_email5)){
									email_write1 = " ";
									email_error5.html("");
									
								}
								else{
									email_write1= "Invalid email address";
									email_error5.html("<p>"+email_write1+"</p>");
								}
							}
						}
				function dept_validate(){
						if (deptp.val()== "Choose Department"){
						depterr_write1 = "Please Choose Department";
						depterr.html("<p>"+depterr_write1+"</p>");
						depterr.css("color","#F00");
						}else if(deptp.val()!="Choose Department"){
								depterr_write1 = " ";
								depterr.html("<p>"+depterr_write1+"</p>");
						}
				}

		function validate_phone(){
			if (telo1.val() == ""){
				telo1_write1 = "Phone Number Field cannot be Blank"
				telo1_e.html("<p>" +telo1_write1 +"</p>");
			}else{
				telo1_phone = /[^0-9]+/.test(telo1.val());
				if (!telo1_phone){
					if (telo1.val().length<=8){
						telo1_write1 = "Number is too short"
						telo1_e.html("<p>" +telo1_write1 +"</p>");
					}else{
						telo1_write1 = " "
						telo1_e.html("<p>" +telo1_write1 +"</p>");
					}
				}else{
						telo1_write1 = "Only numbers is allowed"
						telo1_e.html("<p>" +telo1_write1 +"</p>");
					}
				}
		}

					function val_passing (){
						if (passfield.val()==""){
							password_write_o1 = "Please input password";
							password_erro.html("<p>"+password_write_o1+"</p>");
						}else if (passfield.val()){
							if ((passfield.val()).length<=5){
								password_write_o1 = "Password must be at least 6 characters";
								password_erro.html("<p>"+password_write_o1+"</p>");
							}else if ((passfield.val()).length>=5){
									password_write_o1 = " ";
									password_erro.html("");
							}
						}
					}




					function val_dob(){
						if (datepicker.val()==""){
							datepicker_write_o1 = "Please select your DOB";
							datepicker_erro.html("<p>"+datepicker_write_o1+"</p>");
						}else{
							datepicker_write_o1 = " ";
							datepicker_erro.html("<p>"+datepicker_write_o1+"</p>");
						}
					}

					function val_address1(){
						if (messag.val()==""){
							date_write_o1 = "Please provide your address";
							messag_erro.html("<p>"+date_write_o1+"</p>");
						}else{
							date_write_o1 = " ";
							messag_erro.html("<p>"+date_write_o1+"</p>");
						}
					}


					function otherstypebusiness(){
						if (other_type_bus.val()==""){
							fef = "Please indicate other type of business";
							$('#terror').html("<p>"+fef+"</p>");
						}else if(other_type_bus.val() != ""){
								fef = " ";
								$('#terror').html("<p>"+fef+"</p>");
							}
					}

					function indebtfunction(){
						if (name_of_organisation_indepted.val()==""){
							fef1 = "Please indicate the name of Organisation Indepted For Here";
							$('#indetnameerror').html("<p>"+fef1+"</p>");
						}else{
							fef1 = " ";
							$('#indetnameerror').html("<p>"+fef1+"</p>");
								
						}
					}

					function otherstypebusinessupdate(){
						if (uother_type_bus.val()==""){
							fefu = "Please indicate other type of business";
							$('#terror').html("<p>"+fefu+"</p>");
						}else if(uother_type_bus.val() != ""){
								fefu = " ";
								$('#terror').html("<p>"+fefu+"</p>");
							}
					}

						function indebtfunctionupdate(){
						if (uname_of_organisation_indepted.val()==""){
							fef1u = "Please indicate the name of Organisation Indepted For Here";
							$('#indetnameerroru').html("<p>"+fef1u+"</p>");
						}else{
							fef1u = " ";
							$('#indetnameerroru').html("<p>"+fef1u+"</p>");
								
						}
					}




				function occupation_validate(){
						if (occupet.val()== "Choose Occupation"){
						depterr_write_o1 = "Please Choose Occupation";
						joberr.html("<p>"+depterr_write_o1+"</p>");
						joberr.css("color","#F00");
						}else if(occupet.val()!="Choose Occupation"){
								depterr_write_o1 = " ";
								joberr.html("<p>"+depterr_write_o1+"</p>");
						}
				}

				function gender_validate(){
					m = $('input:radio[name=group1]:checked').val();
						if (m=== undefined){
						sex_write_o1 = "Please Select Gender";
						$('#immorality').html("<p>"+sex_write_o1+"</p>");
						$('#immorality').css("color","#F00");
						}else{
								sex_write_o1 = " ";
								$('#immorality').html("<p>"+sex_write_o1+"</p>");
						}
				}

					function ajax_function_update(){
							send_da = new FormData();
							send_da.append("ABa7deCDEbc567deCDE", "xIptOPDEbc567tSdWW");
							send_da.append("fname", fname.val());
							send_da.append("mname", mname.val());
							send_da.append("lname", lname.val());
							send_da.append("deptp", deptp.val());
							send_da.append("occupet", occupet.val());
							send_da.append("email5", emailer.val());
							send_da.append("password6", password6.val());
							send_da.append("telo1", telo1.val());
							send_da.append("sex", sex.val());
							send_da.append("datepicker", datepicker.val());
							send_da.append("messag", messag.val());
							send_da.append("messag1", messag1.val());
						 		$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: send_da,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(joeboy){
				                           			if(joeboy == 90){
				                           				successes.addClass('card green lighten-5');
										            	$('#textrea').addClass('card-content green-text').html(' <p>Data Updated Successfully !.</p>');
				                           			}else if(joeboy == 100){
				                           				successes.addClass('card red lighten-5');
										            	$('#textrea').addClass('card-content red-text').html(' <p>Data could not be updated</p>');
				                           			}else{
				                           				successes.addClass('card red lighten-5');
										            	$('#textrea').addClass('card-content red-text').html(' <p>Something went wrong</p>');
				                           			}
				                           		
				                      		}
				                });
					}
					function get_dept(){
						$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'fontw90EE90eight':'weight9fonts0EE90'},
							dataType:"Json",
					        success: function(data){
								deptp.empty();
								deptp.append("<option>Choose Department</option>");
								$.each(data.naso, function(){
									deptp.append("<option value='"+this['id']+"'>"+this['dname']+"</option>");
									
								})
					        }
							
						})
					}

					function get_allname(){
						$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'Bypraiparalyzedseyhstem':'morsongallthewaynause'},
							dataType:"Json",
					        success: function(data){
					        	uduration_business.val(data.b_duration);
					        	ub_premsis.val(data.b_premises);
					        	uother_type_bus.val(data.b_reg);
					        	ubusiness_location.val(data.b_location);
					        	unature_of_bus.val(data.b_nature);
					        	unumber_of_staff.val(data.numb_staff);
					        	uneed_a_load.val(data.loan);
					        	uname_of_organisation_indepted.val(data.organ_name);
					        }
							
						})
					}

					function get_occupation(){
							$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'fontw9ontw90EE90eight0EE90eight':'weight9foht9fonts0EE90nts0EE90'},
							dataType:"Json",
					        success: function(data){
								$('#crole1').empty();
								$('#crole1').append("<option>Choose Occupation</option>");
								$.each(data.rayberry, function(){
									$('#crole1').append("<option value='"+this['jobid']+"'>"+this['jobname']+"</option>");
									
								})
					        }
							
						})
					}

					function get_email(){
							$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'ByValsenderAsSystem':'moreefficitbecenause'},
							dataType:"Json",
					        success: function(data){
					        	emailer.val(data.use_email);
					        	password6.val(data.password);
					        }
							
						})
					}

					function ajax_occupation(){
						desi = $('#subdesc');
						$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'ByVaauSystem':'ficienause',
					        	   'job_name' : compose1.val(),
					        	   'job_desc' : desi.val()
					    		},
					        success: function(data){
					        	if(data==70){
		$('#card-alert1').addClass('card green lighten-5');
		$('#seen').addClass('card-content green-text').html(' <p><b>Request Sent!. Be patience while your occupation is verified</b></p>');
					        	}else if(data==77){
					        		$('#card-alert1').addClass('card #e53935 red darken-1');
		$('#seen').addClass('card-content white-text').html(' <p><b>Request Cannot be sent</b></p>');
					        	}
					        }
							
						})
					}

					function ajax_propose_skill(){

						desire = $('#composers');
						desirename = $('#composers2');
						$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'ByVaauS44eeystVaauSysem':'ficienao90oti8use',
					        	   'skill_name' : desirename.val(),
					        	   'skill_desc' : desire.val()
					    		},
					        success: function(data){
					        	if(data==710){
		$('#card-alertar').addClass('card green lighten-5');
		$('#kilr').addClass('card-content green-text').html(' <p><b>Request Sent!. Be patience while your Skill is verified</b></p>');
					        	}else if(data==717){
					        		$('#card-alertar').addClass('card #e53935 red darken-1');
		$('#kilr').addClass('card-content white-text').html(' <p><b>Request Cannot be sent</b></p>');
					        	}
					        }
							
						})

					}

					function addoccupation(){
						 if (compose1.val()== ""){
							 compose1_write1 = "Please provide Your requested Occupation";
							$('#immotality').html("<p>" +compose1_write1 +"</p>");
						    }else if(compose1.val() != ""){
								if(val_name(compose1.val())){
								compose1_write1 = "Only alpahabets please. No Space or characters"
								$('#immotality').html("<p>" +compose1_write1 +"</p>");
								}else{
								compose1_write1 = " "
								$('#immotality').html("<p>" +compose1_write1 +"</p>");
								}
							}
					}

					function addoccupationdesc1(){
						 if ($('#subdesc').val()== ""){
							 compose1_write2 = "Please provide description of the propose Occupation";
							$('#immotaliti').html("<p>" +compose1_write2 +"</p>");
						    }else if($('#subdesc').val() != ""){
								if(val_name($('#subdesc').val())){
								compose1_write2 = "Only alpahabets please. No Space or characters"
								$('#immotaliti').html("<p>" +compose1_write2 +"</p>");
								}else{
								compose1_write2 = " "
								$('#immotaliti').html("<p>" +compose1_write2 +"</p>");
								}
							}
					}

					

					function proposeskills(){
						 if ($('#composers').val()== ""){
							 compose1_write21 = "Please provide your propose Skills Here";
							$('#ski').html("<p>" +compose1_write21 +"</p>");
						    }else if($('#composers').val() != ""){
								if(val_name($('#composers').val())){
								compose1_write21 = "Only alpahabets please. No Space or characters"
								$('#ski').html("<p>" +compose1_write21 +"</p>");
								}else{
								compose1_write21 = " "
								$('#ski').html("<p>" +compose1_write21 +"</p>");
								}
							}
					}


					function proposeskillsD(){
						 if ($('#composers2').val()== ""){
							 compose1_write211 = "Please provide Skill Description";
							$('#ski2').html("<p>" +compose1_write211 +"</p>");
						    }else if($('#composers2').val() != ""){
								if(val_name($('#composers2').val())){
								compose1_write211 = "Only alpahabets please. No Space or characters"
								$('#ski2').html("<p>" +compose1_write211 +"</p>");
								}else{
								compose1_write211 = " "
								$('#ski2').html("<p>" +compose1_write211 +"</p>");
								}
							}
					}

				function updated(){
						fname.on("focusout",fname_val);
						mname.on("focusout",mname_val);
						lname.on("focusout",lname_val);
						deptp.on("focusout",dept_validate);
						occupet.on("focusout",occupation_validate);
						emailer.on("focusout",val_email);
						telo1.on("focusout",validate_phone);
						passfield.on("focusout",val_passing);
						datepicker.on("focusout",val_dob);
						messag.on("focusout",val_address1);
						submited.on('click', function(){
										fname_val();
										mname_val();
										lname_val();
										dept_validate();
										occupation_validate();
										gender_validate();
										val_email();
										validate_phone();
										val_passing ();
										val_dob();
										val_address1();
if(fname_write1== " " && mname_write1==" " && lname_write1 == " " && depterr_write_o1 == " " && email_write1 == " " && depterr_write1 ==  " " && datepicker_write_o1 == " " && password_write_o1 == " " && sex_write_o1 == " " && telo1_write1 == " " && date_write_o1 == " "){ 
											ajax_function_update();
										}
									})

						sendadmin.on('click', function(){
							addoccupation();
							addoccupationdesc1();
							
								if(compose1_write1 == " " && compose1_write2 == " "){
									ajax_occupation();
								}
						});
				}

		function loadmore(){
			 $(document).on('click', '#btn_more', function(){ 
           var last_id = $(this).data("vid");
           $('#btn_more').html("Loading...");
		           $.ajax({  
		                url:"../processall/processAnyPhp.php",  
		                method:"POST",  
		                data:{
		                	'fonight':'s0EE90',
		                	'last_video_id':last_id},  
		                dataType:"text",  
		                success:function(data)  
		                {  
		                     if(data != '')  
		                     {  
		                          $('#remove_row').remove();  
		                          $('#load_data_table').append(data);  
		                     }  
		                     else  
		                     {  
		                          $('#btn_more').html("No Data");  
		                     }  
		                }  
		           });  
      			});  
		}

		function displayinfo(){
			 $(document).on('click', '#getid', function(){ 
           var l_id = $(this).attr("data-vid");
           $('.email-titles').html("Loading...");
           			     $.ajax({  
		                url:"../processall/processAnyPhp.php",  
		                method:"POST",  
		                data:{
		                	'fonEE9EE9ight':'s09ightEE9ight90',
		                	'l_id':l_id},  
		                dataType:"text",  
		                success:function(data)  
		                {  
		                     if(data != '')  
		                     {  
		                           $('.email-titles').html(" "); 
		                          $('#email-details').html(data);  
		                     }  
		                     else  
		                     {  
		                          $('#btn_more').html("No Data");  
		                     }  
		                }  
		           }); 

           	});

		}


		function submitForm(){
						$("#btn_chk").on('click', function() {
							var myCheckboxes = new Array();
					        $("input:checked").each(function() {
					           myCheckboxes.push($(this).val());
					        });
					        
						        $.ajax({
						            type: "POST",
						            url: "../processall/processAnyPhp.php",
						            dataType: 'html',
						            data: { 'checkers' : myCheckboxes,
						            		'fonEopenEht':'s09ionEght90'},
						            success: function(data){
						                if(data==45){
						                	  var val = [];
											    $(':checkbox:checked').each(function(i){
											    $(this).attr({checked: 'checked',disabled: true});
											    $(this).hide();
											    });
											    $('#card-alert').addClass('card green lighten-5');
											    $('#pi').addClass('card-content green-text').html('<p><span class="email-title"><b>Skill successfully added.</b></span></p>');
											    setTimeout(function(){ $('#pi').removeClass('card-content green-text').html('') }, 2000);
						                }else if(data==79){
						                	 $('#card-alert').addClass('card red lighten-5');
											    $('#pi').addClass('card-content red-text').html('<p><span class="email-title"><b>Skill or Skills Already Choosen</b></span></p>');
											    setTimeout(function(){ $('#pi').removeClass('card-content green-text').html('') }, 3000);
						                }
						            }
						        });
						      
						});

							$('#proposebtn').on('click',function(){
									proposeskills();
									proposeskillsD();
								if(compose1_write21 == " " && compose1_write211 == " "){
									ajax_propose_skill();
								}
							})
				
		}	

		function businessData(){

				function ajax_business(){
						businessdatasend = new FormData();
							businessdatasend.append("ABr4ffhr4CDE", "pt78y11qweW");
							businessdatasend.append("b_upgrades", b_upgrades.val());
							businessdatasend.append("duration_business", duration_business.val());
							businessdatasend.append("typeb", typeb.val());
							businessdatasend.append("b_premsis", b_premsis.val());
							businessdatasend.append("business_location", business_location.val());
							businessdatasend.append("nature_of_bus", nature_of_bus.val());
							businessdatasend.append("number_of_staff", number_of_staff.val());
							businessdatasend.append("need_a_load", need_a_load.val());
							businessdatasend.append("indepted", indepted.val());
							businessdatasend.append("name_of_organisation_indepted", name_of_organisation_indepted.val());
							businessdatasend.append("other_type_bus", other_type_bus.val());

								$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: businessdatasend,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(dt){
				                           		 	if(dt == 178){
					                           		 $('#card-alerted').addClass('card green lighten-5');
					                           		 $('#pikeupted').addClass('card-content green-text').html('<p><span class="email-title"><b>Data successfully added.</b></span></p>');
												    setTimeout(function(){ $('#pikeupted').removeClass('card-content green-text').html('') }, 2000);
					                           	}else{
												    $('#card-alerted').addClass('card red lighten-5');
					                           		 $('#pikeupted').addClass('card-content red-text').html('<p><span class="email-title"><b>Data Could not be added.</b></span></p>');
												    setTimeout(function(){ $('#pikeupted').removeClass('card-content red-text').html('') }, 2000);
					                           
					                      		}
				                      		}
				                });
				}

			 $(document).on('click', '#btn_more_business', function(){ 
			 	 if(typeb.val() == 'Others'){
							$('#b_specify').removeAttr('hidden');
							other_type_bus.focus();
							otherstypebusiness();
							}else{
								$('#b_specify').attr('hidden','hidden');
							}
				if(indepted.val() == 'Yes'){
								$('#nameOrgan').removeAttr('hidden');
								name_of_organisation_indepted.focus();
								indebtfunction();
							}else{
								$('#nameOrgan').attr('hidden','hidden');
							}
			 		if(fef == " " && fef1 == " "){ 
							ajax_business();
					}
				});

			}

		function refreedata(){

			 $(document).on('click', '#peacebewithyou', function(){ 

							refreedatasend = new FormData();
							refreedatasend.append("ABr4f8y11qwfhr4ocatiCDE", "pt78wfhationr4CDEeW");
							refreedatasend.append("natural_group", natural_group.val());
							refreedatasend.append("name_of_leader", name_of_leader.val());
							refreedatasend.append("Phone_number", Phone_number.val());
							refreedatasend.append("comment", comment.val());
							refreedatasend.append("HOD", HOD.val());
							refreedatasend.append("p_phone", p_phone.val());
							refreedatasend.append("hod_comment", hod_comment.val());
								$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: refreedatasend,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(dydx){

					                           	if(dydx == 93){
					                           		 $('#card-alert21').addClass('card green lighten-5');
					                           		 $('#pike').addClass('card-content green-text').html('<p><span class="email-title"><b>Data successfully added.</b></span></p>');
												    setTimeout(function(){ $('#pike').removeClass('card-content green-text').html('') }, 2000);
					                           	}else{
												    $('#card-alert21').addClass('card red lighten-5');
					                           		 $('#pike').addClass('card-content red-text').html('<p><span class="email-title"><b>Data Cannot be added.</b></span></p>');
												    setTimeout(function(){ $('#pike').removeClass('card-content red-text').html('') }, 2000);
					                           
					                      		}
				                           	}
				                });

			 });



		}


			function get_refrees(){
				 // UpdateRefBTX   = $('#alliswell');
							$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'ByVayyyhstem':'mor56hhnause'},
							dataType:"Json",
					        success: function(data){
					        	unatural_group.val(data.natural_group);
					        	uname_of_leader.val(data.name_leader);
					        	uPhone_number.val(data.nature_phone);
					        	ucomment.val(data.nature_comment);
					        	uHOD.val(data.hod);
					        	up_phone.val(data.hod_phone);
					        	uhod_comment.val(data.hod_comment);
					        }
							
						})
			}


			function get_business(){
				 // UpdateRefBTX   = $('#alliswell');

							$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'Bypraiseyhstem':'morsongnause'},
							dataType:"Json",
					        success: function(data){
					        	uduration_business.val(data.b_duration);
					        	ub_premsis.val(data.b_premises);
					        	uother_type_bus.val(data.b_reg);
					        	ubusiness_location.val(data.b_location);
					        	unature_of_bus.val(data.b_nature);
					        	unumber_of_staff.val(data.numb_staff);
					        	uneed_a_load.val(data.loan);
					        	uname_of_organisation_indepted.val(data.organ_name);
					        }
							
						})
			}

			function getuser(){
				 // UpdateRefBTX   = $('#alliswell');

							$.ajax({
					    	url: '../processall/processAnyPhp.php',
							type: 'POST',
					        data:{'Byphstem':'morsause'},
							dataType:"Json",
					        success: function(data){
					        	fname.val(data.fname);
					        	lname.val(data.lname);
					        	mname.val(data.middle);
					        	telo1.val(data.phone);
					        	emailer.val(data.email);
					        	sex.val(data.gender);
					        	datepicker.val(data.dob);
					        }
							
						})
			}

			function updaterefreedata(){

			 $(document).on('click', '#alliswell', function(){ 
							refreedatasend = new FormData();
							refreedatasend.append("ABr4f8y1atiCDE", "pt78wfhatCDEeW");
							refreedatasend.append("natural_group", unatural_group.val());
							refreedatasend.append("name_of_leader", uname_of_leader.val());
							refreedatasend.append("Phone_number", uPhone_number.val());
							refreedatasend.append("comment", ucomment.val());
							refreedatasend.append("HOD", uHOD.val());
							refreedatasend.append("p_phone", up_phone.val());
							refreedatasend.append("hod_comment", uhod_comment.val());
								$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: refreedatasend,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(dydx){

					                           	if(dydx == 921){
					                           		 $('#card-alert21r').addClass('card green lighten-5');
					                           		 $('#piker').addClass('card-content green-text').html('<p><span class="email-title"><b>Data Updated successfully added.</b></span></p>');
												    setTimeout(function(){ $('#piker').removeClass('card-content green-text').html('') }, 2000);
					                           	}else{
												    $('#card-alert21r').addClass('card red lighten-5');
					                           		 $('#piker').addClass('card-content red-text').html('<p><span class="email-title"><b>Data Could not be Updated.</b></span></p>');
												    setTimeout(function(){ $('#piker').removeClass('card-content red-text').html('') }, 2000);
					                           
					                      		}
				                           	}
				                });

			 });

		}

		function upbusinessData(){

				function ajax_businessu(){
						businessdatasend = new FormData();
							businessdatasend.append("ABr4ffhr4Cr4CDE", "pt78y11qw8y11eW");
							businessdatasend.append("b_upgrades", ub_upgrades.val());
							businessdatasend.append("duration_business", uduration_business.val());
							businessdatasend.append("typeb", utypeb.val());
							businessdatasend.append("b_premsis", ub_premsis.val());
							businessdatasend.append("business_location", ubusiness_location.val());
							businessdatasend.append("nature_of_bus", unature_of_bus.val());
							businessdatasend.append("number_of_staff", unumber_of_staff.val());
							businessdatasend.append("need_a_load", uneed_a_load.val());
							businessdatasend.append("indepted", uindepted.val());
							businessdatasend.append("name_of_organisation_indepted", uname_of_organisation_indepted.val());
							businessdatasend.append("other_type_bus", uother_type_bus.val());

								$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: businessdatasend,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(dt){
				                           		 	if(dt == 117){
					                           		 $('#card-alertup').addClass('card green lighten-5');
					                           		 $('#pikeup').addClass('card-content green-text').html('<p><span class="email-title"><b>Data Updated successfully.</b></span></p>');
												    setTimeout(function(){ $('#pikeup').removeClass('card-content green-text').html('') }, 3000);
					                           	}else{
												    $('#card-alertup').addClass('card red lighten-5');
					                           		 $('#pikeup').addClass('card-content red-text').html('<p><span class="email-title"><b>Data Could not be Updated.</b></span></p>');
												    setTimeout(function(){ $('#pikeup').removeClass('card-content red-text').html('') }, 3000);
					                           
					                      		}
				                      		}
				                });
				}

				utypeb.on('change',function(){
					$('#ub_specify').removeAttr('hidden');
					uother_type_bus.focus();
				})

				uindepted.on('change',function(){
					$('#unameOrgan').removeAttr('hidden');
					uname_of_organisation_indepted.focus();

				})
			 $(document).on('click', '#ubtn_more_business', function(){ 

			 	 if(utypeb.val() == 'Others'){
							otherstypebusinessupdate();
							}else{
								$('#ub_specify').attr('hidden','hidden');
							}
				if(uindepted.val() == 'Yes'){
								indebtfunctionupdate();
							}else{
								$('#unameOrgan').attr('hidden','hidden');
							}
			 		if(fefu == " " && fef1u == " "){ 
							ajax_businessu();
							
					}
				});

			}

		

// var hue = 'rgb('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+')';

				// $('body').css("background",hue);



