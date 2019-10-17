$(document).ready(function(){
	/*Intialization of variable or parameters. or Anything you wan call am*/

	pe_degree = $('#pe_degree');
	pe_institute = $('#pe_institute');
	pe_result    = $('#pe_result');
	pe_gyear     = $('#pe_gyear');

	filer  = $('#puserImage');

	updatefiler  = $('#updateImage');

	pe_fname = $('#pe_fname');
	pe_lname = $('#pe_lname');
	pe_email = $('#pe_email');
	pe_phone = $('#pe_phone');

	 skills = $('.pskillss'); 



	p_department = $('#p_department');
	p_unit = $('#p_unit');
	
	prospect_add();
});

function showPreview(objFileInput) {
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $("#targetLayer1").html('<img src="'+e.target.result+'" width="160px" height="100px" class="upload-preview" />');
			$("#targetLayer1").css('opacity','0.9');
			$(".icon-choose-image1").css('opacity','0.5');
        }
		fileReader.readAsDataURL(objFileInput.files[0]);
    }
}

function showPreviewupdate(objFileInput) {
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $(".targetLayer12").html('<img src="'+e.target.result+'" width="160px" height="100px" class="upload-preview" />');
			$(".targetLayer12").css('opacity','0.9');
			$(".icon-choose-image12").css('opacity','0.5');
        }
		fileReader.readAsDataURL(objFileInput.files[0]);
    }
}


function getme(){
			 var maxGroup = 4;

			 var maxskillgroup = 5;

			    $("#paddmore").click(function(){
			        if($('body').find('.fieldGroup11').length < maxGroup){
			            var fieldHTML = '<div class="form-group fieldGroup11">'+$(".fieldGroupc11").html()+'</div>';
			            $('body').find('.fieldGroup11:last').after(fieldHTML);
			        }else{
			            alert('Maximum '+maxGroup+' groups are allowed.');
			        }
			    });

			      $(".paddwork").click(function(){
			        if($('body').find('.fieldGroup1p1').length < maxGroup){
			            var fieldHTML = '<div class="form-group fieldGroup1p1">'+$(".fieldGroupc1p1").html()+'</div>';
			            $('body').find('.fieldGroup1p1:last').after(fieldHTML);
			        }else{
			            alert('Maximum '+maxGroup+' groups are allowed.');
			        }
			    });

			       $("#addskills").click(function(){
			        if($('body').find('.fieldGroups').length < maxGroup){
			            var fieldHTML = '<div class="form-group fieldGroups">'+$(".fieldGroupskill").html()+'</div>';
			            $('body').find('.fieldGroups:last').after(fieldHTML);
			        }else{
			            alert('Maximum Of '+maxskillgroup+' Skill Set are allowed.');
			        }
			    });
   }  

   	function ajax_prospects(){
   		var p_com = [];
   		var p_period = [];
   		var p_unit = [];
   		var p_manager    = [];
   		/* Working Experience Ends*/
   		var p_de = [];
   		var p_ins = [];
   		var p_result = [];
   		var p_gra    = [];
   		/*Prospects working*/

   		/*Skills Array Start Here*/

   		var p_skill = [];

	        $('.pe_com').each(function() {
	           p_com.push($(this).val());
	        });

	        $('.pe_work').each(function() {
	           p_period.push($(this).val());
	        });
	        $('.pe_unit').each(function() {
	           p_unit.push($(this).val());
	        });
	        $('.pe_man').each(function() {
	           p_manager.push($(this).val());
	        });

	        
	        $('.pe_degreess').each(function() {
	           p_de.push($(this).val());
	        });

	        $('.pe_ins').each(function() {
	           p_ins.push($(this).val());
	        });

	         $('.pe_result').each(function() {
	           p_result.push($(this).val());
	        });

	          $('.pe_gra').each(function() {
	           p_gra.push($(this).val());
	        });

	        //    $('.pskillss').each(function() {
	        //    p_skill.push($(this).val());
	        // });

	        // p_skill.pop();
	        p_com.pop();
	        p_period.pop();
	        p_unit.pop();
	        p_manager.pop();

	        p_company = JSON.stringify(p_com);
	        p_periodw = JSON.stringify(p_period);
	        p_position = JSON.stringify(p_unit);
	        p_supervisor = JSON.stringify(p_manager);

	          /*Prospects Working Ends*/

	          /*Education starts Here */
	          
	        p_de.pop();
	        p_ins.pop();
	        p_result.pop();
	        p_gra.pop();

	        p_degrees = JSON.stringify(p_de);
	        p_inst = JSON.stringify(p_ins);
	        p_results = JSON.stringify(p_result);
	        p_grading = JSON.stringify(p_gra);


	        // pskills = JSON.stringify(p_skill);
	        
		send_data = new FormData();
		send_data.append("xIB263590olpW", "a12ثhelpu8اDE");
		send_data.append("p_degrees",p_degrees);
		send_data.append("p_inst", p_inst);
		send_data.append("p_results", p_results);
		send_data.append("p_grading", p_grading);

		send_data.append("p_company",p_company);
		send_data.append("p_period", p_periodw);
		send_data.append("p_position", p_position);
		send_data.append("p_supervisor", p_supervisor);

		send_data.append("pskills", skills.val());

		send_data.append("img", filer[0].files[0]);
		send_data.append("pe_fname", pe_fname.val());
		send_data.append("pe_lname", pe_lname.val());
		send_data.append("pe_email", pe_email.val()); 
		send_data.append("pe_phone", pe_phone.val());
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
		        	if(data == 518){
		        		$('#alertprospects').addClass('alert alert-success mb-2');
		        		$('#alertprospects').html('<p><b>Prospects Added Successfully.</b></p>');
		        		setTimeout(function(){$("#employeemodal").modal("hide");location.reload();}, 1000);
		        	}else if(data == 519){
		        		$('#alertprospects').addClass('alert alert-danger mb-2');
		        		$('#alertprospects').html('<p><b>Prospects Already Added</b></p>');
		        	}else{
		        		$('#alertprospects').addClass('alert alert-danger mb-2');
		        		$('#alertprospects').html('<p><b>Something Went Wrong</b></p>');
		        	}
		        
		        
		        }
		});			
}

