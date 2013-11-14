!function(){
  
  "use strict";

  var app = angular.module('pricecheck', ['ngTouch']);

  // buy 1 get 1 free strategy
  app.factory('bogofStrategy', function() {
    var that = this;
    this.name = "Buy One Get One Free";
    this.count = 2;
    this.calculateUnitPrice = function(/*number*/totalPrice, /*number*/itemSize) {
      return (totalPrice/that.count)/itemSize;
    };
  });

  // X for $$$
  app.factory('xForPriceStrategy', function() {
    var that = this;
    this.name = "X Items for $$$";
    this.calculateUnitPrice = function(/*number*/price, /*number*/itemSize, /*number*/count) {
      return (price/count)/itemSize;
    };
  });

  // single Item
  app.factory('singleItemStrategy', function() {
    var that = this;
    this.name = "Single Item";
    this.count = 1;
    this.calculateUnitPrice = function(/*number*/price, /*number*/itemSize) {
      return (price)/itemSize;
    };
  });

  app.controller('mainCtrl', ['$scope', 'bogofStrategy', 'xForPriceStrategy', 'singleItemStrategy',
    function($scope, strategy1, strategy2, strategy3) {

  }]);

}();

// 3 for $2.50