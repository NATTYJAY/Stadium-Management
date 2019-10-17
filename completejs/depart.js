$(document).ready(function(){
	/*Intialization of variable or parameters. or Anything you wan call am*/
	dept_name  = $('#dept_name');
	dept_desc  = $('#dept_desc');
	alertdpt   = $('#alertdpt');

	dept_nameu = $('#dept_nameu');
	dept_descu = $('#dept_descu');
	dept_id_up = $('#dept_id_up');


	/*Unit variable start*/

	dept_id_unit = $('#dept_id_unit');
	unit_name	   = $('#unit_name');
	unit_desc	   = $('#unit_desc');
	alertunit      = $('#alertunit');

	deptBtx    = $('#deptBtx');
	insertdept();
	insertunit();
});

  function faint(){
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

function ajax_department(){
		send_data = new FormData();
		send_data.append("xIBaثانSdWW", "ABaثانيةbDE");
		send_data.append("dept_name", dept_name.val());
		send_data.append("dept_desc", dept_desc.val());
			$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		         dataType: "json",
		        beforeSend: function() {
		        	faint();                              
	            },
	            complete: function(){ 
	            },
		        success: function(data){
		        	if(data==150){
		        		alertdpt.addClass('alert alert-danger mb-2');
		        		alertdpt.html('<p><b>Department Already Exits.</b></p>');
		        	}else if(data ==11){
		        		alertdpt.addClass('alert alert-success mb-2');
		        		alertdpt.html('<p><b>Department Added Successfully.</b></p>');
		        		location.reload();
		        	}
		        	else if(data==12){
		        			alertdpt.addClass('alert alert-danger mb-2');
		        			alertdpt.html('<p><b>Department Could not Be Added.</b></p>');
		        	}else{
							alertdpt.addClass('alert alert-danger mb-2');
		        			alertdpt.html('<p><b>Something Went wrong. Try again</b></p>');
		        	}
		        }
		});			
}

function ajax_update(idp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBaثW  : "يةbDE",
				eid : idp
			},
			dataType:"json",
			success: function(datas){
				$('#dept_nameu').val(datas.dept_name);
				$('#dept_descu').val(datas.dept_desc);
				$('#dept_id_up').val(datas.dept_id);
				$('#update_dept').modal('show').fadeIn('fast');
			}
		});
}

function updatedept_ajax(){

		dept_name = dept_nameu.val();
		dept_desc = dept_descu.val();
		dept_id_up = dept_id_up.val();
			$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBانW  : "AثاBaنE",
				dept_name : dept_name,
				dept_desc : dept_desc,
				dept_id_up : dept_id_up
			},
			dataType:"html",
			success: function(data){
				if(data == 13){
					$('#alertupdate').addClass('alert alert-success mb-2');
		        	$('#alertupdate').html('<p><b>Department Updated Successfully.</b></p>');
		        		setTimeout(function(){$("#update_dept").modal("hide");location.reload();}, 200);
				}else{
					$('#alertupdate').addClass('alert alert-danger mb-2');
		        	$('#alertupdate').html('<p><b>Failed to Update .</b></p>');
				}
			}
		});
}

function ajax_delete(idp_del){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBaثWIB  : "يDEةbDE",
				idp_del : idp_del
			},
			dataType:"json",
			success: function(dat){
				$('#name_deptdel').text(dat.dept_name);
				$('#name_deptdelid').val(dat.dept_id);
				$('#delete_dept').modal('show').fadeIn('fast');
			}
		});
}

function ajax_final_delete(){
	getid = $('#name_deptdelid').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xAثاBaنانW  : "AثaناناBaنE",
				getid : getid
			},
			dataType:"html",
			success: function(data){
				if(data == 15){
					$('#alertdelete').addClass('alert alert-success mb-2');
		        	$('#alertdelete').html('<p><b>Department Deleted.</b></p>');
		        		setTimeout(function(){$("#delete_dept").modal("hide");location.reload();faint();}, 200);
				}else{
					$('#alertdelete').addClass('alert alert-danger mb-2');
		        	$('#alertdelete').html('<p><b>Failed to Delete. Try Again Later</b></p>');
				}
			}
		});
}

// $('#alertupdate');
function insertdept(){
		deptBtx.on('click', function(){
				ajax_department();
				})
	 	$(document).on('click', '.updatedept', function(){
		 	idr = $(this).attr("id");
		 	ajax_update(idr);
		});
	 	$('#deptBTXupdate').on('click',function(){
	 		updatedept_ajax();
	 	})
 		$(document).on('click', '.deletedeptm', function(){
	 		idrp = $(this).attr("id");
	 		ajax_delete(idrp);
		});
		$('#deptBTXdelete').on('click', function(){
			ajax_final_delete();
		})
}