function ajax_prospect_view($idrp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIpikiccةbaثW  : "يةbcallnchoeية",
				pro_id : idrp
			},
			dataType:"json",
			success: function(datas){
				$('.p_class').text(datas.pro_fname + " " + datas.pro_lname);
				$('.p_email').text(datas.pro_email);
				$('.p_phone').text(datas.pro_phone);
				$('#pro_id').text(datas.pro_id);
				$('#pp').val(datas.pro_id);
				$('.p_image').html('<img class="img-thumbnail" src="../prospectimg/'+datas.pro_image+'" itemprop="thumbnail" alt="Image description" width ="150" height ="100" />');
				$('#viewprospects').modal('show').fadeIn('fast');
			}
		});
}

function ajax_p_edit(ip){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIpibaثW  : "يةbcachoeية",
				pro_id : ip
			},
			dataType:"json",
			success: function(data){
				$("#ki").empty();
				$.each(data,function(){
                    var kilode = ' <div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Degree Title</h5></label>' +
                                                '<input type="text" value = "'+this.pro_degree+'" class="form-control updegree">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_institution+'" class="form-control upinst">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Result</h5></label>' +
                                                '<input type="text" value = "'+this.pro_result+'" class="form-control upresult">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Year Graduated</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_year_pass+'" class="form-control upyear">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class = "row" hidden="hidden">'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.qualify_id+'" class="form-control q_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>' +

                                                   '<div class = "row" hidden="hidden">'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_id+'" class="form-control pro_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>';
            		$("#ki").append(kilode);

            	});
            	 $('#updateprospectsmodal').modal('show').fadeIn('fast');


			}
		});
}

function ajax_work_edit(ip){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIpiholidaybaثW  : "يةbcaclolhoeية",
				pro_id : ip
			},
			dataType:"json",
			success: function(data){
				$("#wrk").empty();
				$.each(data,function(){
                    var kiloded = ' <div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Company Name</h5></label>' +
                                                '<input type="text" value = "'+this.pro_company_name+'" class="form-control upcmpny">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Working Period</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_working_p+'" class="form-control upwrk">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class="row" >'+
                                        '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                            '<fieldset class="form-group floating-label-form-group">' +
                                             '<label for="up_degree"> <h5><i class="fa fa-arrow-down"></i>Position</h5></label>' +
                                                '<input type="text" value = "'+this.pro_position+'" class="form-control upposition">' +
                                                        '</fieldset>' +
                                                  '</div>' +
                                                   '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Name Of Manager</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_supervisor+'" class="form-control upsupervisor">'+
                                                        '</fieldset>'+
                                                  '</div>'+
                                              '</div>' +

                                              '<div class = "row" hidden="hidden">'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>id</h5></label>'+
                                                          '<input type="text" value = "'+this.exc_id+'" class="form-control exec_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>' +

                                                   '<div class = "row" hidden="hidden">'+

                                              '<div class="col-lg-6 col-md-12 col-sm-12">' +
                                                      '<fieldset class="form-group floating-label-form-group">'+
                                                          '<label for="up_Institution"> <h5><i class="fa fa-arrow-down"></i>Institution</h5></label>'+
                                                          '<input type="text" value = "'+this.pro_id+'" class="form-control pros_id">'+
                                                        '</fieldset>'+
                                                  '</div></div>';
            		$("#wrk").append(kiloded);

            	});
            	 $('#updateprospectsmodal').modal('show').fadeIn('fast');


			}
		});
}

