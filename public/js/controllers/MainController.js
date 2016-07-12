(function(){
  angular.module('ngdogs') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'DogsService'];

  function MainController($scope, DogsService){
    $scope.message = 'This is the scope message'

    var dogs;
    DogsService.readAll()
              .then(function(){
                dogs = DogsService.dogs;
                console.log(dogs);
              });
    console.log(dogs);

  }
})();
