// Chart 1
var options1 = {
	chart: {
		height: 110,
		width: "100%",
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 2,
	},
	series: [
		{
			name: "Off Shore",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#dae1ea",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	xaxis: {
		labels: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#28256d"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#28256d"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
};
var chart = new ApexCharts(document.querySelector("#revenue"), options1);
chart.render();

// Chart 2
var options2 = {
	chart: {
		height: 110,
		width: "100%",
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 2,
	},
	series: [
		{
			name: "Off Shore",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#dae1ea",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	xaxis: {
		labels: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#627892"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#627892"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
};
var chart = new ApexCharts(document.querySelector("#revenue2"), options2);

chart.render();

// Chart 3
var options3 = {
	chart: {
		height: 110,
		width: "100%",
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 2,
	},
	series: [
		{
			name: "Off Shore",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#dae1ea",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	xaxis: {
		labels: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#4c8400"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#4c8400"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
};
var chart = new ApexCharts(document.querySelector("#revenue3"), options3);

chart.render();

// Chart 4
var options4 = {
	chart: {
		height: 110,
		width: "100%",
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 2,
	},
	series: [
		{
			name: "Off Shore",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#dae1ea",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	xaxis: {
		labels: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#c01d1d"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#c01d1d"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
};
var chart = new ApexCharts(document.querySelector("#revenue4"), options4);

chart.render();
