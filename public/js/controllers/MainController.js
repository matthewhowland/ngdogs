(function(){
  angular.module('ngdogs') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'DogsService'];

  function MainController($scope, DogsService){
    $scope.dogs = DogsService.dogs;
    $scope.create = createDog;
    $scope.delete = deleteDog;
    getDogs();

    function getDogs(){
      console.log('getting dogs...');
      DogsService.readAll()
                .then(function(){
                  $scope.dogs = DogsService.dogs;
                  console.log($scope.dogs);
                })
    }

    function createDog(dogName,
                        breed,
                        size,
                        color,
                        age,
                        gender,
                        timesAtPark,
                        notes,
                        likesDogs,
                        likesHumans,
                        likesKids,
                        wantsPlaymates){
                          console.log(color)
      DogsService.create(dogName,
                          breed,
                          size,
                          color,
                          age,
                          gender,
                          timesAtPark,
                          notes,
                          likesDogs,
                          likesHumans,
                          likesKids,
                          wantsPlaymates)
                .then(function(){
                  $scope.dogName = '';
                  getDogs();
                })
    }

    function deleteDog(id){
      console.log(id);
      DogsService.delete(id)
                .then(function(){
                  getDogs();
                })
    }
  }
})();
