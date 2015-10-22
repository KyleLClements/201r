var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {

  var API_ROOT = 'pokemon'//Make http request to this url
  return {
    get: function () {
      return $http 
        .get(API_ROOT)
        .then(function (resp) { //Return the data we got from the http request
          return resp.data 
        })
    }
  }

}

function mainCtrl ($scope, pokemonFetcher) {

  $scope.pokemon = []

  pokemonFetcher.get()
    .then(function (data) {
      $scope.pokemon = data //Set it equal to 
    })
}
