var mongoose = require('mongoose');
var areaChartSchema = new mongoose.Schema({

});
var AreaChart = mongoose.model('AreaChart', areaChartSchema,'areachartstockprice');
module.exports = AreaChart
