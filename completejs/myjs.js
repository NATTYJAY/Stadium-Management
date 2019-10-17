$(document).ready(function(){

 email = $('#email');
 pass1 = $('#password');
 pass2 = $('#password-again');
/*Error Flags*/
 email_error = $('#err_email');
 password_error = $('#err_password');
 confirm_password_error = $('#err_passwordagain');
 email_write=password_write=nawao="";
 reg_nowBtn = $('#buttonid');
 alerti = $('#card-alert');
 checkall();
})

		function returnvalue(value){
							if(value == 1){
				                $('#loaders').html('<p>Email Already Registered. Login Instead Please.</p>');
				            }else if(value == 2){
				                $('#loaders').html(" ");
				                 nawao = " ";
				            }
					}

					function ajax_function(){
						send_data = new FormData();
							send_data.append("joshua", "israel");
							send_data.append("email", email.val());
						 		$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: send_data,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
				                           success: function(read){
				                           	//alert(read);
				                           		returnvalue(read);
				                      		}
				                });
					}
		/*Function to check for email validation oo. mbok take note.*/
			function val_email(){
							if (email.val()==""){
								email_write = "Please provide your email address";
								email_error.html("<p>"+email_write+"</p>");
							}else if(email.val()){
								user_email = email.val();
								email_filter = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
								if(email_filter.test(user_email)){
									email_write = "";
									email_error.html("");
									ajax_function();
								}
								else{
									email_write = "Invalid email address";
									email_error.html("<p>"+email_write+"</p>");
								}
							}
						}
			function val_pass1 (){
						if (pass1.val()==""){
							password_write = "Please input password";
							password_error.html("<p>"+password_write+"</p>");
						}else if (pass1.val()){
							if ((pass1.val()).length<=5){
								password_write = "Password must be at least 6 characters";
								password_error.html("<p>"+password_write+"</p>");
							}else if ((pass1.val()).length>=5){
									password_write = "";
									password_error.html("");
							}
						}
					}

					function val_pass2(){
						if (pass1.val()=="" && pass2.val()==""){
							password_write = "Please input password in password field first";
							confirm_password_error.html("<p>"+password_write+"</p>");
						}else if (password_write !=""){
							password_write = "Resolve issue in password field first";
							confirm_password_error.html("<p>"+password_write+"</p>");
						}else if(pass1.val() && password_write ==""){
							if (!pass2.val()){
								password_write = "Please repeat password";
								confirm_password_error.html("<p>"+password_write+"</p>");
							}else if(pass2.val()){
								if (pass2.val() != pass1.val()){
									password_write = "Password does not match";
									confirm_password_error.html("<p>"+password_write+"</p>");
								}else if (pass2.val() == pass1.val()){
									password_write = "";
									confirm_password_error.html("");
								}
							}
						}
						
					}

					function ajax_function_insert(){
						send_data = new FormData();
							send_data.append("ABabc567deCDE", "xIptOPtSdWW");
							send_data.append("email", email.val());
							send_data.append("password", pass1.val());
						 		$.ajax({
				                          url: '../processall/processAnyPhp.php',
				                          type: 'POST',
				                          data: send_data,
				                          processData: false,
				              			  contentType: false,
							              cache:false,
							              beforeSend: function() {
									        	$('#mainreg').attr("hidden", "hidden");
					 							$('#regremove').removeAttr('hidden'); 
								            },
								            complete: function(){ 
								            },
				                           success: function(values){
				                           		if(values == 7){
										                $('.regi ').effect('shake',{times:5,distance:10,direction:'right'},'slow', function(){
															logalert.addClass('card-content red-text');
										        			$('#loaders').html('<p>Email Already Registered. Login Instead Please.</p>');
										        			$('#regremove').attr('hidden','hidden'); 
										        			$('#mainreg').removeAttr("hidden");
														});
										            }else if(values == 5){
										            	alerti.addClass('card green lighten-5');
										            	$('#text').addClass('card-content green-text').html(' <p>Activation code sent to your mail.</p>');
										            	$('#login-form').trigger('reset');
										            	$('#regremove').attr('hidden','hidden');
										            	$('#mainreg').removeAttr('hidden');
										            }else if(values == 8){
										            	console.log('Cant Register');
										            }else{
										            	console.log(values);
										            }
				                      		}
				                });
					}

					function checkall(){
						email.on("focusout",val_email);
						pass1.on("focusout",val_pass1);
						pass2.on("focusout",val_pass2);
						reg_nowBtn.on('click', function(){
										val_email();
										val_pass1();
										val_pass2 ();
										if(email_write=="" && password_write=="" && nawao == " "){
											ajax_function_insert();
										}
									})
					}

					// var randomString = function(length=20) {
					//     var text = "";
					//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
					//     for(var i = 0; i < length; i++) {
					//         text += possible.charAt(Math.floor(Math.random() * possible.length));
					//     }
					//     return text;
					// }