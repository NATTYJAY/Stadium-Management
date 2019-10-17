$(document).ready(function(){

	email_na        = $('#email_na');
	ticket_planss   = $('#ticket_plans');
	amount		    = $('#amount');
	user_id         = $('#user_id');
	stadium_id      = $('#stadium_id');


	plan_err = $('#plan_err');
	 tp = " ";
	booking_functions();
});

	function ticketplan_val(){
			if (ticket_planss.val()== "selected"){
			tp = "Please Select ticket plan";
			plan_err.html("<p>"+tp+"</p>");
			}else if(ticket_planss.val()!="selected"){
					tp = " ";
					plan_err.html("<p>"+tp+"</p>");
			}
	}

function getamount_ajax(){
	t = ticket_planss.val();
				$.ajax({
		        url: '/rastar/scan/yeah',
		        type: 'POST',
		       data:{
				chaneg  : "yanni",
				tt : t
				},
		         dataType: "json",
	            beforeSend: function() {
				        	$('#completebookings').attr('disabled','disabled');
				        	$('#completebookings').text("please wait...");                             
		                  },
	            complete: function(){ 
			            	$('#completebookings').removeAttr('disabled');
				        	$('#completebookings').text("Complete booking");         
	                    },
		        success: function(data){
		        	$('#amount').val(data.amount);
		        }
		});	
}

var confirm_booking = function(){
		send_data = new FormData();
		send_data.append("iwillbound","youtoohalone");
	    send_data.append("user_id",user_id.val());
		send_data.append("stadium_id",stadium_id.val());
      		$.ajax({
		        url: '/rastar/scan/yeah',
		       	type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html", 
		        beforeSend: function() {
				        	$('#completebookings').attr('disabled','disabled');
				        	$('#completebookings').text("please wait...");                             
		                  },
	            complete: function(){ 
	                    },
		        success: function(data){
		        	if(data == 82){
		        		$('#suc').addClass('alert alert-danger textcenter');
		        		$('#suc').html('<h4><b>Sorry ! You have already booked for this match</b></h4>  Click <a href="/preview">here</a> to print your ticket instead <br/>');
			        	$('#completebookings').attr('disabled','disabled');
	         			$('#completebookings').text('Already Booked');
		        	}else{
		        		$('#completebookings').attr('disabled','disabled');
						$('#completebookings').text('Processing Payment...');
						payWithPaystack();
		        	}
		        	
		        }
		});

}

var my_callback_function = function(response_reference,stadium_id){
		send_data = new FormData();
		send_data.append("xIB26W", "peace346X");
		send_data.append("ref_code",response_reference);
		send_data.append("user_id",user_id.val());
		send_data.append("cat_id",ticket_planss.val());
		send_data.append("stadium_id",stadium_id);
      		$.ajax({
		        url: '/rastar/scan/yeah',
		       	type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "json", 
		        success: function(data){
		        	if(data==13){
		        		$('#suc').addClass('alert alert-success textcenter');
		        		$('#suc').html('<h4>Payment Successful</h4> Click <a href="/preview">here</a> to print your ticket now');
			        	$('#completebookings').removeAttr('disabled');
	         			$('#completebookings').text('Complete booking');
	         				setTimeout(function(){
								location.reload();
							},6000);
	         				
         			}else if(data == 185){
	         			$('#suc').addClass('alert alert-danger textcenter');
		        		$('#suc').html('<h4>problem occur</h4> If you have been debited, please copy your ref id <b>'+response_reference+'</b> to your bank');
			        	$('#completebookings').removeAttr('disabled');
	         			$('#completebookings').text('Book Again');
         			}else{
         				$('#suc').addClass('alert alert-danger textcenter');
		        		$('#suc').html('<h4>Payment Unsuccessful !</h4> If you have been debited, please copy your ref id <b>'+response_reference+'</b> to your bank');
			        	$('#completebookings').removeAttr('disabled');
	         			$('#completebookings').text('Book Again');
         			}
		        }
		});
}

var payWithPaystack = function (){
 	 var amt = parseFloat($('#amount').val());
    var handler = PaystackPop.setup({
      key: 'pk_test_d0c2a7ce0aadae68507779584a6664237504c5f9',
      email: email_na.val(),
      amount: amt*100,
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
      	ref = response.reference;
      	stadium_id = $('#stadium_id').val();
        my_callback_function(ref,stadium_id);
      },
      onClose: function(){
      	$('#completebookings').removeAttr('disabled');
        $('#completebookings').text('Complete booking');
      }
    });
    handler.openIframe();
  }

function completefunction(){
	setTimeout(function(){
		confirm_booking();
	},700);
}

function booking_functions(){
	ticket_planss.on('change',function(){
		getamount_ajax();
	});
	
	$('#completebookings').on('click',function(){
		ticketplan_val();
			if(tp == " "){
				completefunction();
			}
	});
}

	


