$(document).ready(function(){

	first_name     = $('#first_n');
	last_name      = $('#last_n');
	email          = $('#email_n');
	pass_n         = $('#pass_n');
	cpass_n    = $('#cpass_n');
	confirm_email  = $('#c_email_n');
	phone_number   = $('#phone_number');
	c_phone_number = $('#c_phone_number');
	ticket_planss   = $('#ticket_plans');
	amount		   = $('#amount');


	f_err = $('#f_err');
	l_err = $('#l_err');
	e_err = $('#e_err');
	ce_err = $('#ce_err');
	p_err  = $('#p_err');
	c_phone_err = $('#c_phone_err');
	plan_err = $('#plan_err');

	pass_err  = $('#pass_err');
	cpass_err  = $('#cpass_err');

	fn = ln = en = cen = pn = cpn = tp = am = pa = cpas = " ";

	/*login mparametere*/
	emaillog = $('#email_login');
 	logid = $('#logBtx');
 	passlog = $('#password_log');
  	logalert = $('#logalert');
	
   _functions();
   login_functions();
});
function fname_validate(){
			if (first_name.val()==""){
				fn = "First Name Required *";
				f_err.html("<p>"+fn+"</p>");
			}else if(first_name.val() != ""){
				test_name = /[^A-Za-z]/.test(first_name.val()); 
						if(!test_name){
							fn = " ";
							f_err.html("<p>"+fn+"</p>");
						}else{
							fn = "Only Letters are allowed";
							f_err.html("<p>"+fn+"</p>");
						}
			}
		
		}


				function lname_validate(){
			if (last_name.val()==""){
				ln = "Last Name Required *";
				l_err.html("<p>"+ln+"</p>");
			}else if(last_name.val() != ""){
				test_name = /[^A-Za-z]/.test(last_name.val()); 
						if(!test_name){
							ln = " ";
							l_err.html("<p>"+ln+"</p>");
						}else{
							ln = "Only Letters are allowed";
							l_err.html("<p>"+ln+"</p>");
						}
			}
		
		}

		function val_email(){
				if (email.val()==""){
					en = "Please provide your email address";
					e_err.html("<p>"+en+"</p>");
				}else if(email.val()){
					user_email = email.val();
					email_filter = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
					if(email_filter.test(user_email)){
						en = "";
						e_err.html("");
					}
					else{
						en = "Invalid email address";
						e_err.html("<p>"+en+"</p>");
					}
				}
		}

		function pass_val(){
				if (pass_n.val()==""){
					pa = "Password required";
					pass_err.html("<p>"+pa+"</p>");
				}else if(pass_n.val()){
					if(pass_n.val().length <= 5){
						pa = "Password must be greater than 6 characters";
						pass_err.html("<p>"+pa+"</p>");
					}else{
						pa = "";
						pass_err.html("");
					}
				}
		}

		function confirm_pass(){
		if (!pass_n.val() && !cpass_n.val()){
			cpas = "Please resolve issues with password field first";
			cpass_err.html("<p>"+cpas+"</p>");
			
		}else if (pa !=""){
			cpas = "preferred password Required";
			cpass_err.html("<p>"+cpas+"</p>");
		}else if(pass_n.val() && pa ==""){
			if (!cpass_n.val()){
				cpas = "Please repeat password";
				cpass_err.html("<p>"+cpas+"</p>");
				
			}else if(cpass_n.val()){
				if (cpass_n.val() != pass_n.val()){
					cpas = "Password Mismatch";
					cpass_err.html("<p>"+cpas+"</p>");
				}else if (cpass_n.val() == pass_n.val()){
					cpas = "";
					cpass_err.html("");
				}
			}
		}
		
	}


	function val_confirm_email(){
		if (!email.val() && !confirm_email.val()){
			cen = "Please input preferred email first ";
			ce_err.html("<p>"+cen+"</p>");
			
		}else if (en !=""){
			cen = "preferred email Required";
			ce_err.html("<p>"+cen+"</p>");
		}else if(email.val() && en ==""){
			if (!confirm_email.val()){
				cen = "Please repeat email address";
				ce_err.html("<p>"+cen+"</p>");
				
			}else if(confirm_email.val()){
				if (confirm_email.val() != email.val()){
					cen = "Email Mismatch";
					ce_err.html("<p>"+cen+"</p>");
				}else if (confirm_email.val() == email.val()){
					cen = "";
					ce_err.html("");
				}
			}
		}
		
	}

	function val_phone1(){
		if(phone_number.val() == ""){
				pn = "Phone Number Required";
				p_err.html("<p>"+pn+"</p>");
		}else if(phone_number.val()){
			test_write = /[^0-9.]+/;
				if(!test_write.test(phone_number.val())){
					pn = "";
					p_err.html("<p>"+pn+"</p>");
				}else{
					pn = "Only Numbers are allowed";
					p_err.html("<p>"+pn+"</p>");
				}
		}
	}

