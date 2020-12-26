var customTooltips = function(tooltip) {
			$(this._chart.canvas).css('cursor', 'pointer');

			var positionY = this._chart.canvas.offsetTop;
			var positionX = this._chart.canvas.offsetLeft;

			$('.chartjs-tooltip').css({
				opacity: 0,
			});

			if (!tooltip || !tooltip.opacity) {
				return;
			}

			if (tooltip.dataPoints.length > 0) {
				tooltip.dataPoints.forEach(function(dataPoint) {
					var content = [dataPoint.xLabel, dataPoint.yLabel].join(': ');
					var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

					$tooltip.html(content);
					$tooltip.css({
						opacity: 1,
						top: positionY + dataPoint.y + 'px',
						left: positionX + dataPoint.x + 'px',
					});
				});
			}
		};
		var color = Chart.helpers.color;
		var lineChartData = {
			labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'],
			datasets: [{
				label: 'RUB',
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				borderColor: window.chartColors.red,
				pointBackgroundColor: window.chartColors.red,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			},
      {
				label: 'USD',
				backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
				borderColor: window.chartColors.orange,
				pointBackgroundColor: window.chartColors.orange,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			},
      {
				label: 'Top Coin',
				backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
				borderColor: window.chartColors.blue,
				pointBackgroundColor: window.chartColors.blue,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			},
      {
				label: 'Lead Coin',
				backgroundColor: color(window.chartColors.yellow).alpha(0.2).rgbString(),
				borderColor: window.chartColors.yellow,
				pointBackgroundColor: window.chartColors.yellow,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
          randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]
		};

		window.onload = function() {
			var chartEl = document.getElementById('chart1');
			new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
						text: ''
					},
					tooltips: {
						enabled: false,
						mode: 'index',
						intersect: false,
						custom: customTooltips
					}
				}
			});
		};



    var customTooltips_2 = function(tooltip) {
    			$(this._chart.canvas).css('cursor', 'pointer');

    			var positionY = this._chart.canvas.offsetTop;
    			var positionX = this._chart.canvas.offsetLeft;

    			$('.chartjs-tooltip').css({
    				opacity: 0,
    			});

    			if (!tooltip || !tooltip.opacity) {
    				return;
    			}

    			if (tooltip.dataPoints.length > 0) {
    				tooltip.dataPoints.forEach(function(dataPoint) {
    					var content = [dataPoint.xLabel, dataPoint.yLabel].join(': ');
    					var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

    					$tooltip.html(content);
    					$tooltip.css({
    						opacity: 1,
    						top: positionY + dataPoint.y + 'px',
    						left: positionX + dataPoint.x + 'px',
    					});
    				});
    			}
    		};
    		var color = Chart.helpers.color;
    		var lineChartData = {
    				labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    			datasets: [{
    				label: 'RUB',
    				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
    				borderColor: window.chartColors.red,
    				pointBackgroundColor: window.chartColors.red,
    				data: [
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
              randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor()
    				]
    			},
          {
    				label: 'USD',
    				backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
    				borderColor: window.chartColors.orange,
    				pointBackgroundColor: window.chartColors.orange,
    				data: [
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
              randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor()
    				]
    			},
          {
    				label: 'Top Coin',
    				backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
    				borderColor: window.chartColors.blue,
    				pointBackgroundColor: window.chartColors.blue,
    				data: [
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
              randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor()
    				]
    			},
          {
    				label: 'Lead Coin',
    				backgroundColor: color(window.chartColors.yellow).alpha(0.2).rgbString(),
    				borderColor: window.chartColors.yellow,
    				pointBackgroundColor: window.chartColors.yellow,
    				data: [
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
              randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor(),
    					randomScalingFactor()
    				]
    			}]
    		};

    		window.onload = function() {
    			var chartEl = document.getElementById('chart2');
    			new Chart(chartEl, {
    				type: 'line',
    				data: lineChartData,
    				options: {
    					title: {
    						display: true,
    						text: ''
    					},
    					tooltips: {
    						enabled: false,
    						mode: 'index',
    						intersect: false,
    						custom: customTooltips
    					}
    				}
    			});
    		};






var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
        }]
    },

    // Configuration options go here
    options: {}
});
