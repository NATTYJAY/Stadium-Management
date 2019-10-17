/*Dashboard Init*/
 
"use strict"; 

/*****Load function start*****/
$(window).load(function(){
	window.setTimeout(function(){
		$.toast({
			heading: 'Welcome to Hyrax UX',
			text: 'The most complete user interface framework to create stunning admin dashboard.',
			position: 'bottom-right',
			loaderBg:'#2bb9c3',
			icon: 'success',
			hideAfter: 3500, 
			stack: 6
		});
	}, 3000);
});
/*****Load function* end*****/
$(document).ready(function(){
	if( $('#data_table_employee').length > 0 ) {
		$('#data_table_employee').DataTable({
		 "bFilter": false,
		 "bLengthChange": false,
		 "bPaginate": false,
		 "bInfo": false,
		});
	}
        // Initialize Skycons
        var icons = new Skycons(),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
        for (i = list.length; i--;) {
            var weatherType = list[i],
                elements = document.getElementsByClassName(weatherType);
            for (var e = elements.length; e--;) {
                icons.set(elements[e], weatherType);
            }
        }

        icons.play();
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(ff,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			grid:{
				show:false,
			},

			legend: {
				show:false,
			},

			singleAxis: {
				top: 0,
				bottom: 20,
				axisTick: {
					show:false
				},
				type: 'time',
				axisPointer: {
					animation: true,
					label: {
						show: true
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				axisLine: {
						show:false
				},
				splitLine: {
					show: false,
				}
			},

			series: [
				{
					type: 'themeRiver',
					color: ['#f14656', '#119dd2', '#2bb9c3'],
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						emphasis: {
							shadowBlur: 5,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					data: [['2018/01/08',10,'DQ'],['2018/01/09',15,'DQ'],['2018/01/10',35,'DQ'],
					['2018/01/14',20,'DQ'],['2018/01/15',21,'DQ'],['2018/01/16',17,'DQ'],
					['2018/01/17',33,'DQ'],['2018/01/18',40,'DQ'],['2018/01/19',32,'DQ'],
					['2018/01/20',26,'DQ'],['2018/01/21',35,'DQ'],['2018/01/22',40,'DQ'],
					['2018/01/23',32,'DQ'],['2018/01/24',26,'DQ'],['2018/01/25',22,'DQ'],
					['2018/01/08',35,'TY'],['2018/01/09',36,'TY'],['2018/01/10',37,'TY'],
					['2018/01/11',22,'TY'],['2018/01/12',24,'TY'],['2018/01/13',26,'TY'],
					['2018/01/14',34,'TY'],['2018/01/15',21,'TY'],['2018/01/16',18,'TY'],
					['2018/01/17',45,'TY'],['2018/01/18',32,'TY'],['2018/01/19',35,'TY'],
					['2018/01/20',30,'TY'],['2018/01/21',28,'TY'],['2018/01/22',27,'TY'],
					['2018/01/23',26,'TY'],['2018/01/24',15,'TY'],['2018/01/25',30,'TY'],
					['2018/01/26',35,'TY'],['2018/01/27',45,'TY'],['2018/01/28',42,'TY'],
					['2018/01/08',21,'SS'],['2018/01/09',30,'SS'],['2018/01/10',27,'SS'],
					['2018/01/11',23,'SS'],['2018/01/12',20,'SS'],['2018/01/13',21,'SS'],
					['2018/01/14',35,'SS'],['2018/01/15',39,'SS'],['2018/01/16',40,'SS'],
					['2018/01/17',36,'SS'],['2018/01/18',45,'SS'],['2018/01/19',43,'SS'],
					['2018/01/20',40,'SS'],['2018/01/21',30,'SS'],['2018/01/22',28,'SS'],
					]
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			color: ['#115e8c', '#13aeb0', '#2f4157', '#f14656'],
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',

				boundaryGap: false,
				splitLine: {
					show: false
				},
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				"splitArea": {
					"show": false
				},
				
				data: ['12', '11', '10', '5', '9', '9', '8', '3', '7', '2', '4', '6']
			},
			grid: {
				left: '6%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					show: false,
				},
			},
			series: [{
					name: 'A',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, -3.5, 1.0, 6.7, 1, 0, 4, 7,-0.6, 9, 1, 5]
				},

				{
					name: 'B',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, -1.2, 1, -0.2, -3, 0, 0, 3.4, 0, 3, -1, 0]
				}, {
					name: 'C',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, 2.3, 0, 1.2, -1, 3, 0, -3.3, 0, 2, -0.3, 0]
				},

				{
					name: 'D',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, 10, 0.12,4,1, 1, 0, 3.7, 0, 1, -3, 0]
				}
			]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
	
}
/*****E-Charts function end*****/

/*****Sparkline function start*****/
var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#716aca',
			fillColor: '#716aca',
			minSpotColor: '#716aca',
			maxSpotColor: '#716aca',
			spotColor: '#716aca',
			highlightLineColor: '#716aca',
			highlightSpotColor: '#716aca'
		});
	}	
	if( $('#sparkline_1_1').length > 0 ){
		$("#sparkline_1_1").sparkline([9,5,1,4,6,9,1,4,3,5,8,2 ], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#34bfa3',
			fillColor: 'transparent',
			minSpotColor: '#34bfa3',
			maxSpotColor: '#34bfa3',
			spotColor: '#34bfa3',
			highlightLineColor: '#34bfa3',
			highlightSpotColor: '#34bfa3'
		});
	}	
	
	if( $('#sparkline_1_2').length > 0 ){
		$("#sparkline_1_2").sparkline([0,2,8,6,8,5,3,5,7,2,4,9,1 ], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#f4516c',
			fillColor: '#f4516c',
			minSpotColor: '#f4516c',
			maxSpotColor: '#f4516c',
			spotColor: '#f4516c',
			highlightLineColor: '#f4516c',
			highlightSpotColor: '#f4516c'
		});
	}	
	if( $('#sparkline_1_3').length > 0 ){
		$("#sparkline_1_3").sparkline([0,2,8,6,8,5,6,4,8,6,6,2], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#00c5dc',
			fillColor: 'transparent',
			minSpotColor: '#00c5dc',
			maxSpotColor: '#00c5dc',
			spotColor: '#00c5dc',
			highlightLineColor: '#00c5dc',
			highlightSpotColor: '#00c5dc'
		});
	}	
	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([10,0,0,6,8,5,3,5,7,2,4], {
			type: 'bar',
			width: '100%',
			height: '35',
			barWidth: '5',
			barSpacing: '5',
			barColor: '#2bb9c3',
			highlightSpotColor: '#2bb9c3'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([20, 40, 25, 45, 40, 35, 56, 40, 20, 45, 59, 17, 10], {
			type: 'bar',
			width: '100%',
			height: '45',
			barWidth: '10',
			barSpacing: '5',
			barColor: '#2bb9c3',
			highlightSpotColor: '#2bb9c3'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([6,2,8,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			lineColor: '#2bb9c3',
			fillColor: '#2bb9c3',
			minSpotColor: '#2bb9c3',
			maxSpotColor: '#2bb9c3',
			spotColor: '#2bb9c3',
			highlightLineColor: '#2bb9c3',
			highlightSpotColor: '#2bb9c3'
		});
	}	

	if( $('#sparkline_6').length > 0 ){
		$("#sparkline_6").sparkline([12,4,7,3,8,6,8,5], {
			type: 'bar',
			width: '100%',
			height: '124',
			barWidth: '3',
			resize: true,
			barSpacing: '10',
			barColor: '#2bb9c3',
			highlightSpotColor: '#2bb9c3'
		});
	}	
	if( $('#sparkline_7').length > 0 ){
		$("#sparkline_7").sparkline([5,4,24], {
			type: 'pie',
			width: '100',
			height: '100',
			sliceColors: ['#d36ee8', '#119dd2', '#2bb9c3'],
		});
	}	
}
/*****Sparkline function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/
 
/*****Function Call start*****/
sparklineLogin();
echartsConfig();
/*****Function Call end*****/
