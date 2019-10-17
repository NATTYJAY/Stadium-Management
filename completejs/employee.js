$(document).ready(function(){
	/*Intialization of variable or parameters. or Anything you wan call am*/

	e_degree = $('#e_degree');
	e_institute = $('#e_institute');
	e_result    = $('#e_result');
	e_gyear     = $('#e_gyear');

	filers = $('.inputFile');

	fileimage  = $('#updateImageemp');

	e_fname = $('#e_fname');
	e_lname = $('#e_lname');
	e_email = $('#e_email');
	e_phone = $('#e_phone');

	rateBTX = $('#rateBTX');
	
	employee_department = $('#employee_department');
	employee_unit = $('#employee_unit');
	employee_salary = $('#employee_salary');
	employee_date   = $('#employee_date');

	per_employee = $('#per_employee');
	per_date = $('#per_date');
	per_comments = $('#per_comments');
	star2_input = $('#star2_input');
	star3_input = $('#star3_input');
	star4_input = $('.str4');
	employee_add();
	raterating();
});


function showPreviewadd(objFileInput) {
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $("#targetLayer13").html('<img src="'+e.target.result+'" width="160px" height="100px" class="upload-preview" />');
			$("#targetLayer13").css('opacity','0.9');
			$(".icon-choose-image13").css('opacity','0.5');
        }
		fileReader.readAsDataURL(objFileInput.files[0]);
    }
}

function showPreupdate(objFileInput) {
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $(".targetLayer172").html('<img src="'+e.target.result+'" width="160px" height="100px" class="upload-preview" />');
			$(".targetLayer172").css('opacity','0.9');
			$(".icon-choose-image12").css('opacity','0.5');
        }
		fileReader.readAsDataURL(objFileInput.files[0]);
    }
}
	function get(){
 var maxGroup = 4;
    $("#addmore").click(function(){
        if($('body').find('.fieldGroup').length < maxGroup){
            var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupc").html()+'</div>';
            $('body').find('.fieldGroup:last').after(fieldHTML);
        }else{
            alert('Maximum '+maxGroup+' groups are allowed.');
        }
    });

      $(".addwork").click(function(){
        if($('body').find('.fieldGroup1').length < maxGroup){
            var fieldHTML = '<div class="form-group fieldGroup1">'+$(".fieldGroupc1").html()+'</div>';
            $('body').find('.fieldGroup1:last').after(fieldHTML);
        }else{
            alert('Maximum '+maxGroup+' groups are allowed.');
        }
    });

    
   }  

   	function ajax_employee(){
   		var e_com = [];
   		var e_period = [];
   		var e_unit = [];
   		var e_manager    = [];
   		/* Working Experience Ends*/
   		var e_de = [];
   		var e_ins = [];
   		var e_result = [];
   		var e_gra    = [];
	        $('.e_degreess').each(function() {
	           e_de.push($(this).val());
	        });

	        $('.e_ins').each(function() {
	           e_ins.push($(this).val());
	        });
	        $('.e_result').each(function() {
	           e_result.push($(this).val());
	        });
	        $('.e_gra').each(function() {
	           e_gra.push($(this).val());
	        });

	        /*Employee working*/
	        $('.e_com').each(function() {
	           e_com.push($(this).val());
	        });

	        $('.e_work').each(function() {
	           e_period.push($(this).val());
	        });

	         $('.e_unit').each(function() {
	           e_unit.push($(this).val());
	        });

	          $('.e_man').each(function() {
	           e_manager.push($(this).val());
	        });

	        e_com.pop();
	        e_period.pop();
	        e_unit.pop();
	        e_manager.pop();

	        e_company = JSON.stringify(e_com);
	        e_periodw = JSON.stringify(e_period);
	        e_position = JSON.stringify(e_unit);
	        e_supervisor = JSON.stringify(e_manager);

	          /*Employee Working Ends*/

	        e_de.pop();
	        e_ins.pop();
	        e_result.pop();
	        e_gra.pop();
	        e_degrees = JSON.stringify(e_de);
	        e_inst = JSON.stringify(e_ins);
	        e_results = JSON.stringify(e_result);
	        e_grading = JSON.stringify(e_gra);
	        
		send_data = new FormData();
		send_data.append("xIB26W", "a12ثu8اDE");
		send_data.append("e_degree",e_degrees);
		send_data.append("e_institute", e_inst);
		send_data.append("e_result", e_results);
		send_data.append("e_gyear", e_grading);

		send_data.append("e_companies",e_company);
		send_data.append("e_periods", e_periodw);
		send_data.append("e_positions", e_position);
		send_data.append("e_supervisors", e_supervisor);

		send_data.append("img", filers[0].files[0]);
		send_data.append("e_fname", e_fname.val());
		send_data.append("e_lname", e_lname.val());
		send_data.append("e_email", e_email.val()); 
		send_data.append("e_phone", e_phone.val());
		send_data.append("employee_department", employee_department.val());
		send_data.append("employee_unit", employee_unit.val());
		send_data.append("employee_salary", employee_salary.val());
		send_data.append("employee_date", employee_date.val());
			$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "Json", 
		        
		        success: function(data){
		        	//console.log(data);
		        	if(data == 212){
		        		$('#alertemployee').addClass('alert alert-success mb-2');
		        		$('#alertemployee').html('<p><b>Employee Added Successfully.</b></p>');
		        		setTimeout(function(){$("#employeemodal").modal("hide");location.reload();}, 1000);
		        	}else if(data == 3012){
		        		$('#alertemployee').addClass('alert alert-danger mb-2');
		        		$('#alertemployee').html('<p><b>Employee Already Added</b></p>');
		        	}else if(data == 8987){
		        		$('#alertemployee').addClass('alert alert-danger mb-2');
		        		$('#alertemployee').html('<p><b>Employee Cannot be Added</b></p>');
		        	}else{
		        		$('#alertemployee').addClass('alert alert-danger mb-2');
		        		$('#alertemployee').html('<p><b>Something Went Wrong</b></p>');
		        	}
		        
		        }
		});			
}

