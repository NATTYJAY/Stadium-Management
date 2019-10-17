/*Dashboard Init*/
 
"use strict"; 

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
	

	
	
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option1 = {
			animation: false,
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
			color: ['#667add'],	
			grid: {
				top: 60,
				left:40,
				bottom: 30
			},
			xAxis: {
				type: 'value',
				position: 'top',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					show:false
				},
			},
			yAxis: {
				splitNumber: 25,
				type: 'category',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				axisTick: {
					show: true
				},
				splitLine: {
					show:false
				},
				data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
			},
			series: [{
				name: 'emp',
				type: 'bar',
				barGap: '-100%',
				label: {
					normal: {
						textStyle: {
							color: '#682d19'
						},
						position: 'left',
						show: false,
						formatter: '{b}'
					}
				},
				itemStyle: {
					normal: {
						color: '#667add',
					}
				},
				data: [190, 102, 160, 200, 110, 180, 280, 140, 220, 300]
			}, {
				type: 'line',
				silent: true,
				barGap: '-100%',
				data: [100, 100, 400, 170, 200, 300, 100, 200, 120, 200],
				itemStyle: {
					normal: {
						color: '#fd7397',

					}
				},

			}]
		}
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			color: ['#667add', '#00a5d1', '#57bce1', '#fd7397'],
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
				
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
					data: [0, -7.5, -1.0, 3.7, 0, -3, 8, 0,-3.6, 4, -2, 0]
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
					data: [0, -2.2, 2, -2.2, 0, -1.5, 0, 2.4, -1, 3, -1, 0]
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
					data: [0, 10, 0.13,2,0, 2, 0, 3.7, 0, 1, -3, 0]
				}
			]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var data = [];
		for (var i = 0; i <= 10; i++) {
			var theta = i / 100 * 360;
			var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
			data.push([r, theta]);
		}
		var option4 = {
			polar: {},
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			angleAxis: {
				type: 'value',
				startAngle: 0,
				axisLine: {
					lineStyle: {
						color: 'rgba(33, 33, 33, 0.1)'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
			},
			radiusAxis: {
				axisLine: {
					lineStyle: {
						color: 'rgba(33, 33, 33, 0.1)'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
			},
			series: [{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				lineStyle: {
					normal: {
						color: '#667add',
					}
				},
				itemStyle: {
					normal: {
						color: '#667add',
					}
				},
				 areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						   offset: 0,
						   color: '#667add'
						   }, {
						   offset: 1,
						   color: '#667add'
						}])
					}
					},
				
				data: data
			}]
		};
		eChart_4.setOption(option4);
		eChart_4.resize();
	}
}
/*****E-Charts function end*****/

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/



