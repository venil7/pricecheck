!function(){
  
  "use strict";

  var app = angular.module('pricecheck', ['ngTouch']);

  // buy 1 get 1 free strategy
  app.factory('bogofStrategy', function() {
    var that = this;
    this.name = "Buy One Get One Free";
    this.count = 2;
    this.calculateUnitPrice = function(/*number*/totalPrice, /*number*/units) {
      return (totalPrice/that.count)/units;
    };
    return this;
  });

  // X for $$$
  app.factory('xForPriceStrategy', function() {
    var that = this;
    this.name = "X Items for $$$";
    this.calculateUnitPrice = function(/*number*/price, /*number*/units, /*number*/count) {
      return (price/count)/units;
    };
    return this;
  });

  // single Item
  app.factory('singleItemStrategy', function() {
    var that = this;
    this.name = "Single Item";
    this.count = 1;
    this.calculateUnitPrice = function(/*number*/price, /*number*/units) {
      return (price)/units;
    };
    return this;
  });

  app.controller('mainCtrl', ['$scope', 
    'bogofStrategy', 'xForPriceStrategy', 'singleItemStrategy',
    function($scope, s1, s2, s3) {
      $scope.strategies = [s1, s2, s3];
      $scope.offers = [];

      var resetForm = function() {
        $scope.strategy = null;
        $scope.price = null;
        $scope.units = null;
        $scope.count = null;
        $scope.addForm.$setPristine();
      };

      $scope.add = function(data, strategy) {
        $scope.offers.push({
          data: data,
          strategy: strategy
        });
        resetForm();
      };

      $scope.clear = function() {
        $scope.offers.length = 0;
        resetForm();
      };

  }]);

}();