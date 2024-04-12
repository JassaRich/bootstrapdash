// Sparkline 1
var options1 = {
	series: [
		{
			name: "Views",
			data: [5, 10, 30, 15, 35, 25, 45],
		},
	],
	chart: {
		type: "line",
		width: 60,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: "70%",
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		marker: {
			show: false,
		},
	},
	grid: {
		borderColor: "#044192",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: true,
			},
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	colors: ["#855b2f"],
	xaxis: {
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " Sales";
			},
		},
	},
};

var chart1 = new ApexCharts(document.querySelector("#sparkline1"), options1);
chart1.render();

// Sparkline 2
var options2 = {
	series: [
		{
			name: "Views",
			data: [5, 10, 30, 15, 35, 25, 45],
		},
	],
	chart: {
		type: "line",
		width: 60,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: "70%",
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		marker: {
			show: false,
		},
	},
	colors: ["#008060"],
	xaxis: {
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " Sales";
			},
		},
	},
};

var chart2 = new ApexCharts(document.querySelector("#sparkline2"), options2);
chart2.render();

// Sparkline 3
var options3 = {
	series: [
		{
			name: "Views",
			data: [5, 10, 30, 15, 35, 25, 45],
		},
	],
	chart: {
		type: "line",
		width: 60,
		height: 30,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: "70%",
		},
	},
	xaxis: {
		crosshairs: {
			width: 1,
		},
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		marker: {
			show: false,
		},
	},
	colors: ["#ab1d07"],
	xaxis: {
		categories: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " Sales";
			},
		},
	},
};

var chart3 = new ApexCharts(document.querySelector("#sparkline3"), options3);
chart3.render();
