(function(){
  angular.module('ngdogs')
          .factory('DogsService', DogsService);

  DogsService.$inject = ['$http'];

  function DogsService($http){
    var o = {
      create: createDogs,
      readAll: getAll,
      update: updateDogs,
      delete: deleteDogs,
      dogs: []
    };
    return o;

    function createDogs(){}
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos')
                  .then(function(response){
                    todos = response.data;
                  });
    }
    function updateDogs(){}
    function deleteDogs(){}
  }
})()
