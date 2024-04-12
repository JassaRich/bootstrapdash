var options = {
	chart: {
		height: 354,
		type: "bar",
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: "70%",
			borderRadius: 8,
			distributed: true,
			dataLabels: {
				position: "top",
			},
		},
	},
	series: [
		{
			name: "Balance",
			data: [52, 73, 34, 66, 82, 49, 38, 59, 44, 86, 30, 60],
		},
	],
	legend: {
		show: false,
	},
	xaxis: {
		categories: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		axisBorder: {
			show: false,
		},
		yaxis: {
			show: false,
		},

		tooltip: {
			enabled: true,
		},
		labels: {
			show: true,
			rotate: -45,
			rotateAlways: true,
		},
	},
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
			top: 0,
			right: 0,
			bottom: 0,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + " million";
			},
		},
	},
	colors: [
		"#c7c6ec",
		"#a2a0df",
		"#7d7ad2",
		"#5854c5",
		"#3f3aab",
		"#312d85",
		"#ea95bf",
		"#b5d085",
	],
};
var chart = new ApexCharts(document.querySelector("#activityReport"), options);
chart.render();
