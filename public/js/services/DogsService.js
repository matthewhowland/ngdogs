(function(){
  angular.module('ngdogs')
          .factory('DogsService', DogsService);

  DogsService.$inject = ['$http'];

  function DogsService($http){
    var baseUrl = 'https://dogparkbuddy.herokuapp.com/'
    var o = {
      create: createDogs,
      readAll: getAll,
      update: updateDogs,
      delete: deleteDogs,
      dogs: []
    };
    return o;

    function createDogs(newDog){
      return $http.post(baseUrl + 'dogs/', newDog)
              .then(function(response){
                console.log(response);
                getAll();
              });
    }

    function getAll(){
      return $http.get(baseUrl + 'dogs')
                  .then(function(response){
                    o.dogs = response.data;
                  });
    }
    function updateDogs(id, newDog){
      return $http.put(baseUrl+'dogs/'+id, newDog)
              .then(function(response){
                console.log(response);
                getAll();
              });
    }
    function deleteDogs(id){}
      return $http.delete(baseUrl+'dogs/'+id)
                  .then(function(response){
                    console.log(response);
                    getAll();
                  })
  }
})()
