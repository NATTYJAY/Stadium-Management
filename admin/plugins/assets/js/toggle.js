/*DataTable Init*/

"use strict"; 

/* Bootstrap switch Init*/
/* Switchery Init*/
var elems = Array.prototype.slice.call(document.querySelectorAll('.switch-bt'));
$('.switch-bt').each(function() {
	new Switchery($(this)[0], $(this).data());
});