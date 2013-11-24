suite('pricecheck', function() {
  var $injector,
  should;
  // setup(function(){
    $injector = angular.injector(['ng', 'pricecheck']);
    should = chai.should();
  // });

  suite('bogofStrategy', function(){
    var service = $injector.get('bogofStrategy');
    test('should return correct value #1', function(){
      var res = service.calculateUnitPrice(1.99, 0.8);
      should.equal(res, 1.24375);
    });

    test('should return correct value #2', function(){
      var res = service.calculateUnitPrice(3.00, 1.00);
      should.equal(res, 1.5);
    });

    test('should return correct value #3', function(){
      var res = service.calculateUnitPrice(2.99, 0.5);
      should.equal(res, 2.99);
    });
  });

  suite('xForPriceStrategy', function(){
    var service = $injector.get('xForPriceStrategy');
    test('should return correct value #1', function(){
      var res = service.calculateUnitPrice(1.99, 0.8, 2);
      should.equal(res, 1.24375);
    });

    test('should return correct value #2', function(){
      var res = service.calculateUnitPrice(3.00, 1.00, 3);
      should.equal(res, 1.0);
    });

    test('should return correct value #3', function(){
      var res = service.calculateUnitPrice(2.99, 0.5, 4);
      should.equal(res, 1.495);
    });
  });

  suite('singleItemStrategy', function(){
    var service = $injector.get('singleItemStrategy');
    test('should return correct value #1', function(){
      var res = service.calculateUnitPrice(1.99, 0.8);
      should.equal(res, 2.4875);
    });

    test('should return correct value #2', function(){
      var res = service.calculateUnitPrice(3.00, 1.00);
      should.equal(res, 3.0);
    });

    test('should return correct value #3', function(){
      var res = service.calculateUnitPrice(2.99, 0.5);
      should.equal(res, 5.98);
    });
  });
});