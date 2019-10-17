$(document).ready(function(){
	/*Intialization of variable or parameters. or Anything you wan call am*/
	values_request = $('#accept_form');

	emppidr = $('#idr');
	leaveaccept();
});


function ajax_response_leave(liv_id,emid){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				preciourrrrsc: "killorforget",
				leave_idr : liv_id,
				emp_id : emid
			},
			dataType:"Json",
			success: function(datas){
				$('#idr').val(datas['emp_id']);
				$('#leavedid').val(datas['leave_id']);
				$('#animation').modal('show').fadeIn('fast');
			}
		});
}

function ajax_read_all(li_id,eid){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				gracersc: "sinnotleave",
				l_idr : li_id,
				e_idr : eid
			},
			dataType:"Json",
			success: function(datas){
				$('#imgr').html('<img src="./passports/'+datas.emp_image+'" alt="Avatar" style="width:100%; height:10%; border-radius:60px 60px 60px 60px;">');
				$('.n_name').text(datas.emp_fname+" "+" "+ datas.emp_lname);
				$('.d_date').text(datas.applied_date +"---"+datas.applied_time);
				$('.n_leave').text(datas.leave_start);
				$('.r_date').text(datas.leave_end);
				$('.reaons').text(datas.reasons);
				$('.l_type').text(datas.leave_type_name);
					switch (datas.status){
						case '0':
						$('.sta').html('<button class="badge badge-warning" ><i class="fa fa-pencil"></i> Pending</button>');
						break;
						case '1':
						$('.sta').html('<button class="badge badge-success" ><i class="fa fa-pencil"></i> Granted</button>');
						break;
						case '2':
						$('.sta').html('<button class="badge badge-danger" ><i class="fa fa-pencil"></i> Rejected</button>');
						break;
						default:
						break;
					}
				$('#leavemodal').modal('show').fadeIn('fast');
			}
		});
}

function update_request(){
		ido = emppidr.val();
		rt = $('#leavedid').val();
		status = values_request.val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				hmmnawa: "mpokaba",
				emp_id : ido,
				leaveid : rt,
				status  : status
			},
			dataType:"html",
			success: function(datas){
				if(datas == 531){
					$('#statalert').addClass('alert alert-success mb-2');
		        	$('#statalert').html('<p><b>Successful !.</b></p>');
		        		setTimeout(function(){$("#animation").modal("hide");location.reload();}, 1000);
				}else{
					alert('Error Occur');
				}
			}
		});
}

function leaveaccept(){
	$(document).on('click','.pen',function(){
		liv_id = $(this).attr("id");
		emid   = $(this).attr("data");
		ajax_response_leave(liv_id,emid);
	});

	$(document).on('click','.readnow',function(){
		leave_id = $(this).attr("id");
		em_id = $(this).attr("data");
		ajax_read_all(leave_id,em_id);
	})

	$('.request').on('click',function(){
		update_request();
	})
}