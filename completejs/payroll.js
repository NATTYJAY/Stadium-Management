$(document).ready(function(){

 payroll_employee = $('.emp_payroll');
 bascisalary      = $('#basic_sala');
 loan             = $('#ben_loan');
 addpayrollBtx    = $('#addpayrollBtx');
 ben_edu		  = $('#ben_edu');
 ben_research     = $('#ben_research');
 ben_transportation = $('#ben_transportation');
 ben_seminar       = $('#ben_seminar');
 ben_living        = $('#ben_living');
 ben_bonus         = $('#ben_bonus');
 ben_paye          = $('#ben_paye');
 ben_loan          = $('#ben_loan');
 ben_Pension       = $('#ben_Pension');
 slip_date_generated = $('#slip_date_generated');

 netTotal = $('#net');

 payroll_employee1 = " ";

 payroll_employeerr = $('#payroll_employeerr');
get_salary();
editpayrollfunc();
});

function getamount_ajax(){
	t = payroll_employee.val();

				$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		       data:{
				xI4fثاBaBانW  : "Aثا4ekolpBaنE",
				tt : t
			},
		         dataType: "json",
		        success: function(data){
		        	bascisalary.val(data.emp_basic_salary);
		        	loan.val(data.loan_amount);
		        }
		});	
}
				function payroll_employee12(){
						if (payroll_employee.val()== "Select Employee"){
						payroll_employee1 = "Please Select Employee";
						payroll_employeerr.html("<p>"+payroll_employee1+"</p>");
						payroll_employeerr.css("color","#F00");
						$('#pen_error').addClass('alert alert-danger mb-2');
		        		$('#pen_error').html('<p><b> You have An Error. Please Cross Check</b></p>');
						}else if(payroll_employee.val()!="Select Employee"){
								payroll_employee1 = " ";
								payroll_employeerr.html("<p>"+payroll_employee1+"</p>");
								$('#pen_error').removeClass('alert alert-danger mb-2');
		        				$('#pen_error').html('');
						}
				}


	function salarygotten(){
	earnings  = parseInt(bascisalary.val());
	education = parseInt(ben_edu.val());
	research  = parseInt(ben_research.val());
	tp        = parseInt(ben_transportation.val());
	itSeminar = parseInt(ben_seminar.val());
	cOfliving = parseInt(ben_living.val());
	perform   = parseInt(ben_bonus.val());
	loaner    = parseInt(ben_loan.val());
	pension   = parseInt(ben_Pension.val());

	total_benefits_salary = parseFloat(earnings + education + research + tp + itSeminar +cOfliving + perform);

		paye = parseFloat(0.07 * total_benefits_salary);
		hmm = paye;
		ben_paye.val(hmm);
		deductionC = parseFloat(paye + loaner  + pension );
		netpay = (earnings + total_benefits_salary - deductionC);
		total_final_netpay = parseFloat(netpay);
		return total_final_netpay;
		
}

