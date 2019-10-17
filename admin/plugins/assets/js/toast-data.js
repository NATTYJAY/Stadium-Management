/*Toast Init*/


$(document).ready(function() {
	"use strict";
	
	$.toast({
		heading: 'Welcome to Hyrax UX',
		text: 'The most complete user interface framework to create stunning admin dashboard.',
		position: 'bottom-right',
		loaderBg:'#fec107',
		icon: 'success',
		hideAfter: 4000, 
		stack: 6
	});
	
	$('.msg-tst').on('click',function(e){
	    $.toast().reset('all'); 
		$("body").removeAttr('class');
		$.toast({
            heading: '2 new messages',
            text: 'You have two new messages on the mail.',
            position: 'bottom-right',
            loaderBg:'#fec107',
            icon: 'info',
            hideAfter: 3000, 
            stack: 6
        });
		return false;
    });

	$('.wrng-tst').on('click',function(e){
        $.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Server not responding',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-right',
            loaderBg:'#ff2a00',
            icon: 'warning',
            hideAfter: 4000, 
            stack: 6
        });
		return false;
	});
	
	$('.scss-tst').on('click',function(e){
        $.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Welcome to Hyrax UX',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-right',
            loaderBg:'#fec107',
            icon: 'success',
            hideAfter: 4000, 
            stack: 6
          });
		return false;  
	});

	$('.err-tst').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Opps! somthing wents wrong',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-right',
            loaderBg:'#fec107',
            icon: 'error',
            hideAfter: 4000
        });
		return false;
    });
	
	$('.tst-tl').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class');
		$.toast({
            heading: 'Top Left',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'top-left',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
    });
	
	$('.tst-tr').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Top Right',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'top-right',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
    });
	
	$('.tst-bl').on('click',function(e){
		$.toast().reset('all');
		$("body").removeAttr('class');
		$.toast({
            heading: 'Bottom Left',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-left',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
    });
	
	$('.tst-br').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class');
		$.toast({
            heading: 'Bottom Right',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-right',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
	});
	
	$('.tst-tc').on('click',function(e){
	    $.toast().reset('all');   
		$("body").removeAttr('class').removeClass("bottom-center-fullwidth").addClass("top-center-fullwidth");
		$.toast({
            heading: 'Top Center',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'top-center',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
	});
	
	$('.tst-bc').on('click',function(e){
	    $.toast().reset('all');
		$("body").removeAttr('class').addClass("bottom-center-fullwidth");
		$.toast({
            heading: 'Bottom Right',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
            position: 'bottom-center',
            loaderBg:'#f63b62',
            hideAfter: 4000
        });
		return false;
	});
});
          