function ajax_education_edit(id){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				cةbثblueaثW  : "يةةيةةةةةةةةةةةةة",
				_id : id
			},
			dataType:"json",
			success: function(datas){
				$('#emp_edit_fname').val(datas['emp_fname']);
				$('#emp_edit_lname').val(datas['emp_lname']);
				$('#emp_edit_email').val(datas['emp_email']);
				$('#emp_edit_phone').val(datas['emp_phone']);
				$('#emp_edit_id').val(datas['emp_id']);
				$('#emp_edit_salary').val(datas['emp_basic_salary']);
				$('#emp_edit_idrr').val(datas['emp_id']); 
				$('#emp_edit_dateemployed').val(datas['emp_employ_date']);
				$('.targetLayer172').html('<img src="./passports/'+datas['emp_image']+'" width="160px" height="100px" class="upload-preview" />');;
				$('#updatemployeemodal').modal('show').fadeIn('fast');
			}
		});
}

function update_employee_success(){
	$('#updatemployeemodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Employee Details Updated",
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

function employee_update_error(){
	$('#updatemployeemodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Cannot update",
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


	function ajax_education_info_edit(){
					send_data = new FormData();
					send_data.append("buثثuoh", "a12ثثث8اp0E");
					send_data.append("emp_edit_fname", $('#emp_edit_fname').val());
					send_data.append("emp_edit_lname", $('#emp_edit_lname').val());
					send_data.append("emp_edit_email", $('#emp_edit_email').val());
					send_data.append("emp_edit_phone", $('#emp_edit_phone').val()); 
					send_data.append("emp_edit_id",    $('#emp_edit_id').val());
					send_data.append("emp_edit_salary", $('#emp_edit_salary').val());
					send_data.append("emp_edit_dateemployed", $('#emp_edit_dateemployed').val());
						$.ajax({
					        url: 'angenda/kingdom/alright',
					        type: 'POST',
					        data: send_data,
					        processData: false,
					        contentType: false,
					        cache:false,
					        dataType : "html",
					        success: function(data){
					        	if(data == 6799 ){
				        		update_employee_success();
								setTimeout(function(){location.reload()}, 200);
				        	    }else{
				        			employee_update_error();
				        	    }
					        }
					});			
			}

			function ajax_employee_edit(ip){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xebezinaثW  : "يةbsplighteية",
				emp_id : ip
			},
			dataType:"json",
			success: function(data){
				$("#kiemp").empty();
				$.each(data,function(){
                    var yeahman = ' <div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Degree Title</h5></label>' +
                                                '<input type="text" value = "'+this.emp_degree+'" class="form-control up_degree_emp">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_institution+'" class="form-control up_Institution_emp">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_result"> <h5><i class="fa fa-arrow-down"></i>Result</h5></label>' +
                                                '<input type="text" value = "'+this.emp_result+'" class="form-control up_result_emp">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_year"> <h5><i class="fa fa-arrow-down"></i>Year Graduated</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_passed_yr+'" class="form-control up_year_emp">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class = "row" hidden = "hidden" >'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_edu"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_edu_id+'" class="form-control up_edu_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>' +

                                                   '<div class = "row" hidden = "hidden" >'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_emp"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_id+'" class="form-control up_empid">'+
                                                        '</fieldset>'+
                                                  '</div></div>';
            		$("#kiemp").append(yeahman);

            	});
            	 $('#updatemployeemodal').modal('show').fadeIn('fast');


			}
		});
}


function emp_edu_update(){

		var rdegree = [];
		var rins = [];
		var rresult = [];
		var ryr = [];
		var redu_id = [];
		var rempid = [];

	    
	        $('.up_degree_emp').each(function() {
	           rdegree.push($(this).val());
	        });

	        $('.up_Institution_emp').each(function() {
	           rins.push($(this).val());
	        });

	         $('.up_result_emp').each(function() {
	           rresult.push($(this).val());
	        });

	          $('.up_year_emp').each(function() {
	           ryr.push($(this).val());
	        }); 

	           $('.up_edu_id').each(function() {
	           redu_id.push($(this).val());
	        });

	            $('.up_empid').each(function() {
	           rempid.push($(this).val());
	        });
	           
	        e_degre = JSON.stringify(rdegree);
	        e_insti = JSON.stringify(rins);
	        e_rest  = JSON.stringify(rresult);
	        e_yr    = JSON.stringify(ryr);
	        edu_qid   = JSON.stringify(redu_id);
	        eid   = JSON.stringify(rempid);

			send_data = new FormData();
			send_data.append("x0olgduiivepW", "ثثثyuثث8اDE");
			send_data.append("e_degrer",e_degre);
			send_data.append("e_instir", e_insti);
			send_data.append("e_restr", e_rest);
			send_data.append("e_yrr", e_yr);
			send_data.append("edu_id", edu_qid);
			send_data.append("eid", eid);

	
					$.ajax({
				        url: 'angenda/kingdom/alright',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				        dataType : "json",
				        success: function(data){
				        	if(data == 7186 ){
				        		 update_employee_success();
						setTimeout(function(){location.reload()}, 200);
				        	}else{
				        			employee_update_error();
				        	}
				        }
				});			
		}

		function ajax_work_emp_edit(id){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				giveupidaybaثW  : "يةbworkolhoeية",
				emp_id : id
			},
			dataType:"json",
			success: function(data){
				$("#wrkemp").empty();
				$.each(data,function(){
                    var will = ' <div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Company Name</h5></label>' +
                                                '<input type="text" value = "'+this.emp_company+'" class="form-control upcmpnyemp">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Working Period</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_work_period+'" class="form-control upwrkemp">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Position</h5></label>' +
                                                '<input type="text" value = "'+this.emp_position+'" class="form-control uppositionemp">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Name Of Manager</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_supervisor+'" class="form-control upsupervisoremp">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class = "row" hidden="hidden" >'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>id</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_work_id+'" class="form-control wrk_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>' +

                                                   '<div class = "row" hidden="hidden" >'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.emp_id+'" class="form-control emp_idp">'+
                                                        '</fieldset>'+
                                                  '</div></div>';
            		$("#wrkemp").append(will);

            	});
            	 $('#updatemployeemodal').modal('show').fadeIn('fast');


			}
		});
}