function ajax_profile_edit(idp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				preciousccةbaثW  : "يةbogogoeية",
				pro_id : idp
			},
			dataType:"json",
			success: function(datas){
				$('#pro_edit_fname').val(datas['pro_fname']);
				$('#pro_edit_lname').val(datas['pro_lname']);
				$('#pro_edit_email').val(datas['pro_email']);
				$('#pro_edit_phone').val(datas['pro_phone']);
				$('#pro_edit_id').val(datas['pro_id']);
				$('#pro_e_id').val(datas['pro_id']);
			    $('#pics').val(datas['pro_image']);
				$('.targetLayer12').html('<img src="./prospectimg/'+datas['pro_image']+'" width="160px" height="100px" class="upload-preview" />');
				$('#updateprospectsmodal').modal('show').fadeIn('fast');
			}
		});
}

function ajax_profile_del(ipp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				sccةbadelثW  : "يةboprospectgoeية",
				proid : ipp
			},
			dataType:"json",
			success: function(datas){
				$('#pros_name').text(datas['pro_fname']+" " + datas['pro_lname']);
				$('#pro_fname_id').val(datas['pro_id']);
				$('#deleteprospect').modal('show').fadeIn('fast');
			}
		});
}

function ajax_final_prospect_delete(){
	pro_fname_id = $('#pro_fname_id').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xspanish6انW  : "AثaناناdeleteBaنE",
				pro_fname_id : pro_fname_id
			},
			dataType:"html",
			success: function(data){ 
			
				if(data == 1547){
					$('#deletproealert').addClass('alert alert-success mb-2');
		        	$('#deletproealert').html('<p><b>Department Deleted.</b></p>');
		        		setTimeout(function(){$("#deleteprospect").modal("hide");location.reload();faint();}, 200);
				}else{
					$('#deletproealert').addClass('alert alert-danger mb-2');
		        	$('#deletproealert').html('<p><b>Failed to Delete. Try Again Later</b></p>');
				}
			}
		});
}


