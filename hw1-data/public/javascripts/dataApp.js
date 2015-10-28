var app = angular.module('simple-data', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainCtlr', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
  var dataArray = formatDataForView(data);

  var table = google.visualization.arrayToDataTable(dataArray, false);
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  
  var options = {'title':'Municipal Population Growth: 1950-2012'}
  chart.draw(table, options);

  });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(parseInt(value[prop], 0));
        }
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}