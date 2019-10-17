/*Flot Init*/
$(function() {
	"use strict";
	
	var data = [],
	totalPoints = 600;

	/*Getting Random Data*/
	function getRandomData() {

		if (data.length > 0)
			data = data.slice(1);

		// Do a random walk

		while (data.length < totalPoints) {

			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;

			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}

			data.push(y);
		}

		// Zip the generated y values with the x values

		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}

		return res;
	}
	
	/***Real time Chart***/
	if( $('#filled-real-time').length > 0 ){
		/*Defining Option*/
		var realtime_chartop = {
			series:{
				shadowSize: 4,
				lines: {
					fill: 4
				},
			},
			grid: {
				color: "rgba(0,0,0,0)",
				hoverable: true,
				borderWidth: 0,
				backgroundColor: 'transparent'
			},
			colors: ["#716ACA"],
			tooltip: true,
			tooltipOpts: {
				content: "Y: %y",
				defaultTheme: false
			},
			yaxis: {
					min: 0,
					max: 150,
					font : {
						color : '#000000'
					}
			},
			xaxis: {
				show: false,
				font : {
					color : '#000000'
				}
			}
			
		};
		
		/*Defining Data*/
		var realtime_chartop_data = {
			data: getRandomData(),
		}

		/*Chart Plot*/
		$.plot($("#filled-real-time"), [realtime_chartop_data], realtime_chartop);
		
		/*Realtime Data*/
		setInterval(function updateRandom() {
			realtime_chartop_data = getRandomData();
			$.plot($("#filled-real-time"), [realtime_chartop_data], realtime_chartop)
		}, 10);
	}

	/***Line Chart***/	

	if( $('#dna-line-chart').length > 0 ){	
		/*Defining Option*/
		var line_chartop = {
				series: {
					shadowSize: 0,
					lines: {
						show: true
					},
					points: {
						show: true
					}
				},

				yaxis: {
					min: -1,
					max: 1,
					font : {
						color : '#878787'
					}
				},
				xaxis: {
					show: false,
				},
				colors: ["#F04757", "#115E8C"],   
				grid: {
					color:"rgba(0,0,0,0)",
					hoverable: true,
					borderWidth: 0,
				},
				legend : {
					backgroundColor: 'transparent',
				},
				tooltip: true,
				tooltipOpts: {
					content: "'%s' of %x.1 is %y.4",
					shifts: {
						x: -20,
						y: 15
					}
				}
			};
		
			var sin = [],
				cos = [];
			var offset = 0;	
			for (var i = 0; i < 10; i += 0.3) {
				sin.push([i, Math.sin(i + offset)]);
				cos.push([i, Math.cos(i + offset)]);
			}
			/*Defining Data*/
			var line_chart_data= [{
				label: "Data 1",
				data: sin,
			}, 
			{
				label: "Data 2",
				data: cos,
			}];
		
			/*Plot*/
			$.plot($("#dna-line-chart"), line_chart_data, line_chartop);
	}

	
	/***Pie Chart***/
	if( $('#simple-pie-chart').length > 0 ){
		var pie_data = [{
			label: "Product X",
			data: 5,
			color: "rgba(26, 152, 159,1)",
			
		}, {
			label: "Product Y",
			data: 6,
			color: "rgba(241, 70, 86,1)",
		}, {
			label: "Product Z",
			data: 4,
			color: "rgba(47,67,87,1)",
		}, {
			label: "Product A",
			data: 2,
			color: "rgba(74, 162, 60,1)",
		}];

		var pie_op = {
			series: {
				pie: {
					innerRadius: 0.3,
					show: true,
					stroke: {
						width: 1,
					}
				}
			},
			legend : {
				backgroundColor: 'transparent',
			},
			grid: {
				hoverable: true
			},
			color: null,
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false
			},
		};
		$.plot($("#simple-pie-chart"), pie_data, pie_op);
	}

	/***Filled Line Chart***/
	if( $('#moving-real-time-line').length > 0 ){	
		/*Defining Option*/
		var fill_line_chartop = {
			series:{
				shadowSize: 0,
				lines: {
					fill: false
				},
			},
				grid: {
				color: "rgba(0,0,0,0)",
				hoverable: true,
				borderWidth: 0,
				backgroundColor: 'transparent'
			},
			colors: ["#2ba1cd"],
			tooltip: true,
			tooltipOpts: {
				content: "Y: %y",
				defaultTheme: false
			},
			yaxis: {
					min: 0,
					max: 150,
					font : {
						color : '#878787'
					}
			},
			xaxis: {
				show: false
			}
		};
		
		/*Defining Data*/
		var fill_line_chart_data = {
			data: getRandomData(),
		}

		/*Chart Plot*/
		$.plot($("#moving-real-time-line"), [fill_line_chart_data], fill_line_chartop);
		
		/*Realtime Data*/
		setInterval(function updateRandom() {
			fill_line_chart_data = getRandomData();
			$.plot($("#moving-real-time-line"), [fill_line_chart_data], fill_line_chartop)
		}, 80);	
	}

	/***Bar Chart***/		
	if( $('#simple-bar-chart').length > 0 ){    
		/*Defining Option*/
		var barOptions = {
			series: {
				bars: {
					show: true,
					fill : 1,
					barWidth: 28153212
				}
			},
			yaxis: {
				font : {
					color : '#000000'
				}
			},
			xaxis: {
				mode: "time",
				timeformat: "%m/%d",
				minTickSize: [10, "day"],
				font : {
					color : '#878787'
				}
			},
			
			legend: {
				show: false
			},
			grid: {
					color: "rgba(0,0,0,0)",
					hoverable: true,
					borderWidth: 0,
					backgroundColor: 'transparent'
				},
			tooltip: true,
			tooltipOpts: {
				content: "x: %x, y: %y"
			}
		};
	   
		/*Defining Data*/
		var barData = {
			label: "bar",
			color: "#115E8C",
			data: [
				[1354521600000, 1000],
				[1355040000000, 2000],
				[1355223600000, 3000],
				[1355306400000, 4000],
				[1355487300000, 5000],
				[1355571900000, 6000]
				
			]
		};
		
		/*Plot*/
		$.plot($("#simple-bar-chart"), [barData], barOptions);	
	}
	
	/***Sales Chart***/
	if( $('#sales-bar-chart').length > 0 ){	
		/*Defining Data*/
		var d1 = [];
		for (var i = 0; i <= 10; i += 1)
			d1.push([i, parseInt(Math.random() * 30)]);

		var d2 = [];
		for (var i = 0; i <= 10; i += 1)
			d2.push([i, parseInt(Math.random() * 20)]);

		var d3 = [];
		for (var i = 0; i <= 10; i += 1)
			d3.push([i, parseInt(Math.random() * 15)]);

		var ds = [{
			label : "Product One",
			data : d1,
			bars : {
				order : 1
			}
		},
		{
			label : "Product Two",
			data : d2,
			bars : {
				order : 2
			}
		},
		{
			label : "Product Three",
			data : d3,
			bars : {
				order : 3
			}
			
		}];

		var stack = 0,
			bars = true,
			lines = true,
			steps = true;
		
		/*Defining Option*/
		var sales_op = {
			bars : {
				show : true,
				barWidth : 0.2,
				fill : 1
			},
			grid : {
				color: "rgba(0,0,0,0)",
				hoverable: true,
				borderWidth: 0,
				backgroundColor: 'transparent'
			},
			series : {
				stack : stack
			},
			legend : {
				position : "ne",
				margin : [10, 0],
				backgroundColor: 'transparent',
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 60,
				height : 45
			},
			yaxis : {
				font : {
					color : '#878787'
				}
			},
			xaxis : {
				font : {
					color : '#878787'
				}
			},
			colors : ["#115E8C", "#13AEB0", "#716ACA"],
			tooltip : true, //activate tooltip
			tooltipOpts : {
				content : "%s : %y.0",
				shifts : {
					x : -10,
					y : -10
				}
			}
		};

		$.plot($("#sales-bar-chart"), ds, sales_op);
	}	
});