function loading(){
        $('.block').block({
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

 function payslip_success(){
	$('#payrollmodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Employee Payroll Added",
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

function payslip_error(){
	$('#payrollmodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Cannot Add Payroll",
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


function ajax_payroll(){
			send_data = new FormData();
							send_data.append("a7usāfiruwaḥdE", "xI65uwaḥdWW");
							send_data.append("bascisalary", bascisalary.val());
							send_data.append("ben_edu", ben_edu.val());
							send_data.append("paye", paye);
							send_data.append("ben_research", ben_research.val());
							send_data.append("ben_transportation", ben_transportation.val());
							send_data.append("ben_seminar", ben_seminar.val());
							send_data.append("ben_living", ben_living.val());
							send_data.append("ben_bonus", ben_bonus.val());
							send_data.append("ben_loan", ben_loan.val());
							send_data.append("ben_Pension", ben_Pension.val());
							send_data.append("netTotal", netTotal.val());
							send_data.append("slip_date_generated", slip_date_generated.val());
							send_data.append("payroll_employee", payroll_employee.val());
										$.ajax({
										        url: 'angenda/kingdom/alright',
										        type: 'POST',
										       data:send_data,
										         processData: false,
										         contentType: false,
										         cache:false,
										         dataType: "text",
										         beforeSend: function() {
										        	loading();                              
									            },
									            complete: function(){ 
									            },
										        success: function(data){
										        	if(data == 9120){
										        	$('#pen_error').addClass('alert alert-danger mb-2');
		        									$('#pen_error').html('<p><b> Employee Already Added</b></p>');
										        	$('#payform').trigger('reset');
										        	}else if(data == 2123){
										        		payslip_success();
										        		setTimeout(function(){location.reload()}, 200);
										        	}else if(data == 9031){
										        		payslip_error();
										        	}
										        	
										        }
										});	
						 	
}


function ajax_parol_view($idrp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBcomeيةbaثW  : "يةbDEomeية",
				payrolid : idrp
			},
			dataType:"json",
			success: function(datas){
				$('.education').text(" ₦ "+ datas.education);
				$('.identiyt').text(datas.emp_identity);
				$('.date_generated').text(datas.date_grant);
				$('.basic_salry').text(" ₦ "+ datas.emp_basic_salary);
				$('.total').text(" ₦ "+ datas.total);
				$('.education').text(" ₦ "+ datas.education);
				$('.rd').text(" ₦ "+ datas.research);
				$('.tp').text(" ₦ "+ datas.tp);
				$('.it').text(" ₦ "+ datas.it);
				$('.cl').text(" ₦ "+ datas.costOflife);
				$('.perform').text(" ₦ "+ datas.performanceB);
				$('.paye').text(" ₦ "+ datas.paye);
				$('.loan').text(" ₦ "+ datas.loan_amount);
				$('.pension').text(" ₦ "+ datas.pension);
				$('#nameperson_payroll').text(datas.emp_fname +" "+datas.emp_lname );
				$('#payrolid').val(datas.emp_id);
				$('#emp_emailer').val(datas.emp_email);
				$('#pkdaty').val(datas.date_grant);
				$('#pkfname').val(datas.emp_fname +" "+datas.emp_lname);
				$('#confirmpay').modal('show').fadeIn('fast');
			}
		});
}

function payment_success(){
	$('#confirmpay').modal('hide').fadeIn('fast');
		swal({
		    title: "Payment Successful",
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

function payment_error(){
	$('#confirmpay').modal('hide').fadeIn('fast');
		swal({
		    title: "Payment Unsuccessful",
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



function finalAjaxpay(){
		payrolid	 = $('#payrolid').val();
		emp_emailer  = $('#emp_emailer').val();
		date_sent	 = $('#pkdaty').val();
		names		 = $('#pkfname').val();
			
			$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				AثاBmrchurchaن24  : "xIB6churchmr4uانW",
				payrolid : payrolid,
				emp_emailer : emp_emailer,
				date_sent : date_sent,
				names : names
			},
			dataType:"html",
			beforeSend: function() {
		        	loading();                              
	            },
	            complete: function(){ 
	            },
			success: function(data){
				if(data == 901){
				payment_success();
		        setTimeout(function(){location.reload()}, 200);
				}else{
					payment_error();
				}
			}
		});
}

function get_salary(){
	
	payroll_employee.on('change',function(){
		getamount_ajax();
	});

	addpayrollBtx.on('click',function(){
		payroll_employee12();
			if(payroll_employee1 == " "){
				ajax_payroll();
			}
	});
	ben_edu.on('keydown',function(){
		ben_edu.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_edu.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
		
	})
	ben_research.on('keydown',function(){
		ben_research.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_research.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})
	ben_transportation.on('keydown',function(){
		ben_transportation.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_transportation.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})
	ben_seminar.on('keydown',function(){
		ben_seminar.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_seminar.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})
	ben_living.on('keydown',function(){
		ben_living.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_living.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})
	ben_bonus.on('keydown',function(){
		ben_bonus.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_bonus.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})
	ben_Pension.on('keydown',function(){
		ben_Pension.attr('readonly',true);
		payroll_employee12();
		if(payroll_employee1 == " "){
			ben_Pension.removeAttr('readonly');
				netTotal.val(salarygotten());
			}
	})

	$(document).on('click', '.payBTX', function(){
		 	idrp = $(this).attr("id");
		 	ajax_parol_view(idrp);
		});

	$('#paynowBTX').on('click',function(){
		finalAjaxpay();
	});

}

function salarygottenedit(){
	earnings  = parseInt($('#edit_basic_sala').val());
	education = parseInt($('#edit_ben_edu').val());
	research  = parseInt($('#edit_ben_research').val());
	tp        = parseInt($('#edit_ben_transportation').val());
	itSeminar = parseInt($('#edit_ben_seminar').val());
	cOfliving = parseInt($('#edit_ben_living').val());
	perform   = parseInt($('#edit_ben_bonus').val());
	loaner    = parseInt($('#edit_ben_loan').val());
	pension   = parseInt($('#edit_ben_Pension').val());

	total_benefits_salary1 = parseFloat(earnings + education + research + tp + itSeminar +cOfliving + perform);

		paye1 = parseFloat(0.07 * total_benefits_salary1);
		hmm = paye1;
		$('#edit_ben_paye').val(hmm);
		deductionC1 = parseFloat(paye1 + loaner  + pension );
		netpay1 = (earnings + total_benefits_salary1 - deductionC1);
		total_final_netpay1 = parseFloat(netpay1);
		return total_final_netpay1;
		
}

function ajax_parol_edit(idrk){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBcomeيةbW  : "يةbDmumeية",
				payroliid : idrk
			},
			dataType:"json",
			success: function(datas){
				$('#edit_ben_edu').val(datas.education);
				$('#edit_slip_date_generated').val(datas.date_grant);
				$('#edit_basic_sala').val(datas.emp_basic_salary);
				$('#edit_net').val(datas.total);
				$('#edit_ben_research').val(datas.research);
				$('#edit_ben_transportation').val(datas.tp);
				$('#edit_ben_seminar').val(datas.it);
				$('#edit_ben_living').val(datas.costOflife);
				$('#edit_ben_bonus').val(datas.performanceB);
				$('#edit_ben_paye').val(datas.paye);
				$('#edit_ben_loan').val(datas.loan_amount);
				$('#edit_ben_Pension').val(datas.pension);
				$('#edit_payroll_id').val(datas.emp_id);
				$('#edit_names').val(datas.emp_fname +" "+datas.emp_lname);
				$('#editpayrollmodal').modal('show').fadeIn('fast');
			}
		});
}

function edit_error(){
	$('#editpayrollmodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Update Failed",
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

function update_success(){
	$('#editpayrollmodal').modal('hide').fadeIn('fast');
		swal({
		    title: "Update Successful",
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

function loader_edit(){
	    $.blockUI({
            message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 2000, //unblock after 2 seconds
            overlayCSS: {
                backgroundColor: '#FFF',
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


function ajax_edit_payroll(){
			send_data = new FormData();
							send_data.append("safariiruwaḥdE", "xI65inmylifedWW");
							send_data.append("bascisalary", $('#edit_basic_sala').val());
							send_data.append("ben_edu", $('#edit_ben_edu').val());
							send_data.append("paye", $('#edit_ben_paye').val());
							send_data.append("ben_research", $('#edit_ben_research').val());
							send_data.append("ben_transportation", $('#edit_ben_transportation').val());
							send_data.append("ben_seminar", $('#edit_ben_seminar').val());
							send_data.append("ben_living", $('#edit_ben_living').val());
							send_data.append("ben_bonus", $('#edit_ben_bonus').val());
							send_data.append("ben_loan", $('#edit_ben_loan').val());
							send_data.append("ben_Pension", $('#edit_ben_Pension').val());
							send_data.append("netTotal", $('#edit_net').val());
							send_data.append("slip_date_generated", $('#edit_slip_date_generated').val());
							send_data.append("payroll_employee", $('#edit_payroll_id').val());
										$.ajax({
										        url: 'angenda/kingdom/alright',
										        type: 'POST',
										       data:send_data,
										         processData: false,
										         contentType: false,
										         cache:false,
										         dataType: "text",
										         beforeSend: function() {
										        	loader_edit();                              
									            },
									            complete: function(){ 
									            },
										        success: function(data){
										        	if(data == 80){
										        		update_success();
										        		setTimeout(function(){location.reload()}, 200);
										        	}else{
										        		edit_error();
										        	}
										        }
										});	
						 	
}




function editpayrollfunc(){

	$('#edit_ben_edu').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
		
	})
	$('#edit_ben_research').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})
	$('#edit_ben_transportation').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})
	$('#edit_ben_seminar').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})
	$('#edit_ben_living').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})
	$('#edit_ben_bonus').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})
	$('#edit_ben_Pension').on('keydown',function(){
		$('#edit_net').val(salarygottenedit());
	})

	$(document).on('click', '.edit_addpayrollBtx', function(){
		 	idrk = $(this).attr("id");
		 	ajax_parol_edit(idrk);
		});

	$('#edit_addpayrollBtx').on('click',function(){
				ajax_edit_payroll();
	});
}