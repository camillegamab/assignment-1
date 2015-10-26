'use strict';

/* Controllers */
google.load('visualization', '1', {
  packages: ['corechart']
});

google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['myApp']);
});

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',
    function($scope) {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Oakland', 'San Francisco'],
          ['1950',  390000, 790000],
          ['1960',  370000, 720000],
          ['1970',  360000, 700000],
          ['1980',  350000, 690000],
          ['1990',  390000, 720000],
          ['2000',  400000, 780000],
          ['2010',  390000, 800000],
          ['2012',  400000, 820000]
      ]);
      var options = {
        title: 'Municipal Population Growth:1950-2012'
      };
      var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

      chart.draw(data, options);
    }
  ])
    .controller('MyCtrl2', [
      function() {

      }
  ]);