function update_prospect_success(){
	$('#updateprospectsmodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Prospects Updated",
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

function prospect_update_error(){
	$('#updateprospectsmodal').modal('hide').fadeIn('fast');
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

function edu_update(){

		var upper_degree = [];
		var upper_ins = [];
		var upper_result = [];
		var upper_yr = [];
		var qua_id = [];
		var proid = [];

	    
	        $('.updegree').each(function() {
	           upper_degree.push($(this).val());
	        });

	        $('.upinst').each(function() {
	           upper_ins.push($(this).val());
	        });

	         $('.upresult').each(function() {
	           upper_result.push($(this).val());
	        });

	          $('.upyear').each(function() {
	           upper_yr.push($(this).val());
	        }); 

	           $('.q_id').each(function() {
	           qua_id.push($(this).val());
	        });

	            $('.pro_id').each(function() {
	           proid.push($(this).val());
	        });
	           
	        p_degre = JSON.stringify(upper_degree);
	        p_insti = JSON.stringify(upper_ins);
	        p_rest  = JSON.stringify(upper_result);
	        p_yr    = JSON.stringify(upper_yr);
	        p_qid   = JSON.stringify(qua_id);
	        proid   = JSON.stringify(proid);

			send_data = new FormData();
			send_data.append("xloveme90olpW", "a12ثثثثثثثث8اDE");
			send_data.append("p_degre",p_degre);
			send_data.append("p_insti", p_insti);
			send_data.append("p_rest", p_rest);
			send_data.append("p_yr", p_yr);
			send_data.append("p_qid", p_qid);
			send_data.append("proid", proid);

	
					$.ajax({
				        url: 'angenda/kingdom/alright',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				        dataType : "html",
				        success: function(data){
				        	if(data == 786 ){
				        		update_prospect_success();
						setTimeout(function(){location.reload()}, 200);
				        	}else{
				        			prospect_update_error();
				        	}
				        }
				});			
		}

		function work_update(){

		var upper_com = [];
		var upper_period = [];
		var upper_position = [];
		var upper_manager = [];
		var exc_id = [];
		var prosid = [];

	    
	        $('.upcmpny').each(function() {
	           upper_com.push($(this).val());
	        });

	        $('.upwrk').each(function() {
	           upper_period.push($(this).val());
	        });

	         $('.upposition').each(function() {
	           upper_position.push($(this).val());
	        });

	          $('.upsupervisor').each(function() {
	           upper_manager.push($(this).val());
	        }); 

	           $('.exec_id').each(function() {
	           exc_id.push($(this).val());
	        });

	            $('.pros_id').each(function() {
	           prosid.push($(this).val());
	        });
	           
	        p_upper_com      = JSON.stringify(upper_com);
	        p_upper_period   = JSON.stringify(upper_period);
	        p_upper_position = JSON.stringify(upper_position);
	        p_upper_manager  = JSON.stringify(upper_manager);
	        p_exc_id         = JSON.stringify(exc_id);
	        p_prosid         = JSON.stringify(prosid);

			send_data = new FormData();
			send_data.append("xready0olpW", "ثثtireثث8اDE");
			send_data.append("p_upper_com",p_upper_com);
			send_data.append("p_upper_period", p_upper_period);
			send_data.append("p_upper_position", p_upper_position);
			send_data.append("p_upper_manager", p_upper_manager);
			send_data.append("p_exc_id", p_exc_id);
			send_data.append("p_prosid", p_prosid);

	
					$.ajax({
				        url: 'angenda/kingdom/alright',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				        dataType : "html",
				        success: function(data){
				        	if(data == 986 ){
				        		update_prospect_success();
						setTimeout(function(){location.reload()}, 200);
				        	}else{
				        			prospect_update_error();
				        	}
				        }
				});			
		}



		   	function ajax_prospects_info_edit(){
					send_data = new FormData();
					send_data.append("butyouoh", "a12ثleave8اDE");
					send_data.append("pro_edit_fname", $('#pro_edit_fname').val());
					send_data.append("pro_edit_lname", $('#pro_edit_lname').val());
					send_data.append("pro_edit_email", $('#pro_edit_email').val());
					send_data.append("pro_edit_phone", $('#pro_edit_phone').val()); 
					send_data.append("pro_edit_id",    $('#pro_edit_id').val());
					// send_data.append("pics",$('#pics').val());
						$.ajax({
					        url: 'angenda/kingdom/alright',
					        type: 'POST',
					        data: send_data,
					        processData: false,
					        contentType: false,
					        cache:false,
					        dataType : "html",
					        success: function(data){
					        	if(data == 672 ){
				        		update_prospect_success();
								setTimeout(function(){location.reload()}, 200);
				        	    }else{
				        			prospect_update_error();
				        	    }
					        }
					});			
			}

			function ajax_update_image(){
				send_data = new FormData();
				send_data.append("imageonly", "a12ثثruleE");
				send_data.append("img", updatefiler[0].files[0]);
				send_data.append("pro_e_id",$('#pro_e_id').val()); 
				$.ajax({
					        url: 'angenda/kingdom/alright',
					        type: 'POST',
					        data: send_data,
					        processData: false,
					        contentType: false,
					        cache:false,
					        dataType : "html",
					        success: function(data){
					        	if(data == 6791 ){
				        		update_prospect_success();
								setTimeout(function(){location.reload()}, 200);
				        	    }else{
				        			prospect_update_error();
				        	    }
					        }
					});	

			}


function prospect_add(){
	$("#puserImage").change(function () {
    showPreview(this);
	});

	getme();

	 $(document).on("click",".premove",function(){ 
        $(this).parents(".fieldGroup11").remove();
    });
	 $(document).on("click",".premove2",function(){ 
        $(this).parents(".fieldGroup1p1").remove();
    });  

	 $(document).on("click",".updatepro",function(){ 
	 	ip = $(this).attr("id");
	 	ajax_p_edit(ip);
	 	ajax_work_edit(ip);
	 	ajax_profile_edit(ip);
    });  

	  $(document).on("click",".deletepro",function(){ 
	 	proid = $(this).attr("id");
	 	ajax_profile_del(proid);
	 	
    });

	 $("#updateImage").change(function () {
    showPreviewupdate(this);
	});

	 $('#foolimage').on('click',function(){
	 	ajax_update_image();
	 })

	 $('#prospectBTXdelete').on('click',function(){
	 	ajax_final_prospect_delete();
	 })

	 $('#btx_propspect_edit').on('click',function(){
	 		edu_update();
	 });

	 $('#infoBtxedit').on('click',function(){
	 	ajax_prospects_info_edit();
	 })

	 $('#fool').on('click',function(){
	 		work_update();
	 		//alert('uhuhj');
	 });

	 $(document).on("click",".skillremove",function(){ 
        $(this).parents(".fieldGroups").remove();
    });
	
	 $('#btx_propspect_add').on('click',function(){
	 	ajax_prospects();

	 });

	 $(document).on('click', '.pview', function(){
		 	idrp = $(this).attr("id");
		 	ajax_prospect_view(idrp);
		 	ajax_p_view(idrp);	
		});
}
