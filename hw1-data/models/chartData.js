var mongoose = require('mongoose');

var chartDataSchema = new mongoose.Schema({
  Year: String,
  Oakland: String,
  San Francisco: String,
  San Jose: String
}, 
{
  collection: 'chart-data-collection'
});

mongoose.model('chartData', chartDataSchema);

