var mongoose = require('mongoose');  
var lineChartSchema = new mongoose.Schema({  
	
});
var LineChart = mongoose.model('LineChart', lineChartSchema,'linechart');
module.exports = LineChart