function emp_wrk_update(){

		var com = [];
		var workin = [];
		var posi = [];
		var superv = [];
		var wrkin_id = [];
		var e_emp_id = [];

	    
	        $('.upcmpnyemp').each(function() {
	           com.push($(this).val());
	        });

	        $('.upwrkemp').each(function() {
	           workin.push($(this).val());
	        });

	         $('.uppositionemp').each(function() {
	           posi.push($(this).val());
	        });

	          $('.upsupervisoremp').each(function() {
	           superv.push($(this).val());
	        }); 

	           $('.wrk_id').each(function() {
	           wrkin_id.push($(this).val());
	        });

	            $('.emp_idp').each(function() {
	           e_emp_id.push($(this).val());
	        });
	           
	        e_comr = JSON.stringify(com);
	        e_workin = JSON.stringify(workin);
	        e_posi  = JSON.stringify(posi);
	        e_superv    = JSON.stringify(superv);
	        e_wrkin_id  = JSON.stringify(wrkin_id);
	        e_empp_id   = JSON.stringify(e_emp_id);

			send_data = new FormData();
			send_data.append("eheheiivepW", "ثثثyuثثiyanuE");
			send_data.append("e_comr",e_comr);
			send_data.append("e_workin", e_workin);
			send_data.append("e_posi", e_posi);
			send_data.append("e_superv", e_superv);
			send_data.append("e_wrkin_id", e_wrkin_id);
			send_data.append("e_empp_id", e_empp_id);

	
					$.ajax({
				        url: 'angenda/kingdom/alright',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				        dataType : "json",
				        success: function(data){
				        	//console.log(data);
				        	if(data == 7146 ){
				        		 update_employee_success();
						setTimeout(function(){location.reload()}, 200);
				        	}else{
				        			employee_update_error();
				        	}
				        }
				});			
		}


			function ajax_update_images(){
				send_data = new FormData();
				send_data.append("movingimage", "aثثruثثleE");
				send_data.append("img", fileimage[0].files[0]);
				send_data.append("emp_edit_idrr",$('#emp_edit_idrr').val()); 
				$.ajax({
					        url: 'angenda/kingdom/alright',
					        type: 'POST',
					        data: send_data,
					        processData: false,
					        contentType: false,
					        cache:false,
					        dataType : "html",
					        success: function(data){
					        	if(data == 6751 ){
						        	update_employee_success();
									setTimeout(function(){location.reload()}, 200);
				        	    }else{
				        			employee_update_error();
				        	    }
					        }
					});	

			}

			function ajax_del_employee(id){
					$.ajax({
						url:'angenda/kingdom/alright',
						method:'POST',
						data:{
							sccةhelpmelثW  : "يةbopemployeegoeية",
							emid : id
						},
						dataType:"json",
						success: function(datas){
							$('#employees_name').text(datas['emp_fname']+" " + datas['emp_lname']);
							$('#empu_id').val(datas['emp_id']);
							$('#deleteemployee').modal('show').fadeIn('fast');
						}
					});
			}