function ajax_unit(){
	send_data = new FormData();
		send_data.append("xIB26aثاW", "a12ثانيةDE");
		send_data.append("dept_id_unit", dept_id_unit.val());
		send_data.append("unit_name", unit_name.val());
		send_data.append("unit_desc", unit_desc.val());
			$.ajax({
		        url: 'angenda/kingdom/alright',
		        type: 'POST',
		        data: send_data,
		        processData: false,
		        contentType: false,
		        cache:false,
		         dataType: "json",
		        beforeSend: function() {
		        	faint();                              
	            },
	            complete: function(){ 
	            },
		        success: function(data){
		        	if(data==152){
		        		alertunit.addClass('alert alert-danger mb-2');
		        		alertunit.html('<p><b>Unit Already Exits.</b></p>');
		        	}else if(data ==118){
		        		alertunit.addClass('alert alert-success mb-2');
		        		alertunit.html('<p><b>Unit Added Successfully.</b></p>');
		        		location.reload();
		        	}
		        	else if(data==12){
		        			alertunit.addClass('alert alert-danger mb-2');
		        			alertunit.html('<p><b>Unit Could not Be Added.</b></p>');
		        	}else{
							alertunit.addClass('alert alert-danger mb-2');
		        			alertunit.html('<p><b>Something Went wrong. Try again</b></p>');
		        	}
		        }
		});			
}



function updateajaxunit(){
		up_unit_name = $('#up_unit_name').val();
		up_unit_desc = $('#up_unit_desc').val();
		up_dept_unit = $('#up_dept_unit').val();
		unit_id_up	 = $('#unit_id_up').val();
			
			$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				AثاBaن24  : "xIB6uانW",
				up_unit_name : up_unit_name,
				up_unit_desc : up_unit_desc,
				up_dept_unit : up_dept_unit,
				unit_id_up   : unit_id_up
			},
			dataType:"html",
			success: function(data){
				if(data == 419){
					$('#alertunits').addClass('alert alert-success mb-2');
		        	$('#alertunits').html('<p><b>Unit Updated Successfully.</b></p>');
		        		setTimeout(function(){$("#update_unit").modal("hide");location.reload();}, 200);
				}else{
					$('#alertunits').addClass('alert alert-danger mb-2');
		        	$('#alertunits').html('<p><b>Failed to Update .</b></p>');
				}
			}
		});
}

function ajax_update_unit(id_unit){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				x98ضلaثW  : "المفالأسود",
				xid : id_unit 
			},
			dataType:"json",
			success: function(dxdy){
				$('#unit_id_up').val(dxdy.unit_id);
				$('#up_unit_name').val(dxdy.unit_name);
				$('#up_unit_desc').val(dxdy.unit_desc);
				$('#update_unit').modal('show').fadeIn('fast');
			}
		});
}

function ajax_delete_unit(idp){
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xIBEةbثWIB  : "يثWIDt6ةbDE",
				idp_dele : idp
			},
			dataType:"json",
			success: function(datas){
				$('#name_unity').text(datas.unit_name);
				$('#del_unitid').val(datas.unit_id);
				$('#delete_units').modal('show').fadeIn('fast');
			}
		});
}

function ajax_final_delete_unit(){
	get_unitid = $('#del_unitid').val();
		$.ajax({
			url:'angenda/kingdom/alright',
			method:'POST',
			data:{
				xAثاBpldo9انW  : "Aثedaنا68ikoE",
				get_unitid : get_unitid
			},
			dataType:"html",
			success: function(data){
				if(data == 'peace'){
					$('#aletdeleteunit').addClass('alert alert-success mb-2');
		        	$('#aletdeleteunit').html('<p><b>Unit Deleted.</b></p>');
		        		setTimeout(function(){$("#delete_dept").modal("hide");location.reload();faint();}, 200);
				}else{
					$('#aletdeleteunit').addClass('alert alert-danger mb-2');
		        	$('#aletdeleteunit').html('<p><b>Failed to Delete. Try Again Later</b></p>');
				}
			}
		});
}

function insertunit(){
	$('#addbtXunit').on('click',function(){
		ajax_unit();
	});

	$(document).on('click', '.editBtxu', function(){
		 	idr = $(this).attr("id");
		 	ajax_update_unit(idr);
		});

	$(document).on('click', '.editBtxd', function(){
	 		idrp = $(this).attr("id");
	 		alert(idrp);
		}); 
	$('#UpdateBtxUnit').on('click',function(){
		updateajaxunit();
	})

	$(document).on('click', '.deleteunit', function(){
	 		idp = $(this).attr("id");
	 		ajax_delete_unit(idp);
		});

	$('#unitBTXdelete').on('click',function(){
		ajax_final_delete_unit();
	})

	

}