function val_confirm_phone(){
		if (phone_number.val() =="" && c_phone_number.val()==""){
			cpn = "Please input preferred phone Number first ";
			c_phone_err.html("<p>"+cpn+"</p>");
		}else if (pn !=""){
			cpn = "preferred Phone Number Required";
			c_phone_err.html("<p>"+cpn+"</p>");
		}else if(phone_number.val() && pn ==""){
			if (c_phone_number.val() ==""){
				cpn = "Please repeat preferred Phone Number";
				c_phone_err.html("<p>"+cpn+"</p>");
			}else if(c_phone_number.val()){
				if (c_phone_number.val() != phone_number.val()){
					cpn = "Phone Number Mismatch";
					c_phone_err.html("<p>"+cpn+"</p>");
				}else if (c_phone_number.val() == phone_number.val()){
					cpn = "";
					c_phone_err.html("");
				}
			}
		}
	}

	var my_callback_ajax_function = function(){
		send_data = new FormData();
		send_data.append("understand", "ajaxunderstand");
		send_data.append("first_name",first_name.val());
		send_data.append("last_name",last_name.val());
		send_data.append("phone_number",phone_number.val());
		send_data.append("email",email.val());
		send_data.append("password",pass_n.val());
      		$.ajax({
		        url: '/rastar/scan/yeah',
		       	type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		        dataType : "html", 
		        success: function(data){
		        	if(data==8){
		        		$('#regalert').removeClass('alert alert-danger textcenter').html('');
		        		$('#regalert').addClass('alert alert-success textcenter');
		        		$('#regalert').html('<h4>Registration Successful</h4> Click <a href="#" data-toggle="modal" data-target="#iconForm" data-dismiss="modal" >here</a> to login now');
			        	
         			}else if(data== 7){
         				setTimeout(function(){$('#regalert').addClass('alert alert-danger textcenter');
		        		$('#regalert').html('<h4>User Already Registered ! </h4>');}, 500);
         			}else{
         				$('#regalert').addClass('alert alert-danger textcenter');
		        		$('#regalert').html('<h4>Something went wrong o ! </h4>');
         			}
		        }
		});
}

var _functions = function(){
	$('#regnow').on('click',function(){
			
		fname_validate();
		lname_validate();
		val_email();
		val_confirm_email();
		val_phone1();
		val_confirm_phone();
		pass_val();
		confirm_pass();

if(fn == " " && ln == " " && en == "" && cen == "" && pa == "" && cpas == "" && pn == "" && cpn == "" && tp == " "){
	
	my_callback_ajax_function();
}
	});
}


/*Login functions goes here please */


function ajax_login(){
				send_data = new FormData();
				send_data.append("ISdWW", "AByanniE");
				send_data.append("emaillog", emaillog.val());
				send_data.append("passlog", passlog.val());
					$.ajax({
				        url: '/rastar/scan/yeah',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				         dataType: "json",
				        beforeSend: function() {
				        	$('#logBtx').attr('disabled','disabled');
				        	$('#logBtx').text("please wait...");                             
			            },
			            complete: function(){ 
			            },
				        success: function(values){
				        	if(values==9){
				        		console.log(values);
				        		location.reload();
				        	}
				        	else if(values==10){
				        			logalert.addClass('alert alert-danger mb-2');
				        			logalert.html('<p><b>Email or Password Incorrect.</b></p>');
				        			$('#logBtx').removeAttr("disabled");
				        			$('#logBtx').text("Login");
				        	}else{
									console.log('Something went wrong');
				        	}
				        }
				});			
		}


var login_functions = function(){
	$('#logBtx').on('click',function(){
		ajax_login()
	});

}