function ajax_final_employee_delete(){
	empu_id = $('#empu_id').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xkillsh6انW  : "AثaناناdmyusicBaنE",
				empu_id : empu_id
			},
			dataType:"html",
			success: function(data){ 
			
				if(data == 1537){
					$('#deletemployeealert').addClass('alert alert-success mb-2');
		        	$('#deletemployeealert').html('<p><b>Employee Deleted.</b></p>');
		        		setTimeout(function(){$("#deleteemployee").modal("hide");location.reload();faint();}, 200);
				}else{
					$('#deletemployeealert').addClass('alert alert-danger mb-2');
		        	$('#deletemployeealert').html('<p><b>Failed to Delete. Try Again Later</b></p>');
				}
			}
		});
}

		function ajax_query(query){
					$.ajax({
					url:'angenda/kingdom/alright',
					method:'POST',
					data:{
						xIemployeemWIB  : "idodpsiDE",
						emp_id : query
					},
					dataType:"Json",
					success: function(dd){
						$('#emp_id').val(dd['emp_id']);
						$('.query_name').text(dd['emp_fname']+" "+dd['emp_lname']);
						$('#querymessagemodal').modal('show').fadeIn('fast');
					}
				});
		}

		function ajax_query_message(){
	     id = $('#emp_id').val();
	query_message = $('#query_message').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				servingnpeople  : "servinggod",
				id : id,
				query_message : query_message
			},
			dataType:"html",
			
			success: function(data){
				if(data == 4178) {
					$('.queryalert').addClass('alert alert-success mb-2');
		        	$('.queryalert').html('<p><b>Query sent !.</b></p>');
		        		setTimeout(function(){$("#querymessagemodal").modal("hide");location.reload();faint();}, 500);
				}else if(data == 7831){
					$('.queryalert').addClass('alert alert-danger mb-2');
		        	$('.queryalert').html('<p><b>Query Could not be Sent !.</b></p>');
				}else{
					alert('Something went wrong');
				}
				
			}
		});
}


