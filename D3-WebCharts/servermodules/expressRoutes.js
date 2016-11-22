var ColumnChart = require('./models/columncharts');
var LineChart = require('./models/linecharts');
var ScatterPlotChart = require('./models/scatterplot');
var AreaChart = require('./models/areachart');

module.exports = function(app) {

	app.get('/api/areachart', function(req,res) {
		AreaChart.find(function(err, areachart) {
	 		console.log('coming here 99 areachart...');
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.send(areachart); // return all employees in JSON format
			console.log('coming here 999 areachart...', areachart);
		});

	});

	app.get('/api/columnchart', function(req,res) {
		ColumnChart.find(function(err, columnchart) {
	 		console.log('coming here 99 columnchart...');
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.send(columnchart); // return all employees in JSON format
			console.log('coming here 999 columnchart...', columnchart);
		});

	});

	app.get('/api/linechart', function(req,res) {
		LineChart.find(function(err, linechart) {
	 		console.log('coming here to line chart...');
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.send(linechart); // return all employees in JSON format
			console.log('coming here 999 line chart...', linechart);
		});

	});

	app.get('/api/scatterplot', function(req,res) {
		ScatterPlotChart.find(function(err, scatterplotchart) {
	 		console.log('coming here 99 scatterplot chart...');
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)
			res.send(scatterplotchart); // return all employees in JSON format
			console.log('coming here 999 scatterplot chart...', scatterplotchart);
		});

	});
	
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

}