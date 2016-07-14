(function(){
  angular.module('ngdogs')
          .factory('DogsService', DogsService);

  DogsService.$inject = ['$http'];

  function DogsService($http){
    var baseUrl = 'https://dogparkbuddy.herokuapp.com/'
    var o = {
      create: createDog,
      readAll: getAll,
      update: updateDog,
      delete: deleteDog,
      dogs: []
    };
    return o;

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
      var theDog = {
        dogName: dogName,
        breed: breed,
        size: size,
        color: color,
        age: age,
        gender: gender,
        timesAtPark: timesAtPark,
        notes: notes,
        likesDogs: likesDogs,
        likesHumans: likesHumans,
        likesKids: likesKids,
        wantsPlaymates: wantsPlaymates
      }
      return $http.post(baseUrl + 'dogs', theDog)
              .then(function(response){
                getAll();
              });
    }

    function getAll(){
      return $http.get(baseUrl + 'dogs')
                  .then(function(response){
                    o.dogs = response.data;
                  });
    }
    function updateDog(id, dogName){
      return $http.put(baseUrl+'dogs/'+id, newDog)
              .then(function(response){
                console.log(response);
                getAll();
              });
    }
    function deleteDog(id){
      return $http.delete(baseUrl+'dogs/'+id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll();
                  })
  }
}
})()
