$(document).ready(function(){
	
	/*Intialization of variable or parameters. or Anything you wan call am*/
	emaillog = $('#logemail');
 	logid = $('#logBtx');
 	passlog = $('#userpassword');
 	hideremem = $('#rem');
 	rememberme = $('input[type="checkbox"]');
  	emaillog_error = $('#err_emaillog');
  	emaillog_write="";
  	logalert = $('#logalert');
	loginhrm();
});
		function val_emaillog(){
							if (emaillog.val()==""){
								emaillog_write = "Please provide your email address";
								emaillog_error.html("<p>"+emaillog_write+"</p>");
							}else if(emaillog.val()){
								user_email = emaillog.val();
								email_filter = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
								if(email_filter.test(user_email)){
									emaillog_write = "";
									emaillog_error.html("");
								}
								else{
									emaillog_write = "Invalid email address";
									emaillog_error.html("<p>"+emaillog_write+"</p>");
								}
							}
		}
			
		function ajax_login(){
				send_data = new FormData();
				send_data.append("xIptOPt8SdWW", "ABabc5678deCDE");
				send_data.append("emaillog", emaillog.val());
				send_data.append("passlog", passlog.val());
					$.ajax({
				        url: 'angenda/kingdom/alright',
				        type: 'POST',
				        data: send_data,
				        processData: false,
				        contentType: false,
				        cache:false,
				         dataType: "json",
				        beforeSend: function() {
				        	$('#logBtx').attr("hidden", "hidden");
 							$('#logremove').removeAttr('hidden');                              
			            },
			            complete: function(){ 
			            },
				        success: function(values){
				        	if(values==9){
				        		location.assign("./dashb");
				        	}
				        	else if(values==10){
				        			logalert.addClass('alert alert-danger mb-2');
				        			logalert.html('<p><b>Email or Password Incorrect.</b></p>');
				        			$('#logremove').attr('hidden','hidden'); 
				        			$('#logBtx').removeAttr("hidden");
				        	}else{
									console.log('Something went wrong');
				        	}
				        }
				});			
		}


		function setCookie(cname, cvalue, exdays) {
    		var d = new Date();
    		d.setTime(d.getTime() + (exdays*24*60*60*1000));
    		document.cookie = cname + "=" + cvalue + ";" + ";path=/";
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		}

		function checkCookie(cookiename) {
		    var username = getCookie(cookiename);
		    if (username != "") {
		        return true;
		    } else {
		         return false;
		    }
		}

		function loginhrm(){
			if(checkCookie('remindmepass') && (checkCookie('remindmeemail'))){
				hideremem.attr('hidden','hidden');
				passcook = getCookie('remindmepass');
				emailcook = getCookie('remindmeemail');
				passlog.val(passcook);
				emaillog.val(emailcook);
			}else{
				hideremem.removeAttr('hidden');
			}
			emaillog.on("focusout",val_emaillog);
			logid.on('click', function(){
				
				val_emaillog();
					if(rememberme.is(':checked')){
						setCookie('remindmeemail',emaillog.val(), 100);
						setCookie('remindmepass',passlog.val(), 100);
					}
				if(emaillog_write==""){
					ajax_login();
				}
										
									
			})
		}