function employee_add(){
	$("#userI").change(function () {
    showPreviewadd(this);
	});
	get();
	 $(document).on("click",".remove",function(){ 
        $(this).parents(".fieldGroup").remove();
    });
	 $(document).on("click",".remove2",function(){ 
        $(this).parents(".fieldGroup1").remove();
    });
	 $('#addEmp').on('click',function(){
	 	ajax_employee();

	 })

	  $(document).on("click",".updateemp",function(){ 
	 	id = $(this).attr("id");
	 	ajax_education_edit(id);
	 	ajax_employee_edit(id);
	 	ajax_work_emp_edit(id);
    }); 

	  $('#empinfoBtxedit').on('click',function(){
	  		ajax_education_info_edit();
	  });

	  $('#btx_emp_edit').on('click',function(){
	  	emp_edu_update();
	  });

	  $('#foolemp').on('click',function(){
	  	emp_wrk_update();
	  });

	  $("#updateImageemp").change(function () {
	    showPreupdate(this);
		});
	  $('#foolimageemp').on('click',function(){
	 	ajax_update_images();
	 });

	   $(document).on("click",".deleteemp",function(){ 
	 	empid = $(this).attr("id");
	 	ajax_del_employee(empid);
    	});

	   $('#employeeBTXdelete').on('click',function(){
	 	ajax_final_employee_delete();
	 });

	   $(document).on('click', '.userquery', function(){
		 	query = $(this).attr("id");
		 ajax_query(query);
		 	// ajax_congrat_sms(query);
		});

	   $('#queryBtx').on('click',function(){
	   	ajax_query_message();
	   })
}

		function ajax_rateNow(){
              
	     var star11 = parseInt(star2_input.val());
	     var star21 = parseInt(star3_input.val());
	     var star31 = parseInt(star4_input.val());
		total = (star11 + star21 + star31)/3;
		total_rate = Math.round(parseInt(total));

			send_data = new FormData();
		send_data.append("xIB2light6W", "a12ثwolrdfu8اDE");
		send_data.append("star2_input",star2_input.val());
		send_data.append("star3_input",star3_input.val());
		send_data.append("star4_input", star4_input.val());
		send_data.append("per_employee",per_employee.val());
		send_data.append("per_date",per_date.val() );
		send_data.append("per_comments", per_comments.val());
		send_data.append("total_rate", total_rate);
			$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html",
		        
		        beforeSend: function() {
		        	// faint();                              
	            },
	            complete: function(){ 
	            },
		        success: function(data){
		        	if(data == 212){
		        		$('#start4hide').removeAttr('hidden');
		        		$('#start3hide').removeAttr('hidden',true);
		        		$('#start2hide').removeAttr('hidden',true);
		        		$('#ratealert').addClass('alert alert-danger mb-2');
		        		 $('#ratealert').html('<p><b>Employee Already Rated.</b></p>');
		        		
		        	}else if(data == 213){
		        		$('#ratealert').addClass('alert alert-success mb-2');
		        		$('#ratealert').html('<p><b>Employee Rated Successfully.</b></p>');
		        		setTimeout(function(){$("#ratealert").modal("hide");location.reload();}, 300);
		        	
		        	}else if(data == 214){
		        		$('#ratealert').addClass('alert alert-danger mb-2');
		        		$('#ratealert').html('<p><b>Cannot Rate Employee.</b></p>');
		        	}else{
		        		$('#ratealert').addClass('alert alert-danger mb-2');
		        		$('#ratealert').html('<p><b>Something Went Wrong.</b></p>');
		        	}		        
		        }
		});		
			
		}


		function ajax_change_rating(rate_id,emp_id){
			$.ajax({
					url:'angenda/kingdom/alright',
					method:'POST',
					data:{
						mulitplicity: "letitwork",
						rate_id : rate_id,
						emp_id : emp_id
					},
					dataType:"Json",
					success: function(datas){
						$('#emp_pname').val(datas.emp_fname+" "+" "+ datas.emp_lname);
						$('#change_comments').val(datas.remark);
						$('#star5_input').val(datas.communication);
						$('#star6_input').val(datas.creativity);
						$('#star7_input').val(datas.performance);
						$('#rateid').val(datas.emp_perform_id);
						$('#empid').val(datas.emp_id);
						$('#changeperformacemodal').modal('show').fadeIn('fast');
					}
				});
		}


		function ajax_eidt_rateNow(){
              
	     var starc = parseInt($('#star5_input').val());
	     var starp = parseInt($('#star6_input').val());
	     var starf = parseInt($('#star7_input').val());
		totalp = (starc + starp + starf)/3;
		total_rate_edit = Math.round(parseInt(totalp));

			send_data = new FormData();
		send_data.append("ratelight6W", "alrdfDE");
		send_data.append("star5_input",$('#star5_input').val());
		send_data.append("star6_input",$('#star6_input').val());
		send_data.append("star7_input",$('#star7_input').val());
		send_data.append("empid",$('#empid').val());
		send_data.append("rateid",$('#rateid').val());
		send_data.append("change_comments", $('#change_comments').val());
		send_data.append("total_rate_edit", total_rate_edit);
			$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html",
		        
		        beforeSend: function() {
		        	// faint();                              
	            },
	            complete: function(){ 
	            },
		        success: function(data){
		        	if(data == 936){
		        		$('#rateedit').addClass('alert alert-success mb-2');
		        		$('#rateedit').html('<p><b>Upgraded !.</b></p>');
		        		// $('#rateform').trigger('reset');
		        		setTimeout(function(){$("#changeperformacemodal").modal("hide");location.reload();}, 5000);
		        	
		        	}else if(data == 268){
		        		$('#rateedit').addClass('alert alert-danger mb-2');
		        		$('#rateedit').html('<p><b>Cannot Upgrade Employee.</b></p>');
		        	}else{
		        		$('#rateedit').addClass('alert alert-danger mb-2');
		        		$('#rateedit').html('<p><b>Something Went Wrong.</b></p>');
		        	}		        
		        }
		});		
			
		}

		function raterating(){
			$('#star4').on('click',function(){
				$('#start4hide').attr('hidden',true);
				$('.perform').text('Performance Rated');
				
			});
			$('#star3').on('click',function(){
				$('#start3hide').attr('hidden',true);
				$('.pun').text('Puntuality Rated');
				$('.perform').attr('hidden',true);
			});
			$('#star2').on('click',function(){
				$('#start2hide').attr('hidden',true);
				$('.communicate').text('Communication Rated');
				$('.pun').attr('hidden',true);
				setTimeout(function(){$('.communicate').attr('hidden',true)},700);
			});
			rateBTX.on('click',function(){
				ajax_rateNow();
			});

			$('#rateBTXeidt').on('click',function(){
				ajax_eidt_rateNow();
			});

			/*Change Rating. Hurray!*/

			$('#star7').on('click',function(){
				$('#start7hide').attr('hidden',true);
				$('.cperform').text('---------'+'Performance Selected'+'-----------');
				// $('.cpun').attr('hidden',true);
				// $('.change_communicate').attr('hidden',true);
			});

			$('#star6').on('click',function(){
				$('#start6hide').attr('hidden',true);
				$('.cpun').text('----------------'+'Puntuality Selected'+'---------');
				// $('.cperform').attr('hidden',true);
				// $('.change_communicate').attr('hidden',true);
			});

			$('#star5').on('click',function(){
				$('#start5hide').attr('hidden',true);
				$('.change_communicate').text('---------'+'Commuincation Selected'+'---------');
				// $('.cperform').attr('hidden',true);
				// $('.cpun').attr('hidden',true);
			});

			$(document).on('click','.changerate',function(){
				rate_id = $(this).attr("id");
				emp_id = $(this).attr("data");
					//alert(rate_id+" "+emp_id);
				ajax_change_rating(rate_id,emp_id);
			}); 

			
		}
