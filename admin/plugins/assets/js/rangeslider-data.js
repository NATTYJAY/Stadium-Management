/**
* Theme: AdminUX Panel Admin Template
* Author: SRGIT
* Component: Ion Slider
* 
*/

$(document).ready(function () {
	"use strict";
    $("#range_a").ionRangeSlider();
    
    $("#range_b").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
    
    $("#range_c").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });
   
    $("#range_d").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });
    
    $("#range_e").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });
    
    $("#range_f").ionRangeSlider({
        grid: true,
        from: 3,
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    });
    
    $("#range_g").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 200000,
        step: 1000,
        prettify_enabled: true
    });
    
    $("#range_h").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
        disable: true
    });
});