var mongoose = require('mongoose');  
var scatterPlotChartSchema = new mongoose.Schema({  
	
});
var ScatterPlotChart = mongoose.model('ScatterPlotChart', scatterPlotChartSchema,'scatterplotchart');
module.exports = ScatterPlotChart