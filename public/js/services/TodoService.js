(function(){
  angular.module('ngdogs')
          .facotry('DogsService', DogsService);

  DogsService.$inject = ['$http'];

  function DogsServe($http){
    var o = {
      create: createDogs,
      readAll: getAll,
      update: updateDogs,
      delete: deleteDogs,
      dogs: []
    };
    return o;

    function createDogs(){}
    function getall(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos')
                  .then(function(response){
                    todos = response.data;
                  });
    }
    function updateDogs(){}
    function deleteDogs(){}
  }
})()
