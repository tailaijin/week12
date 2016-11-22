var mongoose = require('mongoose');  
var columnChartSchema = new mongoose.Schema({  
	
});
var ColumnChart = mongoose.model('ColumnChart', columnChartSchema,'columnchart');
module.exports = ColumnChart